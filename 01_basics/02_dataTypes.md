# JavaScript Data Types

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:

## Primitive Data Types
1. **String**: Represents a sequence of characters. Example: `"Hello, World!"`
2. **Number**: Represents both integer and floating-point numbers. Example: `42` or `3.14`
3. **Boolean**: Represents logical entities. Can have only two values: `true` or `false`
4. **Undefined**: A variable that has been declared but not assigned a value. Example: `let x;`
5. **Null**: Represents the intentional absence of any object value. Example: `let y = null;`
6. **Symbol**: Represents a unique and immutable value. Example: `let sym = Symbol('foo');`
7. **BigInt**: Represents integers with arbitrary precision. Example: `let bigInt = 1234567890123456789012345678901234567890n;`

## Non-Primitive Data Types
1. **Object**: Represents a collection of properties. Example:
    ```javascript
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    ```

## Type Checking
- Use `typeof` operator to check the type of a variable. Example:
    ```javascript
    typeof "Hello"; // "string"
    typeof 42; // "number"
    typeof true; // "boolean"
    typeof undefined; // "undefined"
    typeof null; // "object" (this is a known bug in JavaScript)
    typeof Symbol('foo'); // "symbol"
    typeof 1234567890123456789012345678901234567890n; // "bigint"
    typeof {}; // "object"
    ```

## Type Conversion
- **Implicit Conversion**: JavaScript automatically converts types when performing operations. Example:
    ```javascript
    let result = '5' + 2; // "52" (string)
    ```
- **Explicit Conversion**: Manually convert types using functions like `String()`, `Number()`, `Boolean()`. Example:
    ```javascript
    let num = Number("5"); // 5 (number)
    ```

Understanding these data types and their behavior is crucial for effective JavaScript programming.