import{S as y,a as f,i as c}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".form"),n=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=new y(".gallery a",{captionDelay:250,captionsData:"alt"});let g=1,h=40;async function v(a){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:a,per_page:h,page:g});try{const t=await f.get(`https://pixabay.com/api/?${s}`);if(t.data.hits.length===0){c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}return L(t.data.hits)}catch(t){console.log(t),c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{l.elements.delay.value="",p.style.display="none"}}async function L(a){return(await a.map(({webformatURL:t,largeImageURL:o,tags:e,likes:r,views:i,comments:d,downloads:u})=>`<li class="gallery-item">
    <a  href="${o}">
    <img 
    class="gallery-image"
    src="${t}"
    alt="${e}"
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${r}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${i}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${d}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${u}</p>
    </div>
    </div>
    </li>`)).join()}l.addEventListener("submit",async a=>{a.preventDefault(),n.innerHTML="";const s=a.currentTarget.elements.delay.value.trim(),t=await v(s);p.style.display="block",t&&(n.innerHTML=t,m.refresh())});
//# sourceMappingURL=commonHelpers.js.map
