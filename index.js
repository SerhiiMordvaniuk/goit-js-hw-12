/* empty css                      */import{i as m,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){return o.map(r=>`
            <li class="gallery-item">
                <a href="${r.largeImageURL}">
                <img class="galerry-img" src="${r.webformatURL}" alt="${r.tags}" width="360"/>
                </a>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${r.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${r.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${r.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${r.downloads}</span>
                    </div>
                </div>
            </li>
        `).join("")}const f="46809908-9f97c0ef37b027eaa1f813844",n=document.querySelector(".loader"),c=document.querySelector(".gallery-list");function g(o){const r=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});n.classList.remove("loader-unvisible"),c.innerHTML="",fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(n.classList.add("loader-unvisible"),s.ok)return s.json();throw new Error("error")}).then(s=>{s.hits.length==0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"}),c.innerHTML=d(s.hits),new p(".gallery-item a",{disableScroll:!1,overlayOpacity:.9,disableRightClick:!0})}).catch(s=>console.log(s))}const u=document.querySelector(".form"),h=document.querySelector(".input");let a=null;u.addEventListener("submit",o=>{o.preventDefault(),a=h.value,a.trim()===""?m.error({message:"Enter your query",position:"center",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):g(a),u.reset()});
//# sourceMappingURL=index.js.map
