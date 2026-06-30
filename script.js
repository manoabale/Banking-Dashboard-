const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expensesEl = document.getElementById("expenses");
const savingsEl = document.getElementById("savings");
const transactionsEl = document.getElementById("transactions");

const balance = 1250.75;
const income = 3200.0;
const expenses = 1950.25;
const savings = 800.0;

const transactions = [
  { name: "Salary", date: "28 Jun", type: "Income", amount: 2200 },
  { name: "Groceries", date: "27 Jun", type: "Expense", amount: -65.5 },
];

balanceEl.textContent = balance.toFixed(2);
incomeEl.textContent = income.toFixed(2);
expensesEl.textContent = expenses.toFixed(2);
savingsEl.textContent = savings.toFixed(2);

transactions.forEach((tx) => {
  const row = document.createElement("div");
  row.textContent = `${tx.date} - ${tx.name} (${tx.type}) : £${tx.amount}`;
  transactionsEl.appendChild(row);
});
