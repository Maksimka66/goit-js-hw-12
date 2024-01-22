import{S as b,i as n,a as w}from"./assets/vendor-eacb4d5c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),c=document.querySelector(".gallery"),y=document.querySelector(".loader"),a=document.querySelector(".load"),u=new b(".gallery a",{captionDelay:250,captionsData:"alt"});let p=1,g=40;async function h(r,s){const o=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,per_page:g,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=await w.get(`https://pixabay.com/api/?${o}`);if(i.data.hits.length===0){n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}return i}function m(r){return r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:l,comments:f,downloads:v})=>`<li class="gallery-item">
    <a  href="${i}">
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
    <p>${t}</p>
    </div>
    <div class="description">
    <p class="info">Views:</p>
    <p>${l}</p>
    </div>
    <div class="description">
    <p class="info">Comments:</p>
    <p>${f}</p>
    </div>
    <div class="description">
    <p class="info">Downloads:</p>
    <p>${v}</p>
    </div>
    </div>
    </li>`).join("")}d.addEventListener("submit",async r=>{r.preventDefault(),p=1,c.innerHTML="";const s=r.currentTarget.elements.delay.value.trim();if(y.style.display="block",s===""){n.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),c.innerHTML="",y.style.display="none",a.style.display="none";return}try{const o=await h(s,p);if(o.data.hits.length===0)n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const i=await m(o.data.hits);c.innerHTML=i,u.refresh(),a.style.display="block"}}catch(o){console.error(o),n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none"}finally{y.style.display="none",r.target.reset()}});a.addEventListener("click",async()=>{try{p+=1;const r=d.elements.delay.value.trim();a.style.display="none";const s=await h(r,p),o=Math.ceil(s.data.totalHits/g);if(p>=o)n.info({title:"Info!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{const i=await m(s.data.hits);c.innerHTML+=i,u.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),a.style.display="block"}}catch(r){console.error(r),n.error({title:"Error!",message:"Sorry, there was an error processing your request. Please try again!",position:"topRight"}),a.style.display="none"}finally{y.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
