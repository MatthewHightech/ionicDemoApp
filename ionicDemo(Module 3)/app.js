const reason = document.querySelector('#reason'); 
const amount = document.querySelector('#amount'); 

const confirm = document.querySelector('#confirm'); 
const cancel = document.querySelector('#cancel');

const expensesList = document.querySelector('#expenses-list');
const total = document.querySelector('#total');

let totalExpense = 0;

const clear = () => {
    reason.value = "";
    amount.value = ""; 
}; 

confirm.addEventListener('click', () => {
    const enteredReason = reason.value;
    const enteredAmount = amount.value;
    
    if (enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0) {
            return; 
        }
    const newItem = document.createElement('ion-item'); 
    newItem.textContent = enteredReason + ': $' + enteredAmount; 

    expensesList.appendChild(newItem); 

    totalExpense += +enteredAmount;
    total.textContent = totalExpense; 
    clear(); 
}); 

cancel.addEventListener('click', () => clear); 