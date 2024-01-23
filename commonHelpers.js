import{S,i as y,a as P}from"./assets/vendor-eacb4d5c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".form"),a=document.querySelector(".gallery"),s=document.querySelector(".loader"),i=document.querySelector(".load"),g=new S(".gallery a",{captionDelay:250,captionsData:"alt"});let d=1,m=40,p,h,q;async function f(n,t){const o=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:n,per_page:m,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return await P.get(`https://pixabay.com/api/?${o}`)}function b(n){return n.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:c,comments:w,downloads:L})=>`<li class="gallery-item">
    <a  href="${l}">
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
    <p>${r}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${c}</p>
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
    </li>`).join("")}function v(){d<h?i.style.display="block":(i.style.display="none",y.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}u.addEventListener("submit",async n=>{if(n.preventDefault(),a.innerHTML="",s.style.display="block",i.style.display="none",p=u.elements.delay.value.trim(),d=1,p===""){i.style.display="none",a.innerHTML="",s.style.display="none",y.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"});return}try{s.style.display="block",a.innerHTML="",a.insertAdjacentElement("beforebegin",s);const{data:{hits:t,totalHits:o}}=await f(p,d);if(t.length===0){s.style.display="none",i.style.display="none",y.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}else a.innerHTML=b(t),g.refresh(),v(),s.style.display="none",h=Math.ceil(o/m),q=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height}catch(t){console.error(t),y.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.style.display="none"}finally{s.style.display="none",n.target.reset()}});i.addEventListener("click",async n=>{d+=1,i.style.display="none";try{s.style.display="block",a.insertAdjacentElement("afterend",s);const t=await f(p,d);v();const o=await b(t.data.hits);a.innerHTML+=o,g.refresh();const l=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"})}catch(t){console.error(t),y.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),i.style.display="none"}finally{s.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
