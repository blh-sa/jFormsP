!function(){console.log("scriptPopupStarted");const e=document.createElement("script");e.type="text/javascript",e.src="https://js.sentry-cdn.com/33654489e9644224a81c24eb041e7ce0.min.js",document.head.appendChild(e),e.onload=function(){Sentry.init({dsn:"https://33654489e9644224a81c24eb041e7ce0@o4504247970168832.ingest.sentry.io/4505306978189312"}),Sentry.configureScope((function(e){e.setTag("Website","BVA")}))};const t=document.querySelector("#form"),n=new URLSearchParams(window.location.search);t.addEventListener("submit",(function(e){e.preventDefault();const r=new FormData(t),s=t.querySelector('input[type="submit"]');n.set("email",r.get("email")),null!==r.get("action_source")&&""!==r.get("action_source")&&null==n.get("action_source")&&n.set("action_source",r.get("action_source")),null!==r.get("newsletter_list_id")&&""!==r.get("newsletter_list_id")&&null==n.get("newsletter_list_id")&&n.set("newsletter_list_id",r.get("newsletter_list_id")),null!==r.get("product_id")&&""!==r.get("product_id")&&null==n.get("product_id")&&n.set("product_id",r.get("product_id"));const o=new XMLHttpRequest;let a="";o.addEventListener("loadstart",(function(){s.value="Chargement...",s.classList.add("loader"),s.disabled=!0})),o.addEventListener("load",(function(){const e=JSON.parse(o.response);if(e.errors)return void o.dispatchEvent(new Event("error"));const t=new URL(e.redirect_url);n.forEach(((e,n)=>{t.searchParams.set(n,e)})),t.searchParams.delete("email"),a=t.toString(),null!==a?parent.location.href=a:o.dispatchEvent(new Event("error"))})),o.addEventListener("error",(function(){s.value="J'accède à mon contenu gratuit",s.disabled=!1,s.classList.remove("loader");const e=document.querySelector("span.status");e.classList.add("error"),e.innerHTML="Merci, votre inscription a bien été prise en compte.";try{const e=JSON.parse(o.response),t="XHR Error: "+JSON.stringify(e);Sentry.captureMessage(t)}catch(e){Sentry.captureMessage("Failed to parse xhr.response")}})),o.open("POST","https://ld.biovancia.com/api/subscriptions"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(n.toString())})),console.log("scriptPopupLoaded"),window.dataLayer=window.dataLayer||[],dataLayer.push({lpScriptPopupLoaded:!0})}();