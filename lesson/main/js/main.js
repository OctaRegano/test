let money = prompt("ваш бюджет за месяц?"),
    time = prompt("Введите дату в формате yyyy-mm-dd");

let AppData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false

}

let q1 = prompt("Введите обязательную статью расходов в этом месяце");
    q2 = prompt("Во сколько обойдется");
    q3 = prompt("Введите обязательную статью расходов в этом месяце");
    q4 = prompt("Во сколько обойдется");

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert(appData.budget / 30);