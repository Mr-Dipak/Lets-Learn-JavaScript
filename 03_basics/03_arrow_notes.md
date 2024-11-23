/**
 * This function demonstrates the use of an arrow function.
 * 
 * Arrow functions differ from regular functions in several key ways:
 * 1. Syntax: Arrow functions have a more concise syntax. For example:
 *    - Regular function: `function example() { ... }`
 *    - Arrow function: `const example = () => { ... }`
 * 2. `this` Binding: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context. This means that the value of `this` inside an arrow function is the same as the value of `this` outside the function.
 * 3. `arguments` Object: Arrow functions do not have their own `arguments` object. If you need to access the `arguments` object, you should use a regular function.
 * 4. Constructor: Arrow functions cannot be used as constructors. They do not have a `prototype` property and cannot be used with the `new` keyword.
 * 
 * Lexical Context:
 * In simple terms, the lexical context refers to the scope in which a function is defined. For arrow functions, the `this` value is determined by the surrounding scope at the time the function is created, not when it is called. This makes arrow functions particularly useful for preserving the `this` value in callbacks and event handlers.
 */

| Feature          | Regular Function                          | Arrow Function                          |
|------------------|-------------------------------------------|-----------------------------------------|
| Syntax           | `function example() { ... }`              | `const example = () => { ... }`         |
| `this` Binding   | Own `this` context                        | Inherits `this` from surrounding context|
| `arguments` Object | Has its own `arguments` object          | Does not have its own `arguments` object|
| Constructor      | Can be used as a constructor              | Cannot be used as a constructor         |
| `prototype` Property | Has a `prototype` property            | Does not have a `prototype` property    |