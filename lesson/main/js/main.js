"use strict";

let money = prompt("ваш бюджет за месяц?"),
    time = prompt("Введите дату в формате yyyy-mm-dd");

console.log(money);
console.log(time);

/*
let moneyX = prompt("Введите обязательную статью расходов в этом месяце");
    moneyY = prompt("Во сколько обойдется");

let AppData = {
    budget: money,
    timeData: time,
    expences: {moneyX : moneyY},
    optionalExpenses:  "x",
    addIncome: ["adddddd"],
    savings: false

};
*/
let yourMoney = 1 * money / 30; 

alert(yourMoney);