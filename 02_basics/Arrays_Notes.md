# JavaScript Arrays

## Introduction
- Arrays are used to store multiple values in a single variable.
- An array is a special variable, which can hold more than one value at a time.

## Creating an Array
- You can create an array using the `Array` constructor or the array literal syntax.

### Array Literal
```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### Array Constructor
```javascript
let fruits = new Array("Apple", "Banana", "Mango");
```

## Accessing Array Elements
- Array elements are accessed using their index number, starting from 0.

```javascript
let firstFruit = fruits[0]; // "Apple"
```

## Array Properties and Methods
- `length`: Returns the number of elements in an array.
- `push()`: Adds a new element to the end of an array.
- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first element from an array.
- `unshift()`: Adds a new element to the beginning of an array.
- `indexOf()`: Returns the first index at which a given element can be found.
- `splice()`: Adds/Removes elements from an array.
- `slice()`: Returns a shallow copy of a portion of an array.

### Example
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // 3

fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

fruits.shift();
console.log(fruits); // ["Banana", "Mango"]

fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Banana", "Mango"]

let index = fruits.indexOf("Banana");
console.log(index); // 1

fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // ["Strawberry", "Mango"]

let newFruits = fruits.slice(1);
console.log(newFruits); // ["Mango"]
```

## Iterating Over Arrays
- You can use loops to iterate over array elements.

### `for` Loop
```javascript
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### `forEach` Method
```javascript
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

## Conclusion
- Arrays are a fundamental part of JavaScript and are used to store and manipulate collections of data.
- Understanding array methods and properties is essential for effective JavaScript programming.