import{S as L,i as a,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&y(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function y(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),l=document.querySelector(".gallery"),o=document.querySelector(".loader"),n=document.querySelector(".load"),h=new L(".gallery a",{captionDelay:250,captionsData:"alt"});let c=1,f=40,p,u,P;async function m(s,t){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:s,per_page:f,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${i}`)}function b(s){return s.map(({webformatURL:i,largeImageURL:y,tags:e,likes:r,views:d,comments:v,downloads:w})=>`<li class="gallery-item">
    <a  href="${y}">
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
    <p>${v}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${w}</p>
    </div>
    </div>
    </li>`).join("")}g.addEventListener("submit",async s=>{if(s.preventDefault(),o.style.display="block",p=g.elements.delay.value.trim(),c=1,p===""){n.style.display="none",l.innerHTML="",o.style.display="none",a.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"});return}try{o.style.display="block",l.insertAdjacentElement("beforebegin",o);const{data:{hits:t,totalHits:i}}=await m(p,c);if(t.length===0){o.style.display="none",n.style.display="none",a.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}else l.innerHTML=b(t),h.refresh(),o.style.display="none",n.style.display="block",u=Math.ceil(i/f),P=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height;c===u&&(n.style.display="none",a.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),a.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none"}finally{o.style.display="none",s.target.reset()}});n.addEventListener("click",async()=>{c+=1,n.style.display="none";try{o.style.display="block";const s=await m(p,c);if(c===u)a.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{l.insertAdjacentElement("afterend",o);const t=await b(s.data.hits);l.innerHTML+=t,h.refresh();const i=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"}),n.style.display="block"}}catch(s){console.error(s),a.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),n.style.display="none"}finally{o.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
