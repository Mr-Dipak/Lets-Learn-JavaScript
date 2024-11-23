# JavaScript Iteration Techniques and Higher-Order Loops

## Iteration Techniques

### `for` Loop
The `for` loop is the most common way to iterate over a sequence of values. It consists of three parts: initialization, condition, and increment.

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### `while` Loop
The `while` loop continues to execute as long as the specified condition is true.

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### `do...while` Loop
The `do...while` loop is similar to the `while` loop, but it guarantees that the loop body is executed at least once.

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

## Higher-Order Loops

### `forEach`
The `forEach` method executes a provided function once for each array element.

```javascript
const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element);
});
```

### `map`
The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.map(element => element * 2);
console.log(newArray); // [2, 4, 6, 8, 10]
```

### `filter`
The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element > 2);
console.log(filteredArray); // [3, 4, 5]
```

### `reduce`
The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
```

### `some`
The `some` method tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some(element => element % 2 === 0);
console.log(hasEvenNumber); // true
```

### `every`
The `every` method tests whether all elements in the array pass the test implemented by the provided function.

```javascript
const array = [1, 2, 3, 4, 5];
const allEvenNumbers = array.every(element => element % 2 === 0);
console.log(allEvenNumbers); // false
```

### `find`
The `find` method returns the value of the first element in the array that satisfies the provided testing function.

```javascript
const array = [1, 2, 3, 4, 5];
const foundElement = array.find(element => element > 3);
console.log(foundElement); // 4
```

### `findIndex`
The `findIndex` method returns the index of the first element in the array that satisfies the provided testing function.

```javascript
const array = [1, 2, 3, 4, 5];
const foundIndex = array.findIndex(element => element > 3);
console.log(foundIndex); // 3
```
