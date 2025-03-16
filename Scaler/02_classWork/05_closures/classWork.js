// ------------------------------- ## Lexical Scope ## -------------------------------
/**
 * outer scope  : Every function has access to it's vars/lets
 * as well as any variable deaclared outside.
 * */

// var x = 10;
// function fn(){
//     var x = 20;
//     console.log("current value of x is: ", x);
// }
// fn();

// var varName = 10;
// function b() {
//     console.log("In function b the value of varName: ", varName);   // 20
// }

// function fn(callback) {
//     var varName = 20;
//     callback();
//     console.log("In function fn the value of varName: ", varName);  // 20
// }
// fn(b);

// let varName2 = "I'm here";
// function fn(){
//     let varName1 = 10;
//     function inner(){
//         console.log(varName1);
//         console.log(varName2);
//     }

//     inner();
// }

// fn();

/**
 * b -> varName -> outer scope  -> fn defintion
 *
 * JS says that outer scope is lexically scoped -> your fn definiton
 * */
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Closure ## -------------------------------
// Question: 02
// function outerFunction() {
//   console.log("first line of outerfunction: ", count);
//   var count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   console.log("second line of outerfunction: ", count);
//   count++;
//   return innerFunction;
// }

// const innerFunc = outerFunction();
// console.log(innerFunc()); // 2
// console.log(innerFunc()); // 3

// const innerFunc2 = outerFunction();
// console.log(innerFunc2()); // 2
// console.log(innerFunc()); // 4
// console.log(innerFunc2()); // 3

// Question: 02
// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5);
// let c2 = createCounter(5, 2);

// console.log(c1())
// console.log(c2())

// console.log(c1())
// console.log(c2())

// 15
// 7
// 20
// 9

/***
 * Nested closure : you will get access to outer variable even if the
 * outer fn is not your direct parent
 * */

let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     iamINGEC++;
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         iamINGEC++;
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure
//             console.log("Hi GEC", iamINGEC) // Lexical scope
//             iamINGEC++;
//         }
//     }
// }

// const lastNameRtrn = getFirstName("Rajneesh");
// const greeterRtrn = lastNameRtrn("Kumar");
// greeterRtrn();   // iamINGEC=201;

// greeterRtrn();  // iamINGEC=202
// greeterRtrn(); //  iamINGEC=203
// console.log("Final Value: ", iamINGEC);

// The variable iamINGEC is not redeclared inside functions, so it refers to the global scope.

/***
 * Application of closures
 * 1. currying : taking one input at a time and you use the input later
 * 2. asynchrounous code cannnot run without closure
 * **/

/*--------------------------------- Currying ---------------------------------**/
// Builder pattern: https://www.dofactory.com/javascript/design-patterns/builder

/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`);  // closure
// }
// greeter("Rajneesh", "kumar")

// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter(deduction) {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure
//             console.log("here is your deduction: ", deduction)
//         }
//     }
// }

// const getLastName = getFirstName("Jasbir");   // persoanl Information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// const greeter = getLastName("Singh");   // parent related personal information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// greeter(100);    // ask for all kind of deductions and display the entire result.
// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// Shorthand

// getFirstName("Debasish")("Brahma")(100);

/*--------------------------------- asynchrounous code  ---------------------------------**/
let a = 100;
console.log("Before");

function cb() {
  console.log("I will explode", a);
}

setTimeout(cb, 2000);
// for (let i = 0; i < 1000; i++) {
//     a++;
// }
console.log("After"); // Async + closures are responsible for such kind of behaviour.

console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Application Closures ## -------------------------------

// infinite curry
// Problem 1: Counter
function counter(args) {
  let count = 0;
  count++;
  if (args === 0) {
    return count;
  } else {
    return function inner(args) {
      count++;
      if (args === 0) {
        return count;
      } else {
        return inner;
      }
    };
  }
}

// console.log(counter(0)); // print -> 1
// console.log(counter()(0)); // print -> 2
// console.log(counter()()()()(0)); // print -> 5

// Problem 1: Sum
function sum(val) {
  if (val === undefined) {
    return 0;
  } else {
    let res = val;
    return function smallerSumHelperMethod(val) {
      if (val === undefined) {
        return res;
      } else {
        res += val;
        return smallerSumHelperMethod;
      }
    };
  }
}

// console.log(sum())  // 0
// console.log(sum(1)());  // 1
// console.log(sum(3)(4)());  // 7
// console.log(sum(3)(7)(8)());  //18

/***************Private variables******/

// Bad code.
// function createEvenValueStack() {
//     return {
//         items: [],
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             } else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }

// Good code.
function createEvenValueStack() {
  let items = [];
  return {
    push(item) {
      if (item % 2 == 0) {
        console.log("Is pushed");
        items.push(item);
      } else {
        console.log("Please input even value");
      }
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createEvenValueStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(5);
console.log("pop ele: ", stack.pop());
console.log(stack.items);
stack.items = [10, 100, 1000]; // prevent this behaviour
console.log("pop ele: ", stack.pop());
stack.push(40);
stack.push(50);
stack.push(60);
console.log("pop ele: ", stack.pop());
console.log(stack.items);

console.log(
  "-------------------------------------------------------------------------"
);

function outer() {
  let arrfn = [];
  for (var i = 0; i < 3; i++) {
    arrfn.push(function () {
      i++;
      console.log(i);
    });
  }
  return arrfn;
}

let arrfn = outer();
arrfn[0](); // 4
arrfn[1](); // 5
arrfn[2](); // 6

// - var is function-scoped, so by the time setTimeout runs, the loop has finished, and i is 4.
// - Solution: Use let instead of var!

// ------------------------------- ## Closure Questions ## -------------------------------
// Q1_1
// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }

//     console.log(window);
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0](); // 4
// arrFn[1](); // 5
// arrFn[2](); // 6

/**
 * fn is taking value from closure -> i=3
 * */
function outer() {
  let arrFn = [];
  let i = 0;
  for (i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      i++;
      console.log(i);
    });
  }
  return arrFn;
}

let arrFn = outer();
arrFn[0](); // 4
arrFn[1](); // 5
arrFn[2](); // 6

// function outer() {
//     let arrFn = [];
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0](); // 1
// arrFn[1](); // 2
// arrFn[2](); // 3
