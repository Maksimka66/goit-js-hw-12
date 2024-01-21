import{S as f,i as p,a as y}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionDelay:250,captionsData:"alt"});let h=1,v=40;async function l(i){const t=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:i,per_page:v,page:h});if((await y.get(`https://pixabay.com/api/?${t}`)).data.hits.length===0){p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}}async function L(i){return(await i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:a,comments:d,downloads:u})=>`<li class="gallery-item">
    <a  href="${o}">
    <img 
    class="gallery-image"
    src="${s}"
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
    <p>${a}</p>
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
    </li>`)).join()}m.addEventListener("submit",async i=>{i.preventDefault(),n.innerHTML="";const t=i.currentTarget.elements.delay.value.trim();await l(t),c.style.display="block";try{const s=await l(t);if(s){const o=await L(s.data.hits);n.innerHTML=o,g.refresh()}}catch(s){console.error(s),p.error({title:"Error!",message:"An error occurred while fetching images. Please try again.",position:"topRight"})}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
