var w={APP_VERSION:"35",SDK_VERSION:"0.6.0",COMMIT_SHA:"406cf4e",REPO_URL:"https://github.com/live-codes/livecodes",DOCS_BASE_URL:"/livecodes/docs/"};var H='<div id="sync-container" class="modal-container"><div class="modal-title" data-i18n="sync.heading">Sync to GitHub Repo</div><div id="sync-status" class="modal-status"></div><ul id="sync-tabs" class="modal-tabs"><li data-target="new-repo" class="active" data-i18n="sync.create.heading">Create New Repo</li><li data-target="existing-repo" data-i18n="sync.existing.heading">Existing Repo</li></ul><div id="sync-screens" class="modal-screen-container"><div id="new-repo" class="tab-content active"><div class="modal-screen"><form id="new-repo-form"><div><label for="new-repo-name" data-i18n="sync.create.repoName">Repo Name <span id="new-repo-name-error" class="error"></span></label> <input type="text" id="new-repo-name" placeholder="Required" data-i18n="generic.required" data-i18n-prop="placeholder"></div><div class="padded"><input type="checkbox" id="new-repo-autosync" checked> <label for="new-repo-autosync" data-i18n="sync.autoSync">Auto sync</label></div><button id="new-repo-btn" class="wide-button start-sync-btn" type="submit" data-i18n="sync.syncBtn">Sync</button></form><div class="description" data-i18n="sync.create.desc" data-i18n-prop="innerHTML">A new <strong>private</strong> repo will be created. Your LiveCodes local data will be synchronized with <span class="code">main</span> branch.</div></div></div><div id="existing-repo" class="tab-content"><div class="modal-screen"><form id="existing-repo-form"><div><label for="existing-repo-name" data-i18n="sync.existing.repoName">Repo Name</label> <input type="text" id="existing-repo-name" autocomplete="off" placeholder="Loading..." data-i18n="generic.loading" data-i18n-prop="placeholder"></div><div class="padded"><input type="checkbox" id="existing-repo-autosync" checked> <label for="existing-repo-autosync" data-i18n="sync.autoSync">Auto sync</label></div><button id="existing-repo-btn" class="wide-button start-sync-btn" type="submit" data-i18n="sync.syncBtn">Sync</button></form><div class="description" data-i18n="sync.existing.desc" data-i18n-prop="innerHTML">Your LiveCodes local data will be synchronized with <span class="code">main</span> branch.</div></div></div></div></div>';var K=e=>Object.entries(w).reduce((o,[n,t])=>o.replace(new RegExp(`{{${n}}}`,"g"),t),e);var v=K(H);var j=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],U=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],k=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],u={getModuleUrl:(e,{isModule:o=!0,defaultCDN:n="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let t=q(e,o,n);return t||(o?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,o)=>e.startsWith("http")||e.startsWith("data:")?e:q(e,!1,o||Z())||e,cdnLists:{npm:U,module:j,gh:k},checkCDNs:async(e,o)=>{let n=[o,...u.cdnLists.npm].filter(Boolean);for(let t of n)try{if((await fetch(u.getUrl(e,t),{method:"HEAD"})).ok)return t}catch{}return u.cdnLists.npm[0]}},Z=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||u.cdnLists.npm[0]}catch{return u.cdnLists.npm[0]}},q=(e,o,n)=>{let t=o&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",k[0]):e.includes(":")||(e=(n||(o?j[0]:U[0]))+":"+e);for(let r of Q){let[c,a]=r;if(c.test(e))return e.replace(c,a)+t}return null},Q=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:Y,getModuleUrl:ie}=u;var R=Y("@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js");var X=(e,o)=>({Accept:`application/vnd.github.v3${o?"."+o:""}+json`,"Content-Type":"application/json",Authorization:"token "+e.token});var B=async(e,o="public")=>{let n=1,t=100,r=5,c=[];for(;n<=r;){let a=await fetch(`https://api.github.com/user/repos?type=${o}&per_page=${t}&page=${n}`,{method:"GET",cache:"no-store",headers:X(e)});if(n+=1,!a.ok)continue;let s=await a.json();c.push(...s.map(p=>p.name)),s.length<t&&(n=r+1)}return c};var b=()=>document.querySelector("#sync-link"),A=()=>document.querySelector("#sync-indicator");var C=e=>e.querySelector("#new-repo-form");var I=e=>e.querySelector("#new-repo-name");var $=e=>e.querySelector("#new-repo-autosync"),D=e=>e.querySelector("#existing-repo-form");var S=e=>e.querySelector("#existing-repo-name");var P=e=>e.querySelector("#existing-repo-autosync");var N=e=>(e||document).querySelector("#sync-status"),F=e=>(e||document).querySelectorAll(".start-sync-btn");var ee=(e,o)=>{let n=document.createElement("div");n.innerHTML=v;let t=n.firstChild,r=t.querySelectorAll("#sync-tabs li");return r.forEach(c=>{e.addEventListener(c,"click",()=>{r.forEach(s=>s.classList.remove("active")),c.classList.add("active"),document.querySelectorAll("#sync-screens > div").forEach(s=>{s.classList.remove("active")});let a=t.querySelector("#"+c.dataset.target);a?.classList.add("active"),a?.querySelector("input")?.focus()})}),o&&setTimeout(()=>{r[1].click();let c=S(t);c.value=o}),t},T=window.deps.translateString("sync.syncInProgress","Sync in progress..."),h=()=>b()?.dataset.hint===T,y=({inProgress:e,lastSync:o,syncContainer:n})=>{let t=b(),r=A(),c=N(n),a=F(n),s=o?`Last sync: ${new Date(o).toLocaleString()}`:"";c&&(c.innerText=s),e??h()?(t&&(t.classList.add("hint--bottom"),t.dataset.hint=T,r?.classList.remove("hidden")),a?.forEach(p=>{p.innerText=T,p.disabled=!0})):(t&&(t.classList.toggle("hint--bottom",!!s),t.dataset.hint=s,r?.classList.add("hidden")),a?.forEach(p=>{p.innerText=window.deps.translateString("sync.syncBtn","Sync"),p.disabled=!1}))},fe=async({baseUrl:e,modal:o,notifications:n,eventsManager:t,user:r,deps:c})=>{let a=await c.getSyncData(),s=ee(t,a?.repo),p=C(s),L=I(s),O=$(s),W=D(s),x=S(s),z=P(s);y({inProgress:h(),lastSync:a?.lastSync,syncContainer:s});let G=import(e+"sync.f065a66bce4f1d4ce112f906b37ec72d.js").then(l=>(l.init(e),l)),E=(l,i,m)=>(n.info(window.deps.translateString("sync.syncStarted","Sync started...")),o.close(),G.then(async g=>{if(!await g.sync({user:l,repo:i,newRepo:m})){n.error(window.deps.translateString("sync.error.generic","Sync failed!"));return}n.success(window.deps.translateString("sync.success","Sync complete!"))}).catch(()=>{n.error(window.deps.translateString("sync.error.generic","Sync failed!"))}));if(t.addEventListener(p,"submit",async l=>{if(l.preventDefault(),!r||h())return;let i=L.value,m=O.checked,g=!0;if(!i){n.error(window.deps.translateString("sync.error.repoNameRequired","Repo name is required"));return}y({inProgress:!0}),await E(r,i,g);let d=Date.now();await c.setSyncData({autosync:m,repo:i,lastSync:d}),y({inProgress:!1,lastSync:d})}),t.addEventListener(W,"submit",async l=>{if(l.preventDefault(),!r||h())return;let i=x.value,m=z.checked,g=!1;if(!i){n.error(window.deps.translateString("sync.error.repoNameRequired","Repo name is required"));return}y({inProgress:!0}),await E(r,i,g);let d=Date.now();await c.setSyncData({autosync:m,repo:i,lastSync:d}),y({inProgress:!1,lastSync:d})}),o.show(s,{isAsync:!0}),L.focus(),!r)return;globalThis.autoComplete||await import(R);let _=globalThis.autoComplete,J=await B(r,"all");t.addEventListener(x,"init",()=>{x.focus()});let M="#"+x.id;if(!document.querySelector(M))return;let f=new _({selector:M,placeHolder:window.deps.translateString("sync.searchRepos","Search your repos..."),data:{src:J},resultItem:{highlight:{render:!0}}});t.addEventListener(f.input,"selection",function(l){let i=l.detail;f.input.blur();let m=i.selection.value;f.input.value=m})};export{fe as createSyncUI,h as isSyncInProgress,y as updateSyncStatus};
