(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[376,6318,4366,4071],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1262:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(7294),n=r(2389);function s(e){let{children:t,fallback:r}=e;return(0,n.Z)()?o.createElement(o.Fragment,null,t?.()):r??null}},4887:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(7294),n=r(1262),s=r(452),a=r(9493),i=r(1446);function c(e){const{params:t,config:r,code:c,language:l="js",codeTitle:d="",showLineNumbers:p=!1,formatCode:u=!0,linkText:f="Run in LiveCodes",style:h={},className:m=""}=e,g=(0,a.r)({appUrl:i.G,params:t,config:r});return o.createElement("div",{style:{marginBottom:"30px",...h},className:m},c&&o.createElement(n.Z,null,(()=>{return o.createElement(s.Z,{language:l,title:d,showLineNumbers:p},u?(e=c,void 0===(t=l)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):c);var e,t})),o.createElement("a",{href:g,target:"_blank",rel:"noreferrer"},f,o.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,r)=>{"use strict";r.d(t,{T:()=>n,r:()=>s});var o=r(7728);async function n(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:r="https://gigamaster.github.io/livecodes/",params:o={},config:n={},import:s,lite:a,loading:i="lazy",template:c,view:l="split"}=t,d="headless"===l;let p,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!d)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),x(u),document.body.appendChild(u)}try{p=new URL(r)}catch{throw new Error(`"${r}" is not a valid URL.`)}const f=p.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{p.searchParams.set(e,String(o[e]))})),"string"==typeof n)try{new URL(n),p.searchParams.set("config",n)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof n)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(n).length>0&&p.searchParams.set("config","sdk")}c&&p.searchParams.set("template",c),s&&p.searchParams.set("x",s),a&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",l);let h=!1;const m="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||d||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="8px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const r=document.createElement("iframe");r.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),r.setAttribute("allowtransparency","true"),r.setAttribute("allowpaymentrequest","true"),r.setAttribute("allowfullscreen","true"),r.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";r.setAttribute("loading",o),r.classList.add("livecodes"),d?x(r):(r.style.height="100%",r.style.minHeight="200px",r.style.width="100%",r.style.margin="0",r.style.border="0",r.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===r.contentWindow&&t.origin===f&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),r.contentWindow?.postMessage({type:"livecodes-config",payload:n},f))})),r.onload=()=>{e(r)},r.src=p.href,u.appendChild(r)})),y=new Promise((e=>{addEventListener("message",(function t(r){r.source===g.contentWindow&&r.origin===f&&"livecodes-ready"===r.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>h?Promise.reject(m):new Promise((async e=>{y.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},f),await y,e()})),w=(e,t)=>new Promise((async(r,o)=>{if(h)return o(m);await v();const n=A();addEventListener("message",(function t(s){if(s.source===g.contentWindow&&s.origin===f&&"livecodes-api-response"===s.data?.type&&s.data?.id===n&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?o(e.error):r(e)}})),g.contentWindow?.postMessage({method:e,id:n,args:t},f)})),b={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(h)throw new Error(m);return k.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==f||!t||!b[t])return;const r=e.data?.payload;b[t]?.forEach((e=>{e(r)}))}));const O=()=>{Object.values(b).forEach((e=>{e.length=0})),g?.remove?.(),h=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function x(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const A=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return w("exec",[e,...r])},destroy:()=>y.settled?w("destroy").then(O):h?Promise.reject(m):(O(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:r,config:n,import:s,...a}=e,i="string"==typeof n?{config:n}:"object"==typeof n?{x:"code/"+(0,o.compressToEncodedURIComponent)(JSON.stringify(n))}:{},c=new URLSearchParams(JSON.parse(JSON.stringify({...a,...r,x:s,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes/")+(c?"?"+c:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const r=e.dataset.options;if(r)try{t=JSON.parse(r)}catch{}let o;const s=e.dataset.config||e.dataset.prefill;if(s)try{o=JSON.parse(s)}catch{}const a=encodeURIComponent(e.outerHTML);e.innerHTML="",n(e,{import:"dom/"+a,...t,...o?{config:o}:{}})}))}))},8578:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(7462),n=(r(7294),r(3905)),s=r(4887);const a={},i="Assets",c={unversionedId:"features/assets",id:"features/assets",title:"Assets",description:"Adding local assets (e.g. images, fonts, stylesheets, scripts) that are not hosted online is such a common need that a UI was developed to allow easily adding them.",source:"@site/docs/features/assets.md",sourceDirName:"features",slug:"/features/assets",permalink:"/livecodes/docs/features/assets",draft:!1,editUrl:"https://github.com/gigamaster/livecodes/tree/develop/docs/docs/features/assets.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Default Template/Language",permalink:"/livecodes/docs/features/default-template-language"},next:{title:"Code Snippets",permalink:"/livecodes/docs/features/snippets"}},l={},d=[],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"assets"},"Assets"),(0,n.kt)("p",null,"Adding local assets (e.g. images, fonts, stylesheets, scripts) that are not hosted online is such a common need that a UI was developed to allow easily adding them."),(0,n.kt)("p",null,"The assets are saved locally on the user's device and are available across projects (i.e the same image can be used in different projects without having to add it multiple times)."),(0,n.kt)("p",null,"In addition, assets are supported in ",(0,n.kt)("a",{parentName:"p",href:"/livecodes/docs/features/sync"},"sync"),", ",(0,n.kt)("a",{parentName:"p",href:"/livecodes/docs/features/backup-restore#backup"},"backup")," and ",(0,n.kt)("a",{parentName:"p",href:"/livecodes/docs/features/backup-restore#restore"},"restore"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Assets")," screen can be accessed from app menu \u2192 Assets"),(0,n.kt)(s.Z,{params:{screen:"assets"},linkText:"direct link",mdxType:"RunInLiveCodes"}),(0,n.kt)("p",null,"Assets are either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Encoded as ",(0,n.kt)("a",{parentName:"p",href:"/livecodes/docs/features/data-urls"},"data URLs"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uploaded to a ",(0,n.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". This requires login with a ",(0,n.kt)("a",{parentName:"p",href:"/livecodes/docs/features/github-integration"},"GitHub account")," (allowing access to repos). A ",(0,n.kt)("strong",{parentName:"p"},"public")," repo called ",(0,n.kt)("inlineCode",{parentName:"p"},"livecodes-assets")," is created if not present. The assets are pushed to ",(0,n.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch. They can then be accessed by URLs like:"),(0,n.kt)("p",{parentName:"li"},"https://{user}.github.io/livecodes-assets/assets/..."))),(0,n.kt)("p",null,"When an asset item is clicked, the URL is copied to clipboard. The URL can then be used in projects."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assets",src:r(8102).Z,width:"3200",height:"1800"})))}u.isMDXComponent=!0},8102:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o=r.p+"assets/images/assets-79f6e5f750f5b0ee13fa3e6e428f0bbb.png"},7728:(e,t,r)=>{var o,n=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function n(e,t){if(!o[e]){o[e]={};for(var r=0;r<e.length;r++)o[e][e.charAt(r)]=r}return o[e][t]}var s={compressToBase64:function(e){if(null==e)return"";var r=s._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,(function(r){return n(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":s._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=s.compress(e),r=new Uint8Array(2*t.length),o=0,n=t.length;o<n;o++){var a=t.charCodeAt(o);r[2*o]=a>>>8,r[2*o+1]=a%256}return r},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var r=new Array(t.length/2),o=0,n=r.length;o<n;o++)r[o]=256*t[2*o]+t[2*o+1];var a=[];return r.forEach((function(t){a.push(e(t))})),s.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,(function(t){return n(r,e.charAt(t))})))},compress:function(t){return s._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var o,n,s,a={},i={},c="",l="",d="",p=2,u=3,f=2,h=[],m=0,g=0;for(s=0;s<e.length;s+=1)if(c=e.charAt(s),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=u++,i[c]=!0),l=d+c,Object.prototype.hasOwnProperty.call(a,l))d=l;else{if(Object.prototype.hasOwnProperty.call(i,d)){if(d.charCodeAt(0)<256){for(o=0;o<f;o++)m<<=1,g==t-1?(g=0,h.push(r(m)),m=0):g++;for(n=d.charCodeAt(0),o=0;o<8;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1}else{for(n=1,o=0;o<f;o++)m=m<<1|n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n=0;for(n=d.charCodeAt(0),o=0;o<16;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1}0==--p&&(p=Math.pow(2,f),f++),delete i[d]}else for(n=a[d],o=0;o<f;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1;0==--p&&(p=Math.pow(2,f),f++),a[l]=u++,d=String(c)}if(""!==d){if(Object.prototype.hasOwnProperty.call(i,d)){if(d.charCodeAt(0)<256){for(o=0;o<f;o++)m<<=1,g==t-1?(g=0,h.push(r(m)),m=0):g++;for(n=d.charCodeAt(0),o=0;o<8;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1}else{for(n=1,o=0;o<f;o++)m=m<<1|n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n=0;for(n=d.charCodeAt(0),o=0;o<16;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1}0==--p&&(p=Math.pow(2,f),f++),delete i[d]}else for(n=a[d],o=0;o<f;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1;0==--p&&(p=Math.pow(2,f),f++)}for(n=2,o=0;o<f;o++)m=m<<1|1&n,g==t-1?(g=0,h.push(r(m)),m=0):g++,n>>=1;for(;;){if(m<<=1,g==t-1){h.push(r(m));break}g++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,o){var n,s,a,i,c,l,d,p=[],u=4,f=4,h=3,m="",g=[],y={val:o(0),position:r,index:1};for(n=0;n<3;n+=1)p[n]=n;for(a=0,c=Math.pow(2,2),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;switch(a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;d=e(a);break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;d=e(a);break;case 2:return""}for(p[3]=d,s=d,g.push(d);;){if(y.index>t)return"";for(a=0,c=Math.pow(2,h),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;switch(d=a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;p[f++]=e(a),d=f-1,u--;break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)i=y.val&y.position,y.position>>=1,0==y.position&&(y.position=r,y.val=o(y.index++)),a|=(i>0?1:0)*l,l<<=1;p[f++]=e(a),d=f-1,u--;break;case 2:return g.join("")}if(0==u&&(u=Math.pow(2,h),h++),p[d])m=p[d];else{if(d!==f)return null;m=s+s.charAt(0)}g.push(m),p[f++]=s+m.charAt(0),s=m,0==--u&&(u=Math.pow(2,h),h++)}}};return s}();void 0===(o=function(){return n}.call(t,r,t,e))||(e.exports=o)}}]);