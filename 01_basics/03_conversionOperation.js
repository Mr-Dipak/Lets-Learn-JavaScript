let score = undefined;
console.log(typeof score);

let valueInNumber = Number (score);
console.log(typeof(valueInNumber));
console.log((valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; false=>0
// undefined => NaN
// null => 0

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// null => false
// undefined => false

// ***********************Operation***************************

let value = 100;
postFixValue = value ++;
console.log(postFixValue + value);

