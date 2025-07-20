
const createMenuHeader = function  () {
    const content = document.querySelector("#content"); 
    const welcomeHeader = document.createElement("h1"); 
    content.appendChild(welcomeHeader)
    welcomeHeader.textContent = "Menu"
    welcomeHeader.style.color = "blue"
}

const createMenu = function  () {
    const content = document.querySelector("#content"); 
    const summary = document.createElement("h3"); 
    content.appendChild(summary)
    summary.textContent = "Pizza ------------- 20$. \nSushi ------------ 50$ \nBurgers----------------20$"
    summary.style.whiteSpace = "pre-line";
}


import pizzaImag from "./pizza.jpg";
const createMenuImage = function () {
    const content = document.querySelector("#content"); 
    const pizza = document.createElement("img"); 
    pizza.src = pizzaImag;
    pizza.style.width = "600px";
    pizza.style.height = "400px";

    content.appendChild(pizza); 

}



export {createMenuHeader, createMenu, createMenuImage}   