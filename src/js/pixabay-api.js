"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';


import { createGallery } from './render-function'


const API_KEY = "46809908-9f97c0ef37b027eaa1f813844";
const loader = document.querySelector('.loader'); 
const gallery = document.querySelector(".gallery-list");
const loadBtn = document.querySelector('.load-btn')

let page;
let lightbox;

export function searchImage() {
    page = 1;


    

    loader.classList.remove('unvisible');
    loadBtn.classList.add('unvisible');

    gallery.innerHTML = "";
    
    zaput()
}

async function zaput() {

        let params = new URLSearchParams({
        key: API_KEY,
        q: `${localStorage.getItem("search")}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
    })
    await axios.get(`https://pixabay.com/api/?${params}`)
        .then(data => {       
            if (data.data.hits.length == 0) {
                loader.classList.add('unvisible');
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'center',
                    color: '#ca0000',
                    messageColor: "white",
                    close: true,
                    timeout: 2000,
                    progressBar: true,
                    iconColor: "white",
                    icon: false,
                    maxWidth: "300"
                });
            }
            else {
                loader.classList.add('unvisible');
                gallery.insertAdjacentHTML("beforeend", createGallery(data.data.hits));

                lightbox = new SimpleLightbox('.gallery-item a', {
                    disableScroll: false,
                    overlayOpacity: 0.9,
                    disableRightClick: true,
                });

                loadBtn.classList.remove('unvisible');
                page++;
            }
        })
        .catch(error => {
                loader.classList.add('unvisible');
            iziToast.error({
                message: `Oooops, error. Please try again!`,
                position: 'center',
                color: '#ca0000',
                messageColor: "white",
                close: true,
                timeout: 2000,
                progressBar: true,
                iconColor: "white",
                icon: false,
                maxWidth: "300"
            })
        })
    lightbox.refresh()

}


loadBtn.addEventListener("click", () => {
    zaput()
})

