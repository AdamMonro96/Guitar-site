let newButton = document.querySelector("#newGoodsButton");
let newGoods = document.querySelectorAll("#newGoods .goods-card");
let newHiddenIndicators =[];

for (let i = 0; i < newGoods.length; i++){
    if(newGoods[i].classList.contains("goods-card_hidden"))
    newHiddenIndicators.push(i);
}
newButton.addEventListener('click', function(){
for(let i = 0; i < newHiddenIndicators.length; i++){
    newGoods[newHiddenIndicators[i]].classList.toggle("goods-card_hidden");
}
});

let bestButton = document.querySelector("#bestGoodsButton");
let bestGoods = document.querySelectorAll("#bestGoods .goods-card");
let bestHiddenIndicators =[];

for (let i = 0; i < bestGoods.length; i++){
    if(bestGoods[i].classList.contains("goods-card_hidden"))
    bestHiddenIndicators.push(i);
}
bestButton.addEventListener('click', function(){
for(let i = 0; i < bestHiddenIndicators.length; i++){
    bestGoods[bestHiddenIndicators[i]].classList.toggle("goods-card_hidden");
}
});