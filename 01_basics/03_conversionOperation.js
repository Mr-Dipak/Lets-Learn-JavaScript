
// ***********************Operation***************************

// let value = 100;
// postFixValue = value ++;
// console.log(postFixValue + value);

/*******************Conversion****************** */

//implicit conversion

let result = '10'+2; //string, imp + operator act as assigment operator for string
console.log(result);

let sum = '5' -2;//number. imp - operator act as arithmatic operator for number
console.log(sum);

let sub = '5' - '2';//number. imp - operator act as arithmatic operator for number
console.log(typeof sub, sub);

/*******************Explicit Conversion****************** */

// string conversion

let num =123;
let str = String(num);    //constructor
let str1 = num.toString();     //method


// Number Conversion

let strNum = '123';
let numCon1 = Number(strNum);    //constructor
let numCon2 = parseInt(strNum);   //method
let floatStr ='123.45';
let numCon3 = parseFloat(floatStr);   //method

/*******************NaN****************** */
let NaN = undefined; 
let NaNCon = parseInt(NaN);// undefined, '12hh', 0/0 is not a number but it's type is number
console.log(typeof NaNCon, NaNCon);
if(Number.isNaN(NaNCon)){
    console.log('Not a number');
}else{
    console.log('Number');
}

// "33" => 33
// "33abc" => NaN
// true => 1; false=>0
// undefined => NaN
// null => 0

// Boolean Conversion

let booleanStr = '123';
let bool = Boolean(booleanStr);    //constructor
let bool2 = !!booleanStr;    //method
console.log(`Boolean Conversion: 1) ${bool} 2)${bool2}`);

// Truthy and Falsy values

// Falsy values: 0, '', null, undefined, NaN
// Truthy values: other than falsy values
