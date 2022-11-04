"use strict";

// console.log(obj.Name);

// let arr = ['apple', 'orange', 9, 'fruit', [], {}];
// console.log(arr[2]);

// const arr = [1, 2, 3];
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };

// arrObj.b = '1234';
// arrObj.w = '564321';

// console.log(arrObj.w);
// console.log(arrObj.b);

// alert('hello');

// const result = confirm('Are you here?');
// console.log(result);
// const answer = +prompt('вам есть 18', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('whats your name', '');
// answers[1] = prompt('whats your female', '');
// answers[2] = prompt('whats your age', '');
// console.log(typeof(answers));

// const category = 'toys';

// console.log(`http://someurl.com/${category}/5`);

// console.log('arr' + ' - object');
// console.log(4 + "5");+

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
    console.log('Все ты!');
} else {
    console.log('мы ухходим');
}
console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i =1;i <8; i++){
//     console.log(num);
//     num++;
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0) {
//     console.log(i);   
//     }
// }
                    //Цыклы
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2; 
// while (i <=16){
//     if (i % 2 ===0){
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;  
// }

// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for (let i = 5; i <= 10; i++){
//     arrayOfNumbers[i-5] = i;
// }
// console.log(arrayOfNumbers);
// // Не трогаем
// return arrayOfNumbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);
// // Не трогаем
// return result;

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// //Пишем решение вот тут
// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }
// console.log(result);
// // Не трогаем
// return result;


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += "-";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// Функциии--------------------
// let num = 20;
// function showFirstMessage(text) {
//     return (text);
//     num = 10;
// }
// showFirstMessage("Hello world");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(3,2));
// console.log(calc(2,8));
// console.log(calc(5,6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);
 
// const usdCurr = 28;
// const eurCurr = 32

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// function sayHello(name) {
//     return `HI!, ${name}`;
// }
// sayHello('Alex');
// const ram = sayHello('alex');
// console.log(ram);

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);

// const number = returnNeighboringNumbers(5);

// console.log(number);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return (num);
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++){
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---` ;
//         }
//      }
//     return str;
// }

// console.log(getMathResult(3,3));

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "hello world";

// console.log(logg.slice(6,11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));
    /* задача: посчитать обьем и площадь куба*/
// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)){
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// console.log(calculateVolumeAndArea(5));
    // /* задача на определение мест в поезде купе*/
// function getCoupeNumber(seatNumber){
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)){
//         return ("Ошибка. Проверьте правильность введенного номера места!");
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return ("Таких мест в вагоне не существует");
//     }
//     return Math.ceil(seatNumber / 4);
// }
// console.log(getCoupeNumber(33));

/* вывести строку приняв минуты и вывести в часах*/
function getTimeFromMinutes(time) {
    if (typeof (time) != 'number' || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(time / 60);
    const min = time % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    return `это ${hours} ${hoursStr} и ${min} минут`
}

console.log(getTimeFromMinutes(180));
/* найти максимальное число*/
function findMaxNumber(a,b,c,d) {
    if (typeof(a) != 'number' || typeof(b) != 'number' ||
        typeof(c) != 'number' || typeof(d) != 'number') {
    return 0;
    } else {
        return Math.max(a,b,c,d);
    }
}
console.log(findMaxNumber(1,5,6.6,4));

/* число фибонначи*/

function numb(num) {
    if (typeof(num) != 'number' || num < 0 || !Number.isInteger(num)) {
        return '';
    }
    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++){
        if (i + 1 === num) {
            result = result + `${first}`;
        } 
        else {
            result = result + `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}
console.log(numb(3));