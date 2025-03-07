// ------------------------------- ## Promises All and Any ## -------------------------------
const fs = require("fs");

/** statement 1 */
// const promise = fs.promises.readFile("f1.txt");
// const promise2 = fs.promises.readFile("f2.txt");

// const combinedpromise_all = Promise.all([promise, promise2]);
// const combinedpromise_any = Promise.any([promise, promise2]);

// combinedpromise_all.then(function (resultArr) {
//     console.log("" + resultArr)
// });

/** statement 2 */
// const promise1 = Promise.resolve(100);
// const promise2 = Promise.resolve(200);
// const promise3 = Promise.resolve(300);
// const promise4 = Promise.reject(400);

// const promiseAll = async () => {
//     console.log("1: ");
//     const group1 = await Promise.all([promise1, promise2]);
//     console.log("2: ", group1);
//     const group2 = await Promise.any([promise3, promise4])

//     console.log("3: ", group2);
//     return [group1, group2]
// }

// promiseAll().then(console.log).catch(function (err) {
//     console.log("Hit by error: ", err);
// });

/** statement 3 */
const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);
const promise3 = Promise.resolve(300);
const promise4 = Promise.resolve(400);

const promiseAll = async () => {
  console.log("1: ");
  const group1 = await Promise.any([promise1, promise2]);
  console.log("2: ", group1);
  const group2 = await Promise.any([promise3, promise4]);

  console.log("3: ", group2);
  return [group1, group2];
};

promiseAll()
  .then(console.log)
  .catch(function (err) {
    console.log("Hit by error: ", err);
  });

console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Promises Race ## -------------------------------
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 2000, "one");
});

const secondPromise = new Promise((res, rej) => {
  // setTimeout(res, 1000, 'two');
  setTimeout(
    (arg) => {
      rej(arg);
    },
    1000,
    "two"
  );
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
console.log(
  "-------------------------------------------------------------------------"
);
// ------------------------------- ## Heading ## -------------------------------
console.log(
  "-------------------------------------------------------------------------"
);

// Pollyfill Of setInterval and clearInterval

function mySetInterval(cb, time) {
  let obj = { run: true };

  function run() {
    if (obj.run) {
      cb();
      setTimeout(run, time);
    } else {
      return;
    }
  }

  setTimeout(run, time);
  return obj;
}

function cancelInterval(obj, time) {
  setTimeout(() => (obj.run = false), time);
}

function sayHello() {
  console.log("Hello World");
}

// Start the custom interval
let customInterval = mySetInterval(sayHello, 1000);

// Stop the interval after 5 seconds
cancelInterval(customInterval, 5000);
