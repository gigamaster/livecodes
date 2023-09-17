"use strict";(()=>{var p=["jspm","skypack"],d=["unpkg","jsdelivr","fastly.jsdelivr"],m=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],n={getModuleUrl:(s,{isModule:t=!0,defaultCDN:e="jspm"}={})=>{s=s.replace(/#nobundle/g,"");let o=a(s,t,e);return o||(t?"https://jspm.dev/"+s:"https://cdn.jsdelivr.net/npm/"+s)},getUrl:(s,t)=>s.startsWith("http")?s:a(s,!1,t||x())||s,cdnLists:{npm:d,module:p,gh:m},checkCDNs:async(s,t)=>{let e=[t,...n.cdnLists.npm].filter(Boolean);for(let o of e)try{if((await fetch(n.getUrl(s,o),{method:"HEAD"})).ok)return o}catch{}return n.cdnLists.npm[0]}},x=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||n.cdnLists.npm[0]}catch{return n.cdnLists.npm[0]}},a=(s,t,e)=>{let o=t&&s.startsWith("unpkg:")?"?module":"";s.startsWith("gh:")?s=s.replace("gh",m[0]):s.includes(":")||(s=(e||(t?p[0]:d[0]))+":"+s);for(let c of f){let[r,i]=c;if(r.test(s))return s.replace(r,i)+o}return null},f=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:u,getModuleUrl:j}=n;var h="0.6.64",g=u(`malinajs@${h}/malina.js`);var l=u("https://cdn.jsdelivr.net/pyodide/v0.23.2/full/");if(livecodes.pyodideLoading===void 0){let s=document.createElement("script");s.src=`${l}pyodide.js`,document.head.append(s)}window.addEventListener("load",async()=>{parent.postMessage({type:"loading",payload:!0},"*");let s="";document.querySelectorAll('script[type="text/python"]').forEach(r=>s+=r.innerHTML+`
`);async function e(){livecodes.pyodideLoading!==!1&&(livecodes.pyodide=await loadPyodide({indexURL:l}),livecodes.pyodideLoading=!1)}let o=e();async function c(r){await o;try{await livecodes.pyodide.loadPackagesFromImports(r),await livecodes.pyodide.runPythonAsync(r)}catch(i){console.log(i)}}await c(s),parent.postMessage({type:"loading",payload:!1},"*")});})();