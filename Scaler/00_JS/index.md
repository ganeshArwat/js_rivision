# Primitives and Non Primitives

1. Primitives

- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol

2. Non Primitives

- Object
- Array
- Function

# Array

## Why are Arrays Objects in JavaScript?

JavaScript arrays are a special kind of object where:

- Keys (indexes) are **numeric** (`0`, `1`, `2`, ...).
- Arrays have special properties like `.length` and built-in methods (`push`, `pop`, etc.).
- Internally, they inherit from `Array.prototype`, which in turn inherits from `Object.prototype`.
- To check for an array, always use Array.isArray() instead of typeof.

## [Important: why typeof null is object?]

- It is a bug in js which they can't change now, reason is binary code of null is zero and
- zero treated as a object.

# Components of Code Execution, Code Execution, Execution Context

# Var, Let, and Const

# Shadowing

# Hoisting

# Scopes in js

1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope

# Shallow Copy

# Deep Copy

# Spread Operator (only level 1 deep copy)

# Rest Operator

# Call By Values / Call By Reference

# This, Bind, Apply, Bind

# Polyfills of Call, Apply, Bind

# How to create complete deep copy

```js
// Solution 1
let obj = {
  name: "John",
  age: 30,
  address: {
    local: "22 Alaknanda",
    city: "Dehradun",
    state: "UK",
  },
};

let objstring = JSON.stringify(obj);
let objcopy = JSON.parse(objstring);

// Solution 2
let obj1 = {
  name: "John",
  age: 30,
  address: {
    local: "22 Alaknanda",
    city: "Dehradun",
    state: "UK",
  },
};

function superCloneEffective(input) {
  // Base case or edge cases.
  if (typeof input !== "object") {
    return input;
  }

  // Create a new container on the basis of type whether it is a array or object.
  if (Array.isArray(input)) {
    let objcopy = [];
  } else {
    let objcopy = {};
  }

  // Copy all the key and values.
  for (let key in input) {
    objcopy[key] = superCloneEffective(input[key]);
  }

  // return object after completion.
  return objcopy;
}

let obj1copy = superCloneEffective(obj1);
```

# Closure

# lexical scope

# Curry Function

# Async Program

# Call Back - Callback Hell - Inversion of Control

# Promises - Chaining promises -

// Promises
// Then
// Catch
// Finally

// Chaining promises
// Promise.all
// Promise.race

# Promises and Micro Task Queue

race condition
execution of code
Call Stack (1) synchronous execution
Micro Task Queue (2) Promises

    Callback Queue (3) setTimeout, setInterval, I/O operations
    UI-Rendering (3) DOM, Web API Stack

    Web API Stack (4) DOM, Web API Stack
    Event Loop (5) Event Loop

Q. What is component in js code execution
Q. queueMicrotask()
it means it not add initially F it add the F after execution of E but D is initially add in the Queue
Q why we have separate animation queue

IIFE - Immediately Invoked Function Expression
(fn)() or (fn)()

what is bottle nack time in js
grpc and trpc

# Promises Chaining and imp Polyfills

Errors

1. SyntaxError
   These occur when there is a mistake in the syntax of the code, preventing execution.
2. ReferenceError
   These occur when trying to access a variable that is not defined.
3. TypeError
   These occur when a value is not of the expected type.
4. RangeError
   These occur when a value is out of the allowed range.
5. URI Errors
   These occur when using invalid parameters in URI-related functions (decodeURI, encodeURI).
6. Eval Errors (Deprecated)
   These used to occur when using the eval() function incorrectly but are no longer thrown in modern JavaScript.

Error Handling

1. try-catching
2. throw
3. finally
4. Error Object
5. Custom Error
6. Error Propagation
7. Error Stack
8. Error Handling Patterns
9. Error Handling Best Practices

promise.all
example

promise.any
promise.race
real life example
