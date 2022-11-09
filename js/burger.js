let button = document.querySelector(".burger-button");
let burgerPoints = document.querySelectorAll(".burger__point");
let wrapper = document.querySelector(".wrapper");

// Клик на кнопку меню
button.addEventListener("click",menuSlide);
// Клик на враппер
wrapper.addEventListener("click",menuSlide);
// Клик на пункт меню
for (let i = 0; i < burgerPoints.length; i++){
    burgerPoints[i].addEventListener("click",menuSlide);
}

// Функция открытия / закрытия меню
function menuSlide(){
    for(let point of burgerPoints)
    point.classList.toggle("burger__point_slided");
    button.classList.toggle("burger-button_active");
    wrapper.classList.toggle("hidden");
    if(document.body.style.overflow != "hidden")
    document.body.style.overflow = "hidden";
    else
    document.body.style.overflow ='';
}
