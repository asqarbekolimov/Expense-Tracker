const balance = document.querySelector('#balance'),
    moneyPlus = document.querySelector('#money-plus'),
    moneyMinus = document.querySelector('#money-minus'),
    list = document.querySelector('#list'),
    form = document.querySelector('#form'),
    text = document.querySelector('#text'),
    amount = document.querySelector('#amount')

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
]

let transactions = dummyTransactions


function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+'

    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn">x</button>
    `

    list.appendChild(item)
}

function init() {
    list.innerHTML = ''

    transactions.forEach(addTransactionDOM)
}

init()