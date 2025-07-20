
const createHeader = function  () {
    const content = document.querySelector("#content"); 
    const welcomeHeader = document.createElement("h1"); 
    content.appendChild(welcomeHeader)
    welcomeHeader.textContent = "Welcome to Zamin"
    welcomeHeader.style.color = "green"
}

const createSummary = function  () {
    const content = document.querySelector("#content"); 
    const summary = document.createElement("h3"); 
    content.appendChild(summary)
    summary.textContent = "Welcome to the greatest restaurant on Earth. \nIf you want relentless satisfaction that cannot be matched then come into our establishment. \nWe have cuisine from around the globe. Everything is perfect!!"
    summary.style.whiteSpace = "pre-line";
}


import restaurantImag from "./resto.jpg";
const createImage = function () {
    const content = document.querySelector("#content"); 
    const imageResto = document.createElement("img"); 
    imageResto.src = restaurantImag;
    imageResto.style.width = "600px";
    imageResto.style.height = "400px";

    content.appendChild(imageResto); 

}



export {createHeader, createSummary, createImage}   