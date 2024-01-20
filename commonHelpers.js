import{S as p,i as u,a as f}from"./assets/vendor-eacb4d5c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader"),y=new p(".gallery a",{captionDelay:250,captionsData:"alt"});async function g(o){await f.get("https://pixabay.com/api/").then(i=>{console.log(i)});let r=hits.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:c,downloads:d})=>`<li class="gallery-item">
      <a  href="${n}">
        <img 
          class="gallery-image"
          src="${i}"
          alt="${e}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${t}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${s}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${c}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${d}</p>
        </div>
        </div>
      </li>`).join("");a.style.display="none",l.innerHTML=r,y.refresh()}m.addEventListener("submit",o=>{if(o.preventDefault(),l.innerHTML="",o.currentTarget.elements.delay.value.trim()===""){u.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),l.innerHTML="";return}a.style.display="block",g()});
//# sourceMappingURL=commonHelpers.js.map
