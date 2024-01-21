import{S as u,i as l,a as y}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");document.querySelector(".load");const m=new u(".gallery a",{captionDelay:250,captionsData:"alt"});let g=1,h=40;async function v(i){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:i,per_page:h,page:g}),t=await y.get(`https://pixabay.com/api/?${s}`);if(t.data.hits.length===0){l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}return t}async function L(i){return(await i.map(({webformatURL:t,largeImageURL:o,tags:e,likes:r,views:a,comments:p,downloads:d})=>`<li class="gallery-item">
    <a  href="${o}">
    <img 
    class="gallery-image"
    src="${t}"
    alt="${e}"
    width="360" 
    height="200"
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${r}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${a}</p>
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
    </li>`)).join("")}f.addEventListener("submit",async i=>{i.preventDefault(),n.innerHTML="";const s=i.currentTarget.elements.delay.value.trim();if(c.style.display="block",s===""){l.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),n.innerHTML="",c.style.display="none";return}try{const t=await v(s);if(t){const o=await L(t.data.hits);n.innerHTML=o,m.refresh()}}catch(t){console.error(t),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{c.style.display="none",i.target.reset()}});
//# sourceMappingURL=commonHelpers.js.map
