// ------------------------------- ## Timer ## -------------------------------
/*****setTimeout -> clearTimeout****/
// // Statement 1:
// console.log("Before");
// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// setTimeout(cb, 1000);

// // Statement 2:
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

// // Statement 2:
function cb() {
  console.log("Interval called " + Date.now());
}

const timerId = setInterval(cb, 1000);

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
// ------------------------------- ## SetInterval ## -------------------------------
/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  :
 * */

function mySetInterval(cb, delay) {
  let timerIdObject = {
    flag: true,
  };

  function helperMethod() {
    if (timerIdObject.flag) {
      cb();
      setTimeout(helperMethod, delay);
    }
  }

  setTimeout(helperMethod, delay);
  return timerIdObject;
}

function clearMyInterval(timerIdObject) {
  timerIdObject.flag = false;
}

/*******usage****/
function cb() {
  console.log("I will be called on every interval: " + Date.now());
}

let timerIdObject = mySetInterval(cb, 1000);

function cancelInterval() {
  console.timeEnd();
  console.log("cancelled th cb");
  clearMyInterval(timerIdObject);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("After");   
console.log(
  "-------------------------------------------------------------------------"
);
