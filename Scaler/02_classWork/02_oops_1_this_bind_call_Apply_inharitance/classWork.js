// ------------------------------- ## THIS ## -------------------------------

// statement 1 ----------------------------------------
// native object and a host object

// Enviornment ->
//  host object ->browser//  window,document,localstorage
// host object -> nodejs -> global, os ,process

// JS -> given by language
// native object -> Date, JSON,Object

// var firstVar = "steve";
// let secondVal = "loki";

// console.log("first: ", window.firstVar);
// console.log("second: ", secondVal);
// console.log("Hello from: ", this);   // In GEC this = window.
// console.log("first: ", this.firstVar);

// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;

// var firstName = "loki";
// sayHiAdd();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object, Example: cap.sayHi()
// EC is created with -> function call -> this will be that window, Example: let a =  cap.sayHi and then a().

/********************** Question 2 ******************/
// let cap2 = {
//     firstName: "Steve",
//     sayHi: function (param) {
//         console.log("47", this.firstName);
//         const iAmInner = function (param) {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> window
//         iAmInner(20);
//     }
// }

// EC by this -> cap
// cap2.sayHi(10);

// iamInner -> this =window, param=20
// cap.saHI -> param=10, this = cap2
// GEC

/*****************Question3 *******************/
// // var -> GEC
// let cap3 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap3.sayHi();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes this from outside(nearest scope)

// let cap4 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside
//         const subInner =  () => {
//             console.log("94", this.firstName);
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap4.sayHi();

let cap5 = {
  firstName: "Steve",
  sayHi: function () {
    console.log("109", this.firstName);
    // arrow ->  does not have it's own this. I am going to cheat it from outside
    const subInner = () => {
      console.log("94", this.firstName);
      const iAmInner = function () {
        console.log("114", this.firstName);

        // const iAmSuperInner = function () {
        //     console.log("117", this.firstName);
        // }

        const iAmSuperInner = () => {
          console.log("117", this.firstName);
        };
        iAmSuperInner();
      };
      iAmInner();
    };
    subInner();
  },
};
// cap5.sayHi();

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## THIS STRICT ## -------------------------------

// var varName="Manisha";
// console.log(varName);
// window.varName="Umang";
// console.log(varName);

// "use strict";
// varName="loki";
// console.log(varName);

/*****************question1***********************/
// "use strict";
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//      // console.log(this)
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// var firstName = "loki";
// sayHiAdd();  // you will hit by error

/*********************question 2***********/
// "use strict";
// let cap2 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("47", this.firstName);
//         const iAmInner = function () {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> undefined
//         iAmInner();
//     }
// }

// EC by this -> ?? -> cap
// cap2.sayHi();

// ***************question 3***************//
// "use strict";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// *******************question 4********************
("use strict");
let cap2 = {
  firstName: "Steve",
  sayHi: function () {
    console.log("91", this.firstName);
    // arrow ->  does not have it's own this. I am going to cheat it from outside
    const subInner = () => {
      console.log("94", this.firstName);
      const iAmInner = () => {
        console.log("95", this.firstName);

        // const iAmSupperInner = function () {
        //     console.log("49", this.firstName);
        // }

        // iAmSupperInner();
      };
      iAmInner();
    };
    subInner();
  },
};
cap2.sayHi();
console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## CHAINING ## -------------------------------

// // Statement 1.

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () {
//         console.log(this.step);
//     }
// };

// // up fn on ladder
// ladder.up();  // step: 1

// // up fn on ladder
// ladder.up();  // step: 2

// ladder.up(); // step: 3
// ladder.down(); // step: 2
// ladder.showStep();  // 2

// Statement 2.
let ladder2 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
var address = ladder2.up().up().up().up().up().up().down().showStep();
console.log(address);

console.log(
  "-------------------------------------------------------------------------"
);

// ------------------------------- ## INHARITANCE ## -------------------------------

// statement 1 -------------------------------------------------

// let arr = [1, 2, 3, 4];

// console.log(arr);
// console.log(typeof arr);

// arr.push("hello")
// console.log(arr);

// arr ->[p] Array ->[p] Object->[p] null
// Array -> all the method required by every array

// using an inherited property
// console.log(arr.toString());

// advantage  of  inheritance ->
// 1. Reuse of code
// 2. Multiple child objects can access the single method of parent.
// 3. Save memory space

// statement 2 -------------------------------------------------

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

// bad way of giving a feature************
// arr1.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();

/************* parent ************/
Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  console.log(sum);
};

// usecase of this and prototype
arr1.sum();
arr2.sum();
console.log(arr1);

console.log(
  "-------------------------------------------------------------------------"
);

