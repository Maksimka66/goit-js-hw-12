import{S as P,i as n,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),y=document.querySelector(".gallery"),i=document.querySelector(".loader"),o=document.querySelector(".load"),g=new P(".gallery a",{captionDelay:250,captionsData:"alt"});let l=1,h=40,d,u,m;async function b(r,s){const a=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,per_page:h,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return await S.get(`https://pixabay.com/api/?${a}`)}function v(r){return r.map(({webformatURL:a,largeImageURL:c,tags:e,likes:t,views:p,comments:w,downloads:L})=>`<li class="gallery-item">
    <a  href="${c}">
    <img 
    class="gallery-image"
    src="${a}"
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
    <p>${p}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${w}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${L}</p>
    </div>
    </div>
    </li>`).join("")}f.addEventListener("submit",async r=>{if(r.preventDefault(),i.style.display="block",d=f.elements.delay.value.trim(),l=1,d===""){o.style.display="none",y.innerHTML="",i.style.display="none",n.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"});return}try{i.style.display="block";const{data:{hits:s,totalHits:a}}=await b(d,l);if(s.length===0){i.style.display="none",o.style.display="none",n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y.innerHTML="";return}else y.innerHTML=v(s),g.refresh(),i.style.display="none",o.style.display="block",u=Math.ceil(a/h),m=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height;l===u&&(o.style.display="none",n.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.error(s),n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.style.display="none"}finally{i.style.display="none",r.target.reset()}});o.addEventListener("click",async()=>{l+=1,o.style.display="none";try{i.style.display="block";const r=await b(d,l);l===u?n.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):(y.innerHTML=await v(r.data.hits),g.refresh(),window.scrollBy({top:m*2,behavior:"smooth"}),o.style.display="block")}catch(r){console.error(r),n.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),o.style.display="none"}finally{i.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
