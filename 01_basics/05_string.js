let name = "dipak";
const repoCount = 50;


console.log(`hello my name is ${name[1].toUpperCase()} and my repo count is ${repoCount}`)

let user = "dipak ganesh santosh vasant prakhar"

const newString = user.substring(0,5);
// console.log(newString);
const anotherString = user.slice(-10,4);
console.log(anotherString);

console.log(user.__proto__)

let a = "hello";
let b = "world";

let c = a.concat(" ",b);
console.log(c.replace('world','dipak'));

let arrayStr = user.split(' ');

arrayStr.forEach(element => {
    console.log(element.toUpperCase());
    
});


