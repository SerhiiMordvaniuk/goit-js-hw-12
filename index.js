/* empty css                      */import{a as h,i as l,S as y}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function g(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=g(t);fetch(t.href,r)}})();function v(s){return s.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                <img class="galerry-img" src="${e.webformatURL}" alt="${e.tags}" width="360"/>
                </a>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${e.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${e.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${e.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${e.downloads}</span>
                    </div>
                </div>
            </li>
        `).join("")}const L="46809908-9f97c0ef37b027eaa1f813844",o=document.querySelector(".loader"),p=document.querySelector(".gallery-list"),c=document.querySelector(".load-btn");let n,d;function b(){n=1,o.classList.remove("unvisible"),c.classList.add("unvisible"),p.innerHTML="",f()}async function f(){let s=new URLSearchParams({key:L,q:`${localStorage.getItem("search")}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:n});await h.get(`https://pixabay.com/api/?${s}`).then(e=>{e.data.hits.length==0?(o.classList.add("unvisible"),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})):(o.classList.add("unvisible"),p.insertAdjacentHTML("beforeend",v(e.data.hits)),d=new y(".gallery-item a",{disableScroll:!1,overlayOpacity:.9,disableRightClick:!0}),c.classList.remove("unvisible"),n++)}).catch(e=>{o.classList.add("unvisible"),l.error({message:"Oooops, error. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})}),d.refresh()}c.addEventListener("click",()=>{f()});const m=document.querySelector(".form"),w=document.querySelector(".input");let i=null;document.querySelector(".gallery");m.addEventListener("submit",s=>{s.preventDefault(),localStorage.removeItem("search"),i=w.value,i.trim()===""?l.error({message:"Enter your query",position:"center",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):(localStorage.setItem("search",i),b()),m.reset()});
//# sourceMappingURL=index.js.map
