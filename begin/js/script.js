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

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
//     console.log('Все ты!');
// } else {
//     console.log('мы ухходим');
// }
// console.log(hamburger || cola || fries);

// // let johnReport, alexReport, samReport, mariaReport = 'done';

// // console.log(johnReport || alexReport || samReport || mariaReport);

// let num = 50;

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
// function getTimeFromMinutes(time) {
//     if (typeof (time) != 'number' || time < 0 || !Number.isInteger(time)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(time / 60);
//     const min = time % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `это ${hours} ${hoursStr} и ${min} минут`
// }

// console.log(getTimeFromMinutes(180));
// /* найти максимальное число*/
// function findMaxNumber(a,b,c,d) {
//     if (typeof(a) != 'number' || typeof(b) != 'number' ||
//         typeof(c) != 'number' || typeof(d) != 'number') {
//     return 0;
//     } else {
//         return Math.max(a,b,c,d);
//     }
// }
// console.log(findMaxNumber(1,5,6.6,4));

// /* число фибонначи*/

// function numb(num) {
//     if (typeof(num) != 'number' || num < 0 || !Number.isInteger(num)) {
//         return '';
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++){
//         if (i + 1 === num) {
//             result = result + `${first}`;
//         } 
//         else {
//             result = result + `${first} `;
//         }
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }
// console.log(numb(3));


/* обьекты и их разные способы записи*/

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
//     // makeTest: function() {
//     //     console.log("Test"); // метод makeTest такой же метод ка keys
//     // }
// };
//options.makeTest();

// const {border, bg} = options.colors; // деструктуризация обьектов, отдельные переменные
// console.log(border);

// console.log(Object.keys(options).length);
// console.log(options.colors.bg);
// console.log(options["colors"]["bg"]);

// delete options.name;
// console.log(options);
//let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет ${options[key][i]}`);
//             //counter++;
//        }
//     }else {
//         console.log(`Свойство ${key} имеет ${options[key]}`);
//        // counter++;
//     }
    
// }
// console.log(options);
// console.log(counter);/* не выводит точное число обьектов, это из за условий*/


// Массивы 
const arr = [1, 2, 3, 6, 8, 10];
// arr[99] = 0;
// console.log(arr.length); // length возврщает последнее значение массива +1, [0,1,2,3,4] = 5
// console.log(arr);
arr.sort(compareNum); // sort сортирует строки, но с цифрами это делается по другому
console.log(arr);

function compareNum(a, b){
    return a-b;
}
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внитри массива ${arr}`);
// });

// // arr.pop(); // удаляет последнее значение массива
// // arr.push(10); //добавление значение в конец массива
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join(': ')); // Обьяденение элементов массива с промежуточным ;


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
        
//         languages.forEach(function(lang){
//             str += `${lang.toUpperCase()} `;
//         });
//         return str;
//     }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
    
//     for (let key in programmingLangs){
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        
//     }
//     return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

//***************************************************************** */
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    if (arr.length === 0){
        str += 'Семья пуста';
        
    }else {
        str += 'Семья состоит из:';
        
    }
    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })

}
standardizeStrings(favoriteCities);

/*Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке.
 Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

Это очень интересная задача, которую можно решить несколькими способами.
 Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. 
 Как небольшая подсказка, есть метод, который может вам помочь. 
И часть дополнительных вариантов решения мы тоже изучим в течении курса.*/
const someString = 'This is some strange string';

function reverse(str) {
   if (typeof(str) !== 'string'){
    return "ОШибка!";
   }
   return str.split('').reverse().join('');
}
console.log(reverse(someString));

/* Представьте такую реальную ситуацию. У вас есть банкомат, 
который выдает деньги из двух разных банков в разных валютах. 
Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, 
которая принимает два аргумента: первый - это массив со всеми доступными валютами из 
двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту,
 которая сейчас закончилась в банкомате.
  Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
   Функция возвращает строку в нужном виде.

Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков,
 причем сначала baseCurrencies, потом additionalCurrencies по порядку*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i){
        if (curr !== missingCurr){
            str += `${curr}\n`;
        }
    });
    return str;
}
console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY'));
//++++++++++++++++++++++++++++++++++++++++++++++++++++
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 
'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr){
    arr.sort();
    const a = [], b = [], c = [], count = [];

    for (let i = 0; i < arr.length; i++){
        if (i < 3){
            a.push(arr[i]);
        } else if (i < 6){
            b.push(arr[i]);
        }else if (i < 9){
            c.push(arr[i]);
        }else {
            count.push(arr[i]);
        }
    }
    return[a,b,c,`Оставшиеся студенты: ${count.length === 0 ? '-' : count.join(', ')}`];
}
console.log(sortStudentsByGroups(students));