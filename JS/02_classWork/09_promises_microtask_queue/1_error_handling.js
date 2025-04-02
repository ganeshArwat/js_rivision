// ------------------------------- ## Errors ## -------------------------------
console.log(
  "-------------------------------------------------------------------------"
);
/**
 * Inbuilt Errors in Javascript
 * -> Syntax error
 *
 *    try catch only works with run time Error
 * -> Runtime error -> only get to know after exceuting the code and it will
 * only fail on the where we have made the error
 *
 *  -> TypeError
 *  -> reference Error
 *  -> Range Error
 *
 * **/

/*** Syntax error code does not execute at all*/
// 1.  Unexpected identifier
// console.log("Hello");
// le a;

// 2.  Illlegal Shadowing : Identifier 'a' has already been declared
// console.log("a");
// let a = 10
// {
//     var a = 20;
//     console.log("Hello", a);
// }

// Work like a charm.
// var a = 10
// {
//    let a = 20;
//    console.log("Hello: " + a);
// }
// console.log("Bye: " + a);

/**********************Run time Errors************************/
/***
 * Reference Error
 * ***/

// 1. TDZ -> temporal Dead Zone, ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a;
// console.log("Before");

// 2. ReferenceError: fn is not defined
// fn();

// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict";
// a=10
// console.log(a);

//  * 2. when you accessing a prop for which object does not exist
// console.log(obj.a);

/*********** Range error ******/
// 1. RangeError: Maximum call stack size exceeded stackoverflow
// infinite recursion
// function foo() {
//     foo();
// }
// foo();

// 2. array size RangeError: Invalid array length
// let a = [];

// a.length = 2 ** 32 - 1; // Max allowed len is 2 ** 32 - 1.
// a.length = 2 ** 32;
// console.log(a.length);

/*****
 * Type error:
 * 1. whenever a method is called and it does not exist
 * 2. when you accessing a prop for which  object is undefined
 * *****/

// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase());

// 2.TypeError: Cannot read properties of undefined (reading 'a')
// "use strict";
// function fn(){
//     console.log(this);
//     console.log(this.rajneesh);
// };

// fn();

("use strict");
function fn() {
  // let string = "hello";
  let string = new String("hello");
  // console.log(string.toUpperCase());
  // console.log(string.abc());  // Error
  string.abc = new String("rajneesh");
  // console.log(string.abc);
  // console.log(string);

  console.log(string.abc.def);
  string.abc.def = "Manisha";
  console.log(string);

  // console.log(this);
  // console.log(this.abc);  // undefine.abc is a error.
}
fn();

// ------------------------------- ## Try Catch ## -------------------------------
/**syntax error can't be solved by try and catch*/
// try {
//     le a
// } catch (err) {

// }

/******/
// try {
//     console.log("Before");
//     let a = 10
//     {
//         var a = 20;
//         console.log("Hello", a);
//     }
// } catch (err) {
//     console.log("Rajneesh_Error", err);
// }

/*****
 * runtime Error
 *
 * *****/

// console.log("Before");
// try {
//     console.log(a);
//     let a;
//     console.log("Before");
// } catch (err) {
//     console.log("Rajneesh_Error", err);
// }
// console.log("after");

/***try and catch are synchronous**/
// console.log("Before");
// try {
//     setTimeout(() => {
//         console.log("set timeout is executed");
//         console.log(a);
//     }, 1000);
// } catch (err) {
//     console.log("Rajneesh_message_of_error: ", err.message);
//     console.log("Rajneesh_name_of_error: ", err.name);
// }
// console.log("After");

/**********************correct way****************************/
console.log("Before");
setTimeout(() => {
  try {
    console.log("set timeout is executed");
    console.log(a);
  } catch (err) {
    console.log(" message: ", err.message);
    console.log("name of error: ", err.name);
  }
}, 1000);

console.log("After try catch");

console.log(
  "-------------------------------------------------------------------------"
);


