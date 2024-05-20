// Objects


let mySym = Symbol('key1')
const user = {
    name: 'Dipak',
    'full name' : 'dipak rathod',
    [mySym] : 'mykey1',
    age: 18,
    location: 'chhatrapati Sambhajinagar',
    email : 'mr.dipaknrathod@gmail.com',
    isLoggedIn : false,
    lastLoginDays: ['Monday','saturday']

}

console.log(user.email);
console.log(user['full name']);
console.log(user[mySym]);

user.email = 'dipak@gmail.com';
console.log(user)
// Object.freeze(user);
user.email = 'dipakrathod@gmail.com';

user.greatings = function(){
    console.log("hello world");
}

user.greatingsTwo = function(){
    console.log(`Hello ${this.name} your wellecome`);
}

user.greatings();
user.greatingsTwo();