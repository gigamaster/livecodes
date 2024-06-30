/* eslint-disable import/no-internal-modules */
import type { LanguageSpecs } from '../../models';
import { brythonBaseUrl } from '../../vendors';
import { getLanguageCustomSettings } from '../../utils/utils';

const brythonUrl = brythonBaseUrl + 'brython.min.js';
const stdlibUrl = brythonBaseUrl + 'brython_stdlib.js';

export const python: LanguageSpecs = {
  name: 'python',
  title: 'Python',
  compiler: {
    factory: () => async (code) => code,
    scripts: ({ compiled, config }) => {
      const { autoloadStdlib } = getLanguageCustomSettings('python', config);
      const importsPattern = /^(?:from[ ]+(\S+)[ ]+)?import[ ]+(\S+)(?:[ ]+as[ ]+\S+)?[ ]*$/gm;
      const stdlib = autoloadStdlib !== false && compiled.match(importsPattern) ? [stdlibUrl] : [];
      return [brythonUrl, ...stdlib];
    },
    scriptType: 'text/python',
    compiledCodeLanguage: 'python',
  },
  extensions: ['py'],
  editor: 'script',
};
