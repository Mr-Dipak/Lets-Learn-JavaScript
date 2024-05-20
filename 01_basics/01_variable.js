const account_Id = 12255;
let accountEmail = "mr.dipaknrathod@gmail.com";
var accountPassword = "12345";
accountCity ="Jaiput";
let accountState;// variable declaration without initialization which print value (undifined)

console.log(`${accountEmail}, ${accountPassword},${accountCity}`);


// const account_Id = 2;//In Const variable value changing is not allowed and also same variable declaration is not allowed


accountEmail = "prop.dipak@gmail.com"; //
var accountPassword = "54321";
accountCity ="Bengluru";

console.log(`${accountEmail}, ${accountPassword},${accountCity}`);
console.table([account_Id, accountEmail, accountPassword, accountCity,accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

