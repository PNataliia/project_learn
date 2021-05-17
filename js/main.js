"use strict";
// //8
// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);
// const user = "Ivan";
// alert(`Привет, ${user}`);

//9

const numberOfFilms = +prompt('скільки фільмів ви вже переглянули', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: {},
    privat: false
};
const a = prompt('Один із переглянутих фільмів', ''),
        b = prompt('Як ви його оціните', ''),
        c = prompt('Один із останніх переглянутих фільмів', ''),
        d = prompt('Як ви його оціните', ''); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);