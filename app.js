let amountArry = [];
let budget = [];

function createNew() {
  const expense = function (item, payment, date, amount) {
    this.item = item;
    this.payment = payment;
    this.date = date;
    this.amount = amount;
  };
  /////////////
  const payMethod = document.querySelector(".payment-type").value;
  const item = document.querySelector("#name").value;
  const date1 = document.querySelector("#date").value;
  const amount = document.querySelector("#amount").value;
  const firstRow = document.querySelector("table");
  const newExpense = new expense(item, payMethod, date1, amount);
  const newRow = document.createElement("tr");
  const newDateT = document.createElement("td");
  const newItemT = document.createElement("td");
  const newAmountT = document.createElement("td");
  const newPaymentM = document.createElement("td");
  const newEdit = document.createElement("td");
  newEdit.className = "edit";
  const totalSpent = document.querySelector(".amspent_num");
  //////////
  newDateT.innerHTML = newExpense.date;
  newItemT.innerHTML = newExpense.item;
  newAmountT.innerHTML = "£ " + parseFloat(newExpense.amount).toFixed(2);
  newPaymentM.innerHTML = newExpense.payment;
  //newEdit.innerHTML =
  /////////////

  firstRow.append(newRow);
  newRow.append(newDateT, newItemT, newAmountT, newPaymentM, newEdit);
  console.log(newExpense);
  ///////////

  amountArry.push(parseFloat(newExpense.amount));
  let total = amountArry.reduce((accum, curretval) => {
    return accum + curretval;
  });
  totalSpent.innerHTML = "£ " + total.toFixed(2);
}
const btn = document.querySelector("#button");
btn.addEventListener("click", createNew);

function remove() {
  console.log(this.newExpense);
}
