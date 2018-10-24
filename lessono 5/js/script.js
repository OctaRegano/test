

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    menuItemAddLi = document.createElement('li');

menuItemAddLi.classList.add('menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);
menuItemAddLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemAddLi);


document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

 
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';


let adv = document.querySelector('.adv');
adv.remove(adv);

let ask = prompt('Ваше отношение к технике apple?', '');
let PromptX = document.querySelector('#prompt'),
    addP = document.createElement('p');

PromptX.appendChild(addP);
addP.textContent = ask;