import{S as L,i as l,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),o=document.querySelector(".load"),h=new L(".gallery a",{captionDelay:250,captionsData:"alt"});let c=1,m=40,p,u,P;async function f(s,t){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:s,per_page:m,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${i}`)}function v(s){return s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:d,comments:b,downloads:w})=>`<li class="gallery-item">
    <a  href="${a}">
    <img 
    class="gallery-image"
    src="${i}"
    alt="${e}"
    width="360";
    height="200";
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${r}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${d}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${b}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${w}</p>
    </div>
    </div>
    </li>`).join("")}g.addEventListener("submit",async s=>{if(s.preventDefault(),n.style.display="block",p=g.elements.delay.value.trim(),c=1,p===""){o.style.display="none",y.innerHTML="",n.style.display="none",l.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"});return}try{n.style.display="block";const{data:{hits:t,totalHits:i}}=await f(p,c);if(t.length===0){n.style.display="none",o.style.display="none",l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y.innerHTML="";return}else{const a=document.createElement("div");a.classList.add("loader-container"),o.parentNode.insertBefore(a,o),a.appendChild(n),y.innerHTML=v(t),h.refresh(),n.style.display="none",o.style.display="block",u=Math.ceil(i/m),P=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height}c===u&&(o.style.display="none",l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.style.display="none"}finally{n.style.display="none",s.target.reset()}});o.addEventListener("click",async()=>{c+=1,o.style.display="none";try{n.style.display="block";const s=await f(p,c);if(c===u)l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{const t=await v(s.data.hits);y.innerHTML+=t,h.refresh();const i=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"}),o.style.display="block"}}catch(s){console.error(s),l.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),o.style.display="none"}finally{n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
