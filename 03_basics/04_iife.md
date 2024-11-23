# Immediately Invoked Function Expressions (IIFE)

## What is an IIFE?
An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:
1. The function is defined within parentheses.
2. The function is immediately invoked using another set of parentheses.

### Syntax
```javascript
(function() {
    // Function logic here
})();
```

### Example
```javascript
(function() {
    console.log("This is an IIFE!");
})();
```

## Benefits of IIFE
1. **Avoids Global Namespace Pollution**: Variables and functions inside an IIFE are not accessible from the global scope, reducing the risk of variable name conflicts.
2. **Encapsulation**: Encapsulates code within a local scope, which helps in maintaining modularity and avoiding unintended interactions with other code.
3. **Immediate Execution**: Executes immediately after its creation, which is useful for initialization tasks.
4. **Private Variables**: Allows the creation of private variables that cannot be accessed from outside the function, enhancing data privacy and security.

### Example with Private Variables
```javascript
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1
```

In this example, `privateCounter` is a private variable that cannot be accessed directly from the outside, ensuring that its value can only be changed through the provided methods.
## Resolving Global Namespace Conflicts with IIFE

One of the primary benefits of using an IIFE is to avoid polluting the global namespace. This is particularly useful when integrating multiple scripts that might have variables or functions with the same names.

### Example of Global Namespace Conflict
Without IIFE:
```javascript
var name = "John Doe";

function greet() {
    console.log("Hello, " + name);
}

greet(); // Hello, John Doe

// Another script
var name = "Jane Smith";

greet(); // Hello, Jane Smith (unexpected behavior)
```

In this example, the second script overwrites the `name` variable, causing unexpected behavior in the `greet` function.

### Using IIFE to Avoid Conflict
```javascript
(function() {
    var name = "John Doe";

    function greet() {
        console.log("Hello, " + name);
    }

    greet(); // Hello, John Doe
})();

// Another script
(function() {
    var name = "Jane Smith";

    function greet() {
        console.log("Hello, " + name);
    }

    greet(); // Hello, Jane Smith
})();
```

By wrapping each script in an IIFE, the variables and functions are contained within their own scope, preventing conflicts and ensuring that each script behaves as expected.