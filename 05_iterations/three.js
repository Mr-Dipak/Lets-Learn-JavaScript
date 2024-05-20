//for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const iterator of arr) {
    console.log(iterator);   
}

const greatings = "hello world!"

for (const great of greatings) {
    if(great == " "){
        continue;
    }
    console.log(`Each Char is ${great}`)  
}

//Maps

const contorys = new Map();

contorys.set("IN","India");
contorys.set("USA","United State of America");
contorys.set("Uk","United Kindom");
contorys.set("CH","Chaina");
contorys.set("PK","Pakistan");

for (const [key, value] of contorys) {
    console.log(`Key is ${key} and value is ${value}`)
    
}


const myObj = {
    game1:"NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(`Key is ${key} and value is ${value}`)
    
// }// not execute

console.log(contorys);