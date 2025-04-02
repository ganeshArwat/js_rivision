// ------------------------------- ## Promises ## -------------------------------
const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

console.log("Before");

// task has started when fn is called
const promise = fs.promises.readFile("./f1.txt");

/**
 * State of the promise-> pending
 * */
console.log(promise);

setTimeout(() => {
  console.log("I am here to read file after 2 sec.");
  console.log("Value of Promise: " + promise);
}, 2000);

console.log("After");
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Consuming of Promises ## -------------------------------
const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

console.log("before");

// task has started when fn is called
const promise1 = fs.promises.readFile("./f1.txt");

/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 *    -> Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done).
 * **/

// promise.then((data) => {
//     console.log("My content is: " + data);
// });

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an error
 *    -> catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).
 * */

// It is mendentory to put catch in promise otherwise your code vunlerable to system.
// promise.catch((err) => {
//     console.log("We hit by error: " + err);
// });
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Chaining Promises ## -------------------------------
const fs = require("fs");
console.log("before");

/*********** chaining your then and catch **********/

// fs.promises.readFile("./f1.txt")
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
//     .catch(function (err) {
//         console.log("err: ", err);
//     });

/**************** heart attack code ************/
// fs.readFile(".././f1.txt", (err, data) => {
//     if (err) {
//         console.log("Error is: " + err);
//     } else {
//         console.log("Content is: " + data);
//         fs.readFile(".././f2.txt", (err, data) => {
//             if (err) {
//                 console.log("Error is: " + err);
//             } else {
//                 console.log("Content is: " + data);
//                 fs.readFile(".././f3.txt", (err, data) => {
//                     if (err) {
//                         console.log("Error is: " + err);
//                     } else {
//                         console.log("Content is: " + data);
//                         fs.readFile(".././f4.txt", (err, data) => {
//                             if (err) {
//                                 console.log("Error is: " + err);
//                             } else {
//                                 console.log("Content is: " + data);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

/**************** Nested then ************/

// fs.promises.readFile("./f1.txt")
//     .then(function (data1) {
//         console.log("My Content is: " + data1);
//         fs.promises.readFile("./f2.txt")
//             .then(function (data2) {
//                 console.log("My Content is: " + data2);
//                 fs.promises.readFile("./f3.txt")
//                     .then(function (data3) {
//                         console.log("My Content is: " + data3);
//                         fs.promises.readFile("./f4.txt")
//                             .then(function (data4) {
//                                 console.log("My Content is: " + data4);
//                             }).catch((err) => {
//                                 console.log("ohh! I hit by error: " + err);
//                             })
//                     }).catch((err) => {
//                         console.log("ohh! I hit by error: " + err);
//                     })
//             }).catch((err) => {
//                 console.log("ohh! I hit by error: " + err);
//             })
//     }).catch((err) => {
//         console.log("ohh! I hit by error: " + err);
//     });

/******************* chaining *********************/

fs.promises
  .readFile("./f1.txt")
  .then(function (data) {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f2.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f13.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f4.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
  })
  .catch((err) => {
    console.log("ohh! I hit by error: " + err);
  });
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Sb to Promises ## -------------------------------
/**
 *
 * promisifiy  fs.readfile
 * */

let fs = require("fs");

function promiseReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/*** -------------------- consumption --------------------------- **/

console.log("Before");

// const promise = promiseReadFile("./f1.txt");

// ---------------------------------- Statement 1 ----------------------------------

// promise.then((data) => {
//     console.log("My content is: " + data);
// }).catch((err) => {
//     console.log("ohh! I hit by error: " + err);
// })

// ---------------------------------- Statement 2 ----------------------------------

promiseReadFile("./f1.txt")
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f2.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f3.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f4.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
  })
  .catch(function (err) {
    console.log("ohh! I hit by error: " + err);
  });

console.log(
  "-------------------------------------------------------------------------"
);


const fs = require("fs");

function promiseReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

promiseReadFile("./f1.txt")
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f2.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f3.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
    return promiseReadFile("./f4.txt");
  })
  .then(function (data) {
    console.log("My Content is: " + data);
  })
  .catch(function (err) {
    console.log("ohh! I hit by error: " + err);
  });
