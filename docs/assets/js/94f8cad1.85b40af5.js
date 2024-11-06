"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),o=n(9493);function s(e){const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(e.className||""),[s,i]=(0,a.useState)(e.style||{}),[l,c]=(0,a.useState)(e.height),[d,p]=(0,a.useState)(),[m,u]=(0,a.useState)(JSON.stringify(e.config||"")),[f,g]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:s,sdkReady:l,config:y,...h}=e;if(r(n||""),i(a||{}),c(s),d&&f===JSON.stringify(h)){if(m===JSON.stringify(y))return;u(JSON.stringify(y)),"string"==typeof y?fetch(y).then((e=>e.json())).then((e=>{d?.setConfig(e)})):y&&d.setConfig(y)}else g(JSON.stringify(h)),d?.destroy(),(0,o.T)(t.current,{config:y,...h}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{d?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(814),d=n(4866),p=n(5162),m=n(2134),u=n(420);function f(e){const[t,n]=(0,a.useState)(e.js),[r,o]=(0,a.useState)(e.ts),[s,i]=(0,a.useState)(e.react),[f,g]=(0,a.useState)(e.vue),[y,h]=(0,a.useState)(e.svelte),v="3.7rem",[k,w]=(0,a.useState)(!0),[b,S]=(0,a.useState)(v),N=(0,a.useRef)(null),E=()=>{setTimeout((()=>{S(`calc(${N.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{S(`calc(${N.current.offsetHeight}px + ${v})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(r,"ts")),i(e(s,"jsx")),g(e(f,"html")),h(e(y,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":k,style:{height:k?v:b,overflow:"hidden",willChange:"height",transition:`height ${k?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{w(!k),E()}},"show code"),a.createElement("div",{ref:N,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:m.Z.collapsibleContent},a.createElement(d.Z,{groupId:"sdk-code"},a.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"js"},t)),a.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"ts"},r)),a.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"jsx"},s)),a.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"html"},f)),a.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:E}},a.createElement(c.Z,{language:"html"},y))))))}const g="container_Egsj";function y(e){const{className:t,style:n,showCode:o,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),y=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,h=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(s,(0,r.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&a.createElement(f,{js:p,ts:m,react:u,vue:y,svelte:h}))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>o});var r=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:a={},import:o,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let p,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!d)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),E(m),document.body.appendChild(m)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=p.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{p.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),p.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),o&&p.searchParams.set("x",o),s&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",c);let f=!1;const g="Cannot call API methods after calling `destroy()`.",y=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||d||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="8px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===i?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),d?E(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},u))})),n.onload=()=>{e(n)},n.src=p.href,m.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===y.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>f?Promise.reject(g):new Promise((async e=>{h.settled&&e();y.contentWindow?.postMessage({type:"livecodes-load"},u),await h,e()})),k=(e,t)=>new Promise((async(n,r)=>{if(f)return r(g);await v();const a=C();addEventListener("message",(function t(o){if(o.source===y.contentWindow&&o.origin===u&&"livecodes-api-response"===o.data?.type&&o.data?.id===a&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),y.contentWindow?.postMessage({method:e,id:a,args:t},u)})),w={},b=["load","ready","code","console","tests","destroy"],S=(e,t)=>{if(f)throw new Error(g);return b.includes(e)?(k("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&k("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==y.contentWindow||e.origin!==u||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const N=()=>{Object.values(w).forEach((e=>{e.length=0})),y?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function E(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>k("run"),format:e=>k("format",[e]),getShareUrl:e=>k("getShareUrl",[e]),getConfig:e=>k("getConfig",[e]),setConfig:e=>k("setConfig",[e]),getCode:()=>k("getCode"),show:(e,t)=>k("show",[e,t]),runTests:()=>k("runTests"),onChange:e=>S("code",e),watch:S,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return k("exec",[e,...n])},destroy:()=>h.settled?k("destroy").then(N):f?Promise.reject(g):(N(),Promise.resolve())}}function o(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:o,...s}=e,i="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:o,...i}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+s,...t,...r?{config:r}:{}})}))}))},6318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,reactSDKDemo:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(325);const s={},i="React SDK",l={unversionedId:"sdk/react",id:"sdk/react",title:"React SDK",description:"The react SDK is a thin wrapper around the JavaScript SDK to provide an easy to use react component, yet retaining the full power, by having access to the SDK methods.",source:"@site/docs/sdk/react.md",sourceDirName:"sdk",slug:"/sdk/react",permalink:"/livecodes/docs/sdk/react",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/sdk/react.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"JS/TS SDK",permalink:"/livecodes/docs/sdk/js-ts"},next:{title:"Vue SDK",permalink:"/livecodes/docs/sdk/vue"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"TypeScript Support",id:"typescript-support",level:3},{value:"Props",id:"props",level:3},{value:"Demo",id:"demo",level:2},{value:"Related",id:"related",level:2}],p={jsx:'import LiveCodes from "livecodes/react";\n\nconst App = () => {\n  const params = {\n    html: "<h1>Hello World!</h1>",\n    css: "h1 {color: blue;}",\n    js: \'console.log("Hello, World!")\',\n    console: "open",\n  };\n\n  return <LiveCodes params={params} />;\n};\n\nexport default App;\n'},m={toc:d,reactSDKDemo:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-sdk"},"React SDK"),(0,a.kt)("p",null,"The react SDK is a thin wrapper around the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript SDK")," to provide an easy to use react component, yet retaining the full power, by having access to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods"),"."),(0,a.kt)("p",null,"It has a very simple ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes/blob/develop/src/sdk/react.tsx"},"implementation")," which you can easily modify in case you need."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/#installation"},"SDK installation")," section."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The react component is provided as the default export from ",(0,a.kt)("inlineCode",{parentName:"p"},"livecodes/react"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes />;\n")),(0,a.kt)("h3",{id:"typescript-support"},"TypeScript Support"),(0,a.kt)("p",null,"Prop types are exported as ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"livecodes/react"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TSX"',title:'"TSX"'},"import LiveCodes, { type Props } from 'livecodes/react';\n\nconst options: Props = {\n  // embed options\n};\nexport const Playground = () => <LiveCodes {...options} />;\n")),(0,a.kt)("p",null,"TypeScript types are ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/api/modules"},"documented here"),"."),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("p",null,"All ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#embed-options"},"embed options")," are available as props with the corresponding types."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import LiveCodes from 'livecodes/react';\n\nconst config = {\n  markup: {\n    language: 'markdown',\n    content: '# Hello World!',\n  },\n};\nexport const Playground = () => <LiveCodes config={config} view=\"result\" />;\n")),(0,a.kt)("p",null,"In addition, the following props are also available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",{parentName:"li"},"Class name(s) to add to playground container element."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes className=\"centered\" />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",{parentName:"li"},"Sets the height of playground container element."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="JSX"',title:'"JSX"'},"import LiveCodes from 'livecodes/react';\n\nexport const Playground = () => <LiveCodes height=\"500px\" />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"style")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),"."),(0,a.kt)("p",{parentName:"li"},"Defines styles to add to playground container element. Styles set here override the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#default-styles"},"default styles"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="JSX"',title:'"JSX"'},"import LiveCodes from 'livecodes/react';\n\nconst style = {\n  margin: 'auto',\n  width: '80%',\n};\nexport const Playground = () => <LiveCodes style={style} />;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sdkReady")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(sdk: Playground) => void"),"."),(0,a.kt)("p",{parentName:"li"},"A callback function, that is provided with an instance of the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts"},"JavaScript SDK")," representing the current playground. This allows making use of full capability of the SDK by calling ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TSX"',title:'"TSX"'},"import { useState } from 'react';\nimport LiveCodes from 'livecodes/react';\nimport type { Playground } from 'livecodes';\n\nexport const App = () => {\n  const [playground, setPlayground] = useState<Playground>();\n\n  const onReady = (sdk: Playground) => {\n    setPlayground(sdk);\n  };\n\n  const run = async () => {\n    await playground?.run();\n  };\n\n  return (\n    <>\n      <LiveCodes sdkReady={onReady} />\n      <button onClick={run}>Run</button>\n    </>\n  );\n};\n")))),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(o.Z,{params:p,height:"80vh",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/#installation"},"SDK Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/js-ts"},"JS/TS SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/vue"},"Vue SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/sdk/svelte"},"Using SDK in Svelte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/embeds"},"Embedded Playgrounds"))))}u.isMDXComponent=!0}}]);