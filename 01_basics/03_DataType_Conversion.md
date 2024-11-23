# JavaScript Data Type Conversion

JavaScript provides various ways to convert data from one type to another. This is known as type conversion or type coercion.

## Types of Conversion

1. **Implicit Conversion (Type Coercion)**
    - JavaScript automatically converts data types when necessary.
    - Example:
      ```javascript
      let result = '5' + 2; // '52' (string)
      let sum = '5' - 2; // 3 (number)
      ```

2. **Explicit Conversion**
    - Manually converting data types using built-in methods.

### String Conversion
- Convert other data types to a string using `String()` or `.toString()`.
  ```javascript
  let num = 123;
  let str = String(num); // "123"
  let str2 = num.toString(); // "123"
  ```

### Number Conversion
- Convert other data types to a number using `Number()`, `parseInt()`, or `parseFloat()`.
  ```javascript
  let str = "123";
  let num = Number(str); // 123
  let num2 = parseInt(str); // 123
  let floatStr = "123.45";
  let num3 = parseFloat(floatStr); // 123.45
  ```

### Boolean Conversion
- Convert other data types to a boolean using `Boolean()`.
  ```javascript
  let str = "hello";
  let bool = Boolean(str); // true
  let zero = 0;
  let bool2 = Boolean(zero); // false
  ```

## Truthy and Falsy Values
- **Falsy Values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- **Truthy Values**: All values that are not falsy.

### Examples
```javascript
Boolean(""); // false
Boolean("hello"); // true
Boolean(0); // false
Boolean(123); // true
```

Understanding data type conversion is crucial for writing robust JavaScript code. It helps in avoiding unexpected results and bugs.
