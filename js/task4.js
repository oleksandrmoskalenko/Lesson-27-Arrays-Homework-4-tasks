'use strict'

let auditorium = [
    {
        name: 'A101',
        seats: 12,
        department: 'mathematics'
    }, {
        name: 'A102',
        seats: 16,
        department: 'mathematics'
    }, {
        name: 'A103',
        seats: 10,
        department: 'mathematics'
    }, {
        name: 'A104',
        seats: 16,
        department: 'mathematics'
    }, {
        name: 'A105',
        seats: 20,
        department: 'mathematics'
    }, {
        name: 'A106',
        seats: 16,
        department: 'mathematics'
    }, {
        name: 'A107',
        seats: 10,
        department: 'mathematics'
    }, {
        name: 'A108',
        seats: 12,
        department: 'mathematics'
    }, {
        name: 'A109',
        seats: 16,
        department: 'mathematics'
    }, {
        name: 'A110',
        seats: 20,
        department: 'mathematics'
    }, {
        name: 'A201',
        seats: 17,
        department: 'philology'
    }, {
        name: 'A202',
        seats: 19,
        department: 'philology'
    }, {
        name: 'A203',
        seats: 14,
        department: 'philology'
    }, {
        name: 'A204',
        seats: 17,
        department: 'philology'
    }, {
        name: 'A205',
        seats: 13,
        department: 'philology'
    }, {
        name: 'A206',
        seats: 19,
        department: 'philology'
    }, {
        name: 'A207',
        seats: 19,
        department: 'philology'
    }, {
        name: 'A208',
        seats: 13,
        department: 'philology'
    }, {
        name: 'A209',
        seats: 14,
        department: 'philology'
    }, {
        name: 'A210',
        seats: 13,
        department: 'philology'
    }, {
        name: 'A301',
        seats: 16,
        department: 'history'
    }, {
        name: 'A302',
        seats: 20,
        department: 'history'
    }, {
        name: 'A303',
        seats: 15,
        department: 'history'
    }, {
        name: 'A304',
        seats: 8,
        department: 'history'
    }, {
        name: 'A305',
        seats: 12,
        department: 'history'
    }, {
        name: 'A306',
        seats: 12,
        department: 'history'
    }, {
        name: 'A307',
        seats: 8,
        department: 'history'
    }, {
        name: 'A308',
        seats: 15,
        department: 'history'
    }, {
        name: 'A309',
        seats: 20,
        department: 'history'
    }, {
        name: 'A310',
        seats: 16,
        department: 'history'
    }
]

let $Task4Button1 = document.querySelector('.task4__button--show')
let $Task4Button2 = document.querySelector('.task4__button--department')
let $Task4Button3 = document.querySelector('.task4__button--group')
let $Task4Button4 = document.querySelector('.task4__button--sort-seats')
let $Task4Button5 = document.querySelector('.task4__button--sort-name')

let $task4Result1 = document.querySelector('.task4__result--show')
let $task4Result2 = document.querySelector('.task4__result--department')
let $task4Result3 = document.querySelector('.task4__result--group')

let $Task4Field2 = document.getElementById('input42')
let $Task4Field31 = document.getElementById('input431')
let $Task4Field32 = document.getElementById('input432')
let $Task4Field33 = document.getElementById('input433')

let box = [1, 5, 7, 13, 16, 3, 4, 23, 56, 2, 0, 84]


let showAuditorium = () => {
    $task4Result1.innerText = ""
    for (let i = 0; i < auditorium.length; i++)
        $task4Result1.innerHTML += `<b>name</b>: ${auditorium[i].name} <br /><b>seats</b>: ${auditorium[i].seats} <br /><b>department</b>: ${auditorium[i].department} <br /> <br />`
}

let departmentAuditories = (department) => {
    $task4Result2.innerText = ""
    for (let i = 0; i < auditorium.length; i++)
        if (auditorium[i].department == department)
            $task4Result2.innerHTML += `<b>name</b>: ${auditorium[i].name} <br /><b>seats</b>: ${auditorium[i].seats} <br /><b>department</b>: ${auditorium[i].department} <br /> <br />`
}

let exactAuditories = (name, seats, department) => {
    $task4Result3.innerText = ""
    for (let i = 0; i < auditorium.length; i++)
        if (auditorium[i].name == name && auditorium[i].seats == seats && auditorium[i].department == department)
            $task4Result3.innerHTML += `<b>name</b>: ${auditorium[i].name} <br /><b>seats</b>: ${auditorium[i].seats} <br /><b>department</b>: ${auditorium[i].department} <br /> <br />`
}

$Task4Button1.addEventListener('click', () => showAuditorium())
$Task4Button2.addEventListener('click', () => departmentAuditories($Task4Field2.value))
$Task4Button3.addEventListener('click', () => exactAuditories($Task4Field31.value, $Task4Field32.value, $Task4Field33.value))



let quickSortSeats = (arr, left, right) => {
    let l = left, r = right;
    let tmp;
    let p = arr[Math.floor((left + right) / 2)].seats;
    while (l <= r) {
        while (arr[l].seats < p) l++;
        while (arr[r].seats > p) r--;
        if (l <= r) {
            tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++; r--;
        }
    };
    if (left < r) quickSortSeats(arr, left, r);
    if (l < right) quickSortSeats(arr, l, right);
}

let quickSortName = (arr, left, right) => {
    let l = left, r = right;
    let tmp;
    let p = arr[Math.floor((left + right) / 2)].name;
    while (l <= r) {
        while (arr[l].name < p) l++;
        while (arr[r].name > p) r--;
        if (l <= r) {
            tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++; r--;
        }
    };
    if (left < r) quickSortName(arr, left, r);
    if (l < right) quickSortName(arr, l, right);
}

$Task4Button4.addEventListener('click', () => {
    quickSortSeats(auditorium, 0, auditorium.length - 1)
})

$Task4Button5.addEventListener('click', () => {
    quickSortName(auditorium, 0, auditorium.length - 1)
})