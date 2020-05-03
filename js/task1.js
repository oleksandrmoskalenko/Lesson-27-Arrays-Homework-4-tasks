'use strict'

let purchaseList = [
    {
        name: 'stick of butter',
        'required amount': 2,
        bought: false
    },
    {
        name: 'bread',
        'required amount': 3,
        bought: true
    },
    {
        name: 'sausage',
        'required amount': 1,
        bought: true
    },
    {
        name: 'roll of toilet paper',
        'required amount': 4,
        bought: true
    },
    {
        name: 'water bottles',
        'required amount': 6,
        bought: false
    },
    {
        name: 'bananas',
        'required amount': 5,
        bought: true
    },
    {
        name: 'tea package',
        'required amount': 2,
        bought: false
    },
    {
        name: 'waffles package',
        'required amount': 1,
        bought: true
    },
    {
        name: 'bottle of milk',
        'required amount': 2,
        bought: true
    },
    {
        name: 'eggs',
        'required amount': 24,
        bought: false
    },
]

let $task1Field1 = document.getElementById('input11')
let $task1Field2 = document.getElementById('input12')
let $task1Field3 = document.getElementById('input13')
let $task1Btn1 = document.querySelector('.task1__button--list')
let $task1Btn2 = document.querySelector('.task1__button--add')
let $task1Btn3 = document.querySelector('.task1__button--purchase')
let $task1Result1 = document.querySelector('.task1__result--list')

let showList = () => {
    let n = purchaseList.length
    $task1Result1.innerText = ''
    for (let i = 0; i < n; i++)
        if (!(purchaseList[i].bought))
            $task1Result1.innerHTML += `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` + `<b>name</b>: ${purchaseList[i].name} <br /><b>required amount</b>: ${purchaseList[i]["required amount"]} <br /><b>bought</b>: ${purchaseList[i].bought} <br /> <br />`
    $task1Result1.innerHTML += `<br /> <br /> <br />`
    for (let i = 0; i < n; i++)
        if (purchaseList[i].bought)
            $task1Result1.innerHTML += `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` + `<b>name</b>: ${purchaseList[i].name} <br /><b>required amount</b>: ${purchaseList[i]["required amount"]} <br /><b>bought</b>: ${purchaseList[i].bought} <br /> <br />`
}

let addToList = (elName, elAmount, elBought) => {
    let count = 0
    for (let i = 0; i < purchaseList.length; i++)
        if (purchaseList[i].name == elName) {
            purchaseList[i]["required amount"] += Number(elAmount)
            count++
        }
    if (count == 0 && (elName != '') && (elAmount != '')) {
        purchaseList.push({
            name: elName,
            'required amount': elAmount,
            bought: Boolean(elBought == 'yes')
        })
    }
    showList()
}

let productPurchase = (product) => {
    for (let i = 0; i < purchaseList.length; i++)
        if (purchaseList[i].name == product)
            purchaseList[i].bought = true
    showList()
}

$task1Btn1.addEventListener('click', () => showList())
$task1Btn2.addEventListener('click', () => addToList($task1Field1.value, $task1Field2.value, $task1Field3.value))
$task1Btn3.addEventListener('click', () => productPurchase($task1Field1.value))