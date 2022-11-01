"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');            
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




// let i = 0;

// while (i < 2) {
//     const a = prompt('Один их последних фильмов', ''),
//           b = prompt('На сколько оцените его', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

function rememberMyFilms() {
    // автоматизировали запросы
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его', '');
    /* сделать так чтобы пользователь не смог оставить ответ в виде пустой стори
    отменить ответ или ввести название фильма длинее, чем 50 символов. если это
    происходит возвращаем пользователя в вопросам опять. */
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;

        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    /* при помощи условий проверить personalMovieDB.count, и если он меньше 10 -
вывести сообщение "просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический 
зритель", а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();
/* создать функию showMyDB, которая будет проверять свойство privat. если стоит в позиции 
false - выводит в консоль объект программы*/
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
/* создать функ writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый филь под номером ${номер по порядку}", каждый ответ записывается в массиве данных 
genres*/
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый филь под номером ${i}`);
        }
    } 
}

writeYourGenres();

/* попробовать переписать цикл еще двумя способами*/
