"use strict";
// //8
// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);
// const user = "Ivan";
// alert(`Привет, ${user}`);

//9

// const numberOfFilms = +prompt('скільки фільмів ви вже переглянули', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     generes: {},
//     privat: false
// };
// const a = prompt('Один із переглянутих фільмів', ''),
//         b = prompt('Як ви його оціните', ''),
//         c = prompt('Один із останніх переглянутих фільмів', ''),
//         d = prompt('Як ви його оціните', ''); 

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if(4==9){
//     console.log("ok");
// }else{
//     console.log("er");
// }

// const numb = 50;
//  (numb === 50) ? console.log("ok") : console.log("er");

//  //swich
//  const numbSwich = 50;

//  switch (numbSwich){
//     case 49: 
//         console.log("er");
//         break;
//     case 51: 
//         console.log("er");
//         break;
//     case 100: 
//         console.log("er");
//         break;
//     default:
//         console.log("not to you");
//         break;
//  }

// cycle
let numb1 = 50;
let numb2 = 70;
let numb3 = 50;
//first examle
    while(numb1 < 55){
        console.log(numb1);
        numb1++;
    }
//second examle
    do {
        console.log(numb2);
        numb2++;
    }
    while(numb2 < 75)

//third examle 
for (let i = 1; i < 10; i++){
    if (i===6){
        break;//break cycle
    }
    console.log(numb3);
}

for (let i = 1; i < 10; i++){
    if (i===6){
        continue;//break cycle only i===6 and continue
    }
    console.log(numb3);
}