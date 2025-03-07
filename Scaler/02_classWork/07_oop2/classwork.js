// ------------------------------- ## Sync ## -------------------------------

/****
 * Synchronous code-> the code that excutes line by line
 * **/

// console.log("Before");
// function fn(){
//     console.log("I'm in function.")
// }
// fn();
// console.log("After");

/***
 * Asynchronous code -> piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 *
 * */

// Statement 1:
// console.log("Before");
// function fn(){
//     console.log("I'm in function.");
// }
// setTimeout(fn, 2000);
// console.log("After");

// // Statement 2:
// let a = true;
// console.log("Before: ", a);

// setTimeout(() => {
//     a = false;
//     console.log("I will broke the while loop: ", a);
// }, 1000);

// // wait for 2sec in series operation.
// // let timeFuture = Date.now() + 2000;
// // while(Date.now() < timeFuture){}
// console.log("After: ", a);

// // This is a infinite loop, Which never ends because series operation have higher periority as per the event loop.
// // while (a) { }

// Statement 3:
console.log("Before");
const cb2 = () => {
  console.log("set timeout 1");
  let timeInfuture = Date.now() + 5000;

  console.log("Before while loop: ", Date.now());

  // Wait for 5 sec.
  while (Date.now() < timeInfuture) {}

  console.log("After while loop: ", Date.now());
};

const cb1 = () => {
  console.log("hello");
  console.log("After cb2: ", Date.now());
};

console.log("Start Time: ", Date.now());
setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

console.log("After");

/****
 * Environemt: Browser
 *     Web API Stack:
 *        [Important] console.log -> it is not the part of JS
 *         Window -> it is not the part of JS
 *         document -> it is not the part of JS
 *         fetch -> it is not the part of JS
 *         eventListner -> it is not the part of JS....
 * Enviorment: Node js
 *         console.log -> it is not the part of JS
 *         fs -> it is not the part of JS
 *         http -> it is not the part of JS
 *         child_process -> it is not the part of JS...
 *
 * Thumbrule:
 *      -> Environment provide you the features.
 *      -> JS provide you the logic.
 *      -> Programming lang.
 *                 [C++ -> Java] : Pointers were take care of.
 *                 [Java -> JS]  : There are no threads tp take care of.
 *  Inference : You cannot create an asynchronous fns as a programmer -> Enviornment
 */

console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Parallel Vs Serial ## -------------------------------
/**
 * Task:
 * Serial Tasks:
 * Parallel Tasks:
 *
 * Code
 *  Asynchronous
 *  Synchronous code
 *
 * Which type of tasks are done serially
 * Serial Tasks: Dependedend Work
 * video -> 3gb -> cloud
 *  : download -> compress -> upload on our server
 * Parallel Task : task that are independent
 */

const fs = require("fs");

/**
 * synchronous function given by nodejs to read a file
 * */

// console.log("Before");
// const buffer = fs.readFileSync("./f1.txt");
// console.log("" + buffer);
// console.log("After");

/****
 *
 * Asynchrouns function to read a file
 *
 * */

// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// })
// console.log("After");

/***
 * 1. you can block the main thread
 * 2. given 2 files -> read them  and
 * 3. give me the concatenated result in the order for the file supplied
 *
 * */

// Example of serial task.
// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");

// console.log("concated result: " + content1 + " & " + content2);

// console.log("After");

/***
 * 1. You do not have to block the main thread
 * 2. given  2 files -> read them  and  print the output in any order.
 *
 * */

// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     console.log("" + data);
// });

// fs.readFile("./f2.txt", function (err, data) {
//     console.log("" + data);
// })

// console.log("After");

/***
 * 1. You do not have to block the main thread
 * 2. given  2 files -> read them  and
 * 3. give me the concatenated result in the order for the file supplied
 * asynchrous function -> callback -> it confirms that your function has beeen executed
 *
 * */

console.log("Before");

fs.readFile("./f1.txt", (err, content_1) => {
  fs.readFile("./f2.txt", (err, content_2) => {
    console.log("Concated result: " + content_1 + " & " + content_2);
  });
});

console.log("After");

console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Timer ## -------------------------------
/*****setTimeout -> clearTimeout****/
// Statement 1:
// console.log("Before");
// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// setTimeout(cb, 1000);

// Statement 2:
// console.log("Before");

// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// const timerId = setTimeout(cb, 1000);
// // console.log("TimerId: ", timerId);

// function canceller() {
//     console.log("Canelling the timeout execution.");
//     clearTimeout(timerId);
// }
// setTimeout(canceller, 4000);

// console.log("After");

/************setInterval, clearInterval*********/
console.log("Before");

// // Satement 1:
// function cb() {
//     console.log("Interval called " + Date.now());
// }
// setInterval(cb, 2000);

// Statement 2:
function cb() {
  console.log("Interval called " + Date.now());
}
const timerId = setInterval(cb, 1000);
// console.log(timerId);

function cancelInterval() {
  console.timeEnd();
  console.log("cancelling the interval timer");
  clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("After");
console.log(
  "-------------------------------------------------------------------------"
);
