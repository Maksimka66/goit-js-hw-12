import{S as L,i as l,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),c=document.querySelector(".gallery"),s=document.querySelector(".loader"),n=document.querySelector(".load"),f=new L(".gallery a",{captionDelay:250,captionsData:"alt"});let y=1,h=40,p,u,P;async function m(o,t){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:o,per_page:h,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${i}`)}function b(o){return o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:d,comments:v,downloads:w})=>`<li class="gallery-item">
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
    <p>${v}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${w}</p>
    </div>
    </div>
    </li>`).join("")}g.addEventListener("submit",async o=>{if(o.preventDefault(),s.style.display="block",p=g.elements.delay.value.trim(),y=1,p===""){n.style.display="none",c.innerHTML="",s.style.display="none",l.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"});return}try{s.style.display="block",c.insertAdjacentElement("beforebegin",s);const{data:{hits:t,totalHits:i}}=await m(p,y);if(t.length===0){s.style.display="none",n.style.display="none",l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}else c.innerHTML=b(t),f.refresh(),s.style.display="none",n.style.display="block",u=Math.ceil(i/h),P=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height;y===u&&(n.style.display="none",l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none"}finally{s.style.display="none",o.target.reset()}});n.addEventListener("click",async o=>{y+=1,n.style.display="none";try{s.style.display="block",o&&c.insertAdjacentElement("afterend",s);const t=await m(p,y);if(y===u)l.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{const i=await b(t.data.hits);c.innerHTML+=i,f.refresh();const a=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),n.style.display="block"}}catch(t){console.error(t),l.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),n.style.display="none"}finally{s.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
