const userEmail = []
// console.log(userEmail.length)

if(userEmail){
    console.log("gor user Email");
}
else{
    console.log("don't got user Email");
}

// falsy values

// false, 0, -0 BigInt 0n, null, undefined, NaN

// truthy values
//"0", 'false', " " . [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("empty object")
}

// Nullish Coalescing Operator (??) : null undefiend

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 10
console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaprice  = 100;
iceTeaprice <= 80 ? console.log("Less than 80") : console.log("more than 80")

