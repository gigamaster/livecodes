var Re=Object.create;var D=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var _e=Object.getPrototypeOf,Fe=Object.prototype.hasOwnProperty;var De=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Oe=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of Pe(t))!Fe.call(e,d)&&d!==o&&D(e,d,{get:()=>t[d],enumerable:!(a=Be(t,d))||a.enumerable});return e};var We=(e,t,o)=>(o=e!=null?Re(_e(e)):{},Oe(t||!e||!e.__esModule?D(o,"default",{value:e,enumerable:!0}):o,e));var N=De((at,C)=>{var Ge=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function d(r,s){if(!a[r]){a[r]={};for(var m=0;m<r.length;m++)a[r][r.charAt(m)]=m}return a[r][s]}var h={compressToBase64:function(r){if(r==null)return"";var s=h._compress(r,6,function(m){return t.charAt(m)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:h._decompress(r.length,32,function(s){return d(t,r.charAt(s))})},compressToUTF16:function(r){return r==null?"":h._compress(r,15,function(s){return e(s+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:h._decompress(r.length,16384,function(s){return r.charCodeAt(s)-32})},compressToUint8Array:function(r){for(var s=h.compress(r),m=new Uint8Array(s.length*2),n=0,p=s.length;n<p;n++){var f=s.charCodeAt(n);m[n*2]=f>>>8,m[n*2+1]=f%256}return m},decompressFromUint8Array:function(r){if(r==null)return h.decompress(r);for(var s=new Array(r.length/2),m=0,n=s.length;m<n;m++)s[m]=r[m*2]*256+r[m*2+1];var p=[];return s.forEach(function(f){p.push(e(f))}),h.decompress(p.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":h._compress(r,6,function(s){return o.charAt(s)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),h._decompress(r.length,32,function(s){return d(o,r.charAt(s))}))},compress:function(r){return h._compress(r,16,function(s){return e(s)})},_compress:function(r,s,m){if(r==null)return"";var n,p,f={},b={},T="",L="",S="",x=2,w=3,u=2,y=[],i=0,c=0,g;for(g=0;g<r.length;g+=1)if(T=r.charAt(g),Object.prototype.hasOwnProperty.call(f,T)||(f[T]=w++,b[T]=!0),L=S+T,Object.prototype.hasOwnProperty.call(f,L))S=L;else{if(Object.prototype.hasOwnProperty.call(b,S)){if(S.charCodeAt(0)<256){for(n=0;n<u;n++)i=i<<1,c==s-1?(c=0,y.push(m(i)),i=0):c++;for(p=S.charCodeAt(0),n=0;n<8;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1}else{for(p=1,n=0;n<u;n++)i=i<<1|p,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=0;for(p=S.charCodeAt(0),n=0;n<16;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1}x--,x==0&&(x=Math.pow(2,u),u++),delete b[S]}else for(p=f[S],n=0;n<u;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1;x--,x==0&&(x=Math.pow(2,u),u++),f[L]=w++,S=String(T)}if(S!==""){if(Object.prototype.hasOwnProperty.call(b,S)){if(S.charCodeAt(0)<256){for(n=0;n<u;n++)i=i<<1,c==s-1?(c=0,y.push(m(i)),i=0):c++;for(p=S.charCodeAt(0),n=0;n<8;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1}else{for(p=1,n=0;n<u;n++)i=i<<1|p,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=0;for(p=S.charCodeAt(0),n=0;n<16;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1}x--,x==0&&(x=Math.pow(2,u),u++),delete b[S]}else for(p=f[S],n=0;n<u;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1;x--,x==0&&(x=Math.pow(2,u),u++)}for(p=2,n=0;n<u;n++)i=i<<1|p&1,c==s-1?(c=0,y.push(m(i)),i=0):c++,p=p>>1;for(;;)if(i=i<<1,c==s-1){y.push(m(i));break}else c++;return y.join("")},decompress:function(r){return r==null?"":r==""?null:h._decompress(r.length,32768,function(s){return r.charCodeAt(s)})},_decompress:function(r,s,m){var n=[],p,f=4,b=4,T=3,L="",S=[],x,w,u,y,i,c,g,l={val:m(0),position:s,index:1};for(x=0;x<3;x+=1)n[x]=x;for(u=0,i=Math.pow(2,2),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;switch(p=u){case 0:for(u=0,i=Math.pow(2,8),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;g=e(u);break;case 1:for(u=0,i=Math.pow(2,16),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;g=e(u);break;case 2:return""}for(n[3]=g,w=g,S.push(g);;){if(l.index>r)return"";for(u=0,i=Math.pow(2,T),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;switch(g=u){case 0:for(u=0,i=Math.pow(2,8),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;n[b++]=e(u),g=b-1,f--;break;case 1:for(u=0,i=Math.pow(2,16),c=1;c!=i;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=m(l.index++)),u|=(y>0?1:0)*c,c<<=1;n[b++]=e(u),g=b-1,f--;break;case 2:return S.join("")}if(f==0&&(f=Math.pow(2,T),T++),n[g])L=n[g];else if(g===b)L=w+w.charAt(0);else return null;S.push(L),n[b++]=w+L.charAt(0),f--,w=L,f==0&&(f=Math.pow(2,T),T++)}}};return h}();typeof C<"u"&&C!=null&&(C.exports=Ge)});var R={title:"Untitled Project",description:"",head:`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,htmlAttrs:'lang="en" class=""',tags:[],autoupdate:!0,autosave:!1,autotest:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",layout:"responsive",editorTheme:void 0,appLanguage:void 0,recoverUnsaved:!0,showSpacing:!1,welcome:!0,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,enableAI:!1,editorMode:void 0,version:"35"};var B=(e,t)=>new Promise((o,a)=>{if(t&&globalThis[t])return o(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?o(globalThis[t]):o(globalThis);let d=document.createElement("script");d.src=e,d.async=!0;let h=()=>{d.removeEventListener("load",r),d.removeEventListener("error",s)},r=()=>{if(h(),!t)return o("loaded: "+e);let m=setInterval(()=>{if(window[t])return clearInterval(m),o(window[t])},5)},s=()=>{h(),a("failed to load: "+e)};d.addEventListener("load",r),d.addEventListener("error",s),document.head.appendChild(d)});var $e=e=>e.ok?e:Promise.reject(),I=(e,t)=>fetch(e,t).then($e);var P=e=>{if(!e)return null;let t=null;if(e.startsWith("http")||e.startsWith("data:"))try{t=new URL(e).href}catch{try{t=new URL(decodeURIComponent(e)).href}catch{}}return t};var O={APP_VERSION:"35",SDK_VERSION:"0.6.0",COMMIT_SHA:"193f0e7",REPO_URL:"https://github.com/live-codes/livecodes",DOCS_BASE_URL:"/livecodes/docs/"};var W='<div id="import-container" class="modal-container"><div class="modal-title" data-i18n="import.heading">Import</div><div id="import-screens" class="modal-screen-container"><ul id="import-tabs" class="modal-tabs"><li data-target="import-code" class="active" data-i18n="import.code.heading">Import Code</li><li data-target="import-json" data-i18n="import.json.heading">Import Project JSON</li><li data-target="bulk-import-json" data-i18n="import.bulk.heading">Bulk Import</li></ul><div id="import-code" class="tab-content active"><div class="modal-screen"><form id="url-import-form"><label for="code-url" data-i18n="import.generic.url">URL</label><br><input type="text" id="code-url" placeholder="https://"> <button id="url-import-btn" class="wide-button" type="submit" data-i18n="import.code.fromURL">Import from URL</button></form><form id="local-code-import-form"><label for="local-code-input" data-i18n="import.generic.file">Local file</label><br><label for="local-code-input" class="file-input-label" data-i18n="import.code.fromFile">Import local files</label> <input type="file" id="local-code-input" class="file-input" multiple></form><div class="description help" data-i18n="import.code.desc" data-i18n-prop="innerHTML">Supported Sources:<ul><li>GitHub gist</li><li>GitHub file</li><li>Directory in a GitHub repo</li><li>Gitlab snippet</li><li>Gitlab file</li><li>Directory in a Gitlab repo</li><li>JS Bin</li><li>Raw code</li><li>Code in web page DOM</li><li>Code in zip file</li><li>Official playgrounds<br>(TypeScript, Vue and Svelte)</li></ul>Please visit the <a href="{{DOCS_BASE_URL}}features/import" target="_blank" rel="noopener">documentations</a> for details.</div></div></div><div id="import-json" class="tab-content"><div class="modal-screen"><div class="description confirm" data-i18n="import.json.desc" data-i18n-prop="innerHTML">Import a single project JSON to editor. A project can be exported from app&nbsp;menu&nbsp;\u2192 Export&nbsp;\u2192 Export&nbsp;Project&nbsp;(JSON).</div><form id="json-url-import-form"><label for="json-url" data-i18n="import.generic.url">URL</label><br><input type="text" id="json-url" placeholder="https://"> <button id="json-url-import-btn" class="wide-button" type="submit" data-i18n="import.json.fromURL">Import project from URL</button></form><form id="file-url-import-form"><label for="file-input" data-i18n="import.generic.file">Local file</label><br><label for="file-input" class="file-input-label" data-i18n="import.json.fromFile">Import project from local file</label> <input type="file" id="file-input" class="file-input" accept="application/json"></form></div></div><div id="bulk-import-json" class="tab-content"><div class="modal-screen"><div class="description help" data-i18n="import.bulk.desc" data-i18n-prop="innerHTML">Bulk import multiple projects to your saved projects. Projects can be exported from the <a href="#" id="link-to-saved-projects">Saved Projects</a> screen.</div><form id="bulk-json-url-import-form"><label for="bulk-json-url" data-i18n="import.generic.url">URL</label><br><input type="text" id="bulk-json-url" placeholder="https://"> <button id="bulk-json-url-import-btn" class="wide-button" type="submit" data-i18n="import.bulk.fromURL">Bulk import from URL</button></form><form id="bulk-file-url-import-form"><label for="bulk-file-input" data-i18n="import.generic.file">Local file</label><br><label for="bulk-file-input" class="file-input-label" data-i18n="import.bulk.fromFile">Bulk import from local file</label> <input type="file" id="bulk-file-input" class="file-input" accept="application/json"></form></div></div></div></div>';var Je=e=>Object.entries(O).reduce((t,[o,a])=>t.replace(new RegExp(`{{${o}}}`,"g"),a),e);var $=Je(W);var H=We(N());var _=(e,t=!0)=>{let o=(0,H.decompressFromEncodedURIComponent)(e);if(o){if(!t)return o;try{if(JSON.parse(o))return o}catch{}}return(0,H.decompressFromBase64)(e)};var J=e=>{let t=e.slice(5),o;try{o=JSON.parse(_(t)||"{}")}catch{o={}}return o};var k=(e=location.origin)=>!!(e&&(e.endsWith("livecodes.io")||e.endsWith("gigamaster.github.io/livecodes/")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var z=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],K=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],V=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],U={getModuleUrl:(e,{isModule:t=!0,defaultCDN:o="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let a=G(e,t,o);return a||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:G(e,!1,t||ze())||e,cdnLists:{npm:K,module:z,gh:V},checkCDNs:async(e,t)=>{let o=[t,...U.cdnLists.npm].filter(Boolean);for(let a of o)try{if((await fetch(U.getUrl(e,a),{method:"HEAD"})).ok)return a}catch{}return U.cdnLists.npm[0]}},ze=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||U.cdnLists.npm[0]}catch{return U.cdnLists.npm[0]}},G=(e,t,o)=>{let a=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",V[0]):e.includes(":")||(e=(o||(t?z[0]:K[0]))+":"+e);for(let d of Ke){let[h,r]=d;if(h.test(e))return e.replace(h,r)+a}return null},Ke=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:Ve,getModuleUrl:ft}=U;var Z=Ve("jszip@3.10.1/dist/jszip.js");var X="https://dpaste.com/",Qe="https://dpaste.com/api/v2/",Y="https://api2.livecodes.io/share",ee={getProject:async e=>{try{let t=await fetch(X+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(Qe,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(X,""):""}catch{return""}}},Xe={getProject:async e=>{if(e.length<11)return ee.getProject(e);if(!k())return{};try{let t=await fetch(Y+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!k())return"";try{let t=await fetch(Y,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},te=k()?Xe:ee;var oe=e=>{let t=e.slice(3);return te.getProject(t)};var q=e=>{try{return e.startsWith("https://")?new URL(e):new URL("https://"+e)}catch{return}},M={github:/^(?:(?:http|https):\/\/)?github\.com\/(?:.*)/g,githubGist:/^(?:(?:http|https):\/\/)?gist\.github\.com(?:\/\S*)?\/(\w+)/g,gitlab:/^(?:(?:http|https):\/\/)?gitlab\.com\/(?:.*)/g,codepen:/^(?:(?:http|https):\/\/)?codepen\.io\/(\w+)\/pen\/(\w+)/g,jsbin:/^(?:(?:(?:http|https):\/\/)?(?:\w+.)?)?jsbin\.com\/((\w)+(\/\d+)?)(?:.*)/g,typescriptPlayground:/^(?:(?:http|https):\/\/)?(?:www\.)?typescriptlang\.org\/play(?:.*)/g,vuePlayground:/^(?:(?:http|https):\/\/)?play\.vuejs\.org(?:.*)/g,sveltePlayground:/^(?:(?:http|https):\/\/)?svelte\.dev\/repl\/(?:.*)/g},re=e=>e.startsWith("code/"),ne=(e,t=new RegExp(M.codepen))=>t.test(e),se=e=>e.startsWith("dom/"),ie=(e,t=new RegExp(M.github))=>{if(t.test(e))try{let o=q(e);return o?o.pathname.split("/")[3]==="blob":void 0}catch{return}};var ce=(e,t=new RegExp(M.github))=>{if(t.test(e))try{let o=q(e);if(!o)return;let a=o.pathname;o.pathname.endsWith("/")&&(a=o.pathname.slice(0,-1));let d=a.split("/");return d[3]==="tree"||d.length===3}catch{return}},ae=(e,t=new RegExp(M.githubGist))=>t.test(e),le=(e,t=new RegExp(M.gitlab))=>{if(t.test(e))try{let o=q(e);return o?o.pathname.split("/")[4]==="blob":void 0}catch{return}},pe=(e,t=new RegExp(M.gitlab))=>{if(t.test(e))try{let o=q(e);if(!o)return;let a=o.pathname;o.pathname.endsWith("/")&&(a=o.pathname.slice(0,-1));let d=a.split("/");return d[4]==="tree"||d.length===3}catch{return}},me=(e,t=new RegExp(M.gitlab))=>{if(!t.test(e))return;let o=q(e);if(!o)return;let a=o.pathname.split("/");return a[a.length-2]==="snippets"},ue=(e,t=new RegExp(M.jsbin))=>t.test(e),de=e=>e.startsWith("id/"),ge=(e,t=new RegExp(M.typescriptPlayground))=>t.test(e),fe=(e,t=new RegExp(M.vuePlayground))=>t.test(e),he=(e,t=new RegExp(M.sveltePlayground))=>t.test(e);var ye=async(e,t,o,a,d)=>{if(re(e))return J(e);if(de(e))return oe(e);let h=await import(d+"import-src.dc2e796deee78df7cadd4201d55d3d80.js"),{importFromCodepen:r,importFromDom:s,importFromGithub:m,importFromGithubDir:n,importFromGithubGist:p,importFromGitlab:f,importFromGitlabDir:b,importFromGitlabSnippet:T,importFromJsbin:L,importSveltePlayground:S,importTypescriptPlayground:x,importVuePlayground:w,importFromUrl:u}=h;return se(e)?s(e,t,o):ae(e)?p(e,t):ce(e)?n(e,t,a):ie(e)?m(e,a):me(e)?T(e,t):pe(e)?b(e,t):le(e)?f(e):ne(e)?r(e):ue(e)?L(e):he(e)?S(e):ge(e)?x(e):fe(e)?w(e):P(e)?u(e,t,o):Promise.resolve({})};var xe=async(e,t)=>new Promise(async(o,a)=>{(await B(Z,"JSZip")).loadAsync(e).then(async h=>{let r=h.file(/livecodes\.json/);if(r.length>0){r[0].async("string").then(f=>{o(JSON.parse(f))}).catch(a);return}let s=h.file(/((^src\/)|(\/src\/))/),m=h.file(/.*/),n=m.filter(f=>!f.name.includes("/")),p=s.length>0?s:n.length>0?n:m;if(p.length>0){let f=await Promise.all(p.map(async b=>({filename:b.name,content:await b.async("string")})));o(t(f,{}));return}o({})}).catch(a)});var be=async(e,t,o)=>{let a=r=>new Promise((s,m)=>{let n=[];for(let p of r){if(p.size>104857600){m("Error: Exceeded size 100 MB");return}let b=new FileReader;o.addEventListener(b,"load",T=>{let L=T.target?.result||"";n.push({filename:p.name,content:L}),n.length===r.length&&s(t(n,{}))}),o.addEventListener(b,"error",()=>{m("Error: Failed to read file")}),b.readAsText(p)}}),d=r=>xe(r[0],t);return e?.length?(e?.length===1&&e[0].name.endsWith(".zip")?d:a)(e):{}};var Se=e=>e.querySelector("#url-import-form"),Le=e=>e.querySelector("#url-import-btn"),F=e=>e.querySelector("#code-url"),Te=e=>e.querySelector("#local-code-input"),ve=e=>e.querySelector("#json-url-import-form"),we=e=>e.querySelector("#json-url-import-btn"),Ee=e=>e.querySelector("#json-url"),Me=e=>e.querySelector("#bulk-json-url-import-form"),je=e=>e.querySelector("#bulk-json-url-import-btn"),Ue=e=>e.querySelector("#bulk-json-url"),He=e=>e.querySelector("#link-to-saved-projects"),ke=e=>e.querySelector("#file-input");var qe=e=>e.querySelector("#bulk-file-input");var Ye=e=>{let t=document.createElement("div");t.innerHTML=$;let o=t.firstChild,a=o.querySelectorAll("#import-tabs li");return a.forEach(d=>{e.addEventListener(d,"click",()=>{a.forEach(r=>r.classList.remove("active")),d.classList.add("active"),document.querySelectorAll("#import-screens > div").forEach(r=>{r.classList.remove("active")});let h=o.querySelector("#"+d.dataset.target);h?.classList.add("active"),h?.querySelector("input")?.focus()})}),o},Lr=({baseUrl:e,modal:t,notifications:o,eventsManager:a,getUser:d,loadConfig:h,populateConfig:r,projectStorage:s,showScreen:m})=>{let n=Ye(a),p=Se(n),f=Le(n);a.addEventListener(p,"submit",async g=>{g.preventDefault();let l=f.innerHTML;f.innerHTML=window.deps.translateString("generic.loading","Loading..."),f.disabled=!0;let v=F(n),E=v.value,j=await ye(E,{},R,await d?.(),e);j&&Object.keys(j).length>0?(await h({...R,...j},location.origin+location.pathname+"?x="+encodeURIComponent(E)),t.close()):(f.innerHTML=l,f.disabled=!1,o.error(window.deps.translateString("import.error.failedToLoadURL","Error: failed to load URL")),v.focus())});let b=Te(n);a.addEventListener(b,"change",()=>{b.files?.length&&be(b.files,r,a).then(h).then(t.close).catch(g=>{o.error(g)})});let T=ve(n),L=we(n);a.addEventListener(T,"submit",async g=>{g.preventDefault();let l=L.innerHTML;L.innerHTML=window.deps.translateString("generic.loading","Loading..."),L.disabled=!0;let v=Ee(n),E=v.value;I(E).then(j=>j.json()).then(j=>h(j,location.origin+location.pathname+"?config="+E)).then(()=>t.close()).catch(()=>{L.innerHTML=l,L.disabled=!1,o.error(window.deps.translateString("import.error.failedToLoadURL","Error: failed to load URL")),v.focus()})});let S=Me(n),x=je(n);a.addEventListener(S,"submit",async g=>{g.preventDefault(),o.info(window.deps.translateString("import.bulk.started","Bulk import started..."));let l=x.innerHTML;x.innerHTML=window.deps.translateString("generic.loading","Loading..."),x.disabled=!0;let v=Ue(n),E=v.value;I(E).then(j=>j.json()).then(u).catch(()=>{x.innerHTML=l,x.disabled=!1,o.error(window.deps.translateString("import.error.failedToLoadURL","Error: failed to load URL")),v.focus()})});let w=g=>new Promise((l,v)=>{if(g.files?.length===0)return;let E=g.files[0];if(["application/json","text/plain"].indexOf(E.type)===-1){v("Error: Incorrect file type");return}let Ie=100*1024*1024;if(E.size>Ie){v(window.deps.translateString("generic.error.exceededSize","Error: Exceeded size {{size}} MB",{size:100}));return}let A=new FileReader;a.addEventListener(A,"load",async Ce=>{let Ae=Ce.target?.result||"";try{l(JSON.parse(Ae))}catch{v(window.deps.translateString("import.error.invalidConfigFile","Invalid configuration file"))}}),a.addEventListener(A,"error",()=>{v(window.deps.translateString("generic.error.failedToReadFile","Error: Failed to read file"))}),A.readAsText(E)}),u=async g=>{let l=v=>v.config||v.pen;if(Array.isArray(g)&&g.every(l)&&s){await s.bulkInsert(g.map(l)),o.success(window.deps.translateString("import.success","Import Successful!")),m("open");return}return Promise.reject(window.deps.translateString("import.error.invalidFile","Error: Invalid file"))},y=ke(n);a.addEventListener(y,"change",()=>{w(y).then(h).then(t.close).catch(g=>{o.error(g)})});let i=qe(n);a.addEventListener(i,"change",()=>{o.info(window.deps.translateString("import.bulk.started","Bulk import started...")),w(i).then(u).catch(g=>{o.error(g)})});let c=He(n);a.addEventListener(c,"click",g=>{g.preventDefault(),m("open")}),t.show(n,{isAsync:!0}),F(n).focus()};export{Lr as createImportUI,ye as importCode};
