"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),s=n(9493);function o(e){const t=(0,r.useRef)(null),[n,a]=(0,r.useState)(e.className||""),[o,i]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[p,d]=(0,r.useState)(),[m,u]=(0,r.useState)(JSON.stringify(e.config||"")),[g,h]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:o,sdkReady:l,config:f,...v}=e;if(a(n||""),i(r||{}),c(o),p&&g===JSON.stringify(v)){if(m===JSON.stringify(f))return;u(JSON.stringify(f)),"string"==typeof f?fetch(f).then((e=>e.json())).then((e=>{p?.setConfig(e)})):f&&p.setConfig(f)}else h(JSON.stringify(v)),p?.destroy(),(0,s.T)(t.current,{config:f,...v}).then((e=>{d(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{p?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:o,"data-height":l})}var i=n(1446),l=n(412),c=n(452),p=n(4866),d=n(5162),m=n(2134),u=n(420);function g(e){const[t,n]=(0,r.useState)(e.js),[a,s]=(0,r.useState)(e.ts),[o,i]=(0,r.useState)(e.react),[g,h]=(0,r.useState)(e.vue),[f,v]=(0,r.useState)(e.svelte),y="3.7rem",[k,b]=(0,r.useState)(!0),[w,N]=(0,r.useState)(y),S=(0,r.useRef)(null),L=()=>{setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{N(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),s(e(a,"ts")),i(e(o,"jsx")),h(e(g,"html")),v(e(f,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":k,style:{height:k?y:w,overflow:"hidden",willChange:"height",transition:`height ${k?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{b(!k),L()}},"show code"),r.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:m.Z.collapsibleContent},r.createElement(p.Z,{groupId:"sdk-code"},r.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:L}},r.createElement(c.Z,{language:"js"},t)),r.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:L}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:L}},r.createElement(c.Z,{language:"jsx"},o)),r.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:L}},r.createElement(c.Z,{language:"html"},g)),r.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:L}},r.createElement(c.Z,{language:"html"},f))))))}const h="container_Egsj";function f(e){const{className:t,style:n,showCode:s,height:l,...c}=e,p=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${p(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),f=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${p(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(o,(0,a.Z)({className:`${h} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(g,{js:d,ts:m,react:u,vue:f,svelte:v}))}},9493:(e,t,n)=>{n.d(t,{T:()=>r,r:()=>s});var a=n(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:a={},config:r={},import:s,lite:o,loading:i="lazy",template:l,view:c="split"}=t,p="headless"===c;let d,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!p||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!p)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),L(m),document.body.appendChild(m)}try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=d.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{d.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),d.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&d.searchParams.set("config","sdk")}l&&d.searchParams.set("template",l),s&&d.searchParams.set("x",s),o&&d.searchParams.set("lite","true"),d.searchParams.set("embed","true"),d.searchParams.set("loading",p?"eager":i),d.searchParams.set("view",c);let g=!1;const h="Cannot call API methods after calling `destroy()`.",f=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!p){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||p||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="5px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===i?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),p?L(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},u))})),n.onload=()=>{e(n)},n.src=d.href,m.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===f.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>g?Promise.reject(h):new Promise((async e=>{v.settled&&e();f.contentWindow?.postMessage({type:"livecodes-load"},u),await v,e()})),k=(e,t)=>new Promise((async(n,a)=>{if(g)return a(h);await y();const r=C();addEventListener("message",(function t(s){if(s.source===f.contentWindow&&s.origin===u&&"livecodes-api-response"===s.data?.type&&s.data?.id===r&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?a(e.error):n(e)}})),f.contentWindow?.postMessage({method:e,id:r,args:t},u)})),b={},w=["load","ready","code","console","tests","destroy"],N=(e,t)=>{if(g)throw new Error(h);return w.includes(e)?(k("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&k("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==f.contentWindow||e.origin!==u||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(b).forEach((e=>{e.length=0})),f?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function L(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>k("run"),format:e=>k("format",[e]),getShareUrl:e=>k("getShareUrl",[e]),getConfig:e=>k("getConfig",[e]),setConfig:e=>k("setConfig",[e]),getCode:()=>k("getCode"),show:(e,t)=>k("show",[e,t]),runTests:()=>k("runTests"),onChange:e=>N("code",e),watch:N,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return k("exec",[e,...n])},destroy:()=>v.settled?k("destroy").then(S):g?Promise.reject(h):(S(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:n,config:r,import:s,...o}=e,i="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,a.compressToEncodedURIComponent)(JSON.stringify(r))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...o,...n,x:s,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const s=e.dataset.config||e.dataset.prefill;if(s)try{a=JSON.parse(s)}catch{}const o=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+o,...t,...a?{config:a}:{}})}))}))},9638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),s=n(325);const o={},i="SQL (SQLite)",l={unversionedId:"languages/sql",id:"languages/sql",title:"SQL (SQLite)",description:"SQLite is a small, fast, self-contained, high-reliability, full-featured, SQL database engine. LiveCodes runs SQLite (compiled to Wasm) in the browser using SQL.js.",source:"@site/docs/languages/sql.md",sourceDirName:"languages",slug:"/languages/sql",permalink:"/livecodes/docs/languages/sql",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/sql.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Solid (TS)",permalink:"/livecodes/docs/languages/solid.tsx"},next:{title:"Stencil",permalink:"/livecodes/docs/languages/stencil"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Helper Methods",id:"helper-methods",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Custom Settings",id:"custom-settings",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Aliases/Extensions",id:"aliasesextensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-sqlite"},"SQL (SQLite)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/"},"SQLite")," is a small, fast, self-contained, high-reliability, full-featured, SQL database engine. LiveCodes runs SQLite (compiled to ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Wasm"),") in the browser using ",(0,r.kt)("a",{parentName:"p",href:"https://sql.js.org/"},"SQL.js"),"."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that LiveCodes also supports ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/postgresql"},"PostgreSQL"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The SQL code runs (in the browser) and the output is produced as a JSON object. This JSON object is added to the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," block with type ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#helper-methods"},"Helper methods")," are provided for easy access/rendering of the JSON object (see below)."),(0,r.kt)("h3",{id:"helper-methods"},"Helper Methods"),(0,r.kt)("p",null,"The JavaScript object ",(0,r.kt)("inlineCode",{parentName:"p"},"livecodes.sql")," is globally available in the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),". This can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," blocks in the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/projects"},"markup editor")," (page HTML - see HTML editor is ",(0,r.kt)("a",{parentName:"p",href:"#example-usage"},"example usage"),"). It provides the following methods for easy access/rendering of the JSON object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"livecodes.sql.getResult")),(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"() => Promise<{ data: Array<{ columns: string[]; values: unknown[][]; }>}>"),":"),(0,r.kt)("p",{parentName:"li"},"Returns a promise that resolves to the JSON object. The object has a single property ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," which is an array of objects, each representing the output of a query (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM table"),"). Each object has two properties ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," (an array of column names) and ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," (an array of arrays of values)."),(0,r.kt)("p",{parentName:"li"},"In case of errors, the promise rejects with the error message."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<script>\n  livecodes.sql\n    .getResult()\n    .then((result) => {\n      console.log(result);\n      // { data: [{ columns: ['columnA', 'columnB'], values: [['row 1 - value A', 'row 1 - value B'], ['row 2 - value A', 'row 2 - value B']] }] }\n    })\n    .catch((error) => {\n      console.error(error);\n      // 'error message'\n    });\n<\/script>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"livecodes.sql.getResultAsObjects")),(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"() => Promise<{ [key: string]: unknown; }[][]>"),":"),(0,r.kt)("p",{parentName:"li"},"Returns a promise that resolves to the data as an array (representing queries/tables) of arrays (representing rows) of objects. Each object has key/value pairs for the column names and their values."),(0,r.kt)("p",{parentName:"li"},"In case of errors, the promise rejects with the error message."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<script>\n  livecodes.sql\n    .getResultAsObjects()\n    .then((result) => {\n      console.log(result);\n      // [[{ columnA: 'row 1 - value A', columnB: 'row 1 - value B' }, { columnA: 'row 2 - value A', columnB: 'row 2 - value B' }]]\n    })\n    .catch((error) => {\n      console.error(error);\n      // 'error message'\n    });\n<\/script>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"livecodes.sql.render: (element?: HTMLElement | string) => Promise<void>"),":"),(0,r.kt)("p",{parentName:"li"},"Accepts a single parameter which can be a DOM element or a CSS selector and renders the JSON object as HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),"(s) in that element. If no element is specified, it renders the table(s) in ",(0,r.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<div id=\"tables\"></div>\n<script>\n  livecodes.sql.render('#tables');\n<\/script>\n")))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Helper methods for SQLite are identical to those for ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/postgresql"},"PostgreSQL"),". So the same code can be used for both engines.")),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)(s.Z,{template:"sql",mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," are used during running the SQL code. It is a JSON object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dbURL"),": a URL to a SQLite database. It is downloaded and used to run the SQL code (",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," must be enabled). Changes are NOT persisted to the remote database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"scriptURLs"),": An array of URLs to SQL scripts that should be loaded before running the SQL code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"params"),": An object that can be used to pass parameters to the SQL code."))),(0,r.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "postgresql": {\n    "dbURL": "https://myserver.com/sqlite.db",\n    "scriptURLs": ["https://myserver.com/sql.sql"],\n    "params": {\n      "param1": "value1",\n      "param2": "value2"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sql")),(0,r.kt)("h3",{id:"aliasesextensions"},"Aliases/Extensions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://sql.js.org/"},"SQL.js")),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sql.js"),": v1.10.3"),(0,r.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,r.kt)("p",null,"using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sql-formatter-org/sql-formatter"},(0,r.kt)("inlineCode",{parentName:"a"},"sql-formatter"))),(0,r.kt)("h2",{id:"starter-template"},"Starter Template"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=sql"},"https://livecodes.io/?template=sql")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/"},"SQLite official website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/lang.html"},"SQLite syntax documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sql.js.org/"},"SQL.js official website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/languages/postgresql"},"PostgreSQL in LiveCodes"))))}m.isMDXComponent=!0}}]);