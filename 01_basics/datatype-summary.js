/*
primitive
7 type : String, Number,Boolean,null,undefined,Symbol,BigInt
*/

let value = String;
let num = Number;
let bool = Boolean;
let nullValue= null;
let undefinedvalue = undefined ;
let bigInt = BigInt(12345);
console.log(typeof(Number(bigInt)),(Number(bigInt)));


/*
reference (Non Primitive)
Arrays, Objects, Functions
*/


function myfunc (){

}

const myfunc1 = function (){

}

const myfunc2 = ()=>{

}

console.log(typeof myfunc2)