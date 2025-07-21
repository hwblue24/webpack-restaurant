const createAboutHeader = function () {
    const content = document.querySelector("#content"); 
    const header = document.createElement('h1'); 
    content.appendChild(header);
    header.textContent = "About ME"
    header.style.color = "orange"
}

const createAboutInfo = function () {
    const content = document.querySelector("#content"); 
    const about = document.createElement("h2")
    content.appendChild(about); 
    about.textContent = "Born and raised on good food. \nI have perfected the art of design. \nI eat and make a lot of dishes yum."
    about.style.whiteSpace = "pre-line";
}

import aboutImg from "./about.jpg"

const createAboutImg = function () {
    const content = document.querySelector("#content");
    const about = document.createElement("img");
    about.src = aboutImg;
    about.style.width = "400px"; 
    about.style.height = "300px";
    content.appendChild(about); 

}


export {createAboutHeader, createAboutInfo, createAboutImg}