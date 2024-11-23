function addTwoNumbers(number1, number2){
    return number1 + number2
};

console.log(addTwoNumbers(10,29));

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username!");
        return;
    }
    return `${username} just logged in`;
};

console.log(loginUserMessage());


function calculateCardPrice(...num){
    let sum=0;
    num.forEach(element => {
        sum +=element;

        
    });
    return sum;

}

console.log(calculateCardPrice(1,1,1,1,1,1,1,1,1,1,1));

function handelObj(anyObj){
        const{name,price} = anyObj;
        return `Username is ${name} and price ${price}`;
}

let result = handelObj({
    name:"dipak",
    price:299
})

console.log(result);

const newArr = ["dipak"]

