"use strict";




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');            
        }
    },
    rememberMyFilms: function() {
        // автоматизировали запросы
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов', '').trim(),
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
        /* создать функию showMyDB, которая будет проверять свойство privat. если стоит в позиции 
false - выводит в консоль объект программы*/
    },
    toogleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
        /* Создать метод toogleVisibleMyDB, который при вызове будет проверять свойство privat.
        если оно False - он переключает его в true, если True - переключает в false. 
        протестировать вместе с showMyDB */
    },
    
    writeYourGenres: function() {
/* создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый фильм под номером ${номер по порядку}", каждый ответ записывается в массиве данных 
genres*/
        for (let i = 1; i <= 3; i++) {
            let genre =  prompt(`Ваш любимый фильм под номером ${i}`).toLowerCase( );

/*В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую 
строку.
Если он это сделал - возращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком ввиде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
            if (genre === '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели вообще');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }            
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
};

