"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),s=n(9493);function o(e){const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(e.className||""),[o,i]=(0,a.useState)(e.style||{}),[l,p]=(0,a.useState)(e.height),[c,d]=(0,a.useState)(),[m,u]=(0,a.useState)(JSON.stringify(e.config||"")),[g,h]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:o,sdkReady:l,config:f,...v}=e;if(r(n||""),i(a||{}),p(o),c&&g===JSON.stringify(v)){if(m===JSON.stringify(f))return;u(JSON.stringify(f)),"string"==typeof f?fetch(f).then((e=>e.json())).then((e=>{c?.setConfig(e)})):f&&c.setConfig(f)}else h(JSON.stringify(v)),c?.destroy(),(0,s.T)(t.current,{config:f,...v}).then((e=>{d(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{c?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:o,"data-height":l})}var i=n(1446),l=n(412),p=n(452),c=n(4866),d=n(5162),m=n(2134),u=n(420);function g(e){const[t,n]=(0,a.useState)(e.js),[r,s]=(0,a.useState)(e.ts),[o,i]=(0,a.useState)(e.react),[g,h]=(0,a.useState)(e.vue),[f,v]=(0,a.useState)(e.svelte),y="3.7rem",[k,b]=(0,a.useState)(!0),[w,N]=(0,a.useState)(y),S=(0,a.useRef)(null),C=()=>{setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),s(e(r,"ts")),i(e(o,"jsx")),h(e(g,"html")),v(e(f,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":k,style:{height:k?y:w,overflow:"hidden",willChange:"height",transition:`height ${k?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{b(!k),C()}},"show code"),a.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:m.Z.collapsibleContent},a.createElement(c.Z,{groupId:"sdk-code"},a.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:C}},a.createElement(p.Z,{language:"js"},t)),a.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:C}},a.createElement(p.Z,{language:"ts"},r)),a.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:C}},a.createElement(p.Z,{language:"jsx"},o)),a.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:C}},a.createElement(p.Z,{language:"html"},g)),a.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:C}},a.createElement(p.Z,{language:"html"},f))))))}const h="container_Egsj";function f(e){const{className:t,style:n,showCode:s,height:l,...p}=e,c=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${c(p)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${c(p)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${c(p)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),f=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${c(p)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${c(p)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(o,(0,r.Z)({className:`${h} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&a.createElement(g,{js:d,ts:m,react:u,vue:f,svelte:v}))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>s});var r=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:r={},config:a={},import:s,lite:o,loading:i="lazy",template:l,view:p="split"}=t,c="headless"===p;let d,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!c||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!c)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),C(m),document.body.appendChild(m)}try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=d.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{d.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),d.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&d.searchParams.set("config","sdk")}l&&d.searchParams.set("template",l),s&&d.searchParams.set("x",s),o&&d.searchParams.set("lite","true"),d.searchParams.set("embed","true"),d.searchParams.set("loading",c?"eager":i),d.searchParams.set("view",p);let g=!1;const h="Cannot call API methods after calling `destroy()`.",f=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!c){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||c||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="5px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===i?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),c?C(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},u))})),n.onload=()=>{e(n)},n.src=d.href,m.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===f.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>g?Promise.reject(h):new Promise((async e=>{v.settled&&e();f.contentWindow?.postMessage({type:"livecodes-load"},u),await v,e()})),k=(e,t)=>new Promise((async(n,r)=>{if(g)return r(h);await y();const a=E();addEventListener("message",(function t(s){if(s.source===f.contentWindow&&s.origin===u&&"livecodes-api-response"===s.data?.type&&s.data?.id===a&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?r(e.error):n(e)}})),f.contentWindow?.postMessage({method:e,id:a,args:t},u)})),b={},w=["load","ready","code","console","tests","destroy"],N=(e,t)=>{if(g)throw new Error(h);return w.includes(e)?(k("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&k("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==f.contentWindow||e.origin!==u||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(b).forEach((e=>{e.length=0})),f?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function C(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const E=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>k("run"),format:e=>k("format",[e]),getShareUrl:e=>k("getShareUrl",[e]),getConfig:e=>k("getConfig",[e]),setConfig:e=>k("setConfig",[e]),getCode:()=>k("getCode"),show:(e,t)=>k("show",[e,t]),runTests:()=>k("runTests"),onChange:e=>N("code",e),watch:N,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return k("exec",[e,...n])},destroy:()=>v.settled?k("destroy").then(S):g?Promise.reject(h):(S(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:s,...o}=e,i="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...o,...n,x:s,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const s=e.dataset.config||e.dataset.prefill;if(s)try{r=JSON.parse(s)}catch{}const o=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+o,...t,...r?{config:r}:{}})}))}))},9416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),s=n(325);const o={},i="PostgreSQL",l={unversionedId:"languages/postgresql",id:"languages/postgresql",title:"PostgreSQL",description:"PostgreSQL is a powerful, open source object-relational database system. LiveCodes runs PostgreSQL in the browser using PGlite (lightweight Postgres packaged as Wasm).",source:"@site/docs/languages/postgresql.md",sourceDirName:"languages",slug:"/languages/postgresql",permalink:"/livecodes/docs/languages/postgresql",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/postgresql.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Preset Env",permalink:"/livecodes/docs/languages/postcssPresetEnv"},next:{title:"Prolog",permalink:"/livecodes/docs/languages/prolog"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Helper Methods",id:"helper-methods",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Custom Settings",id:"custom-settings",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Aliases/Extensions",id:"aliasesextensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is a powerful, open source object-relational database system. LiveCodes runs PostgreSQL in the browser using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/electric-sql/pglite"},"PGlite")," (lightweight Postgres packaged as ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Wasm"),")."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note that LiveCodes also supports ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/sql"},"SQL using SQLite"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The SQL code runs (in the browser) and the output is produced as a JSON object. This JSON object is added to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," block with type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#helper-methods"},"Helper methods")," are provided for easy access/rendering of the JSON object (see below)."),(0,a.kt)("h3",{id:"helper-methods"},"Helper Methods"),(0,a.kt)("p",null,"The JavaScript object ",(0,a.kt)("inlineCode",{parentName:"p"},"livecodes.sql")," is globally available in the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),". This can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," blocks in the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/projects"},"markup editor")," (page HTML - see HTML editor is ",(0,a.kt)("a",{parentName:"p",href:"#example-usage"},"example usage"),"). It provides the following methods for easy access/rendering of the JSON object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"livecodes.sql.getResult")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Promise<{ data: Array<{ columns: string[]; values: unknown[][]; }>}>"),":"),(0,a.kt)("p",{parentName:"li"},"Returns a promise that resolves to the JSON object. The object has a single property ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," which is an array of objects, each representing the output of a query (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM table"),"). Each object has two properties ",(0,a.kt)("inlineCode",{parentName:"p"},"columns")," (an array of column names) and ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," (an array of arrays of values)."),(0,a.kt)("p",{parentName:"li"},"In case of errors, the promise rejects with the error message."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<script>\n  livecodes.sql\n    .getResult()\n    .then((result) => {\n      console.log(result);\n      // { data: [{ columns: ['columnA', 'columnB'], values: [['row 1 - value A', 'row 1 - value B'], ['row 2 - value A', 'row 2 - value B']] }] }\n    })\n    .catch((error) => {\n      console.error(error);\n      // 'error message'\n    });\n<\/script>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"livecodes.sql.getResultAsObjects")),(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Promise<{ [key: string]: unknown; }[][]>"),":"),(0,a.kt)("p",{parentName:"li"},"Returns a promise that resolves to the data as an array (representing queries/tables) of arrays (representing rows) of objects. Each object has key/value pairs for the column names and their values."),(0,a.kt)("p",{parentName:"li"},"In case of errors, the promise rejects with the error message."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<script>\n  livecodes.sql\n    .getResultAsObjects()\n    .then((result) => {\n      console.log(result);\n      // [[{ columnA: 'row 1 - value A', columnB: 'row 1 - value B' }, { columnA: 'row 2 - value A', columnB: 'row 2 - value B' }]]\n    })\n    .catch((error) => {\n      console.error(error);\n      // 'error message'\n    });\n<\/script>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"livecodes.sql.render: (element?: HTMLElement | string) => Promise<void>"),":"),(0,a.kt)("p",{parentName:"li"},"Accepts a single parameter which can be a DOM element or a CSS selector and renders the JSON object as HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"table"),"(s) in that element. If no element is specified, it renders the table(s) in ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<div id=\"tables\"></div>\n<script>\n  livecodes.sql.render('#tables');\n<\/script>\n")))),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Helper methods for PostgreSQL are identical to those for ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/sql"},"SQL using SQLite"),". So the same code can be used for both engines.")),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Currently parameters are not supported."),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)(s.Z,{template:"postgresql",mdxType:"LiveCodes"}),(0,a.kt)("h3",{id:"custom-settings"},"Custom Settings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql")," are used during running the SQL code. It is a JSON object with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dbName"),": a database name that allows persisting data in the browser in IndexedDB (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/electric-sql/pglite?tab=readme-ov-file#browser"},"PGlite"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"scriptURLs"),": An array of URLs to SQL scripts that should be loaded before running the SQL code."))),(0,a.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "postgresql": {\n    "dbName": "mydb",\n    "scriptURLs": ["https://myserver.com/sql.sql"]\n  }\n}\n')),(0,a.kt)("h2",{id:"language-info"},"Language Info"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postgresql")),(0,a.kt)("h3",{id:"aliasesextensions"},"Aliases/Extensions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pg.sql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pgsql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pgsql.sql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pgsql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pglite"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pglite.sql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"postgres"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"postgre.sql"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql.sql")),(0,a.kt)("h3",{id:"editor"},"Editor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script")),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/electric-sql/pglite"},"PGlite")),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@electric-sql/pglite"),": v0.1.5"),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sql-formatter-org/sql-formatter"},(0,a.kt)("inlineCode",{parentName:"a"},"sql-formatter"))),(0,a.kt)("h2",{id:"starter-template"},"Starter Template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=postgresql"},"https://livecodes.io/?template=postgresql")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL official website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/"},"PostgreSQL documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/electric-sql/pglite"},"PGlite GitHub repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/languages/sql"},"SQL in LiveCodes")," (using SQLite)")))}m.isMDXComponent=!0}}]);