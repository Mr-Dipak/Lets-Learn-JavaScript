const marvel_heros = ["thor","IronMan","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const newArr = new Array().concat(dc_heros , marvel_heros);
console.log(newArr)

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

//flat Method
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
let flated_arr = another_arr.flat(Infinity)

console.log(flated_arr);

 console.log(Array.isArray('Dipak'));
 console.log(Array.from('Dipak'));
 console.log(Array.from({
    name: 'dipak'
 }))//gives empty array

 // Convert an array-like object into an array and double each value
const arrayLike = { length: 3, 0: 'one', 1: 'two', 2: 'three' };
const doubledArray = Array.from(arrayLike, item => item + item);
console.log(doubledArray); // Output: ['oneone', 'twotwo', 'threethree']

