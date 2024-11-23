// Declaring an object in TypeScript
var person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    std: "mca"
};
console.log(person);
function handlePerson(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("Is Student: ".concat(person.isStudent));
}
handlePerson(person);
