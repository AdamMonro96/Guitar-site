"use strict";

let buttons = document.querySelectorAll('.customer-buttons__button');
let texts = document.querySelectorAll('.customer-quote__text');
let mainImage = document.querySelector(".customer-img__photo");
let customerName = document.querySelector(".customer-quote__name");
let images = ["img/customers/1.png", "img/customers/2.png", "img/customers/3.png", "img/customers/4.png"];
let names = ["Ryan Wels", "Adam Levin", "Jack Holland", "Max Mid"];

console.log(buttons);

for (let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click",function(){
let activeButton = document.querySelector(".customer-buttons__button_active");
activeButton.classList.remove("customer-buttons__button_active");
buttons[i].classList.add("customer-buttons__button_active");

for(let j = 0; j<texts.length;j++){
if (i != j){
    texts[j].style.left = 900 + "px";
    texts[i].style.left = 0 + "px";
}
}
mainImage.src = images[i];
customerName.textContent = names[i];
});
}
