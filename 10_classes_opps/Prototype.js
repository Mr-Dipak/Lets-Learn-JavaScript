let myName = "dipak     ";

console.log(myName.trim().length)
String.prototype.trueLenght = (value)=>{
    return value.trim();
}

let myHeros = ["thor",'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh are present in all object`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh say's hello`);
}
// heroPower.hitesh();
myHeros.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();

/**************************Inheritance********************** */

const User = {
    name: 'dipak',
    email: "dipak@google.com"
}

const Teacher = {
    makeVideo:true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport  = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);
console.log(TASupport);


