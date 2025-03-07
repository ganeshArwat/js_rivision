// ------------------------------- ## Async Await ## -------------------------------
const fs = require("fs");
console.log("Before");

const promise = fs.promises.readFile("./f1.txt");

/***consumption of promise*/
// await only works inside a  function with async keyword

async function fn() {
  try {
    const data = await promise;
    console.log("Data inside the file is " + data);
    return fs.promises.readFile("./f2.txt");
  } catch (err) {
    console.log("Err: ", err);
  }
}

fn()
  .then(function (data) {
    console.log("Data inside the file is " + data);
  })
  .catch((err) => {
    console.log("Err: ", err);
  });

console.log("After");
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Serial ## -------------------------------
let fs = require("fs");

console.log("before");

// async function fn() {
//     try {
//         let data1 = await fs.promises.readFile("./f1.txt");
//         console.log("content: " + data1);

//         let data2 = await fs.promises.readFile("./f2.txt");
//         console.log("content: " + data2);

//         let data3 = await fs.promises.readFile("./f3.txt");
//         console.log("content: " + data3);
//     } catch (err) {
//         console.log("Err: ", err);
//     }
// }

// let rVal = fn();
// console.log("rVal from 21:", rVal);

/*** they are a syntax sugar over **/
// IIFE or self calling method.
(async function fn() {
  try {
    let data = await fs.promises.readFile("./f1.txt");
    console.log("content: " + data);

    let data1 = await fs.promises.readFile("./f2.txt");
    console.log("content: " + data1);

    let data2 = await fs.promises.readFile("./f3.txt");
    console.log("content: " + data2);

    return "rval from fn";
  } catch (err) {
    console.log("Error: " + err);
  }
})();

console.log("after");

/*****
 * async keyword fn always return a pending promise so either await for or use then
 *
 *
 * **/
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Quize ## -------------------------------
function resolveAfterNSeconds(delay, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Value: " + x);
      resolve(x);
    }, delay);
  });
}

// (function () {
//     let a = resolveAfterNSeconds(1000, "data 1")
//     a.then(async function (x) {
//         // 1 sec

//         // It work in serial order.
//         let y = await resolveAfterNSeconds(2000, "data 2") // Total time spent: 1 + 2  = 3
//         let z = await resolveAfterNSeconds(1000, "data 3") // Total time spent: 1 + 2 + 1 = 4
//         // 4 sec

//         // They work in parallel.
//         let p = resolveAfterNSeconds(2000, "data 4");
//         let q = resolveAfterNSeconds(1000, "data 5");

//         console.log(x + y + z + await p + await q);  // Total time spent: 4 + max(2, 1) = 6 sec
//     })
// })();

(function () {
  let a = resolveAfterNSeconds(1000, "data 1");
  a.then(async function (x) {
    // 1 sec

    // It work in serial order.
    let y = await resolveAfterNSeconds(2000, "data 2"); // Total time spent: 1 + 2  = 3
    let z = await resolveAfterNSeconds(1000, "data 3"); // Total time spent: 1 + 2 + 1 = 4
    // 4 sec

    // They work in serial order
    let p = await resolveAfterNSeconds(2000, "data 4"); // Total time spent: 4 + 2 = 6s
    let q = await resolveAfterNSeconds(1000, "data 5"); // Total time spent: 6 + 1 = 7s

    console.log(x + y + z + p + q); // Total time spent: 7s.
  });
})();
console.log(
  "-------------------------------------------------------------------------"
);
