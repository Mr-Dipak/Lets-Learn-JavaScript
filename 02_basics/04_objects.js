
// const tinderUserTwo = Object.create(
//     {
//         name: "dipak",
//         age: 22,
//         email: "mr.dipaknrathod@gmail.com"
//     }
// );
// console.log(tinderUser)


const tinderUser = new Object ();
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "dipak"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "dipak@gmail.com",
    fullname: {
        userfullname:{
            firstname:'dipak',
            lastname:'rathod'
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {
    1:'a', 2:"b"
}

const obj2 = {
    3:'a', 4:"b"
}

const obj3 = {...obj1,...obj2}
const obj4 = Object.assign({},obj1,obj3);
console.log(obj3)



console.log(Object.keys(tinderUser),"\n");
console.log(Object.values(tinderUser),"\n");
console.log(Object.entries(tinderUser),"\n");

//array of object

const users = [
    {
        id:1,
        name: "dipak"
    },
    {
        id:1,
        name: "dipak"
    },
    {
        id:1,
        name: "dipak"
    },
    {
        id:1,
        name: "dipak"
    },
    {
        id:1,
        name: "dipak"
    },
]


console.log(users[1].name)

// *********************************************************
// Object Destructring

const {name,id} = tinderUser;
console.log(`name is ${name} and id is ${id}`,"\n");

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: instructor } = course;
console.log(instructor);

console.log(users.hasOwnProperty('name'));




