/**
 * Demonstrates various Math methods in JavaScript.
 * 
 * - Math.floor((Math.random() * 10) + 1): Generates a random integer between 1 and 10.
 * - Math.PI: Returns the value of PI.
 * - Math.round(num): Rounds a number to the nearest integer.
 * - Math.floor(num): Rounds a number down to the nearest integer.
 * - Math.ceil(num): Rounds a number up to the nearest integer.
 * - Math.pow(base, exponent): Returns the base to the exponent power.
 * - Math.sqrt(num): Returns the square root of a number.
 * - Math.abs(num): Returns the absolute value of a number.
 * 
 * Note: Math.random() generates a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
// **********************Maths****************8

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,5,6,4,6))
// console.log(Math.max(4,3,5,6,7,8))


console.log(Math.floor((Math.random()*10)+1));

// let min = 10;
// let max = 20;
// let num;
// while(num != 20){
//     num = Math.floor((Math.random()*(max-min +1)+min))
//     console.log(num)
// }

// console.log(Math.PI);
let PI = Math.PI;
console.log(PI);

let num1 = 4.8;
console.log(Math.round(num1));
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

let num2 = -25;
console.log(Math.pow(num2,2));
console.log(Math.sqrt(num2));
console.log(Math.abs(num2))
let balance = 10.8794;
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));

const hunderds = 1000000;
console.log(hunderds.toLocaleString('en-IN'));

//Math.random()

// let randomNum= (Math.random())*10;
const min = 10; 
const max = 20;
let checkCon =0;
while(checkCon != 20){
    randomNum = Math.floor((Math.random()*(10+1))+min);
    console.log(`Random Numbers: ${randomNum}`);
    checkCon ++;
}
