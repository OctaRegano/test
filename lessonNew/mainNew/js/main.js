'use strict'

let money, time;


function start() {
        money = +prompt("ваш бюджет за месяц?", '');
        time = prompt("Введите дату в формате yyyy-mm-dd", '');

        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("ваш бюджет за месяц?", '');
        }
}
start();


let appData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true

};



 function chooseExpenses() {
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
    }
}
chooseExpenses(); 


function detectDayBudget(a, b) {
    return(a / b);    
   
}
alert("Бюджет за 1 день: " + detectDayBudget(appData.budget, 30).toFixed());

appData.moneyPerDay = detectDayBudget;

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средный уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("произошла ошибка");
    }
}




/* function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings(); */




function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let
            q = prompt("Введите неоюезательные расходы: ", ''),
            w = prompt("Во сколько обойдется", '');

        if (typeof (q) === 'string' && (typeof (q)) != null && (typeof (w)) != null && q != '' && q != '' && q.length < 50) {
            console.log("done");
            appData.optionalExpenses[q] = w;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();