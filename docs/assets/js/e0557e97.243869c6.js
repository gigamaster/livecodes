"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),d=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=i??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var v=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(u(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",y,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function S(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:a={},config:r={},import:o,lite:s,loading:l="lazy",template:i,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),N(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{u.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}i&&u.searchParams.set("template",i),o&&u.searchParams.set("x",o),s&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":l),u.searchParams.set("view",c);let f=!1;const h="Cannot call API methods after calling `destroy()`.",v=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===l?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),d?N(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),g=new Promise((e=>{addEventListener("message",(function t(n){n.source===v.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),g.settled=!0)}))})),y=()=>f?Promise.reject(h):new Promise((async e=>{g.settled&&e();v.contentWindow?.postMessage({type:"livecodes-load"},m),await g,e()})),b=(e,t)=>new Promise((async(n,a)=>{if(f)return a(h);await y();const r=C();addEventListener("message",(function t(o){if(o.source===v.contentWindow&&o.origin===m&&"livecodes-api-response"===o.data?.type&&o.data?.id===r&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?a(e.error):n(e)}})),v.contentWindow?.postMessage({method:e,id:r,args:t},m)})),k={},w=["load","ready","code","console","tests","destroy"],S=(e,t)=>{if(f)throw new Error(h);return w.includes(e)?(b("watch",[e]),k[e]||(k[e]=[]),k[e]?.push(t),{remove:()=>{k[e]=k[e]?.filter((e=>e!==t)),0===k[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==v.contentWindow||e.origin!==m||!t||!k[t])return;const n=e.data?.payload;k[t]?.forEach((e=>{e(n)}))}));const E=()=>{Object.values(k).forEach((e=>{e.length=0})),v?.remove?.(),f=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>S("code",e),watch:S,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return b("exec",[e,...n])},destroy:()=>g.settled?b("destroy").then(E):f?Promise.reject(h):(E(),Promise.resolve())}}function s(e){const{className:t,style:n,height:a,sdkReady:s,...l}=e,i=(0,r.useRef)(null);let c;return(0,r.useEffect)((()=>{if(i.current)return o(i.current,l).then((e=>{c=e,"function"==typeof s&&s(e)})),()=>{c?.destroy()}}),[]),r.createElement("div",{ref:i,className:t,style:n,"data-height":a})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const r=e.dataset.config||e.dataset.prefill;if(r)try{a=JSON.parse(r)}catch{}o(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...a?{config:a}:{}})}))}));var l=n(1446),i=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,r.useState)(e.js),[a,o]=(0,r.useState)(e.ts),[s,l]=(0,r.useState)(e.react),[f,h]=(0,r.useState)(e.vue),[v,g]=(0,r.useState)(e.svelte),y="3.7rem",[b,k]=(0,r.useState)(!0),[w,S]=(0,r.useState)(y),E=(0,r.useRef)(null),N=()=>{setTimeout((()=>{S(`calc(${E.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{S(`calc(${E.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(a,"ts")),l(e(s,"jsx")),h(e(f,"html")),g(e(v,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?y:w,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{k(!b),N()}},"show code"),r.createElement("div",{ref:E,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"jsx"},s)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},f)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},v))))))}const h="container_Egsj";function v(e){const{className:t,style:n,showCode:o,height:i,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),v=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,g=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(s,(0,a.Z)({className:`${h} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:l.G},e)),!1!==e.showCode&&r.createElement(f,{js:u,ts:p,react:m,vue:v,svelte:g}))}},7047:(e,t,n)=>{n.r(t),n.d(t,{ESMCode:()=>m,UMDCode:()=>f,assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(7778),s=n(2263),l=n(814);const i={sidebar_class_name:"exclude_from_sidebar"},c="LiveCodes SDK",d={unversionedId:"sdk/index",id:"sdk/index",title:"LiveCodes SDK",description:"The Software Development Kit (SDK) provides an easy, yet powerful, interface to embed and communicate with LiveCodes playgrounds.",source:"@site/docs/sdk/index.md",sourceDirName:"sdk",slug:"/sdk/",permalink:"/livecodes/docs/sdk/",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/sdk/index.md",tags:[],version:"current",frontMatter:{sidebar_class_name:"exclude_from_sidebar"},sidebar:"docsSidebar",previous:{title:"Query Parameters",permalink:"/livecodes/docs/configuration/query-params"},next:{title:"JS/TS SDK",permalink:"/livecodes/docs/sdk/js-ts"}},u={},p=[{value:"SDK Demo",id:"sdk-demo",level:2},{value:"Installation",id:"installation",level:2},{value:"NPM Package",id:"npm-package",level:3},{value:"CDN",id:"cdn",level:3},{value:"Usage",id:"usage",level:2},{value:"Headless Mode",id:"headless-mode",level:2},{value:"SDK Playground!",id:"sdk-playground",level:2}],m=()=>{const{siteConfig:e}=(0,s.Z)();return(0,r.kt)(l.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script type="module">\n  import { createPlayground } from 'https://unpkg.com/livecodes@${e.customFields.sdkVersion}';\n\n${" ".repeat(2)}createPlayground('#container', {\n${" ".repeat(4)}// embed options  \n${" ".repeat(2)}});\n<\/script>`)},f=()=>{const{siteConfig:e}=(0,s.Z)();return(0,r.kt)(l.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script src="https://unpkg.com/livecodes@${e.customFields.sdkVersion}/livecodes.umd.js"><\/script>\n<script>\n  // the UMD version provides the global object \`livecodes\`\n${" ".repeat(2)}livecodes.createPlayground('#container', {\n${" ".repeat(4)}// embed options  \n${" ".repeat(2)}});\n<\/script>\n`)},h={toc:p,ESMCode:m,UMDCode:f};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"livecodes-sdk"},"LiveCodes SDK"),(0,r.kt)("p",null,"The Software Development Kit (SDK) provides an easy, yet powerful, interface to embed and communicate with LiveCodes playgrounds."),(0,r.kt)("p",null,"The SDK is provided as a light-weight, zero-dependencies ",(0,r.kt)("a",{parentName:"p",href:"#npm-package"},"npm package"),", that is also available from ",(0,r.kt)("a",{parentName:"p",href:"#cdn"},"CDNs"),". It can be used to create playgrounds with a wide variety of ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configurations")," and ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#embed-options"},"embed options"),". In addition, ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods")," allow programmatic communication and control of the playgrounds during runtime."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript SDK")," is framework/library agnostic. However, wrapper components are also provided for popular libraries (currently ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/react"},"React")," and ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/vue"},"Vue"),"). The SDK can be used in ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/svelte"},"Svelte")," directly without wrappers. ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#typescript-types"},"TypeScript support")," provides type-safety and a great developer experience."),(0,r.kt)("h2",{id:"sdk-demo"},"SDK Demo"),(0,r.kt)("p",null,"This is an example of an editable embedded playground using the SDK."),(0,r.kt)(o.Z,{config:{markup:{language:"markdown",content:"# Hello World!"},script:{language:"javascript",content:'console.log("Hello, from JS!");'},tools:{active:"console",status:"open"}},mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"npm-package"},"NPM Package"),(0,r.kt)("p",null,"This is a single npm package for the SDK which supports JavaScript/TypeScript, React, Vue and Svelte.\nInstall the library from npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i livecodes\n")),(0,r.kt)("p",null,"then it can be used like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { createPlayground } from 'livecodes';\n\ncreatePlayground('#container', {\n  // embed options\n});\n")),(0,r.kt)("h3",{id:"cdn"},"CDN"),(0,r.kt)("p",null,"Alternatively, it can just be loaded from a CDN."),(0,r.kt)("p",null,"ESM:"),(0,r.kt)(m,{mdxType:"ESMCode"}),(0,r.kt)("p",null,"UMD:"),(0,r.kt)(f,{mdxType:"UMDCode"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the full ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/getting-started#standalone-app"},"standalone app"),", the JavaScript SDK is accessible via the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"livecodes"),", which can be interacted with in the browser console.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The SDK is currently provided in the following variations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript/TypeScript"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/react"},"React"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/vue"},"Vue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/svelte"},"Svelte")))),(0,r.kt)("h2",{id:"headless-mode"},"Headless Mode"),(0,r.kt)("p",null,"The SDK also has a ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/headless"},"headless mode"),". In this mode, no visible output is displayed in the embedding web page. However, all ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods")," are accessible. This provides the power of leveraging the wide range of features and language support offered by LiveCodes, while retaining full control over the UI."),(0,r.kt)("h2",{id:"sdk-playground"},"SDK Playground!"),(0,r.kt)("p",null,"A demo page that shows the usage of the SDK can be ",(0,r.kt)("a",{parentName:"p",href:"https://live-codes.github.io/livecodes-examples/sdk-demo.html"},"found here")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes-examples/blob/gh-pages/sdk-demo.html"},"source"),")."),(0,r.kt)("p",null,"Or edit the SDK playground in LiveCodes. How meta! :)"),(0,r.kt)(o.Z,{import:"id/nqdxpnj6uvg",view:"result",height:"80vh",showCode:!1,mdxType:"LiveCodes"}),(0,r.kt)("p",null,'P.S. You may want to use the "Full Screen" button!'))}v.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);