import{S as b,i as d,a as w}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p=document.querySelector(".form"),c=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector(".load"),u=new b(".gallery a",{captionDelay:250,captionsData:"alt"});let a=1,g=40;async function m(i,t){const o=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:i,per_page:g,page:t}),r=await w.get(`https://pixabay.com/api/?${o}`);if(r.data.hits.length===0){d.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}return r}async function f(i){return(await i.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:l,comments:h,downloads:v})=>`<li class="gallery-item">
    <a  href="${r}">
    <img 
    class="gallery-image"
    src="${o}"
    alt="${e}"
    width="360";
    height="200";
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${s}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${l}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${h}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${v}</p>
    </div>
    </div>
    </li>`)).join("")}p.addEventListener("submit",async i=>{i.preventDefault(),a=1,c.innerHTML="";const t=i.currentTarget.elements.delay.value.trim();if(y.style.display="block",t===""){d.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),c.innerHTML="",y.style.display="none",n.style.display="none";return}try{const o=await m(t,a);if(o){const r=await f(o.data.hits);c.innerHTML=r,u.refresh(),n.style.display="block"}}catch(o){console.error(o),d.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none"}finally{y.style.display="none",i.target.reset()}});n.addEventListener("click",async()=>{a+=1;const i=p.elements.delay.value.trim(),t=await m(i,a),o=Math.ceil(t.data.totalHits/g);if(a>o||a===12){n.style.display="none",d.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}try{if(t){const r=await f(t.data.hits);c.innerHTML+=r,u.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),n.style.display="block"}}catch(r){console.error(r),d.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{y.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
