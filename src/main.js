"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImage } from './js/pixabay-api'

const form = document.querySelector(".form");
const input = document.querySelector(".input");
let search = null;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    search = input.value
    if (search.trim() === "") {
        iziToast.error({
                message: 'Enter your query',
                position: 'center',
                color: '#ca0000',
                messageColor: "white",
                close: false,
                timeout: 1000,
                progressBar: false,
                iconColor: "white",
                con: false,
            });
    }
    else {
        searchImage(search)
    }
    form.reset()
});

