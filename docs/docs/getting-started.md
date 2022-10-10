# Getting Started

There are multiple options:

### Hosted App

The easiest way to use LiveCodes is to through the hosted app (https://livecodes.io).

Use various methods to add your code like [embedded editors](./features/embeds.md), [code blocks](./features/import.md#import-code-from-dom), ["Edit in LiveCodes" bookmarklet](./features/import.md#edit-in-livecodes-bookmarklet) and [code prefill](./features/code-prefill.md).

### NPM Package

An npm package is available to allow easy [embedding](./features/embeds.md) of playgrouds and facilitates communication with the [API](./advanced/api.md).

1. Install from npm.

```sh
npm i livecodes
```

then you can use it like that:

```js title="index.js"
import { createPlayground } from 'livecodes';

createPlayground('#container', { template: 'react' });
```

2. or you may load from CDN

ESM:

```html title="index.html"
<div id="container"></div>
<script type="module">
  import { createPlayground } from 'https://cdn.jsdelivr.net/npm/livecodes/lib/livecodes.esm.js';

  createPlayground('#container', { template: 'react' });
</script>
```

UMD:

```html title="index.html"
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/livecodes/lib/livecodes.js"></script>
<script>
  // the UMD version provides the global object `livecodes`
  livecodes.createPlayground('#container', { template: 'react' });
</script>
```

### Self-Hosted

LiveCodes can be hosted on any static file server or CDN.

The built app can be obtained by one of the following ways:

- Download the app from the [releases](https://github.com/live-codes/livecodes/releases), extract the folder and add it to your website.
- Fork the [GitHub repo](https://github.com/live-codes/livecodes) and clone it. You may wish to use the included setup to publish to [GitHub Pages](https://pages.github.com/):

  ```sh
  git clone https://github.com/{your-username}/livecodes
  cd livecodes
  npm install
  npm run build         # build the app to 'build' directory
  npm run gh-pages      # optionally, publish to github pages

  # for development
  npm run serve         # locally serve to http://localhost:8080
  npm start             # start local development with code watch, rebuild and live-reload
  ```

- Fork the [GitHub repo](https://github.com/live-codes/livecodes) and use one of the hosting services that integrate with GitHub to allow automatic deploys on code push (e.g. [Cloudflare Pages](https://developers.cloudflare.com/pages/get-started), [Vercel](https://vercel.com/docs/concepts/git), [Netlify](https://docs.netlify.com/configure-builds/overview/), [Firebase](https://firebase.google.com/docs/hosting/github-integration)). When prompted, the build command is `npm run build` and the build output directory is `build`.

The app needs to be served from the root of the domain/subdomain.

You may wish to edit one or more of the used [services](./advanced/services.md) to use your own.

The npm package can still be used with the self-hosted app by providing the [`appUrl`](./advanced/api.md#appurl) [embed option](./advanced/api.md#embed-options).

```js title="index.js"
import { createPlayground } from 'livecodes';

const options = {
  appUrl: 'https://playground.myserver.com/',
  template: 'react',
};
createPlayground('#container', options);
```