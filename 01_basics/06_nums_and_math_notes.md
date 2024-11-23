# Numbers and Math in JavaScript

## Numbers
- JavaScript has only one type of number. Numbers can be written with or without decimals.
    ```javascript
    let x = 3.14;    // A number with decimals
    let y = 3;       // A number without decimals
    ```

## Arithmetic Operators
- JavaScript supports the following arithmetic operators:
    - Addition (`+`)
    - Subtraction (`-`)
    - Multiplication (`*`)
    - Division (`/`)
    - Modulus (`%`) - returns the remainder of a division
    - Exponentiation (`**`) - raises the first operand to the power of the second operand

    ```javascript
    let a = 5 + 2;    // Addition
    let b = 5 - 2;    // Subtraction
    let c = 5 * 2;    // Multiplication
    let d = 5 / 2;    // Division
    let e = 5 % 2;    // Modulus
    let f = 5 ** 2;   // Exponentiation
    ```

## Math Object
- JavaScript provides a built-in `Math` object for performing mathematical tasks.
    - `Math.PI` - returns the value of PI
    - `Math.round(x)` - rounds `x` to the nearest integer
    - `Math.ceil(x)` - rounds `x` up to the nearest integer
    - `Math.floor(x)` - rounds `x` down to the nearest integer
    - `Math.sqrt(x)` - returns the square root of `x`
    - `Math.abs(x)` - returns the absolute value of `x`
    - `Math.min(x, y, z, ...)` - returns the lowest value
    - `Math.max(x, y, z, ...)` - returns the highest value
    - `Math.random()` - returns a random number between 0 (inclusive) and 1 (exclusive)

    ```javascript
    let pi = Math.PI;
    let rounded = Math.round(4.7);
    let ceil = Math.ceil(4.4);
    let floor = Math.floor(4.7);
    let sqrt = Math.sqrt(16);
    let abs = Math.abs(-4.7);
    let min = Math.min(0, 150, 30, 20, -8, -200);
    let max = Math.max(0, 150, 30, 20, -8, -200);
    let random = Math.random();
    ```

## Number Methods
- JavaScript also provides several methods for working with numbers:
    - `toString()` - returns a number as a string
    - `toFixed(n)` - formats a number with `n` decimals
    - `toPrecision(n)` - formats a number to `n` length
    - `Number()` - converts a string to a number
    - `parseInt()` - parses a string and returns an integer
    - `parseFloat()` - parses a string and returns a floating-point number

    ```javascript
    let num = 123;
    let str = num.toString();
    let fixed = num.toFixed(2);
    let precision = num.toPrecision(5);
    let number = Number("123");
    let int = parseInt("123.45");
    let float = parseFloat("123.45");
    ```

## Summary
- JavaScript handles numbers and mathematical operations using built-in operators and the `Math` object.
- Various methods are available for converting and formatting numbers.
