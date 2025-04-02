// ------------------------------- ## INHARITANCE RECAP ## -------------------------------

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

// Way 1: Old traditional way.
const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // console.log(sum);
  return sum;
};

// console.log("Sum of arr1: ", sum(arr1));
// console.log("Sum of arr2: ", sum(arr2));

// Way 2: Bad way.
// console.log("type of array is: ", typeof arr1);
// console.log(arr1);

// arr1.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();

/************* parent ************/
Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  console.log(sum);
};

// usecase of this and prototype
arr1.sum();
arr2.sum();
console.log(arr1);

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## SPREAD REST DEFAULT ## -------------------------------

// Statement 1 ---------------------------------------------------------------
/**
 * default parameter
 * **/

// function fn(param1, param2, param3 = "Suraj Suri") {
//     console.log("Hi params are: ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello");

// Statement 2 ---------------------------------------------------------------
/**
 * spread operator : copies value,ref from on array to another for only first level
 *
 * */

//Statement 1:  assignment operator -> reference remain
// let arr = [1, 2, 3, 4, 5];

// // arr2 and arr has the same ref
// let arr2 = arr;    // Shallow copy
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// // arr2 = 300;
// console.log("actual array", arr); // actual array [ 1, 2, 200, 4, 100 ]
// console.log("modified array", arr2); // modified array [ 1, 2, 200, 4, 100 ]

//Statement 2 ----------------------------------------------
// let arr = [1, 2, [3, 4], 5, 6];
// // [value,value,ref,value,value]

// // // spread copies value  from one array another array for the first level
// let arr2 = [...arr];    // partial deep copy till level 1.
// arr2.pop();
// arr2.push(100);
// arr2[2][0] = 500;
// // arr2 = 300;
// console.log("actual array", arr); // actual array [ 1, 2, [ 500, 4 ], 5, 6 ]
// console.log("modified array", arr2); // modified array [ 1, 2, [ 500, 4 ], 5, 100 ]

// Statement 3 ---------------------------------------------------------------

// let a = 10;
// //copied value -> primitive types
// let b = a;    // Deep copy not shallow copy

// let arr=[1,2,3,4];
// you get the ref
// let arr2=arr;   // shallow copy

// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]

// let arr2 = [...arr];   // partial deep copy or I say actual copy of array.

/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params .
 * ***/

function fn(param1, ...param2) {
  console.log(" params are ", param1);
  console.log("Rest paramateres", param2);
}

// spread : means iterate the value, rest means : gathers elements into an array
fn("Hi", "Hello");
fn("Hi", "Hello", "manisha", "Suraj", "Umang", "Ganesh", "Priyank");

let arr = [10, 20, 30, 40];
console.log("Spread: ", ...arr);

// ...(...arr) == arr

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## CALL BY VALUE AND REFERENCE ## -------------------------------

// statement 1 ----------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// arr2 = 10;
// console.log(arr);
// console.log(arr2);

// statement 2 ----------------------------------------------------
// call by reference.
// function modifier(a, b) {
//   console.log("13", a, b);
//   a[0] = 10;
//   b[1] = 20;
//   console.log("16", a, b);
// }

// // Call By value.
// function modifier2([...a], [...b]) {
//   console.log("13", a, b); // 13 [ 4, 7, 9 ] [ 3, 6, 8 ]
//   a[0] = 10;
//   b[1] = 20;
//   console.log("16", a, b); // 16 [ 10, 7, 9 ] [ 3, 20, 8 ]
// }

// let p = [4, 7, 9];
// let q = [3, 6, 8];

// console.log("20", p, q); // 20 [ 4, 7, 9 ] [ 3, 6, 8 ]
// modifier2(p, q);
// console.log("23", p, q); // 23 [ 4, 7, 9 ] [ 3, 6, 8 ]

// ([...a], [...b]) → The spread operator ([...]) creates a shallow copy of both arrays.
// a and b inside the function are new arrays (not references to arr1 and arr2).
// Modifying a or b inside the function does NOT affect the original arrays (arr1 and arr2).

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## CALL BIND APPLY ## -------------------------------

// why use case of bind , apply , call -> borrow features
let cap = {
  name: "Steve",
  team: "Cap",

  petersTeam: function (mem1, mem2) {
    console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and I belong to ${this.team}'s team with members  ${mem1} and ${mem2}`);
  },
};

let ironMan = {
  name: "Tony",
  team: "Iron Man",
};

// Basic example.
// cap.petersTeam("Umang", "Manisha");
// ironMan.petersTeam("Umang", "Manisha");

/****
 *
 * Call: borrow the method only once with defined number of param use petersTeam method -> only once
 * **/
// cap.petersTeam.call(ironMan, "Umang", "Manisha");

/****
 *
 * Apply: borrow the method only once with n no number of param
 * **/
// let memberssArray = ["thor", "loki", "Rajneesh", "Manisha", "Suraj", "Priyank", "Umang"];
// let memberssArray = ["thor", "loki"];  // Max size of array allowed is 2 because of 2 argument.
// cap.petersTeam.apply(ironMan, memberssArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

const boundFn = cap.petersTeam.bind(ironMan);
console.log(boundFn);
// boundFn("Rajneesh", "War Machine");
// boundFn("Umang", "War Machine");

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## POLYFILL OF CALL BIND APPLY ## -------------------------------

let cap2 = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, mem2) {
    console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
  },
};

let ironMan2 = {
  name: "Tony",
  team: "Iron Man",
};

//Call -> It is on Function ->

// Statement 1.-------------------------------------------------
// Function.prototype.myCall = function() {
//     console.log("Hi Call is invoked");

//     console.log("I want to know this: ", this);
// }

// cap.petersTeam.myCall();

// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/
Function.prototype.myCall = function (requiredObject, ...arrayAsArgument) {
  // get your function.
  const functionToBeInvoked = this;

  // copy your function in the requiredObject for temp basis.
  requiredObject.tempFunction = functionToBeInvoked;

  // Call your function.
  requiredObject.tempFunction(...arrayAsArgument);

  // Delete temp method.
  delete requiredObject.tempFunction;
};

// cap.petersTeam.myCall(ironMan, "thor", "loki",);

// Statement 3.-------------------------------------------------
/**
 * polyfill of apply method
 * **/
Function.prototype.myApply = function (requiredObject, arrayAsArgument) {
  // get your function.
  const functionToBeInvoked = this;

  // copy your function in the requiredObject for temp basis.
  requiredObject.tempFunction = functionToBeInvoked;

  // Call your function.
  requiredObject.tempFunction(...arrayAsArgument);

  // Delete temp method.
  delete requiredObject.tempFunction;
};

// let memberssArray = ["thor", "Rajneesh", "loki", "Manisha", "Suraj", "Priyank", "Umang"];
// let memberssArray = ["thor", "loki"];  // Max size of array allowed is 2 because of 2 argument.
// cap.petersTeam.myApply(ironMan, memberssArray);

// Statement 4.-------------------------------------------------
/**
 * polyfill of bind method
 * **/
Function.prototype.myBind = function (requiredObject) {
  // get your function.
  const functionToBeInvoked = this;

  return function (...arrayAsArgument) {
    functionToBeInvoked.call(requiredObject, ...arrayAsArgument);
  };
};

const boundFn2 = cap.petersTeam.myBind(ironMan);
boundFn2("Thor Bansal", "Rajneesh Kumar");

console.log(
  "-------------------------------------------------------------------------"
);
