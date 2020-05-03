'use strict'

let tagStyles = [
    {
        name: 'color',
        value: 'red'
    }, {
        name: 'font-size',
        value: '20px'
    }, {
        name: 'text-align',
        value: 'center'
    }, {
        name: 'text-decoration',
        value: 'underline'
    }, {
        name: 'text-transform',
        value: 'uppercase'
    }, {
        name: 'letter-spacing',
        value: '2px'
    }, {
        name: 'line-height',
        value: '40px'
    }, {
        name: 'padding-left',
        value: '50px'
    }, {
        name: 'margin-top',
        value: '30px'
    }, {
        name: 'width',
        value: '400px'
    }
]

let textStyle = (arr, text) => {
    let styles = ''
    for (let i = 0; i < arr.length; i++) styles += arr[i].name + ':' + arr[i].value + '; '
    document.write(`<p style="${styles}">${text}</p>`)
}

let $task3Btn = document.querySelector('.task3__button--text')
let $task3Field = document.getElementById('input3')
let $task3Result = document.querySelector('.task3__result--text')

$task3Btn.addEventListener('click', () => textStyle(tagStyles, $task3Field.value))