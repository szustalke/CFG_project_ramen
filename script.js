"use strict";
// variables

const gyoza = document.querySelector(".gyoza");
const eggs = document.querySelector(".eggs");
const yakitori = document.querySelector(".yakitori");
const kimchi = document.querySelector(".kimchi");

const jasmine = document.querySelector(".jasmine");
const bubble = document.querySelector(".bubble");
const sake = document.querySelector(".sake");
const umeshu = document.querySelector(".umeshu");

const chicken = document.querySelector(".broth-chicken");
const beef = document.querySelector(".broth-beef");
const vegan = document.querySelector(".broth-vegan");

const wheat = document.querySelector(".noodles-wheat");
const chuffy = document.querySelector(".noodles-chuffy");
const potato = document.querySelector(".noodles-potato");

const extraEgg = document.querySelector(".extra-egg");
const nori = document.querySelector(".extra-nori");
const ginger = document.querySelector(".extra-ginger");
const shitake = document.querySelector(".extra-shitake");
const wakame = document.querySelector(".extra-wakame");
const tofu = document.querySelector(".extra-tofu");

// ammend prices here if you want:

let priceGyoza1 = 5;
let priceEggs1 = 3.5;
let priceYakitori1 = 5.5;
let priceKimchi1 = 3.5;

let priceJasmine1 = 3;
let priceBubble1 = 4.5;
let priceSake1 = 6;
let priceUmeshu1 = 5.5;

let priceChicken1 = 11.5;
let priceBeef1 = 12.5;
let priceVegan1 = 10.5;

let priceWheat1 = 0;
let priceChuffy1 = 0;
let pricePotato1 = 0;

let priceExtraEgg1 = 1;
let priceNori1 = 1;
let priceGinger1 = 1;
let priceShitake1 = 1;
let priceWakame1 = 1;
let priceTofu1 = 1;

// STARTERS
const priceGyoza = document.querySelector(".price-gyoza");
priceGyoza.textContent = priceGyoza1;

const priceEggs = document.querySelector(".price-eggs");
priceEggs.textContent = priceEggs1;

const priceYakitori = document.querySelector(".price-yakitori");
priceYakitori.textContent = priceYakitori1;

const priceKimchi = document.querySelector(".price-kimchi");
priceKimchi.textContent = priceKimchi1;

// DRINKS

const priceJasmine = document.querySelector(".price-jasmine");
priceJasmine.textContent = priceJasmine1;

const priceBubble = document.querySelector(".price-bubble");
priceBubble.textContent = priceBubble1;

const priceSake = document.querySelector(".price-sake");
priceSake.textContent = priceSake1;

const priceUmeshu = document.querySelector(".price-umeshu");
priceUmeshu.textContent = priceUmeshu1;

// RAMEN

const priceChicken = document.querySelector(".price-broth-chicken");
priceChicken.textContent = priceChicken1;

const priceBeef = document.querySelector(".price-broth-beef");
priceBeef.textContent = priceBeef1;

const priceVegan = document.querySelector(".price-broth-vegan");
priceVegan.textContent = priceVegan1;
//

const priceWheat = document.querySelector(".price-wheat");
priceWheat.textContent = priceWheat1;

const priceChuffy = document.querySelector(".price-chuffy");
priceChuffy.textContent = priceChuffy1;

const pricePotato = document.querySelector(".price-potato");
pricePotato.textContent = pricePotato1;
//

const priceExtraEgg = document.querySelector(".price-extra-egg");
priceExtraEgg.textContent = priceExtraEgg1;

const priceNori = document.querySelector(".price-extra-nori");
priceNori.textContent = priceNori1;

const priceGinger = document.querySelector(".price-extra-ginger");
priceGinger.textContent = priceGinger1;
//

const priceShitake = document.querySelector(".price-extra-shitake");
priceShitake.textContent = priceShitake1;

const priceWakame = document.querySelector(".price-extra-wakame");
priceWakame.textContent = priceWakame1;

const priceTofu = document.querySelector(".price-extra-tofu");
priceTofu.textContent = priceTofu1;

// other variables

const orderUl = document.querySelector(".order-ul");
let totalValue = document.querySelector(".total-value");

let newValue = 0;

const addBtn = document.querySelector(".add-btn");

// functions

// function that adds the new item to the order list

const orderNewItem = function (addItem, price) {
  // displaying an ordered item on the list (new li)
  let newItem = document.createElement("li");
  newItem.textContent = addItem.textContent;
  orderUl.appendChild(newItem);
  // increasing value of total
  newValue = newValue + price;
  totalValue.textContent = newValue;
};

// STARTERS
document.querySelector(".plus-gyoza").addEventListener("click", function () {
  orderNewItem(gyoza, priceGyoza1);
});

document.querySelector(".plus-eggs").addEventListener("click", function () {
  orderNewItem(eggs, priceEggs1);
});
document.querySelector(".plus-yakitori").addEventListener("click", function () {
  orderNewItem(yakitori, priceYakitori1);
});
document.querySelector(".plus-kimchi").addEventListener("click", function () {
  orderNewItem(kimchi, priceKimchi1);
});

// DRINKS
document.querySelector(".plus-jasmine").addEventListener("click", function () {
  orderNewItem(jasmine, priceJasmine1);
});
document.querySelector(".plus-bubble").addEventListener("click", function () {
  orderNewItem(bubble, priceBubble1);
});
document.querySelector(".plus-sake").addEventListener("click", function () {
  orderNewItem(sake, priceSake1);
});
document.querySelector(".plus-umeshu").addEventListener("click", function () {
  orderNewItem(umeshu, priceUmeshu1);
});

// RAMEN
// ramen-base

document.querySelector(".plus-chicken").addEventListener("click", function () {
  orderNewItem(chicken, priceChicken1);
});

document.querySelector(".plus-beef").addEventListener("click", function () {
  orderNewItem(beef, priceBeef1);
});
document.querySelector(".plus-vegan").addEventListener("click", function () {
  orderNewItem(vegan, priceVegan1);
});

// ramen- noodles
document.querySelector(".plus-wheat").addEventListener("click", function () {
  orderNewItem(wheat, priceWheat1);
});

document.querySelector(".plus-chuffy").addEventListener("click", function () {
  orderNewItem(chuffy, priceChuffy1);
});
document.querySelector(".plus-potato").addEventListener("click", function () {
  orderNewItem(potato, pricePotato1);
});

//ramen-extras1
document
  .querySelector(".plus-extra-egg")
  .addEventListener("click", function () {
    orderNewItem(extraEgg, priceExtraEgg1);
  });

document.querySelector(".plus-nori").addEventListener("click", function () {
  orderNewItem(nori, priceNori1);
});
document.querySelector(".plus-ginger").addEventListener("click", function () {
  orderNewItem(ginger, priceGinger1);
});
// ramen-extras2
document.querySelector(".plus-shitake").addEventListener("click", function () {
  orderNewItem(shitake, priceShitake1);
});

document.querySelector(".plus-wakame").addEventListener("click", function () {
  orderNewItem(wakame, priceWakame1);
});
document.querySelector(".plus-tofu").addEventListener("click", function () {
  orderNewItem(tofu, priceTofu1);
});

// calculates new value of Total
totalValue.textContent = newValue;
