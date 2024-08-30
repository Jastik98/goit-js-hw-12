import{a as S,S as q,i as c}from"./assets/vendor-DOgVoBmD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function M(){let e=1;const r=15;async function a(t){const s=new URLSearchParams({key:"43477228-b93f3de915bee922623f7f3db",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:r}),o=await S.get(`https://pixabay.com/api/?${s}`);e++;const{hits:g,totalHits:p}=o.data,f=Math.ceil(p/r),v=e>f;return{hits:g,lastPage:v}}function n(){e=1}return{fetchingGalleryPage:a,resetLastPageNumber:n}}function h(e,r){let a="";e.forEach(({webformatURL:n,largeImageURL:t,tags:s,likes:o,views:g,comments:p,downloads:f})=>{a+=`<li class="gallery-item">
    <a class="gallery-item__link" href="${t}">
    <img
    src="${n}"
    alt="${s}"
    /></a>
    <ul class="image-descr">
    <li>
      <span>Likes</span>
      <span>${o}</span>
    </li>
    <li>
      <span>Views</span>
      <span>${g}</span>
    </li>
    <li>
      <span>Comments</span>
      <span>${p}</span>
    </li>
    <li>
      <span>Downloads</span>
      <span>${f}</span>
    </li>
  </ul>
  </li>`}),r.insertAdjacentHTML("beforeend",a)}const m=document.querySelector(".search-form"),u=document.querySelector(".gallery"),d=document.querySelector("button[data-load]"),{fetchingGalleryPage:y,resetLastPageNumber:O}=M();let l="";const L=new q(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.requestValue.value.trim(),!!l){O(),$(),b(m),P();try{const{hits:r,isLastPage:a}=await y(l);if(!r.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}h(r,u),L.refresh(),i(),w(a)}catch(r){console.error(r),c.error({message:"Ooops! Something went wrong. Try again later",position:"topRight"}),i()}m.reset()}});d.addEventListener("click",async()=>{b(u),P();const{hight:e}=document.querySelector(".gallery-item").getBoundingClientRect();try{const{hits:r,lastPage:a}=await y(l);i(),h(r,u),L.refresh(),window.scrollBy(0,e*2),w(a)}catch(r){console.error(r),c.error({message:"Ooops! Something went wrong. Try again later",position:"topRight"}),i()}});function b(e){e.insertAdjacentHTML("afterend",'<span class="loader"></span>')}function i(e=document.querySelector(".loader")){e&&e.remove()}function w(e){d.classList.contains("visually-hidden")&&(e?c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):d.classList.remove("visually-hidden"))}function P(){d.classList.add("visually-hidden")}function $(){u.innerHTML=""}
//# sourceMappingURL=index.js.map
