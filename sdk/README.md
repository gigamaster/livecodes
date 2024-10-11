[![Ceasefire_Now-techforpalestine.org](https://img.shields.io/badge/%F0%9F%87%B5%F0%9F%87%B8_Ceasefire_Now-techforpalestine.org-D83838?color=D83838)](https://www.techforpalestine.org)  
[![LiveCodes: app version](https://img.shields.io/github/v/release/live-codes/livecodes?label=app)](https://livecodes.io)
[![LiveCodes: languages](https://img.shields.io/badge/languages-91-blue)](https://livecodes.io/docs/languages/)
[![license - MIT](https://img.shields.io/github/license/live-codes/livecodes)](https://github.com/live-codes/livecodes/blob/develop/LICENSE)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3d39f15618e048db9d13c2a0e8002b33)](https://www.codacy.com/gh/live-codes/livecodes/dashboard?utm_source=github.com&utm_medium=referral&utm_content=live-codes/livecodes&utm_campaign=Badge_Grade)
[![LiveCodes: GitHub repo](https://img.shields.io/github/stars/live-codes/livecodes?style=social)](https://github.com/live-codes/livecodes)  
[![LiveCodes: uptime status](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/live-codes/upptime/master/api/live-codes/uptime.json)](https://status.livecodes.io)
[![LiveCodes: npm version](https://img.shields.io/npm/v/livecodes)](https://www.npmjs.com/package/livecodes)
[![LiveCodes: npm downloads](https://img.shields.io/npm/dw/livecodes)](https://www.npmjs.com/package/livecodes)
[![LiveCodes: jsdelivr downloads](https://data.jsdelivr.com/v1/package/npm/livecodes/badge?style=rounded)](https://www.jsdelivr.com/package/npm/livecodes)  


-----

<h1 align="center">
<br />
<img width="300" src="./images/logo/livecodes-text-logo-nowrap.svg" alt="Live code playground free opensource for most popular programming languages and frameworks" /><br />
Code Playground That Just Works!
<br /><br />
</h1>

<p align="center">Livecodes playground for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP</p>
<p align="center">90+ programming languages, CSS processors, JavaScript libraries and frameworks !</p>

<p align="center"><a href="https://gigamaster.github.io/livecodes/?new" target="_blank" title="Get Started with Livecodes Playground">
<img width="100%" height="auto" alt="Live code playground web app for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP and most popular languages and frameworks" src="./images/livecodes-screenshot-1360x764.jpg" />
</a></p>

---

<h1 align="center"><br />
Features Overview
<br /><br />
</h1>

<table align="center" with="100%">
<tr>
<td width="33%"><h3 align="center">Online Code Playground</h3><hr /></td>
<td width="33%"><h3 align="center">Free and open-source</h3><hr /></td>
<td width="33%"><h3 align="center">Embedded Playground</h3><hr /></td>
</tr>
<tr>
<td><h3 align="center">No account required</h3></td>
<td><h3 align="center">AI Code Assistant</h3></td>
<td><h3 align="center">No limits for usage</h3></td>
</tr>
<tr>
<td><h3 align="center">No servers to configure</h3></td>
<td><h3 align="center">No databases to maintain</h3></td>
<td><h3 align="center">No subscription fees</h3></td>
</tr>
<tr>
<td><h3 align="center">Starter Templates</h3></td>
<td><h3 align="center">Import and Export</h3></td>
<td><h3 align="center">Deploy and Synchronize</h3></td>
</tr>
<tr>
<td><h3 align="center">External resources</h3></td>
<td><h3 align="center">Assets Manager</h3></td>
<td><h3 align="center">Snippets manager</h3></td>
</tr>
</table>

<p align="center">
For details check the <a href="https://livecodes.io/docs/features/" target="_blank">full list of features</a>
</p>
<p align="center">
<sub>* GitHub account is required only for features that use <a href="https://livecodes.io/docs/features/github-integration" target="_blank">GitHub Integration</a> !</sub>
</p>

---

<h1 align="center"><br />
Quick Start
<br /><br />
</h1>

<p align="center"><a href="https://gigamaster.github.io/livecodes/?new" target="_blank" title="Start Templates">
<img width="100%" height="auto" alt="Live code playground web app for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP and most popular languages and frameworks" src="./images/livecodes-starter.jpg" />
</a></p>


## Standalone App

Go to [livecodes](https://gigamaster.github.io/livecodes/) ...select a Starter Template and enjoy all the [features](https://gigamaster.github.io/livecodes/docs/features/)!

## Embedded Playground

Add this code in a web application or website page:

```html
<div id="container"></div>
<script type="module">
  import { createPlayground } from 'livecodes'

  createPlayground('#container', {
    appUrl: 'https://gigamaster.github.io/livecodes/',
    params: {
      markdown: '# Hello LiveCodes!',
      css: 'body{background:#111;font-family:system-ui} h1 {color:dodgerblue;}',
      js: 'console.log("Hello, from JS!");',
      console: 'open',
    },
  })
</script>

```

<sup>Check documentations for <a href="https://livecodes.io/docs/features/embeds" target="_blank" rel="noopener">Embedded Playgrounds</a>.</sup>

## Self-hosted

1. Download a [release](https://github.com/live-codes/livecodes/releases)
2. Put it on a static file server (for free!) <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener">Cloudfare</a>, <a href="https://vercel.com/" target="_blank" rel="noopener">Vercel</a>, <a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a>, <a href="https://firebase.google.com/" target="_blank" rel="noopener">Firebase</a>, <a href="https://pages.github.com/" target="_blank" rel="noopener">Github Pages</a>

   <sup>Check the guide for <a href="https://livecodes.io/docs/features/self-hosting" target="_blank" rel="noopener">self-hosting</a> (including the built-in setup to deploy to GitHub Pages).</sup>

... and it just works!

-----

## LiveCodes SDK

The Software Development Kit (SDK) provides an easy, yet powerful, interface to embed and communicate with LiveCodes playgrounds.

The SDK is provided as a light-weight ([less than 5kb gzipped](https://bundlephobia.com/package/livecodes)), zero-dependencies [npm package](https://livecodes.io/docs/sdk/#npm-package), that is also available from [CDNs](https://livecodes.io/docs/sdk/#cdn). It can be used to create playgrounds with a wide variety of [configurations](https://livecodes.io/docs/configuration/configuration-object.md) and [embed options](https://livecodes.io/docs/sdk/js-ts.md#embed-options). In addition, [SDK methods](https://livecodes.io/docs/sdk/js-ts.md#sdk-methods) allow programmatic communication and control of the playgrounds during runtime.

### Installation

```
npm i livecodes
```

### Usage

Example: ([open in LiveCodes](https://livecodes.io/?x=code/N4IgLglmA2CmIC4QBkIDdYGED2ATWAzgAQDKAIgNJH4C22IANCPgQMYBOEADpNgHaIQjEAAtYAQ1yCAPDVhhxRViPHsC8gLwAdEAFUAKgDEAtAA4dRAPQA+LX1nzFfcXO0g0EWAHcu2dmAtWfjBYPjA3LwhcMBENfA9WWGNI6JEGIgg+KAhxaGM2XNgNAEYAOgAGCxthETAaaABBMDA1QWhxPgBzN1DA9oICNx1hBU6CRABtAF0mcVZIDABRXCg-QTZOHmEaVQBrAFcuRFB2rv3xTvgkWvrhILDQsBkVtAzcN3uFTNh2HWtpSwvawgAC+TAIYAAnnBjiBTp1zpdBKwBndgo9BKDwRxuE8ECcOgiLlcQAArcRocQbXFoh5hQQQGi+fxEYBKdgSEIABXakM67Gw+z4uCIIKIADMBTQiAByaDoWBBFgygDcWl+fHVdg4nNgPPEfIFQtwAAoZQBiT7ib7sGXpYBavhEJT8cUQToIVmO53OnbsA5cT0OjU+n3wxGwT0yv27XDYLx8O3e0MuulgKPmogACVg0Gg2CIAHU-NBcABCJMhn1g5M1qsebxRjkEfbQMCVuwggCUao1WJAEOhhDE8nGCGm2M2YDHE5AKIIXOb8kxTC4AsSAz8M5mc-2EOwNBI8kgXTHwDBIEZzOnxwvUK4hFvTBCELPcMJEcE98IOK2TE+GJIP2GBqBA-CCAAzBBIzYNg0BvqE4gAEZwFISC5NAwhzAsJL3AQcHwOCChgHuyL5uoUggiCQA))

```js
import { createPlayground } from 'livecodes';

createPlayground('#container', {
  config: {
    markup: {
      language: 'markdown',
      content: '# Hello World!',
    },
  },
  view: 'result',
});
```

The [JavaScript SDK](https://livecodes.io/docs/sdk/js-ts.md) is framework/library agnostic. However, wrapper components are also provided for popular libraries (currently [React](https://livecodes.io/docs/sdk/react.md) and [Vue](https://livecodes.io/docs/sdk/vue.md)). The SDK can be used in [Svelte](https://livecodes.io/docs/sdk/svelte.md) directly without wrappers. [TypeScript support](https://livecodes.io/docs/sdk/js-ts.md#typescript-types) provides type-safety and a great developer experience.

React SDK example: ([open in LiveCodes](https://livecodes.io/?x=code/N4IgLglmA2CmIC4QBkIDdYGED2ATWAzgAQBKsAhgMZhEDKAIgNJH4C22IANCPgZQE4QADpGwA7RCC4gAFhVySAPK1hhyRSjPL8CqgLwAdEAFUAKgDEAtAA4jRAPQA+A2OWr1Y8isMg0EWADuQtj8YHaU4mCwYmA+ARC4YDJ6+H6UsJbxiTKcRBBiUBDk0JZ8xbB6AIwAdAAMdk7SMmCs0ACCYGA6ktDkYgDmPtHhvQQEPkbSav0EiADaALrcVJAYAKK4UCGSfIIi0qzaANYArkKIoL0DJ+T98EjNrdIRMdFgkiAAvtwEYACecAuICu-Rud0klDGz0ibw+3xAu2E7wQlz6oNu9xAACsCAAPaGvGKSCCsYKhIioDA4XhEABm-GwrCIAHJoOhYBFePZ+BRqMyANwGfguIUuF6-DTiWkQfpEPREYCisREIiHfinIQIBVKlUqkFg2Ba5lqo64bABMTMzg63UvKIxI0AYiIAAlYNBoNgiAB1ELQXAAQitNu+Ss+guFYnFNAACr0-v0GScxLg5UQABQASjljiIikpWDwhElYmlg2ALzLnyIfkCPh5BBO0DCIAcjgjLlguLJNHwtPITdj8cT2GTuA7EnhvwBhDkqlmCEWPwESIXS5AkIIMYbqg+3CEDPSYxCa6WG5Ov0ZtFUkAGC+A8JJPfv8P+QkIF1fhDA9+BaINkhvoQK77NwdqwkgXzcBgOgQOIkgAMwIVM2DYNAv7ROQABGcAKEgxTQNIKzshC4gEGh8A-GoYAXhCnq6AonyfEAA))

```jsx
import LiveCodes from 'livecodes/react';

const config = {
  markup: {
    language: 'markdown',
    content: '# Hello World!',
  },
};
const Playground = () => <LiveCodes config={config} view="result" />;
export default Playground;
```

Vue SDK example: ([open in LiveCodes](https://livecodes.io/?x=code/N4IgLglmA2CmIC4QBkIDdYGED2ATWAzgAQBqArrEQMoAiA0kfgLbYgA0I+BAxgE4QAHSNgB2iEOxAALWAENc4gDxNYYWUW5TZvAqoC8AHRABVACoAxALQAOI0QD0APgMjlq9SNkrDINBFgA7gLYvGB23KJgsCJgPgEQuGBSevh+3LCW8YlSbEQQIlAQstCWPMWwegCMAHQADHZOklJgTNAAgmBgOuLQsiIA5j7R4b0EBD5Gkmr9BIgA2gC6HLLckBgAorhQIeI8-EKSTNoA1mQCiKC9A2Sy-fBIza2SETHRYOIgAL4cBGAAnnALiArv0bndxNwxs9Im8Pt8QHtBO8EJc+qDbvdfBRoa8YkpEUIiLowGdnLwXEQ8kxgqEiKgMDguEQAGa8bBMIgAcmg6FgES49jQFE5AG4DOSROKKRpRL8ZSJmRB+kQ9ERgFKRJTKUdeKcBAg1RqtVqQWDYAbOTrjrhsAERJy2EbjfKojELQBiIgACVg0Gg2CIAHUQtBcABCB1OynfJ2fMUSxT2AlgMkuDWKKLU3pRVOaoiKelYPCEIgIF6KwZGctKux+QI+XiEMjQMIgBy5xOZgTZ2C5r4-f5wAgyVSzBCLH58JFjicgSEEAAKjeJHw4AjZ6TGIRnSznZF+7KoqkgAzHwHhEGpITAZ-h-wEhAud8IN6Bpox4nvhCnBw4L1dyISPCGA6BAojiAAzBBUzYNg0BniA0SyAARnAChIMU0CSCsayYi8BBwfAA6yCSY5zv6ugKJ8nxAA))

```html
<script setup>
  import LiveCodes from 'livecodes/vue';

  const config = {
    markup: {
      language: 'markdown',
      content: '# Hello World!',
    },
  };
</script>

<template>
  <LiveCodes :config="config" view="result" />
</template>
```

In addition, the SDK allows creating links to playgrounds:

```js
import { getPlaygroundUrl } from 'livecodes';

const url = getPlaygroundUrl({
  config: {
    markup: {
      language: 'markdown',
      content: '# Hello World!',
    },
  },
});

console.log(url);
```

See [SDK docs](https://livecodes.io/docs/sdk/) for more details.

## Documentations

Comprehensive documentations for [features](https://livecodes.io/docs/features/), [getting started](https://livecodes.io/docs/getting-started), [configuration](https://livecodes.io/docs/configuration/) and [SDK](https://livecodes.io/docs/sdk/) are available on:

https://livecodes.io/docs/

The documentations include demos, code samples, screenshots, [Storybook](https://livecodes.io/stories) and [TypeScript types](https://livecodes.io/docs/sdk/js-ts#typescript-types).

## Contribution

Contributions are welcome and highly appreciated.

Please refer to the [contribution guide](https://github.com/live-codes/livecodes/blob/HEAD/CONTRIBUTING.md)

## Credits

LiveCodes uses services that are generously provided by:

<table align="center" with="100%">
<tr>
<td width="33%">
<a href="https://pages.cloudflare.com/" target="_blank" title="Cloudflare Pages">
  <img alt="Cloudflare Pages" width="200" src="./docs/static/img/credits/cloudflare-pages.svg">
</img></a>
</td>
<td width="33%"><a href="https://www.jsdelivr.com/" target="_blank" title="jsDelivr">
  <img alt="jsDelivr" width="200" src="./docs/static/img/credits/jsdelivr.svg">
</img></a></td>
<td width="33%"><a href="https://esm.sh/" target="_blank" title="esm.sh">
  <img alt="esm.sh" width="200" src="./docs/static/img/credits/esm.sh.png">
</img></a></td>
</tr>
<tr>
<td><a href="https://unpkg.com/" target="_blank" title="unpkg">
  <img alt="unpkg" width="200" src="./docs/static/img/credits/unpkg.png">
</img></a></td>
<td><a href="https://codeium.com/" target="_blank" title="Codeium">
  <img alt="Codeium" width="200" src="./docs/static/img/credits/codeium.svg">
</img></a></td>
<td><a href="https://bundlejs.com/" target="_blank" title="bundlejs">
  <img alt="bundlejs" width="200" src="./docs/static/img/credits/bundlejs.jpg">
</img></a></td>
</tr>
<tr>
<td><a href="https://dpaste.com/" target="_blank" title="dpaste">
  <img alt="dpaste" width="200" src="./docs/static/img/credits/dpaste.png">
</img></a></td>
<td><a href="https://github.com/" target="_blank" title="GitHub">
  <img alt="GitHub" width="200" src="./docs/static/img/credits/github.png">
</img></a></td>
<td><a href="https://www.sonarsource.com/products/sonarcloud/" target="_blank" title="SonarCloud">
  <img alt="SonarCloud" width="200" src="./docs/static/img/credits/sonarcloud.svg">
</img></a></td>
</tr>
<tr>
<td><a href="https://www.codacy.com/" target="_blank" title="Codacy">
  <img alt="Codacy" width="200" src="./docs/static/img/credits/codacy.svg">
</img></a></td>
<td><a href="https://bundlewatch.io/" target="_blank" title="BundleWatch">
  <img alt="BundleWatch" width="200" src="./docs/static/img/credits/bundlewatch.svg">
</img></a></td>
<td><a href="https://www.browserstack.com/" target="_blank" title="BrowserStack">
  <img alt="BrowserStack" width="200" src="./docs/static/img/credits/browserstack.svg">
</img></a></td>
</tr>
<tr>
<td><a href="https://lokalise.com/" target="_blank" title="Lokalise">
  <img alt="Lokalise" width="200" src="./docs/static/img/credits/lokalise.png">
</img></a></td>
<td></td>
<td></td>
</tr>
</table>


## Third Party Packages

Packages used by LiveCodes and their licenses are [listed here](https://github.com/live-codes/livecodes/blob/develop/vendor-licenses.md).

## License

[MIT](https://github.com/live-codes/livecodes/blob/HEAD/LICENSE) License © [Hatem Hosny](https://github.com/hatemhosny)

## Sponsor

LiveCodes is free and open-source. The app does not contain ads or require subscription. It allows unlimited usage without any restrictions.

By sponsoring LiveCodes, you will be supporting the ongoing development and maintenance of the project, as well as helping to ensure that it remains a valuable resource for the developer community.

Please consider [becoming a sponsor](https://livecodes.io/docs/sponsor).
