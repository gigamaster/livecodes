var j=(e,c)=>{let l;return(...n)=>{l&&clearTimeout(l),l=setTimeout(()=>e.apply(null,n),typeof c=="function"?c():c)}};var U=()=>{let e=navigator.userAgent.toLowerCase();return e.includes("firefox")||e.includes("fxios")};var F=e=>{let c=()=>{e.style.display="none",t(),window.watchingEscape=!1},l=o=>{!e.contains(o.target)&&i(e)&&c()},n=o=>{o.key==="Escape"&&(c(),o.preventDefault())},i=o=>!!o&&!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length),t=()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",n)};return document.addEventListener("click",l),document.addEventListener("keydown",n),window.watchingEscape=!0,{clear:()=>t()}};var O={APP_VERSION:"35",SDK_VERSION:"0.6.0",COMMIT_SHA:"193f0e7",REPO_URL:"https://github.com/live-codes/livecodes",DOCS_BASE_URL:"/livecodes/docs/"};var D=`<div id="resources-container" class="modal-container"><div class="modal-title" data-i18n="resources.heading">External Resources</div><div id="resources-screen-container" class="modal-screen-container"><div class="modal-screen"><label for="resources-search-input" data-i18n="resources.search.heading" data-i18n-prop="innerHTML">Search Packages <span class="nowrap label-description">(powered by jsDelivr)</span></label> <input type="text" id="resources-search-input" placeholder="e.g. jquery, lodash@4, bootstrap@5.2.3, ..." data-i18n="resources.search.placeholder" data-i18n-prop="placeholder" onfocus='this.value=""'><div id="resources-result-container"><ul id="resources-search-results"></ul></div><div id="resources-textarea-container"><div class="description help center" data-i18n="resources.urlDesc">Add stylesheet/script URLs and click 'Load'. Each URL should be in a separate line.</div><label for="external-stylesheets" data-i18n="resources.stylesheets">External Stylesheets</label> <textarea id="external-stylesheets" placeholder="https://" data-resource="stylesheets"></textarea> <label for="external-scripts" data-i18n="resources.scripts">External Scripts</label> <textarea id="external-scripts" placeholder="https://" data-resource="scripts"></textarea></div><label data-i18n="resources.fonts.heading" data-i18n-prop="innerHTML">Fonts <span class="nowrap label-description">(powered by Google Fonts)</span></label><div id="fonts-container"><select><option value="" data-i18n="generic.loading">Loading...</option></select> <button class="btn" data-i18n="resources.fonts.add">Add</button></div><label data-i18n="resources.cssPresets.heading">CSS Presets</label><div class="input-container"><span><input type="radio" id="resources-css-preset-none" name="css-preset" value="" checked> <label class="radio-label" for="resources-css-preset-none" data-i18n="resources.cssPresets.none">None</label> </span><span><input type="radio" id="resources-css-preset-normalize-css" name="css-preset" value="normalize.css"> <label class="radio-label" for="resources-css-preset-normalize-css" data-i18n="resources.cssPresets.normalizeCss">Normalize.css</label> </span><span><input type="radio" id="resources-css-preset-reset-css" name="css-preset" value="reset-css"> <label class="radio-label" for="resources-css-preset-reset-css" data-i18n="resources.cssPresets.resetCss">Reset CSS</label></span></div></div></div></div>`;var Y=e=>Object.entries(O).reduce((c,[l,n])=>c.replace(new RegExp(`{{${l}}}`,"g"),n),e);var N=Y(D);var W=e=>{if(!e.startsWith("https://"))return e;let c=["https://esm.sh/","https://cdn.skypack.dev/","https://cdn.jsdelivr.net/npm/","https://fastly.jsdelivr.net/npm/","https://gcore.jsdelivr.net/npm/","https://testingcf.jsdelivr.net/npm/","https://jsdelivr.b-cdn.net/npm/","https://esm.run/","https://esbuild.vercel.app/","https://bundle.run/","https://unpkg.com/","https://npmcdn.com/","https://deno.bundlejs.com/?file&q=","https://jspm.dev/"];for(let l of c)if(e.startsWith(l))return e.replace(l,"");return e},$=e=>e.includes(":")&&!e.startsWith("data:")&&!e.startsWith("http")?e.split(":")[1]:e;var _=e=>`https://ofcncog2cu-dsn.algolia.net/1/indexes/npm-search/${encodeURIComponent(e)}?x-algolia-agent=Browser`,z={"X-Algolia-Application-Id":"OFCNCOG2CU","X-Algolia-API-Key":"f54e21fa3a2a0160595bb058179bfb1e"},V=["name","description","homepage","repository.url","version"],R="https://data.jsdelivr.com/v1",C={...U()?{}:{"User-Agent":"https://livecodes.io"}},M=e=>{let c=e.startsWith("@"),l=c?e.slice(1):e,[n,i]=l.split("@");return[(c?"@":"")+n,i]},ee=async(e,c=10)=>{let l={page:0,hitsPerPage:c,attributesToHighlight:[],attributesToRetrieve:V,analyticsTags:["jsdelivr"]},[n,i]=M(e),t;if(i){let a=await h(e);typeof a=="string"&&(t=M(a)[1])}let o=await fetch(_("query"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8",...z},body:JSON.stringify({query:n,...l})}).then(a=>{if(!a.ok)throw new Error("failed to fetch");return a}).then(a=>a.json()).catch(a=>({error:!0,message:a.message||String(a)}));if("error"in o)return o;let y=o.hits.map(a=>(a.name===n&&t&&(a.version=t),a.repository?.url&&(a.repo=a.repository?.url),a));return y.sort((a,E)=>a.name===n?-1:E.name===n?1:0),y},h=async e=>{let c=`${R}/package/resolve/npm/${e}`,l=await fetch(c,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.message||String(t)}));if("error"in l)return l;let n=M(e)[0],i=l.version;return i?`${n}@${i}`:n},te=async e=>{let[c,l]=M($(W(e))),n;if(l){let o=await h(e);typeof o=="string"&&(n=M(o)[1])}let i=_(c)+"&attributesToRetrieve="+V.join(","),t=await fetch(i,{method:"GET",headers:z}).then(o=>{if(!o.ok)throw new Error("failed to fetch");return o}).then(o=>o.json()).catch(o=>({error:!0,message:o.message||String(o)}));return"error"in t||(n&&(t.version=n),t.repository?.url&&(t.repo=t.repository?.url)),t},ne=async e=>{let c=await h(e),l=`${R}/package/npm/${c}/flat`,n=await fetch(l,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.message||String(t)}));if("error"in n)return n;let i=`https://cdn.jsdelivr.net/npm/${c}`;return{...n.default?{default:i+n.default}:{},files:n.files.map(t=>i+t.name)}},oe=async e=>{let c=await h(e),l=`${R}/package/npm/${c}/entrypoints`,n=await fetch(l,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.message||String(t)}));if("error"in n)return n;let i=`https://cdn.jsdelivr.net/npm/${c}`;return{...n.js?.file?{js:i+n.js?.file}:{},...n.css?.file?{css:i+n.css?.file}:{}}},P={search:ee,getPkgInfo:te,getPkgFiles:ne,getPkgDefaultFiles:oe};var J=()=>document.querySelectorAll("#resources-container textarea"),G=()=>document.querySelectorAll('#resources-container input[type="radio"]');var Se=({baseUrl:e,modal:c,eventsManager:l,deps:n})=>{let i=document.createElement("div");i.innerHTML=N;let t=i.firstChild;c.show(t,{onClose:()=>Q()});let o=J();o.forEach(r=>{let u=n.getConfig()[r.dataset.resource];r.value=u.length!==0?u.join(`
`)+`
`:""});let y=G();y.forEach(r=>{n.getConfig().cssPreset===r.value&&(r.checked=!0)});let a=document.querySelector("#resources-container #resources-search-input"),E=document.querySelector("#resources-container #resources-result-container"),d=document.querySelector("#resources-container #resources-search-results"),T=document.querySelector("#resources-container #fonts-container select"),H=document.querySelector("#resources-container #fonts-container button"),b=(r,u)=>{if(!r||v(r,u))return;let m=u==="stylesheets"?o[0]:o[1];m.value=m.value.trim()===""?r.trim()+`
`:m.value.split(`
`).map(s=>s.trim()).filter(s=>s!=="").join(`
`)+`
`+r.trim()+`
`,document.querySelector(`#resources-search-results a.add-resource[data-resource-url="${r}"]`)?.classList.add("resource-added")},v=(r,u)=>r?!!(u==="stylesheets"?o[0]:o[1]).value.split(`
`).map(s=>s.trim()).find(s=>s===r.trim()):!1,K=({name:r,version:u,description:m,files:s})=>{let L=document.createElement("li"),g=document.createElement("div");g.classList.add("search-result-item-title"),g.textContent=r,L.appendChild(g);let q=document.createElement("span");q.classList.add("label-description"),q.textContent="v"+u,g.appendChild(q);let k=document.createElement("div");k.classList.add("search-result-item-description"),k.textContent=m||"",L.appendChild(k);let S=document.createElement("div");S.classList.add("search-result-item-files"),L.appendChild(S);let w=document.createElement("span");if(w.classList.add("search-result-item-script"),S.appendChild(w),s?.js){let f=v(s.js,"scripts"),p=document.createElement("a");p.classList.add("add-resource"),p.classList.toggle("resource-added",f),p.href="#",p.onclick=f?null:()=>b(s.js||"","scripts"),p.title=s.js,p.dataset.resourceUrl=s.js,p.innerHTML=`<img src="${e}assets/images/javascript.svg" /> JS`,w.appendChild(p)}let I=document.createElement("span");if(I.classList.add("search-result-item-stylesheet"),S.appendChild(I),s?.css){let f=v(s.css,"stylesheets"),p=document.createElement("a");p.classList.add("add-resource"),p.classList.toggle("resource-added",f),p.href="#",p.onclick=f?null:()=>b(s.css||"","stylesheets"),p.title=s.css,p.dataset.resourceUrl=s.css,p.innerHTML=`<img src="${e}assets/images/css.svg" /> CSS`,I.appendChild(p)}let A=document.createElement("span");A.classList.add("search-result-item-Browse"),S.appendChild(A);let x=document.createElement("a");return x.href=`https://cdn.jsdelivr.net/npm/${r}/`,x.target="_blank",x.title=window.deps.translateString("resources.browseOnJsDelivr","Browse package files on jsDelivr"),x.textContent="Browse",A.appendChild(x),L},Z=async()=>{let r=a.value,u=await P.search(a.value,5);if(r!==a.value){d.innerHTML=`<li><div class="search-result-item-description">${window.deps.translateString("generic.loading","Loading...")}</div></li>`;return}if("error"in u){d.innerHTML=`<li><div class="search-result-item-error">${window.deps.translateString("resources.error.failedToLoadResults","Failed to load results!")}</div></li>`;return}if(u.length===0){d.innerHTML=`<li><div class="search-result-item-description">${window.deps.translateString("resources.error.noResultsFound","No results found for: ")}<strong>${r}</strong></div></li>`;return}let m=(await Promise.all(u.map(async s=>{let L=s.version!=null?`${s.name}@${s.version}`:s.name,g=await P.getPkgDefaultFiles(L);if(!("error"in g))return{...s,files:g}}))).filter(Boolean);if(r===a.value){if(m.length===0){d.innerHTML=`<li><div class="search-result-item-error">${window.deps.translateString("resources.error.failedToLoadResults","Failed to load results!")}</div></li>`;return}d.innerHTML="",m.forEach(s=>d.appendChild(K(s)))}},B;a?.focus(),a.addEventListener("input",async()=>{if(d.innerHTML=`<li><div class="search-result-item-description">${window.deps.translateString("generic.loading","Loading...")}</div></li>`,B?.clear(),a.value.length>0)E.style.display="unset",B=F(E);else{E.style.display="none";return}j(Z,300)()}),import(e+"google-fonts.0d0bc37857dba82d020f93ca95511304.js").then(r=>{T.innerHTML=`<option value="">${window.deps.translateString("resources.fonts.select","Select font ...")}</option>`,r.googleFonts.getFonts().forEach(m=>{let s=document.createElement("option");s.innerText=m,T.appendChild(s)}),l.addEventListener(H,"click",()=>{T.value!==""&&(b(r.googleFonts.getStylesheetUrl(T.value),"stylesheets"),T.value="",H.innerText="\u2714",setTimeout(()=>{H.innerText=window.deps.translateString("resources.fonts.add","Add")},1e3))})});let Q=async()=>{o.forEach(r=>{let u=r.dataset.resource;n.setConfig({...n.getConfig(),[u]:r.value?.split(`
`).map(m=>m.trim()).filter(m=>m!=="")||[]})}),y.forEach(r=>{r.checked&&n.setConfig({...n.getConfig(),cssPreset:r.value})}),n.loadResources()}};export{Se as createExternalResourcesUI};
