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
for (let i = 0; i < 2; i++){
    const a = prompt('Один із переглянутих фільмів', ''),
        b = prompt('Як ви його оціните', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;//restart cycle
        }
        
}
if (personalMovieDB.count < 10){
    console.log('few movies');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('more movies');
}else if (ersonalMovieDB.count >= 30){
    console.log('melomaniac');
}else{
    console.log('error'); 
}









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

// // cycle
// let numb1 = 50;
// let numb2 = 70;
// let numb3 = 50;
// //first examle
//     while(numb1 < 55){
//         console.log(numb1);
//         numb1++;
//     }
// //second examle
//     do {
//         console.log(numb2);
//         numb2++;
//     }
//     while(numb2 < 75)

// //third examle 
// for (let i = 1; i < 10; i++){
//     if (i===6){
//         break;//break cycle
//     }
//     console.log(numb3);
// }

// for (let i = 1; i < 10; i++){
//     if (i===6){
//         continue;//break cycle only i===6 and continue
//     }
//     console.log(numb3);
// }