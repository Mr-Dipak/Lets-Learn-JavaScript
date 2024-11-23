# JavaScript Execution Context

## What is Execution Context?
Execution context is an abstract concept that holds information about the environment within which the current code is being executed. It can be thought of as a container that stores variables, functions, and the `this` keyword.

## Types of Execution Contexts
1. **Global Execution Context (GEC)**: This is the default context in which the code starts execution. It creates a global object (window in browsers) and sets `this` to point to that global object.
2. **Function Execution Context (FEC)**: Created whenever a function is invoked. Each function has its own execution context.
3. **Eval Execution Context**: Created when the `eval` function is used to execute code.

## Phases of Execution Context

### 1. Creation Phase
During this phase, the JavaScript engine performs the following tasks:
- **Creation of the Variable Object (VO)**: This includes the creation of variables, function declarations, and arguments object.
- **Scope Chain Establishment**: The scope chain is created to manage the scope of variables and functions.
- **Setting the value of `this`**: The value of `this` is determined based on how the function is called.

### 2. Execution Phase
In this phase, the JavaScript engine executes the code line by line. The following tasks are performed:
- **Variable Assignment**: Variables are assigned values.
- **Function Invocation**: Functions are executed.
- **Code Execution**: The actual code is executed.

## Detailed Execution Phases

### Creation Phase in Detail
1. **Memory Execution Context Creation**:
    - Memory is allocated for variables and functions.
    - Variables are initialized with `undefined`.
    - Functions are stored in memory with their definitions.
    - The global object is created.
    - `this` is set to the global object.
    - A global scope chain is created.

2. **Function Execution Context Creation**:
    - The arguments object is created, containing all the arguments passed to the function.
    - The function's scope chain is created, linking to the global scope chain.
    - `this` is set based on how the function is called (e.g., as a method, constructor, etc.).

### Execution Phase in Detail
1. **Global Code Execution**:
    - The JavaScript engine starts executing the global code.
    - Variables and functions are assigned values.

2. **Function Code Execution**:
    - When a function is called, a new execution context is created.
    - The function code is executed within this new context.
    - Upon completion, the function execution context is destroyed, and control returns to the global execution context.

Understanding the execution context and its phases is crucial for debugging and writing efficient JavaScript code.
