"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7778:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),r=n(7294);n(7728);async function s(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:o={},config:r={},import:s,lite:a,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),S(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{u.searchParams.set(e,String(o[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),s&&u.searchParams.set("x",s),a&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":i),u.searchParams.set("view",c);let f=!1;const g="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";n.setAttribute("loading",o),n.classList.add("livecodes"),d?S(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>f?Promise.reject(g):new Promise((async e=>{y.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),w=(e,t)=>new Promise((async(n,o)=>{if(f)return o(g);await v();const r=O();addEventListener("message",(function t(s){if(s.source===h.contentWindow&&s.origin===m&&"livecodes-api-response"===s.data?.type&&s.data?.id===r&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?o(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:r,args:t},m)})),b={},E=["load","ready","code","console","tests","destroy"],C=(e,t)=>{if(f)throw new Error(g);return E.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==m||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const k=()=>{Object.values(b).forEach((e=>{e.length=0})),h?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function S(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const O=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>C("code",e),watch:C,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return w("exec",[e,...n])},destroy:()=>y.settled?w("destroy").then(k):f?Promise.reject(g):(k(),Promise.resolve())}}function a(e){const t=(0,r.useRef)(null),[n,o]=(0,r.useState)(e.className||""),[a,i]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[d,u]=(0,r.useState)(),[p,m]=(0,r.useState)(JSON.stringify(e.config||"")),[f,g]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:a,sdkReady:l,config:h,...y}=e;if(o(n||""),i(r||{}),c(a),d&&f===JSON.stringify(y)){if(p===JSON.stringify(h))return;m(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{d?.setConfig(e)})):h&&d.setConfig(h)}else g(JSON.stringify(y)),d?.destroy(),s(t.current,{config:h,...y}).then((e=>{u(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{d?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:a,"data-height":l})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let o;const r=e.dataset.config||e.dataset.prefill;if(r)try{o=JSON.parse(r)}catch{}const a=encodeURIComponent(e.outerHTML);e.innerHTML="",s(e,{import:"dom/"+a,...t,...o?{config:o}:{}})}))}));var i=n(1446),l=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,r.useState)(e.js),[o,s]=(0,r.useState)(e.ts),[a,i]=(0,r.useState)(e.react),[f,g]=(0,r.useState)(e.vue),[h,y]=(0,r.useState)(e.svelte),v="3.7rem",[w,b]=(0,r.useState)(!0),[E,C]=(0,r.useState)(v),k=(0,r.useRef)(null),S=()=>{setTimeout((()=>{C(`calc(${k.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{C(`calc(${k.current.offsetHeight}px + ${v})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),s(e(o,"ts")),i(e(a,"jsx")),g(e(f,"html")),y(e(h,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?v:E,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{b(!w),S()}},"show code"),r.createElement("div",{ref:k,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"ts"},o)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"jsx"},a)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"html"},f)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"html"},h))))))}const g="container_Egsj";function h(e){const{className:t,style:n,showCode:s,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(a,(0,o.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(f,{js:u,ts:p,react:m,vue:h,svelte:y}))}},2039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),s=n(7778);const a={},i="Console",l={unversionedId:"features/console",id:"features/console",title:"Console",description:"Console messages are shown in the integrated console (in the tools pane, below the result page), without having to open the native browser console.",source:"@site/docs/features/console.md",sourceDirName:"features",slug:"/features/console",permalink:"/livecodes/docs/features/console",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/console.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tools Pane",permalink:"/livecodes/docs/features/tools-pane"},next:{title:"Compiled Code",permalink:"/livecodes/docs/features/compiled-code"}},c={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"console"},"Console"),(0,r.kt)("p",null,"Console messages are shown in the integrated console (in the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"tools pane"),", below the result page), without having to open the native browser console."),(0,r.kt)("p",null,"Messages can be sent to the console using the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"console")," methods in the code editor (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console.table"),", ...etc). The console can also be used as REPL (read\u2013eval\u2013print loop) using the integrated console input."),(0,r.kt)("p",null,"The code is evaluated in the context of the result page (i.e. variables defined in the script editor are accessible for evaluation in the console input). Also code completion works in the console input."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?ts&console=full"},"https://livecodes.io/?ts&console=full")," ",(0,r.kt)("br",null),"\nsets TypeScript as the active editor and shows the console maximized."),(0,r.kt)("p",null,"Demo: (console=full)"),(0,r.kt)(s.Z,{params:{console:"full",js:"const x = 5;\nconsole.log('x:', x);\nconsole.log({x, y: 6});\nconsole.table({x, y: 6});\nconsole.warn('take care!');\nconst z = x * y;"},mdxType:"LiveCodes"}),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Setting the querystring ",(0,r.kt)("inlineCode",{parentName:"p"},"languages")," only shows these languages.\nSelecting one language and setting console to ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," gives an environment similar to a REPL.")),(0,r.kt)("p",null,"Demo: (Python - print to console)"),(0,r.kt)(s.Z,{params:{languages:"py",console:"full",py:"print('hello from python')"},mdxType:"LiveCodes"}))}p.isMDXComponent=!0}}]);