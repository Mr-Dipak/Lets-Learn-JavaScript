// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn:true,
//     getUserDetails: function(){
//         console.log(this.username);
//         console.log(this);

//     }
// }//Object literal

// console.log(user.getUserDetails());

// *************************************Constructor function******************************

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`hello ${this.username}`);
    }
    // return this; // implictly return this function 
}

const userOne = new User('dipak',12, true); // constructor function called using This keyword and crete new instance
const userTwo = new User('chaiAurCode',11,false);
console.log(userOne.constructor);
console.log(userTwo instanceof User);



