'use strict'

let checkList = [
    {
        name: 'stick of butter',
        quantity: 2,
        price: 50
    },
    {
        name: 'bread',
        quantity: 3,
        price: 15
    },
    {
        name: 'sausage',
        quantity: 1,
        price: 70
    },
    {
        name: 'roll of toilet paper',
        quantity: 4,
        price: 6
    },
    {
        name: 'water bottles',
        quantity: 6,
        price: 12
    },
    {
        name: 'bananas',
        quantity: 5,
        price: 6
    },
    {
        name: 'tea package',
        quantity: 2,
        price: 35
    },
    {
        name: 'waffles package',
        quantity: 1,
        price: 20
    },
    {
        name: 'bottle of milk',
        quantity: 2,
        price: 25
    },
    {
        name: 'eggs',
        quantity: 24,
        price: 1.5
    },
]

let $task2Btn1 = document.querySelector('.task2__button--check')
let $task2Btn2 = document.querySelector('.task2__button--sum')
let $task2Btn3 = document.querySelector('.task2__button--expensive')
let $task2Btn4 = document.querySelector('.task2__button--average')
let $task2Result1 = document.querySelector('.task2__result--check')
let $task2Result2 = document.querySelector('.task2__result--sum')
let $task2Result3 = document.querySelector('.task2__result--expensive')
let $task2Result4 = document.querySelector('.task2__result--average')

let showCheck = () => {
    $task2Result1.innerHTML = '<hr>'
    for (let i = 0; i < checkList.length; i++)
        $task2Result1.innerHTML += `<b>name</b>: ${checkList[i].name} <br /><b>quantity</b>: ${checkList[i].quantity} <br /><b>price</b>: ${checkList[i].price} <br /> <br />` + `<hr>`
}

let checkSum = () => {
    let sum = 0
    for (let i = 0; i < checkList.length; i++)
        sum += checkList[i].price * checkList[i].quantity
    $task2Result2.innerHTML = `<span style="font-size: 18px;"><b>Total purchase amount: </b></span>` + sum + ` UAH` + `<hr>`
}

let mostExpensiveInCheck = () => {
    let max = checkList[0].price
    $task2Result3.innerHTML = `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` + checkList[0].name + `--` + max + ` UAH` + `<hr>`
    for (let i = 0; i < checkList.length; i++)
        if (checkList[i].price > max) {
            max = checkList[i].price
            $task2Result3.innerHTML = `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` + checkList[i].name + ` -- ` + max + ` UAH` + `<hr>`
        }
}

let averageCheckPrice = () => {
    let count = 0, sum = 0
    for (let i = 0; i < checkList.length; i++) {
        count += checkList[i].quantity
        sum += checkList[i].price * checkList[i].quantity
    }
    $task2Result4.innerHTML = `<span style="font-size: 18px;"><b>The average price of products in check is: </b></span>` + (sum / count).toFixed(2)
}


$task2Btn1.addEventListener('click', () => showCheck())
$task2Btn2.addEventListener('click', () => checkSum())
$task2Btn3.addEventListener('click', () => mostExpensiveInCheck())
$task2Btn4.addEventListener('click', () => averageCheckPrice())