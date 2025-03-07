// function promiseSetTimeout(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(function () {
//             reject("Hi There!!!!");
//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// promiseSetTimeout(1000).then((data) => {
//     console.log("Result: ", data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });

// function constructor
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
function CustomPromise(executorFn) {
  let State = PENDING;
  let value = undefined;
  let scbArray = []; // success callback array
  let fcbArray = []; // failure callback array

  const resolve = (val) => {
    State = RESOLVED;
    value = val;
    scbArray.forEach((cb) => {
      cb(value);
    });
  };

  const reject = (err) => {
    State = REJECTED;
    value = err;
    fcbArray.forEach((cb) => {
      cb(value);
    });
  };

  this.then = (cb) => {
    if (State === RESOLVED) {
      cb(value);
    } else {
      scbArray.push(cb);
    }
  };

  this.catch = (cb) => {
    if (State === REJECTED) {
      cb(value);
    } else {
      fcbArray.push(cb);
    }
  };

  
  executorFn(resolve, reject);
}

const executorFn = (resolve, reject) => {
  // Cb based fn for resolved state.
  setTimeout(() => {
    resolve("Hey I'm resolved!!!!");
  }, 2000);

  // Cb based fn for rejected state.
  setTimeout(() => {
    reject("Hey I'm got rejected! with error: .....");
  }, 3000);
};
