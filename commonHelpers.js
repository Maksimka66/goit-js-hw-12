import{S as f,i as l,a as m}from"./assets/vendor-eacb4d5c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=document.querySelector(".load"),h=new f(".gallery a",{captionDelay:250,captionsData:"alt"});let d=1,v=40;async function L(s){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:s,per_page:v,page:d}),r=await m.get(`https://pixabay.com/api/?${i}`);if(r.data.hits.length===0){l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}return r}async function b(s){return(await s.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:y})=>`<li class="gallery-item">
    <a  href="${o}">
    <img 
    class="gallery-image"
    src="${r}"
    alt="${e}"
    width="360" 
    height="200"
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${t}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${a}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${u}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${y}</p>
    </div>
    </div>
    </li>`)).join("")}g.addEventListener("submit",async s=>{s.preventDefault(),n.innerHTML="";const i=s.currentTarget.elements.delay.value.trim();if(c.style.display="block",i===""){l.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),n.innerHTML="",c.style.display="none";return}try{const r=await L(i);if(r){const o=await b(r.data.hits);n.innerHTML=o,h.refresh(),p.style.display="block"}}catch(r){console.error(r),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{c.style.display="none",s.target.reset()}});p.addEventListener("click",async s=>{d+=1});
//# sourceMappingURL=commonHelpers.js.map
