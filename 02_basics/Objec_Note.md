# JavaScript Object Class

The `Object` class in JavaScript is a global object that provides a range of methods to work with objects. It is the parent class of all JavaScript objects and provides methods to manipulate and interact with object properties.

## Common Methods of the Object Class

### 1. `Object.create()`
Creates a new object with the specified prototype object and properties.

```javascript
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true;

me.printIntroduction();
// Output: My name is Matthew. Am I human? true
```

### 2. `Object.assign()`
Copies the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Output: { a: 1, b: 4, c: 5 }
```

### 3. `Object.keys()`
Returns an array of a given object's own enumerable property names.

```javascript
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// Output: ["a", "b", "c"]
```

### 4. `Object.values()`
Returns an array of a given object's own enumerable property values.

```javascript
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));
// Output: ["somestring", 42, false]
```

### 5. `Object.entries()`
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```javascript
const object1 = {
    a: 'somestring',
    b: 42
};

console.log(Object.entries(object1));
// Output: [["a", "somestring"], ["b", 42]]
```

### 6. `Object.freeze()`
Freezes an object: other code cannot delete or change any properties.

```javascript
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33; // This will not change the property
console.log(obj.prop);
// Output: 42
```

### 7. `Object.seal()`
Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.

```javascript
const object1 = {
    property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Output: 33

delete object1.property1; // This will not delete the property
console.log(object1.property1);
// Output: 33
```

### 8. `Object.getPrototypeOf()`
Returns the prototype (i.e., the value of the internal `[[Prototype]]` property) of the specified object.

```javascript
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Output: true
```

### 9. `Object.setPrototypeOf()`
Sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.

```javascript
const prototype1 = {};
const object1 = {};

Object.setPrototypeOf(object1, prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1);
// Output: true
```

### 10. `Object.is()`
Determines whether two values are the same value.

```javascript
console.log(Object.is('foo', 'foo'));
// Output: true

console.log(Object.is(window, window));
// Output: true

console.log(Object.is('foo', 'bar'));
// Output: false

console.log(Object.is([], []));
// Output: false
```

These methods provide powerful tools for working with objects in JavaScript, allowing for a wide range of operations and manipulations.