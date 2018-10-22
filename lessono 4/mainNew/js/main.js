'use strict'

let money, time;


function start() {
		money = +prompt("ваш бюджет за месяц?", '');
		time = prompt("Введите дату в формате yyyy-mm-dd", '');

		while(isNaN(money) || money == "" || money == null) {
			money = +prompt("ваш бюджет за месяц?", '');
		}
}
//start();


let appData = {
	budget: money,    
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
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
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Бюджет за 1 день: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay <= 100) {
			console.log("минимальный уровень достатка");
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
			console.log("средный уровень достатка");
		} else if (appData.moneyPerDay >= 2000) {
			console.log("высокий уровень достатка");
		} else {
			console.log("произошла ошибка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

			appData.monthIncome = (save / 100 / 12 * percent).toFixed();
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i < 3; i++) {
			let opt = prompt("Статья необязательных расходов?", '');
			appData.optionalExpenses[i] = opt;				
		}
	},
	chooseIncome: function () {
		let i = 1;
		while (i < 2) {			
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
			if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
				appData.income = items.split(', ');
				appData.income.push(prompt('Может что-то еще?', ''));
				appData.income.sort();
				appData.income.forEach(function (item, fff, mass) {
					fff = fff + 1;
					console.log(fff + 'й Способ доп. заработка: ' + item );
				});
				i++;			
			} else {
				i = 1;
			}
		}
	},
	showData: function() {		
		for (const key in appData) {
			console.log(`Наша программа включает в себя данные: ${key}`);
		}
	}
};

