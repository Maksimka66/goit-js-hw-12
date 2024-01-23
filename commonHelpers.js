import{S as L,i as c,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),a=document.querySelector(".gallery"),s=document.querySelector(".loader"),o=document.querySelector(".load"),h=new L(".gallery a",{captionDelay:250,captionsData:"alt"});let y=1,f=40,p,u,P;async function m(n,t){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:n,per_page:f,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${i}`)}function b(n){return n.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:d,comments:v,downloads:w})=>`<li class="gallery-item">
    <a  href="${l}">
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
    </li>`).join("")}g.addEventListener("submit",async n=>{if(n.preventDefault(),a.innerHTML="",s.style.display="block",o.style.display="none",p=g.elements.delay.value.trim(),y=1,p===""){o.style.display="none",a.innerHTML="",s.style.display="none",c.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"});return}try{s.style.display="block",a.innerHTML="",a.insertAdjacentElement("beforebegin",s);const{data:{hits:t,totalHits:i}}=await m(p,y);if(t.length===0){s.style.display="none",o.style.display="none",c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}else a.innerHTML=b(t),h.refresh(),s.style.display="none",o.style.display="block",u=Math.ceil(i/f),P=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height;y===u&&(o.style.display="none",c.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),c.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.style.display="none"}finally{s.style.display="none",n.target.reset()}});o.addEventListener("click",async n=>{y+=1,o.style.display="none";try{s.style.display="block",a.insertAdjacentElement("afterend",s);const t=await m(p,y);if(y===u)c.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{const i=await b(t.data.hits);a.innerHTML+=i,h.refresh();const l=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"}),o.style.display="block"}}catch(t){console.error(t),c.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),o.style.display="none"}finally{s.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
