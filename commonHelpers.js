import{S as P,i as l,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader"),o=document.querySelector(".load"),h=new P(".gallery a",{captionDelay:250,captionsData:"alt"});let c=1,g=40,y,u,m;async function v(r,s){const n=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,per_page:g,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${n}`)}function b(r){return r.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:d,comments:L,downloads:w})=>`<li class="gallery-item">
    <a  href="${i}">
    <img 
    class="gallery-image"
    src="${n}"
    alt="${e}"
    width="360";
    height="200";
    />
    </a>
    <div class="container">
    <div class="description">
    <p class="info">Likes:</p>
    <p>${t}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${d}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${L}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${w}</p>
    </div>
    </div>
    </li>`).join("")}f.addEventListener("submit",async r=>{if(r.preventDefault(),a.style.display="block",y=f.elements.delay.value.trim(),c=1,y===""){o.style.display="none",p.innerHTML="",a.style.display="none",l.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"});return}try{a.style.display="block";const{data:{hits:s,totalHits:n}}=await v(y,c);if(s.length===0){a.style.display="none",o.style.display="none",l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.innerHTML="";return}else{const i=document.createElement("div");i.classList.add("loader-container"),o.parentNode.insertBefore(i,o),i.appendChild(a),p.innerHTML=b(s),h.refresh(),a.style.display="none",o.style.display="block",u=Math.ceil(n/g),m=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height}c===u&&(o.style.display="none",l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.error(s),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.style.display="none"}finally{a.style.display="none",r.target.reset()}});o.addEventListener("click",async()=>{c+=1,o.style.display="none";try{a.style.display="block";const r=await v(y,c);c===u?l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):(p.innerHTML=await b(r.data.hits),h.refresh(),window.scrollBy({top:m*2,behavior:"smooth"}),o.style.display="block")}catch(r){console.error(r),l.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),o.style.display="none"}finally{a.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
