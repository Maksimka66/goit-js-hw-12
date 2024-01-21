import{S as v,i as p,a as L}from"./assets/vendor-eacb4d5c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const y=document.querySelector(".form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),c=document.querySelector(".load"),u=new v(".gallery a",{captionDelay:250,captionsData:"alt"});let i=1,b=40;async function f(a,o){const r=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:a,per_page:b,page:o}),t=await L.get(`https://pixabay.com/api/?${r}`);if(t.data.hits.length===0){p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}return t}async function m(a){return(await a.map(({webformatURL:r,largeImageURL:t,tags:e,likes:s,views:n,comments:g,downloads:h})=>`<li class="gallery-item">
    <a  href="${t}">
    <img 
    class="gallery-image"
    src="${r}"
    alt="${e}"
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${s}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${n}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${g}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${h}</p>
    </div>
    </div>
    </li>`)).join("")}y.addEventListener("submit",async a=>{a.preventDefault(),i=1,l.innerHTML="";const o=a.currentTarget.elements.delay.value.trim();if(d.style.display="block",o===""){p.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),l.innerHTML="",d.style.display="none";return}try{const r=await f(o,i);if(r){const t=await m(r.data.hits);l.innerHTML=t,u.refresh(),c.style.display="block"}}catch(r){console.error(r),p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"}finally{d.style.display="none",a.target.reset()}});c.addEventListener("click",async a=>{i+=1;const o=y.elements.delay.value.trim(),r=await f(o,i);if(i>r.data.totalHits){c.style.display="none",p.error({title:"Error!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}if(i>1)try{if(r){const t=await m(r.data.hits);l.innerHTML+=t,u.refresh(),c.style.display="block"}}catch(t){console.error(t),p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
