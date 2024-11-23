// function with spread operator

const sum = (...nums) => {
    let sum  = 0;
    nums.forEach((num)=>{
        sum += num;
    });
    return sum;
};

let nums = [1,2,3,4,5,6,7,[8,9]];

console.log(sum(...nums.flat(Infinity)));

console.log(...nums);


function greeting(){
    let variable = 'hello';
    return this;
}

console.log(greeting());



let numbers = [1,2,3,4,5,6,7,8,9,10];

let doubled = numbers.map((num)=>{
    return num *2
});


console.log(doubled);

let greeting2 = 'hello world';

let greetingTransfored = (greeting2,index) => {
    let upperCase = greeting2[index].toUpperCase() + greeting2.slice(index+1);
    return upperCase;
}

console.log(greetingTransfored(greeting2,7));

//reverese string

const str = 'hello';
let reverseString = (str) => {
    return str.split('').reverse().join('');
    
}

console.log(reverseString(str));

console.log(this);

(function fun1(){
    console.log(this);
})();