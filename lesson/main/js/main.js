'use strict'
let money = +prompt("ваш бюджет за месяц?"),
    time = prompt("Введите дату в формате yyyy-mm-dd");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false

};




for (let i = 0; i < 4; i++) {
    let
        x = prompt("Введите обязательную статью расходов в этом месяце", ''),
        y = prompt("Во сколько обойдется", '');

    if (typeof (x) === 'string' && (typeof (x)) != null && (typeof (y)) != null && x != '' && y != '' && x.length < 50) {
        console.log("done");
        appData.expenses[x] = y;
    } else {
        i--;
    }
};




/*
let i = 0;
    
 do {
    let x = prompt("Введите обязательную статью расходов в этом месяце", ''),
        y = prompt("Во сколько обойдется", '');
    if (typeof (x) === 'string' && (typeof (x)) != null && (typeof (y)) != null
        && x != '' && y != '' && x.length < 50) {
        console.log("done");
        appData.expenses[x] = y;
        i++;
    } else {
        i = 0;
    }
    
} while (i < 4); */ //done



/*
let i = 0;
while (i < 3) {
        let x = prompt("Введите обязательную статью расходов в этом месяце", ''),
            y = prompt("Во сколько обойдется", '');
        if (typeof (x) === 'string' && (typeof (x)) != null && (typeof (y)) != null && x != '' && y != '' && x.length < 50) {
            console.log("done!");
            appData.expenses[x] = y;
            i++;
            } else {
               i = 0; 
            }
}; */





appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средный уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("произошла ошибка");
}