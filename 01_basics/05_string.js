// let name = "dipak";
// const repoCount = 50;


// console.log(`hello my name is ${name[1].toUpperCase()} and my repo count is ${repoCount}`)

// let user = "dipak ganesh santosh vasant prakhar"

// const newString = user.substring(0,5);
// // console.log(newString);
// const anotherString = user.slice(-10,4);
// console.log(anotherString);

// console.log(user.__proto__)

// let a = "hello";
// let b = "world";

// let c = a.concat(" ",b);
// console.log(c.replace('world','dipak'));

// let arrayStr = user.split(' ');

// arrayStr.forEach(element => {
//     console.log(element.toUpperCase());
    
// });




/***********************Practice******************* */

// charAt()
let str = "hello";
let str2 = "world";
console.log(str.charAt(0));

//concat()
let word = str.concat(" ",str2);
console.log(word);

//includes()
console.log(word.includes("world"));

//indexOf()
console.log(word.indexOf("w"));

//replace()
console.log(word.replace("world","dipak"));

//splite()

let str3 = "dipak~santosh ganesh prakhar";
let arr = str3.split('~');//split by space and return array
console.log(arr);

//substring()
console.log(str3.substring(str.lengthn-8,str.length-1));

//slice()
console.log(str3.slice(0,5));

// mdn docs : https://developer.mozilla.or g/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
