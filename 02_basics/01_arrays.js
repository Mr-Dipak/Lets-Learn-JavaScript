const myArr = [0,1,2,3,4,5];
const myHeors = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4,5);
// add element
myArr2.push(7) //at end
myArr2.unshift(9) // at beg
console.log(myArr2)
// remove element
myArr2.pop() // at end
myArr2.shift() // beg
console.log(myArr2)

console.log(myArr2.includes(4));
console.log(myArr2.indexOf(4));

const newArr = myArr.join('~')
console.log(newArr,typeof newArr)

// slice, and splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);//extact element without array modification
console.log("B",myn1)
console.log("A",myArr ,"\n");//original array remain same



console.log("A",myArr);
const myn2 = myArr.splice(1,3);//extract element with array modification
console.log("B",myn1)
console.log("A",myArr);//original arrya modified




