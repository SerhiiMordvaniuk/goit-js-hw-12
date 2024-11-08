/* empty css                      */import{i,a as y,S as v}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function h(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=h(t);fetch(t.href,s)}})();function b(r){return r.map(e=>`
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
        `).join("")}const L="46809908-9f97c0ef37b027eaa1f813844",a=document.querySelector(".loader"),p=document.querySelector(".gallery-list"),l=document.querySelector(".load-btn");let o=1,g,u;function w(){o=30,a.classList.remove("unvisible"),l.classList.add("unvisible"),p.innerHTML="",f()}async function f(){let r=new URLSearchParams({key:L,q:`${localStorage.getItem("search")}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o});await y.get(`https://pixabay.com/api/?${r}`).then(e=>{u=Math.round(e.data.totalHits/15),e.data.hits.length==0?(a.classList.add("unvisible"),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})):(a.classList.add("unvisible"),p.insertAdjacentHTML("beforeend",b(e.data.hits)),l.classList.remove("unvisible"))}).catch(e=>{a.classList.add("unvisible"),console.log(e),i.error({message:"Oooops, error. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})}),g=new v(".gallery-item a",{disableScroll:!1,overlayOpacity:.9,disableRightClick:!0})}l.addEventListener("click",async()=>{o++,console.log(o),console.log(u),await g.refresh(),await f(),o>u&&(l.classList.add("unvisible"),i.error({message:"We're sorry, but you've reached the end of search results.",position:"center",color:"green",messageColor:"black",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})});const m=document.querySelector(".form"),S=document.querySelector(".input");let n=null;document.querySelector(".gallery");m.addEventListener("submit",r=>{r.preventDefault(),localStorage.removeItem("search"),n=S.value,n.trim()===""?i.error({message:"Enter your query",position:"center",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):(localStorage.setItem("search",n),w()),m.reset()});
//# sourceMappingURL=index.js.map
