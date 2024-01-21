import{S as u,i as c,a as f}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new u(".gallery a",{captionDelay:250,captionsData:"alt"});let g=1,h=40;async function v(i){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:i,per_page:h,page:g}),t=await f.get(`https://pixabay.com/api/?${s}`);if(t.data.hits.length===0){c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}return t}async function L(i){return(await i.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:o,comments:p,downloads:d})=>`<li class="gallery-item">
    <a  href="${a}">
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
    <p>${o}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${p}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${d}</p>
    </div>
    </div>
    </li>`)).join()}y.addEventListener("submit",async i=>{i.preventDefault(),n.innerHTML="",l.style.display="block";const s=i.currentTarget.elements.delay.value.trim();if(!s){c.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),n.innerHTML="";return}try{const t=await v(s);if(t){const a=await L(t.data.hits);n.innerHTML=a,m.refresh()}}catch(t){console.error(t),c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{l.style.display="none",i.target.reset()}});
//# sourceMappingURL=commonHelpers.js.map
