let myDate = new Date()
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(myDate.toString())


// let customeDate = new Date (2023,4,15);
let customeDate = new Date ("05-15-2023");
console.log(customeDate.toLocaleDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(customeDate.getTime())
console.log(customeDate.toLocaleString('default',{
    weekday:"short", month:"2-digit"
}))