import{S as y,i as l,a as f}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),n=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=new y(".gallery a",{captionDelay:250,captionsData:"alt"});let g=1,h=40;async function v(i){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:i,per_page:h,page:g});try{const t=await f.get(`https://pixabay.com/api/?${s}`);if(t.data.hits.length===0){l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}return L(t.data.hits)}catch(t){console.error(t),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{c.elements.delay.value="",p.style.display="none"}}async function L(i){return(await i.map(({webformatURL:t,largeImageURL:o,tags:e,likes:r,views:a,comments:d,downloads:u})=>`<li class="gallery-item">
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
    <p>${d}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${u}</p>
    </div>
    </div>
    </li>`)).join()}c.addEventListener("submit",async i=>{i.preventDefault(),n.innerHTML="";const s=i.currentTarget.elements.delay.value.trim(),t=await v(s);if(s===""){l.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),n.innerHTML="";return}p.style.display="block",n.innerHTML=t,m.refresh()});
//# sourceMappingURL=commonHelpers.js.map
