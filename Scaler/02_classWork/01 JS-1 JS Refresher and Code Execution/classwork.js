// ------------------------------- ## REFRESHER ## -------------------------------
// 1s statement.
var a; // always undefined.
console.log("Value of a: ", a);
a = 10;
console.log("Value of a: ", a);
a = "abc";
console.log("Value of a: ", a);
a = "abcdefgh";
console.log("Value of a: ", a);

// 2nd statement: There is no difference between single and double quote string.
var age = 15;
var name = "Rajneesh";
var c = "Hi my name is " + name + " and age is " + age;
console.log("value of c: ", c);

var d = "hi" + "hello";
console.log("value of d: ", d); // it will create a sinle line statement.

// 3rd statement: for template string using `` to store multiple lines of string and '${}' to refer any value.
var s3 = `Hi my name is ${name}
and my age is ${age}, How are you doing
today?`;
console.log("Value of s3: ", s3);

// 4th statement.
var name = "Rajneesh";
var e;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 10;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = "abc123";
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = "abc11234";
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = "a";
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = `abcdedf + ${name}`;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = true;
console.log("typeof a where constent is: " + e + " -> ", typeof e);

// 5th ststement: In Js number is treated as 64 bit floating number.
var f = 5 / 2;
console.log("value of f: ", f);
console.log("typeof a where constent is: " + f + " -> ", typeof f);

// 6th statement.
var g = [10, 20.5, "abc", "def", true, [1, 2, "dsf", 45]];
// g = {};
console.log("value of g: ", g);
console.log("value of g: ", typeof g);
console.log("value of g: ", Array.isArray(g));

// Toggle Characters
function toggleCharacter(str) {
  let ans = "";
  let capitalA = "A".charCodeAt(0);
  let capitalZ = "Z".charCodeAt(0);
  let smalla = "a".charCodeAt(0);
  let smallz = "z".charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode >= capitalA && charcode <= capitalZ) {
      var code = charcode - capitalA + smalla;
      ans += String.fromCharCode(code);
    } else if (charcode >= smalla && charcode <= smallz) {
      var code = charcode - smalla + capitalA;
      ans += String.fromCharCode(code);
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

console.log(toggleCharacter("aBCDdcb123*&^"));

// 7th statement: [Important: why typeof null is object?]
// It is a bug in js which they can't change now, reason is binary code of null is zero and
// zero treated as a object.
console.log("typeof of null: ", typeof null);

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## NonPrimitive ## -------------------------------

// 1st statement: Function

// defintion
function fn(param1) {
  console.log("Hello world!!", param1);
  return; // js will add a semcolon here. to avoid this use linter[eg., eslint]
  ("hello");
}

fn();

let rVal = fn();
console.log("return Value: ", rVal);

// 2nd statement: object
let cap = {
  name: "steve",
  "last name": "Rogers",
  isAvenger: true,
  address: {
    city: "manhatten",
    state: "Newyork",
  },
  sayHi: function () {
    console.log("Cap say's Hi");
  },
  Movies: ["Avendgers", "civile war"],
  2: "random thing",
  // key: "have fun"
};

console.log(cap);
console.log(
  "one way to print: " + cap["name"],
  " another way to print: ",
  cap.name
);

for (let key in cap) {
  console.log(
    "My key is: " +
      key +
      ", value against it using cap[key]: ->" +
      cap[key] +
      "<- and using cap.key: ->" +
      cap.key
  );
}

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## CODE EXECUTION ## -------------------------------

// 1st statement:

// high level view -> how your code exec
// stack -> callstack
// let a = 10;
// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     inner();
// }
// fn()

// Code Excution : always exec in EC
// Global code -> GEC
// insidee fn -> own EC

// code execution
// 1.  EC creation
// 1.a Hoisting -> memory allocation
// variable -> undefined;
// fn -> get it's memory allocated
// 2. global -> browser -> window/nodejs-> global-> features
// 3. outer scope-> outer var
// 4. this-> always calculated
//  2. EC Code execution

// console.log("a: " +  a);
// var a = 10;

// // this can cause a bug
// real();
// function real() { console.log("I am real. Always run me"); }  // these two are deprecated by GEC.
// function real() { console.log("No I am real one "); } // these two are deprecated by GEC.
// function real() { console.log("You both are wasted"); }

// scenario 1:
// var xyz = 10;
// {
//     var xyz = 20;
//     console.log("value of a: "+ xyz);
// }
// console.log("value of a: "+ xyz);
// console.log(window)

// scenario 2: let have block scope.
let xyz = 10;
{
  let xyz = 20;
  console.log("value of a: " + xyz);
}
console.log("value of a: " + xyz);

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## VAR ## -------------------------------

// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     var a = 20;
//     console.log("line number 4", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);

// statement 2.
// var f = 5;
// function fn() {
//     f = 6;
// }
// fn()
// console.log(f)

// var f = 5;
// function fn() {
//     var f = 6;
// }
// fn()
// console.log(f)

// ****************** var ************

// // reassign
// var a=10
// a=20;
// console.log("value of a at line no 38: ", a);

// // redeclared -> yes
// var a=30;
// console.log("value of a at line no 42: ", a);

// rajneesh = "hello";   // It become part of global object.
// console.log("value of rajneesh at line no 45: ",rajneesh);   // output: undefined
// console.log(window)

// ********** let *************
// reassign -> yes
// redeclaration -> is not possible
// let a=10;
// a=20;
// console.log("value of a at line no 54: ", a);
// let a; // throw error.

// Statement 2: temporal dead zone
// let Hoisting -> undefined
// before declaration let and const variables cannot be accessed ->
//  temporal dead zone

// console.log("value of a at line no 54: ", a);
// let a = 10;

// Statement 3: block scope
// block -> {

// }

// let a = 10;
// {
//     let a = 20;
//     console.log("value of a at line no 75: ", a);
// }
// console.log("value of a at line no 77: ", a);

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## SHADOWING ## -------------------------------

//statement 1:

// var fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // apple
//     var fruits;
//     console.log(fruits); // apple
//     fruits = "orange";
//     {
//         console.log(fruits) // orange
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // orange

// statement 2:

// let fruits = "apple";
// console.log(fruits); // apple
// {
//     // console.log(fruits); //tdz
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);

//  legal
// let fruits = "apple";
// console.log("21",fruits); // apple
// {
//     let fruits;
//     console.log("25",fruits);
//     fruits = "orange";
//     {
//         let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);

// var fruits = "apple";
// console.log("21",fruits); // apple
// {
//     let fruits;
//     console.log("55",fruits);  // undefined
//     fruits = "orange";
//     console.log("57",fruits);  // orange
//     {
//         let fruits;
//         console.log("28",fruits)  // undefined
//     }
//     console.log(fruits);  // orange
// }
// console.log(fruits); // apple

// illegal shadowing

// let fruits = "apple";
// console.log("21",fruits); // apple
// {
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         var fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);
console.log(
  "-------------------------------------------------------------------------"
);

var g = "test";

function toggleCharacter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      result += String.fromCharCode(str.charCodeAt(i) - 32);
    }
  }

  return result;
}

console.log("aBcD: " + toggleCharacter("aBcD")); // AbCd

function fn() {
  console.log("i am fn");
  function inner() {
    console.log("i am inner");
  }
  inner();
}

fn();

// // this can cause a bug
real();
function real() {
  console.log("am real. Always run me");
} // these two are deprecated by GEC.
function real() {
  console.log("NO i am one real");
} // these two are deprecated by GEC.
function real() {
  console.log("tou both are wasted");
} // these two are deprecated by GEC.
