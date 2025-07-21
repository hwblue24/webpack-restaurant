import './style.css';
import {createHeader, createSummary, createImage} from "./home.js"

import {createMenuHeader, createMenu, createMenuImage} from "./menu.js"

import {createAboutHeader, createAboutInfo, createAboutImg} from "./about.js"

createHeader();
createSummary();
createImage();

document.querySelector(".home").addEventListener("click", function () {
    const content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    createHeader();
    createSummary();
    createImage();
});


document.querySelector(".menu").addEventListener("click", function () {
    const content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    createMenuHeader(); 
    createMenu();
    createMenuImage();
});


document.querySelector(".about").addEventListener("click", function () {
    const content = document.getElementById("content");
    while(content.firstChild) {
        content.removeChild(content.firstChild); 
    }

    createAboutHeader();
    createAboutInfo (); 
    createAboutImg (); 


});
