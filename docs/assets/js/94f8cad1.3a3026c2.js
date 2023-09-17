"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),d=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:n,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=i??u;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var v=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(u(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",y,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7462),a=n(7294);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:a={},import:o,lite:s,loading:l="lazy",template:i,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),E(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{u.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),u.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&u.searchParams.set("config","sdk")}i&&u.searchParams.set("template",i),o&&u.searchParams.set("x",o),s&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":l),u.searchParams.set("view",c);let f=!1;const h="Cannot call API methods after calling `destroy()`.",v=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===l?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),d?E(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),g=new Promise((e=>{addEventListener("message",(function t(n){n.source===v.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),g.settled=!0)}))})),y=()=>f?Promise.reject(h):new Promise((async e=>{g.settled&&e();v.contentWindow?.postMessage({type:"livecodes-load"},m),await g,e()})),b=(e,t)=>new Promise((async(n,r)=>{if(f)return r(h);await y();const a=C();addEventListener("message",(function t(o){if(o.source===v.contentWindow&&o.origin===m&&"livecodes-api-response"===o.data?.type&&o.data?.id===a&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),v.contentWindow?.postMessage({method:e,id:a,args:t},m)})),k={},w=["load","ready","code","console","tests","destroy"],N=(e,t)=>{if(f)throw new Error(h);return w.includes(e)?(b("watch",[e]),k[e]||(k[e]=[]),k[e]?.push(t),{remove:()=>{k[e]=k[e]?.filter((e=>e!==t)),0===k[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==v.contentWindow||e.origin!==m||!t||!k[t])return;const n=e.data?.payload;k[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(k).forEach((e=>{e.length=0})),v?.remove?.(),f=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function E(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>N("code",e),watch:N,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b("exec",[e,...n])},destroy:()=>g.settled?b("destroy").then(S):f?Promise.reject(h):(S(),Promise.resolve())}}function s(e){const{className:t,style:n,height:r,sdkReady:s,...l}=e,i=(0,a.useRef)(null);let c;return(0,a.useEffect)((()=>{if(i.current)return o(i.current,l).then((e=>{c=e,"function"==typeof s&&s(e)})),()=>{c?.destroy()}}),[]),a.createElement("div",{ref:i,className:t,style:n,"data-height":r})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const a=e.dataset.config||e.dataset.prefill;if(a)try{r=JSON.parse(a)}catch{}o(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...r?{config:r}:{}})}))}));var l=n(1446),i=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,a.useState)(e.js),[r,o]=(0,a.useState)(e.ts),[s,l]=(0,a.useState)(e.react),[f,h]=(0,a.useState)(e.vue),[v,g]=(0,a.useState)(e.svelte),y="3.7rem",[b,k]=(0,a.useState)(!0),[w,N]=(0,a.useState)(y),S=(0,a.useRef)(null),E=()=>{setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,a.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(r,"ts")),l(e(s,"jsx")),h(e(f,"html")),g(e(v,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?y:w,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{k(!b),E()}},"show code"),a.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:p.Z.collapsibleContent},a.createElement(d.Z,{groupId:"sdk-code"},a.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"js"},t)),a.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"ts"},r)),a.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"jsx"},s)),a.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"html"},f)),a.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"html"},v))))))}const h="container_Egsj";function v(e){const{className:t,style:n,showCode:o,height:i,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),v=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,g=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(s,(0,r.Z)({className:`${h} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:l.G},e)),!1!==e.showCode&&a.createElement(f,{js:u,ts:p,react:m,vue:v,svelte:g}))}},6318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,reactSDKDemo:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(7778);const s={},l="React SDK",i={unversionedId:"sdk/react",id:"sdk/react",title:"React SDK",description:"The react SDK is a thin wrapper around the JavaScript SDK to provide an easy to use react component, yet retaining the full power, by having access to the SDK methods.",source:"@site/docs/sdk/react.md",sourceDirName:"sdk",slug:"/sdk/react",permalink:"/livecodes/docs/sdk/react",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/sdk/react.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"JS/TS SDK",permalink:"/livecodes/docs/sdk/js-ts"},next:{title:"Vue SDK",permalink:"/livecodes/docs/sdk/vue"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"TypeScript Support",id:"typescript-support",level:3},{value:"Props",id:"props",level:3},{value:"Demo",id:"demo",level:2},{value:"Related",id:"related",level:2}],u={jsx:'import React from "react";\nimport { createRoot } from "react-dom/client";\nimport LiveCodes from "livecodes/react";\n\nconst App = () => {\n  const params = {\n    html: "<h1>Hello World!</h1>",\n    css: "h1 {color: blue;}",\n    js: \'console.log("Hello, Svelte!")\',\n    console: "open",\n  };\n\n  return <LiveCodes params={params} />;\n};\n\nconst root = createRoot(document.querySelector("#app"));\nroot.render(<App />);\n',html:'<div id="app">Loading...</div>'},p={toc:d,reactSDKDemo:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-sdk"},"React SDK"),(0,a.kt)("p",null,"The react SDK is a thin wrapper around the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript SDK")," to provide an easy to use react component, yet retaining the full power, by having access to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods"),"."),(0,a.kt)("p",null,"It has a very simple ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes/blob/develop/src/sdk/react.tsx"},"implementation")," which you can easily modify in case you need."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/#installation"},"SDK installation")," section."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The react component is provided as the default export from ",(0,a.kt)("inlineCode",{parentName:"p"},"livecodes/react"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import React from 'react';\nimport LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes />;\n")),(0,a.kt)("h3",{id:"typescript-support"},"TypeScript Support"),(0,a.kt)("p",null,"Prop types are exported as ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"livecodes/react"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TSX"',title:'"TSX"'},"import React from 'react';\nimport LiveCodes, { type Props } from 'livecodes/react';\n\nconst options: Props = {\n  // embed options\n};\nexport const Playground = () => <LiveCodes {...options} />;\n")),(0,a.kt)("p",null,"TypeScript types are ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/api/modules"},"documented here"),"."),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("p",null,"All ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#embed-options"},"embed options")," are available as props with the corresponding types."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import React from 'react';\nimport LiveCodes from 'livecodes/react';\n\nconst config = {\n  markup: {\n    language: 'markdown',\n    content: '# Hello World!',\n  },\n};\nexport const Playground = () => <LiveCodes config={config} view=\"result\" />;\n")),(0,a.kt)("p",null,"In addition, the following props are also available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",{parentName:"li"},"Class name(s) to add to playground container element."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import React from 'react';\nimport LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes className=\"centered\" />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",{parentName:"li"},"Sets the hight of playground container element."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import React from 'react';\nimport LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes height=\"500px\" />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"style")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),"."),(0,a.kt)("p",{parentName:"li"},"Defines styles to add to playground container element. Styles set here override the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#default-styles"},"default styles"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="JSX"',title:'"JSX"'},"import React from 'react';\nimport LiveCodes from 'livecodes/react';\n\nconst style = {\n  margin: 'auto',\n  width: '80%',\n};\nexport const Playground = () => <LiveCodes style={style} />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sdkReady")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(sdk: Playground) => void"),"."),(0,a.kt)("p",{parentName:"li"},"A callback function, that is provided with an instance of the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript SDK")," representing the current playground. This allows making use of full capability of the SDK by calling ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TSX"',title:'"TSX"'},"import React, { useState } from 'react';\nimport LiveCodes from 'livecodes/react';\nimport type { Playground } from 'livecodes';\n\nexport const App = () => {\n  const [playground, setPlayground] = useState<Playground>();\n\n  const onReady = (sdk: Playground) => {\n    setPlayground(sdk);\n  };\n\n  const run = async () => {\n    await playground?.run();\n  };\n\n  return (\n    <>\n      <LiveCodes sdkReady={onReady} />\n      <button onClick={run}>Run</button>\n    </>\n  );\n};\n")))),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(o.Z,{params:u,height:"80vh",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/#installation"},"SDK Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/js-ts"},"JS/TS SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/vue"},"Vue SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/svelte"},"Using SDK in Svelte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/embeds"},"Embedded Playgrounds"))))}m.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);