"use strict"// newer version of js

// alert("hello"); // we are using nodejs, not broweser

let name="dipak";//string
let age=18;//number; 2(53)
let isLoggedIn =false;//boolean

// primitive datatype

//number => 2(53) size
//Bigint
//String
//Boolean
//null => standalone value data type will print object! 
//Undefined => value not assigned yet!
//Symbol=> unique
//Object=> key value pair

//typeof retruns value
//typeof null => object

const isNuLL = null;
console.log(null);

const person = {
    name : "dipak",
    age : 22,
    bio : function(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

person.bio();

const person2 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };



  person2.bio();

  
 


