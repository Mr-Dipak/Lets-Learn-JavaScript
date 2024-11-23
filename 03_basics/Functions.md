# JavaScript Functions

## Declaring a Function

In JavaScript, you can declare a function using the `function` keyword followed by the name of the function, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces. Here is an example:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

You can also declare functions using function expressions and arrow functions:

### Function Expression

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Arrow Function

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};
```

## Higher-Order Functions

Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. JavaScript has several built-in higher-order functions:

1. `forEach()`
2. `map()`
3. `filter()`
4. `reduce()`
5. `some()`
6. `every()`
7. `find()`
8. `findIndex()`
9. `sort()`
10. `flatMap()`

These functions are commonly used for array manipulation and functional programming in JavaScript.
## Method Definition in Objects

In JavaScript, you can also define functions as methods within objects without using the `function` keyword. Here is an example:

```javascript
const person = {
    name: 'John',
    greet() {
        return `Hello, ${this.name}!`;
    }
};
```

In this example, `greet` is a method of the `person` object.