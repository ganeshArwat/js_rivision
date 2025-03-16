// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 4. remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 * **/

// config = 10;  // this line will throw error. `TypeError: Assignment to constant variable.`
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);

/*************Reassignment -> const variable****/
/***const -> only the address of object is freezed but not it's properties**/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra : 10
// }

// config = 10;
// console.log(config);

/***************************
 * new property should not  be added on the first level -> update and delete
 *
 * -> update is allowed
 * -> Adding a new key-value pair is not allowed.
 * -> Deletion is allowed.

 * **************************/

// let notExtendableObj = Object.preventExtensions(config);
// notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";  // Addition of new key-value pair which is not allowed at first level.
// notExtendableObj.database.tempServer = "127.0.0.18"; // Addition of new key-value pair which is not allowed at first level.
// notExtendableObj.appName = "interviewbit.com";  // This is allowed.
// delete notExtendableObj.extra;  // this is allowed as well.

// console.log(notExtendableObj);

/*******
 * Object.seal ->
 * -> adding and deletion is not allowed.
 * -> updation is allowed.
 * ->  It applied at current level only
 * **/

// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// let notExtendableObj = Object.seal(config);
// notExtendableObj.database = Object.seal(notExtendableObj.database);

// // notExtendableObj.tempServer = "127.0.0.18";   // this line will skipped.
// // notExtendableObj.database.newpwd = "fake"; // this line will skipped.
// delete notExtendableObj.extra;  // this line will skipped.
// notExtendableObj.appName = "interviewbit.com";  // this line is allowed.

// console.log(notExtendableObj);

/*******
 * Object.freeze -> you cannot update/ delete / add
 * -> Updation, adding and deletion is not allowed.
 * ->  It applied at current level only
 * **/

// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }

// let notExtendableObj = Object.freeze(config);
// notExtendableObj.database = Object.freeze(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";   // this line will skipped.
// notExtendableObj.database.newpwd = "fake";   // this line will skipped.
// delete notExtendableObj.extra;   // this line will skipped.
// notExtendableObj.appName = "interviewbit.com";   // this line will skipped.

// console.log(notExtendableObj);

// HW : n-level : freeze, seal and preventExtension
// st1
// st2

// Answer: Use recusrion to apply the asked behaviour at all level.

// --------------------------------- ## Symbol ## -------------------------------

// The Symbol data type in JavaScript is a unique and immutable value that is guaranteed to be a unique identifier
// and can be used as a property key in objects. They are often used to prevent property key collisions when working with objects.

// const str1 = "hello";
// const str2 = "hello";  // this line will not create a new address instead they use the previous address of str1.(concept is intern-pool memory)
// console.log(str1.localeCompare(str2) == 0);

/**
 * a.localCompare(b) have 3 values: -1, 0, 1
 * localCompare: is case sesitive.
 * -1: a is bigger than b in terms of ASCII values.
 * 0: a and b are equal in terms of ASCII values.
 * 1: b is bigger than a in terms of ASCII values.
 *
 */

// Statement 1
// const a = "A";
// const b = "a";
// console.log(a.localeCompare(b));

// Statement 2
// const a = "réservé"; // With accents, lowercase
// const b = "RESERVE"; // No accents, uppercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// // Expected output: 0

// Statement 3
// var char1 = new String('a');   // Forcing to create a new address.
// var char2 = new String('a');  // Forcing to create a new address.
// console.log(char1 === char2);    // `===` in string not compare char to char instead they compare addresses.
// console.log(char1.localeCompare(char2) === 0);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

// Statement 1:
// let sym = Symbol("hi");   // It will always create a new address.
// let sym2 = Symbol("hi"); // It will always create a new address.
// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym === sym2);

// Statement 2:
let sym1 = Symbol("hi"); // It have a unique address.
let sym2 = Symbol("hi"); // It have a unique address.
let obj = {
  key1: "Hello",
  key2: "hi",
  [sym1]: "hello2", // It is not iterable so I can treat this as a symbol.
  [sym2]: "hello3", // It is not iterable so I can treat this as a symbol.
};

for (let key in obj) {
  console.log(key, " : ", obj[key]);
}

console.log("65: ", obj);
console.log("66: ", obj[sym1]);
console.log("66: ", obj[sym2]);
console.log("66: ", obj[Symbol("hi")]); // It have a unique address.

// We have created two symbols (symbol1 and symbol2) with the same description.
// However, symbols are always unique, so symbol1 and symbol2 are not equal.
// We then use a symbol as a property key in an object (person), demonstrating how symbols can be used to avoid property key collisions.
// Additionally, we show how to access the description of a symbol.

// ----------------------------------- ## BigInt ## -------------------------------

// in js num datatype -> 64 bit
// let num = 1000000 ^ 10000000000000000000000000;
// console.log(num);

/***if you want to store a value that is greater then 2^63-1
BigInt -> Stored in heap 
It is a primitive 
You can only do operations among bigINt.
***/

// 1
// let bigNum = BigInt(1000000) + BigInt(10000000);
// console.log("big num", bigNum);

//2
// let bigNUm1 = 10000000000000000n;
// let bigNUm2 = 12345768n;
// let res = bigNUm1 * bigNUm2;
// console.log("product", res);

// in js num datatype -> 64 bit
// let num = 1000000 ^ 10000000000000000000000000;
// console.log(num);

/***if you want to store a value that is greater then 2^63-1
BigInt -> Stored in heap 
It is a primitive 
You can only do operations among bigINt.
***/

// 1
// let bigNum = BigInt(1000000) + BigInt(10000000);
// console.log("big num", bigNum);

// 2
let bigNUm1 = 10000000000000000n;
let bigNUm2 = 12345768n;
let res = bigNUm1 * bigNUm2;
console.log("product", res);

// 3
let div = BigInt(res / 10000n);
console.log("div", div);

// ------------------------------------ ## Promise Questions ## -------------------------------

// let p = new Promise(function (resolve, reject) {
//     // reject("some error e1");  // This line will only work here.
//     resolve("some result");  // This line will only work here.
// });

/** Statment 1 */
// p.then((res) => {
//     console.log(8);
//     console.log(res);
// }).catch(() => {
//     // do nothing.
// });

// p.catch(function (err) {
//     console.log(13);
//     console.log(err);
// });

// then can listen both success and failure it have two parameters.
// p.then(function (res) {
//     console.log(20);
//     console.log(res);
// }, function (err) {
//     console.log(23);
//     console.log(err);
// }).finally(function () {
//     console.log("28: ", 1);
// });

/**
 * finally does not take any argumenst -> forwards the argument recieved
 * finally will not return any thing except error. If you try to return something that is not error it will going to get ignored.
 * */

const fs = require("fs");

// p.finally(function () {
//     console.log("finally: ", 2);
//     // throw new Error("Hello");
//     return Promise.resolve("some Error");
// }).finally(function () {
//     console.log("finally: ", 3);
//     return fs.promises.readFile("f1.txt");
// }).then(function (val) {
//     console.log("then with finally:", val);
// }).catch(function (err) {
//     console.log("catch with finally: ", err);
// });

// Promise.resolve(1)
//     .then(() => 2)   // ~then(function(){return 2}), Means we are ignoring res.
//     .then((data) => {
//         console.log("68: ", data);
//         return 3
//     }).then((value) => {
//         console.log(value);
//         return value * 3;
//     }).then(console.log)  //~ .then((data) => console.log(data))

// Promise.reject(1).
//     catch((err) => {
//         console.log("3: ", err);
//         return 10;
//     }).then((data) => {
//         console.log("6: ", data)
//     }).catch(console.log);

// Promise.reject(1)
//     .finally((data) => {
//         console.log("3", data)
//         return Promise.reject('error')
//     })
//     .catch(console.log)
//     .then((data) => {
//         console.log("19: ", data)
//     })
//     .then((data) => {
//         console.log("19: ", data)
//     })
//     .catch(console.log);

/***
 * chain -> then-> promise above is resolved
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch return -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called
 * finally -> doesnot take any input / if you retrun either error/ rejected promise -> you need a catch to consume
 *
 * **/

Promise.resolve(1)
  .finally((data) => {
    console.log("32: ", data);
    return Promise.reject("error");
  })
  .catch((error) => {
    console.log("36: ", error);
    throw "error2";
  })
  .finally((data) => {
    console.log("40: ", data);
    let rProm = Promise.resolve(41);
    let thenProm = rProm.then(console.log);
    return thenProm;
  })
  .then(console.log)
  .catch(console.log);
