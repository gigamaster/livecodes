import { LanguageSpecs } from '../models';
import { getLanguageCustomSettings } from './utils';

export const asciidoc: LanguageSpecs = {
  name: 'asciidoc',
  title: 'AsciiDoc',
  info: `
  <h3>AsciiDoc</h3>
  <div>AsciiDoc compiled to HTML using Asciidoctor.</div>
  <ul>
    <li><a href="https://asciidoc.org/" target="_blank" rel="noopener">AsciiDoc official website</a></li>
    <li><a href="https://asciidoctor.org/" target="_blank" rel="noopener">Asciidoctor official website</a></li>
    <li><a href="https://asciidoctor.org/docs/" target="_blank" rel="noopener">Asciidoctor documentation</a></li>
    <!-- <li><a href="#">AsciiDoc usage in LiveCodes</a></li> -->
  </ul>
  `,
  compiler: {
    url: 'https://cdn.jsdelivr.net/npm/@asciidoctor/core@2.2.5/dist/browser/asciidoctor.min.js',
    factory: () => {
      const asciidoctor = (window as any).Asciidoctor();
      return async (code, { config }) =>
        asciidoctor.convert(code, {
          ...getLanguageCustomSettings('asciidoc', config),
        });
    },
  },
  extensions: ['adoc', 'asciidoc', 'asc'],
  editor: 'markup',
  preset: 'asciidoctor.css',
};
