// const user = {
//     username: "dipak",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }

// };

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username= "dipak";
//     console.log(this.username)
// }
// chai();

// const chai = function(){
//     let username= "dipak";
//     console.log(this)

// }
// chai();

// const chai =()=>{
//     let username= "dipak";
//     console.log(this)//output empty object
//     console.log(this.username)//undefined

// }
// chai();

// explicitly return

//  const addTwo = (num1, num2)=>{
//     return num1 + num2;//explicitly return

//  }
// console.log( addTwo(2,4));

//Implicitly return


//  const addTwo = (num1, num2)=>num1 + num2 //implicit return
//  const addTwo = (num1, num2)=>( num1 + num2 )//implicit return


// Object return
 const addTwo = ()=>({
    username: "dipak"
 })//implicit return

console.log( addTwo());

const sayHi=()=>{
   const hi = "hi"
   console.log(this.hi);
}

sayHi();

const person = {
   name: "dipak",
   callSayHello (){
      const sayHi = ()=>{
         console.log(`Hello ${this.name}`);
      };
      sayHi();
   }
}
person.callSayHello();

const student = {
   name: "dipak",
   callSayHello (){
      console.log(this.name);
   }
}
student.callSayHello();

function checkArgs(){
   // console.log(arguments.length);
   return arrowCheckArgs = ()=>{
      console.log();
   }
   
}

const arrowFunction = checkArgs('hello',1);
arrowFunction();


const arr = [1,2,3,5];