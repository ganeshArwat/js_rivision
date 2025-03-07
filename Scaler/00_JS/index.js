// -------- Var Let Const ---------- //
// -------- Shadowing ---------- //
// -------- Hoisting ---------- //
// -------- Shallow Copy -------- //
// -------- Deep Copy -------- //
// -------- Spread Operator (only level 1 deep copy) -------- //
// -------- Rest Operator -------- //
// -------- Call By Values / Call By Reference -------- //
// -------- This, Bind, Apply, Bind -------- //
// -------- Polyfills of Call, Apply, Bind -------- //
// -------- How to create complete deep copy -------- //
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

// -------- Closure -------- //

// -------- lexical scope -------- //

// -------- Curry Function -------- //

// -------- Async Program -------- //

// -------- Call Back - Callback Hell - Inversion of Control -------- //

// -------- Promises - Chaining promises -  -------- //
// Promises
// Then
// Catch
// Finally

// Chaining promises
// Promise.all
// Promise.race

// -------- Promises and Micro Task Queue -------- //
/*
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
*/

// -------- Promises Chaining and imp Polyfills -------- //

/*
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

*/


