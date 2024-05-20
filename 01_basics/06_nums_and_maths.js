// **********************Maths****************8

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,5,6,4,6))
// console.log(Math.max(4,3,5,6,7,8))


console.log(Math.floor((Math.random()*10)+1));

let min = 10;
let max = 20;
let num;
while(num != 20){
    num = Math.floor((Math.random()*(max-min +1)+min))
    console.log(num)
}
