// "use strict";
//  //22
//  let a = 5,
//     b = a;

//     b = b + 5;

    
//     console.log(b);
//     console.log(a);

//     const obj = {
//         a: 5,
//         b: 1
//     };

//     // const copy =  obj;//link(ссилка)
    
//     // copy.a = 10;

//     // console.log(copy);
//     // console.log(obj)

//     function copy(mainObj){
//         let objCopy = {};
//         let key;
//         for(key in mainObj){
//             objCopy[key] = mainObj[key];
//         }

//         return objCopy;
//     }

//     const numbers = {
//         a: 2,
//         b: 5,
//         c: {
//             x: 7,
//             y: 4
//         }
//     }

//     const newNumbers = copy(numbers);//clone object
//     newNumbers.a = 10;
//     newNumbers.c.x = 10; //обєкт в обєкті не копіюється. поверхневе копіювання обєктів


//     const add = {
//         d: 17,
//         e: 20
//     }

//     const clone = (Object.assign(numbers, add));

//     clone.d = 20;

//     console.log(add);
//     console.log(clone);

//      const oldArray = ['a', 'b', 'c'];
//      const newArray = oldArray.slice();

//      newArray[1] = 'sdgsdg';
//     console.log(oldArray);
//     console.log(newArray);

//     //ES6 ES8

//     //spread orator
//     const video = ['youtube', 'vimeo', 'rutube'],
//           blogs = ['wordpress', 'livejournal', 'blogger'],
//           internet = [...video, ...blogs, 'vk', 'instagram'];

//     console.log(internet);

//     const array = ['a', 'b'];

//     const newAaray = [...array];

//     const q = {
//         one: 1,
//         two: 2
//     }

//     const newObj = {...q};

// //45 video
// function selectUser(name, id){
//     this.name = name; // побирангня кожного окркмого користувача
//     this.id = id; // побирангня кожного окрeмого id користувача
//     this.human = true; // значенні загальне для всіх користувачів
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// // виколристовуємо функцію конструктор "selectUser()" 
// //для вписування параметрів

// const ivan = new selectUser('Ivan', 28);
// const alex = new selectUser('Alex', 30);

// // ivan.hello();
// // alex.hello();


// console.log(ivan, "lsdfgb", alex);

// //51 
// const persone = {
//     name: 'Alex',
//     tel: '+348 500 500 500',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// //глубоке клонування обєкту 
// const clone = JSON.parse(JSON.stringify(persone))


//52
