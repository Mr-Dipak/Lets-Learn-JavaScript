# JavaScript Notes

## Scope
Scope determines the accessibility of variables, objects, and functions in different parts of the code.

### Types of Scope
1. **Global Scope**: Variables declared outside any function have global scope and can be accessed from anywhere in the code.
2. **Local Scope**: Variables declared within a function have local scope and can only be accessed within that function.

## Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (global or local).

### Key Points
- Only declarations are hoisted, not initializations.
- `var` declarations are hoisted to the top of their scope.
- `let` and `const` declarations are hoisted but not initialized.

## Closure
A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

### Example
```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }
    
    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: 'I am outside!'
```

## Lexical Scoping
Lexical scoping means that the accessibility of variables is determined by the position of the variables within the nested function scopes.

### Key Points
- Inner functions have access to variables declared in their outer scope.
- Lexical scoping is also known as static scoping.

### Example
```javascript
function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    
    displayName();
}

init(); // Logs: 'Mozilla'
```