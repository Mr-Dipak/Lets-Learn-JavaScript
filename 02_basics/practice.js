// array declaration

// 1. Declare a variable named `fruits` and assign an array containing 3 fruits to it.
let fruits = ['apple', 'banana', 'cherry'];
let fruits2 = new Array('apple', 'banana', 'cherry');

let newFruits = fruits.splice(0, 2, 'orange');
console.log(fruits);
console.log(newFruits);

let newFruits2 = fruits2.slice(0, 2);
console.log(fruits2);
console.log(newFruits2);


// join
let str = fruits.join(', ');
console.log(typeof str);

//**************concat*****************8 */
let marval_heroes = ['ironman', 'captain america', 'thor'];
let dc_heroes = ['batman', 'superman', 'wonderwoman'];

let superHeroes = marval_heroes.concat(dc_heroes);


let count = 1;
superHeroes.forEach(hero => {
    
    console.log(count++,` ${hero}`);
});

//**************spread operator***************** */
let allHeroes = [...marval_heroes, ...dc_heroes];
console.log(allHeroes);


//flat()

let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray);


//********************Array******************** */

let students = {
    name: 'dipak',
    age: 21,
    email: 'mr.dipaknrathod'
}

let studentArray = Object.entries(students);
console.log(studentArray);



/**************objects********************** */

//symbol
let mySym = Symbol('123')

const jsUser = {
    name: 'dipak',
    age: 21,
    email: 'mr.dipaknrathod@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'saturday'],
    [mySym]: 'mykey1'
}

console.log(typeof jsUser[mySym]);
console.log(jsUser.email);
Object.freeze(jsUser);
jsUser.email = 'official.dipak@gmail.com';

let target = {a: 1, b: 2};
let source = {b: 3, c: 4};

const returnedTarget = Object.assign(target,source);
console.log(returnedTarget);

let user = {
    name: 'dipak',
    age: 21,
    email: "dipak@google.com"
}
user.city = 'kannad';
console.log(user);
user.education = "MCA";
user.age=23;

user.greeting = function(){
    console.log(`${this.name} says hello`);
};

user.greeting();

//hasOwnProperty

console.log(user.hasOwnProperty('name'));

const {name,age,email} = user;

console.log(name,age,email);

