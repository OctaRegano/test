let buttonStart = document.getElementById('start'), //Начать расчет
    budgetValue = document.getElementsByClassName('budget-value')[0], //Доход
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], //Бюджет на 1 день
    levelValue = document.getElementsByClassName('level-value')[0], //Уровень дохода
    expensesValue = document.getElementsByClassName('expenses-value')[0], //Обязательные расходы
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0], //Возможные траты
    incomeValue = document.getElementsByClassName('income-value')[0], //Дополнительный доход
    monthSavingsValue = document.querySelectorAll('.monthsavings-value')[0], //Накопления за 1 месяц
    yearSavingsValue = document.querySelectorAll('.yearsavings-value')[0], //Накопления за 1 год
    expensesItem = document.getElementsByClassName('expenses-item'), //Наименование 1
    expensesButton = document.getElementsByTagName('button')[0], //Утвердить (Обязательные расходы)
    optionalExpensesButton = document.getElementsByTagName('button')[1], //Утвердить (необязательные расходы)
    countButton = document.getElementsByTagName('button')[2], //Рассчитать (Расчет дневного бюджета)
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // необязательные расходы 1
    incomeItem = document.querySelectorAll('.choose-income')[0], //Введите статьи возможного дохода
    checkSavings = document.querySelectorAll('#savings')[0], //Есть ли накопления checkbox
    sumCheckbox = document.querySelectorAll('.choose-sum')[0], //Сумма checlbox
    percentCheckbox = document.querySelectorAll('.choose-percent')[0], //Процент checkbox
    year = document.querySelectorAll('.year-value')[0], //Год
    month = document.querySelectorAll('.month-value')[0], //Месяц
    day = document.querySelectorAll('.day-value')[0]; //День

'use strict'

expensesButton.disabled = true;
optionalExpensesButton.disabled = true;
countButton.disabled = true;

let money, time;

buttonStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате yyyy-mm-dd", '');
    money = +prompt("ваш бюджет за месяц?", '');
    expensesButton.disabled = false;
    countButton.disabled = false;
    optionalExpensesButton.disabled = false;

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("ваш бюджет за месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expensesButton.addEventListener('click', function() {
    
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let
            a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) !==
            null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    appData.sum = sum;
    expensesValue.textContent = sum;

    
});



optionalExpensesButton.addEventListener('click', function() {
    optionalExpensesValue.textContent = '';
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        
        if ((typeof (opt)) === 'string' &&
            typeof (opt) != '' &&
            typeof (opt) != null &&
            opt.length < 50) {
                appData.optionalExpenses[i] = opt;
        } else {
            i--;
        }
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countButton.addEventListener('click', function() {
    if (appData.budget != undefined) {


        appData.moneyPerDay = ((appData.budget - appData.sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (dayBudgetValue.textContent == 'NaN') {
            dayBudgetValue.textContent = "Вы ввели недостаточно данных";
        }

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = "минимальный уровень достатка!";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            levelValue.textContent = "средный уровень достатка!";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "высокий уровень достатка!";
        } else {
            levelValue.textContent = "произошла ошибка!";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    incomeValue.textContent = items.split(', ');
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumCheckbox.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumCheckbox.value,
            percent = +percentCheckbox.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentCheckbox.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumCheckbox.value,
            percent = +percentCheckbox.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});




let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
