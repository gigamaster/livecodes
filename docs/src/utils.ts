// eslint-disable-next-line import/no-unresolved
import siteConfig from '@generated/docusaurus.config';

let docsBaseUrl = siteConfig.customFields.docsBaseUrl as string | undefined;
if (docsBaseUrl && !docsBaseUrl.endsWith('/')) {
  docsBaseUrl = docsBaseUrl + '/';
}

export const appUrl =
  globalThis.location?.hostname.startsWith('127.0.0.1') ||
  globalThis.location?.hostname.startsWith('localhost')
    ? 'http://127.0.0.1:8080/'
    : docsBaseUrl && globalThis.location?.href
    ? new URL(docsBaseUrl + '../', globalThis.location?.href).href
    : globalThis.location?.origin || 'https://gigamaster.github.io/livecodes/';

export const allowedOrigin = (origin = location.origin) =>
  Boolean(
    origin &&
      (origin.endsWith('livecodes.io') ||
        origin.endsWith('livecodes.pages.dev') ||
        origin.endsWith('gigamaster.github.io/livecodes/') ||
        origin.startsWith('https://gigamaster.github.io/livecodes/') ||
        origin.startsWith('http://127.0.0.1') ||
        origin.startsWith('http://localhost')),
  );
