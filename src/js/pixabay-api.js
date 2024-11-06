"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';


import { createGallery } from './render-function'


const API_KEY = "46809908-9f97c0ef37b027eaa1f813844";
const loader = document.querySelector('.loader'); 
const gallery = document.querySelector(".gallery-list")



export function searchImage(search) {

    const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
    })

    loader.classList.remove('loader-unvisible');
    gallery.innerHTML = "";

    fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            loader.classList.add('loader-unvisible');
            if (!response.ok) {
            throw new Error("error")
            }
            else {
                return response.json()
            }
        })
        .then(data => {
            if (data.hits.length == 0) {
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
            gallery.innerHTML = createGallery(data.hits)
            
            let lightbox = new SimpleLightbox('.gallery-item a', {
                disableScroll: false,
                overlayOpacity: 0.9,
                disableRightClick: true,
            });
        })
        .catch(error => console.log(error))
    }
