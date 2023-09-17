"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3084],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(f,l(l({ref:t},d),{},{components:o})):n.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),r=o(6010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>E});var n=o(7462),r=o(7294),a=o(6010),l=o(2466),s=o(6550),i=o(1980),c=o(7392),d=o(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}function p(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??u(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,a=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:o,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:n}),v=(()=>{const e=i??u;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var v=o(2389);const y="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:o,selectedValue:s,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const t=e.currentTarget,o=d.indexOf(t),n=c[o].value;n!==s&&(u(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const o=d.indexOf(e.currentTarget)+1;t=d[o]??d[0];break}case"ArrowLeft":{const o=d.indexOf(e.currentTarget)-1;t=d[o]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},t)},c.map((e=>{let{value:t,label:o,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,a.Z)("tabs__item",g,l?.className,{"tabs__item--active":s===t})}),o??t)})))}function w(e){let{lazy:t,children:o,selectedValue:n}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",y)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},7778:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(7462),r=o(7294);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:o="https://livecodes.io/",params:n={},config:r={},import:a,lite:l,loading:s="lazy",template:i,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),N(p),document.body.appendChild(p)}try{u=new URL(o)}catch{throw new Error(`"${o}" is not a valid URL.`)}const m=u.origin;if("object"==typeof n&&Object.keys(n).forEach((e=>{u.searchParams.set(e,String(n[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}i&&u.searchParams.set("template",i),a&&u.searchParams.set("x",a),l&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":s),u.searchParams.set("view",c);let f=!1;const h="Cannot call API methods after calling `destroy()`.",v=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.overflow||="hidden",p.style.resize||="vertical");const o=document.createElement("iframe");o.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowpaymentrequest","true"),o.setAttribute("allowfullscreen","true"),o.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const n="eager"===s?"eager":"lazy";o.setAttribute("loading",n),o.classList.add("livecodes"),d?N(o):(o.style.height="100%",o.style.minHeight="200px",o.style.width="100%",o.style.margin="0",o.style.border="0",o.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===o.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),o.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),o.onload=()=>{e(o)},o.src=u.href,p.appendChild(o)})),y=new Promise((e=>{addEventListener("message",(function t(o){o.source===v.contentWindow&&o.origin===m&&"livecodes-ready"===o.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),g=()=>f?Promise.reject(h):new Promise((async e=>{y.settled&&e();v.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),b=(e,t)=>new Promise((async(o,n)=>{if(f)return n(h);await g();const r=x();addEventListener("message",(function t(a){if(a.source===v.contentWindow&&a.origin===m&&"livecodes-api-response"===a.data?.type&&a.data?.id===r&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?n(e.error):o(e)}})),v.contentWindow?.postMessage({method:e,id:r,args:t},m)})),w={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(f)throw new Error(h);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==v.contentWindow||e.origin!==m||!t||!w[t])return;const o=e.data?.payload;w[t]?.forEach((e=>{e(o)}))}));const C=()=>{Object.values(w).forEach((e=>{e.length=0})),v?.remove?.(),f=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await g(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const x=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>g(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return b("exec",[e,...o])},destroy:()=>y.settled?b("destroy").then(C):f?Promise.reject(h):(C(),Promise.resolve())}}function l(e){const{className:t,style:o,height:n,sdkReady:l,...s}=e,i=(0,r.useRef)(null);let c;return(0,r.useEffect)((()=>{if(i.current)return a(i.current,s).then((e=>{c=e,"function"==typeof l&&l(e)})),()=>{c?.destroy()}}),[]),r.createElement("div",{ref:i,className:t,style:o,"data-height":n})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const o=e.dataset.options;if(o)try{t=JSON.parse(o)}catch{}let n;const r=e.dataset.config||e.dataset.prefill;if(r)try{n=JSON.parse(r)}catch{}a(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...n?{config:n}:{}})}))}));var s=o(1446),i=o(412),c=o(814),d=o(4866),u=o(5162),p=o(2134),m=o(420);function f(e){const[t,o]=(0,r.useState)(e.js),[n,a]=(0,r.useState)(e.ts),[l,s]=(0,r.useState)(e.react),[f,h]=(0,r.useState)(e.vue),[v,y]=(0,r.useState)(e.svelte),g="3.7rem",[b,w]=(0,r.useState)(!0),[k,E]=(0,r.useState)(g),C=(0,r.useRef)(null),N=()=>{setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${g})`)}),5),setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${g})`)}),255)};return(0,r.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};o(e(t,"js")),a(e(n,"ts")),s(e(l,"jsx")),h(e(f,"html")),y(e(v,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?g:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),N()}},"show code"),r.createElement("div",{ref:C,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"ts"},n)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"jsx"},l)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},f)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},v))))))}const h="container_Egsj";function v(e){const{className:t,style:o,showCode:a,height:i,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),v=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(l,(0,n.Z)({className:`${h} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&r.createElement(f,{js:u,ts:p,react:m,vue:v,svelte:y}))}},9422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=o(7462),r=(o(7294),o(3905)),a=o(7778);const l={},s="Display Modes",i={unversionedId:"features/display-modes",id:"features/display-modes",title:"Display Modes",description:"The configuration option mode can be used to select different display modes.",source:"@site/docs/features/display-modes.md",sourceDirName:"features",slug:"/features/display-modes",permalink:"/livecodes/docs/features/display-modes",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/display-modes.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Recover Unsaved",permalink:"/livecodes/docs/features/recover"},next:{title:"Default View",permalink:"/livecodes/docs/features/default-view"}},c={},d=[{value:"<code>full</code>",id:"full",level:2},{value:"<code>editor</code>",id:"editor",level:2},{value:"<code>codeblock</code>",id:"codeblock",level:2},{value:"<code>result</code>",id:"result",level:2},{value:"Display Mode vs Default View",id:"display-mode-vs-default-view",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"display-modes"},"Display Modes"),(0,r.kt)("p",null,"The configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," can be used to select different display modes.\nThe following display modes are supported:"),(0,r.kt)("h2",{id:"full"},(0,r.kt)("inlineCode",{parentName:"h2"},"full")),(0,r.kt)("p",null,"This is the default mode with toolbars, editor and result panes."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=react"},"https://livecodes.io/?template=react")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{template:"react",mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"editor"},(0,r.kt)("inlineCode",{parentName:"h2"},"editor")),(0,r.kt)("p",null,"Hides the results pane and works as editor only."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=editor&template=react"},"https://livecodes.io/?mode=editor&template=react")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{config:{mode:"editor"},template:"react",mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"codeblock"},(0,r.kt)("inlineCode",{parentName:"h2"},"codeblock")),(0,r.kt)("p",null,"A read-only mode showing only the code block without editor interface. On mouse-over a copy button appears that allows to copy the code. This is specially useful when embedded."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=codeblock&template=react"},"https://livecodes.io/?mode=codeblock&template=react")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{config:{mode:"codeblock"},template:"react",mdxType:"LiveCodes"}),(0,r.kt)("p",null,"By default, in ",(0,r.kt)("inlineCode",{parentName:"p"},"codeblock")," mode, the light-weight ",(0,r.kt)("inlineCode",{parentName:"p"},"CodeJar")," editor is used (in read-only mode). You can override this by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," option. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/editor-settings#code-editor"},"Editor Settings")," for details."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=codeblock&editor=monaco&template=react"},"https://livecodes.io/?mode=codeblock&editor=monaco&template=react")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{config:{mode:"codeblock",editor:"monaco"},template:"react",mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"result"},(0,r.kt)("inlineCode",{parentName:"h2"},"result")),(0,r.kt)("p",null,"Shows the result page only, with a small overlay (appears on hover) that allows opening the project in the full playground."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=result&template=react"},"https://livecodes.io/?mode=result&template=react")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{config:{mode:"result"},template:"react",mdxType:"LiveCodes"}),(0,r.kt)("p",null,"The tools pane (e.g. console/compiled code viewer) is hidden by default in ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," mode. It can be shown if set to ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"full"),". Refer to ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"Tools pane")," documentation for details."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=result&tools=console%7Cfull"},"https://livecodes.io/?mode=result&tools=console|full")),(0,r.kt)("p",null,"Demo:"),(0,r.kt)(a.Z,{params:{mode:"result",tools:"console|full"},mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"display-mode-vs-default-view"},"Display Mode vs Default View"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'"Display Mode" is different from "',(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/default-view"},"Default View"),'".'),(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," display mode, only the editor is loaded and the result page is not available. While ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," default view shows the editor by default, and the result page can be shown by dragging the split gutter."),(0,r.kt)("p",{parentName:"admonition"},"The same applies for ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," display mode and default view.")))}p.isMDXComponent=!0},420:(e,t,o)=>{o.d(t,{Z:()=>n});const n={details:"details_sGeq"}},2134:(e,t,o)=>{o.d(t,{Z:()=>n});const n={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);