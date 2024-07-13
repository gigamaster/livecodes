import { LokaliseApi } from '@lokalise/node-api';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { sortedJSONify, prettierConfig } from './i18n-export.js';
import prettier from 'prettier';
import { exit } from 'process';

const outDir = path.resolve('src/livecodes/i18n/locales');
const tmpDir = path.join(outDir, 'tmp');
const api = new LokaliseApi({
  apiKey: process.env.LOKALISE_API_TOKEN,
});
const projectID = process.env.LOKALISE_PROJECT_ID;

/**
 * Expand the flattened translation object (KV pairs) to a nested object.
 * @param {string} language Current language.
 * @param {string} source Path to the source file.
 * @param {Set<string>} validKeys Set of valid keys.
 * @returns object
 */
const generateTranslationObject = async (source, validKeys) => {
  const translations = JSON.parse(await fs.promises.readFile(source, 'utf-8'));
  const translationObject = {};
  for (const key in translations) {
    if (!validKeys.has(key)) {
      continue;
    }
    const keys = key.split('.');
    const lastKey = keys.pop();
    let currentObject = translationObject;
    keys.forEach((k) => {
      if (!currentObject[k]) {
        currentObject[k] = {};
      }
      currentObject = currentObject[k];
    });
    currentObject[lastKey] = translations[key].replace('tag-', '');
  }
  return translationObject;
};

const importFromLokalise = async () => {
  const ciMode = process.env.CI === 'true';
  const forceLocalMode = process.argv.slice(2).includes('--force');

  if (!ciMode && !forceLocalMode) {
    console.error('This script is intended to be run in CI mode or with --force flag.');
    exit(1);
  }

  const branchName = process.argv[2];

  if (!branchName) {
    console.error('Branch name is required');
    exit(1);
  }

  console.log('Fetching translations from Lokalise...');

  // Make a tmp directory to store the downloaded files
  const lokaliseTempDir = path.resolve(process.env.LOKALISE_TEMP);

  const response = await api.files().download(`${projectID}:${branchName}`, {
    format: 'json',
    original_filenames: true,
    placeholder_format: 'i18n',
  });
  console.log(`Downloading zip file from ${response.bundle_url}`);

  const zipPath = path.join(lokaliseTempDir, 'locales.zip');
  const zipFile = await fetch(response.bundle_url);
  await fs.promises.writeFile(zipPath, Buffer.from(await zipFile.arrayBuffer()));

  console.log(`Extracting zip file to ${lokaliseTempDir}...`);
  execSync(`unzip -o ${zipPath} -d ${lokaliseTempDir}`);
  await fs.promises.unlink(zipPath);

  const languages = await fs.promises.readdir(lokaliseTempDir);
  console.log(
    `Extracted languages to tmp directory, ${languages.length} languages (including English) found.`,
  );

  console.log('Checking if translation keys are outdated...');

  /** @type {{[s: string]: {[s: string]: string}}} */
  const localTranslation = {};

  /** @type {{[s: string]: Set<string>}} */
  const lokaliseTranslation = {};

  // Read the local translation files as baseline
  execSync('npm run i18n-export -- --save-temp', { stdio: 'pipe' });
  const localNamespaces = (await fs.promises.readdir(tmpDir)).filter((file) =>
    file.endsWith('.lokalise.json'),
  );
  for (const file of localNamespaces) {
    const namespace = file.split('.')[0];
    const filePath = path.join(tmpDir, file);

    /** @type {{[s: string]: {notes: string, translation: string}}} */
    const fileContent = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));

    localTranslation[namespace] = {};
    for (const key in fileContent) {
      localTranslation[namespace][key] = fileContent[key].translation;
    }
  }

  // Read current source on Lokalise and cherry-pick the keys
  const enPath = path.join(lokaliseTempDir, 'en');
  const enFiles = await fs.promises.readdir(enPath);
  for (const file of enFiles) {
    const namespace = file.split('.')[0];
    const filePath = path.join(enPath, file);

    /** @type {{[s: string]: string}} */
    const fileContent = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));

    lokaliseTranslation[namespace] = new Set();
    for (const key in fileContent) {
      if (!localTranslation[namespace][key]) {
        console.warn(
          `Skipping: Key ${key} in namespace ${namespace} is missing in local translation.`,
        );
        continue;
      } else if (localTranslation[namespace][key] !== fileContent[key]) {
        console.warn(`Skipping: Key ${key} in namespace ${namespace} is outdated.`);
        continue;
      }
      lokaliseTranslation[namespace].add(key);
    }
  }

  for (let language of languages) {
    const languagePath = path.join(lokaliseTempDir, language);
    if (!(await fs.promises.stat(languagePath)).isDirectory() || language === 'en') {
      continue;
    }

    language = language.replace('_', '-');
    const outLanguagePath = path.join(outDir, language);
    console.log(`Importing language ${language}...`);

    await fs.promises.mkdir(outLanguagePath, { recursive: true });

    const files = await fs.promises.readdir(languagePath);
    const filePromises = files.map(async (file) => {
      const source = path.join(languagePath, file);
      const target = path.join(outLanguagePath, file.replace('.lokalise.json', '.ts'));

      const namespace = file.split('.')[0];
      const name = namespace === 'translation' ? 'translation' : 'languageInfo';
      const type = namespace === 'translation' ? 'I18nTranslation' : 'I18nLangInfoTranslation';

      const translationObject = await generateTranslationObject(
        source,
        lokaliseTranslation[namespace],
      );
      const sortedTranslationObject = sortedJSONify(translationObject);
      const code = `// ATTENTION: This is an auto-generated file. Do not edit this file manually.
        
          import type { ${type} } from '../models';

          const ${name}: ${type} = ${sortedTranslationObject};
          
          export default ${name};
        `;

      const translationContent = await prettier.format(code, {
        parser: 'typescript',
        ...prettierConfig,
      });

      return fs.promises.writeFile(target, translationContent);
    });

    await Promise.all(filePromises);
  }
};

importFromLokalise();
