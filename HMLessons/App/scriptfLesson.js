"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
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

console.log(personalMovieDB);

/* попробовать переписать цикл еще двумя способами*/
