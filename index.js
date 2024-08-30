import{S as f,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(n){const s=new URLSearchParams({key:"43477228-b93f3de915bee922623f7f3db",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const{hits:a}=r;return a})}function d(n,s){let r="";n.forEach(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:c,comments:u,downloads:p})=>{r+=`<li class="gallery-item">
    <a class="gallery-item__link" href="${e}">
    <img
    src="${a}"
    alt="${t}"
    /></a>
    <ul class="image-descr">
    <li>
      <span>Likes</span>
      <span>${i}</span>
    </li>
    <li>
      <span>Views</span>
      <span>${c}</span>
    </li>
    <li>
      <span>Comments</span>
      <span>${u}</span>
    </li>
    <li>
      <span>Downloads</span>
      <span>${p}</span>
    </li>
  </ul>
  </li>`}),s.innerHTML=r}const l=document.querySelector(".search-form"),o=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",n=>{n.preventDefault();const s=n.target.elements.requestValue.value.trim();s&&(o.innerHTML='<span class="loader"></span>',h(s).then(r=>{if(!r.length){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.innerHTML="";return}setTimeout(()=>{d(r,o),y.refresh()},1e3)}).catch(r=>console.error(r)),l.reset())});
//# sourceMappingURL=index.js.map
