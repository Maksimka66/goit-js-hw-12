import{S as b,i as p,a as L}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),i=document.querySelector(".load"),u=new b(".gallery a",{captionDelay:250,captionsData:"alt"});let c=1,f=40;async function m(a,s){const t=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:a,per_page:f,page:s}),o=await L.get(`https://pixabay.com/api/?${t}`);if(o.data.hits.length===0){p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}return o}async function g(a){return(await a.map(({webformatURL:t,largeImageURL:o,tags:e,likes:r,views:n,comments:h,downloads:v})=>`<li class="gallery-item">
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
    <p>${n}</p>
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
    </li>`)).join("")}y.addEventListener("submit",async a=>{a.preventDefault(),c=1,l.innerHTML="";const s=a.currentTarget.elements.delay.value.trim();if(d.style.display="block",s===""){p.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),l.innerHTML="",d.style.display="none",i.style.display="none";return}try{const t=await m(s,c);if(t){const o=await g(t.data.hits);l.innerHTML=o,u.refresh(),i.style.display="block"}}catch(t){console.error(t),p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.style.display="none"}finally{d.style.display="none",a.target.reset()}});i.addEventListener("click",async a=>{c+=1;const s=y.elements.delay.value.trim(),t=await m(s,c),o=Math.ceil(t.data.totalHits/f);if(c>o||t.data.totalHits.length===0){i.style.display="none",p.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}try{if(t){const e=await g(t.data.hits);l.innerHTML+=e,u.refresh(),window.scrollBy({top:top*4,behavior:"smooth"}),i.style.display="block"}}catch(e){console.error(e),p.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
