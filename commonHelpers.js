import{S as y,a as m,i as c}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=document.querySelector(".form"),n=document.querySelector(".gallery"),p=document.querySelector(".loader");new y(".gallery a",{captionDelay:250,captionsData:"alt"});let f=1,g=40;async function h(s){const t=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:s,per_page:g,page:f}),i=await m.get(`https://pixabay.com/api/?${t}`);try{if(i.data.hits.length===0){c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}}catch(a){console.log(a),c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{l.elements.delay.value="",p.style.display="none"}}async function v(s){return(await s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:o,comments:d,downloads:u})=>`<li class="gallery-item">
    <a  href="${a}">
    <img 
    class="gallery-image"
    src="${i}"
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
    <p>${d}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${u}</p>
    </div>
    </div>
    </li>`)).join()}l.addEventListener("submit",async s=>{s.preventDefault(),n.innerHTML="";const t=s.currentTarget.elements.delay.value.trim();await h(t),p.style.display="block",n.innerHTML=await v(response.data.hits)});
//# sourceMappingURL=commonHelpers.js.map
