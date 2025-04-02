// ------------------------------- ## Promises ## -------------------------------
// function promiseSetTimeout(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(function () {
//             resolve("Hi There!!!!");
//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// const myPromise = promiseSetTimeout(1000);
// myPromise.then((data) => {
//     console.log("Result: ", data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// function constructor
function CustomPromise(executorFn) {
  // Add required properties and methods
  let State = PENDING;
  let Value = undefined;
  let scbArr = []; // Success callback's array/queue.
  let fcbArr = []; // Failure callback's array/queue.

  // attach resolve.
  const resolve = (value) => {
    // If result of a promise is already defined in that case we can't revisit the promise.
    if (State !== PENDING) {
      return;
    }

    State = RESOLVED;
    Value = value;

    // Call your all success from scbArr.
    scbArr.forEach((cb) => {
      cb(Value);
    });
  };

  // attach reject.
  const reject = (value) => {
    // If result of a promise is already defined in that case we can't revisit the promise.
    if (State !== PENDING) {
      return;
    }

    State = REJECTED;
    Value = value;

    // Call your all failures from fcbArr.
    fcbArr.forEach((cb) => {
      cb(Value);
    });
  };

  // Most Important: Don't forget to call your executor function.
  executorFn(resolve, reject);

  // Thread `then` with the resolve.
  this.then = function (cb) {
    if (State === RESOLVED) {
      cb(Value);
    } else {
      scbArr.push(cb);
    }
  };

  // Thread `catch` with the reject.
  this.catch = function (cb) {
    if (State === REJECTED) {
      cb(Value);
    } else {
      fcbArr.push(cb);
    }
  };
}

const executorFn = (resolve, reject) => {
  // Cb based fn for resolved state.
  setTimeout(() => {
    resolve("Hey I'm resolved!!!!");
  }, 2000);

  // Cb based fn for rejected state.
  setTimeout(() => {
    reject("Hey I got rejected! with error: .....");
  }, 3000);
};

// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executorFn);

const cb = (data) => {
  console.log(data);
};

myPromise.then(cb);

myPromise.then((data) => {
  console.log("I am the second then");
});

myPromise.then((data) => {
  console.log("I am the third then: ", data);
});

myPromise.catch((err) => {
  console.log("Error: ", err);
});

myPromise.catch((data) => {
  console.log("I am the second catch");
});

// ------------------------------- ## Promises All ## -------------------------------

Promise.myPromiseAll = function (arrOfPromises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arrOfPromises)) {
      reject("Expected a array of promises. But recived: ", arrOfPromises);
      return;
    }

    let unResolvedPromisesArrayLength = arrOfPromises.length;
    const resolvedPromisesResults = [];

    if (unResolvedPromisesArrayLength === 0) {
      resolve(resolvedPromisesResults);
    }

    arrOfPromises.forEach(async (promise) => {
      try {
        const value = await promise;
        resolvedPromisesResults.push(value);

        unResolvedPromisesArrayLength--;

        if (unResolvedPromisesArrayLength === 0) {
          resolve(resolvedPromisesResults);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

//  when all the promises are resolved
// Test Case 1
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

Promise.myPromiseAll([p0, p1, p2])
  .then(console.log)
  .catch((err) => {
    console.log("promise got rejected with error: " + err);
  });

// Real.
Promise.all([p0, p1, p2])
  .then(console.log)
  .catch((err) => {
    console.log("promise got rejected with error: " + err);
  });

//  when all the promises are rejected
// Test Case 2
const p0_1 = Promise.resolve(3);
const p1_1 = 42;
const p2_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("foo");
  }, 1000);
});

// Our Method.
Promise.myPromiseAll([p0_1, p1_1, p2_1])
  .then(console.log)
  .catch((err) => {
    console.log("promise got rejected with error: " + err);
  });

// Real
Promise.all([p0_1, p1_1, p2_1])
  .then(console.log)
  .catch((err) => {
    console.log("promise got rejected with error: " + err);
  });

// ------------------------------- ## Promises any ## -------------------------------

Promise.myPromiseAny = function (arrOfPromises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arrOfPromises)) {
      reject("Expected a array of promises. But recived: ", arrOfPromises);
      return;
    }

    let unResolvedPromisesArrayLength = arrOfPromises.length;
    const resolvedPromisesResult = [];
    const failureExceptions = [];

    if (unResolvedPromisesArrayLength === 0) {
      resolve(resolvedPromisesResult);
    }

    arrOfPromises.forEach(async (promise) => {
      try {
        const value = await promise;
        resolvedPromisesResult.push(value);

        unResolvedPromisesArrayLength--;
        resolve(resolvedPromisesResult);
        return;
      } catch (err) {
        failureExceptions.push(err);
      }
    });

    reject(
      "[AggregateError: All promises were rejected] { [errors]: " +
        failureExceptions +
        "}"
    );
  });
};

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);
const promise3 = Promise.reject(300);
const promise4 = Promise.reject(400);

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
