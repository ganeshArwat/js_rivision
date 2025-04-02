// ----------------------------------- ## Map Object ## -------------------------------
/***
 * Object , Map -> store data in key, value pair
 * Map
 * */

/******** 1. syntax***************************/
const print = console.log;
// a.
let cap = {
  name: "Steve",
  occupation: "Super Hero",
  age: 35,
};

// cap.newProp = "Hello";
// delete cap.name;
// print(cap);

// let arrKeys = Object.keys(cap);
// let size = arrKeys.length;
// print(size);

// b. map
// adding/update a key in map
const personMap = new Map();
personMap.set("name", "rajneesh");
personMap.set("age", 35);
personMap.set("occupation", "Super Hero");

// personMap.delete("age");
// print(personMap.has("age"));

// print("output: " + personMap.get("occupation"));

// print(personMap.has("name")); //– returns true if the key exists, false otherwise.
// personMap.clear() //– removes everything from the map

// print("object", cap);
// print("map", personMap);
// print("size",personMap.size);

/*************differences
 * 1. iteration
 *  Iterate over a map ->
 *          all the HOF ,
 *          for of loop,
 *          for in loop does not work
 * Can't iterate over an object ->
 *          hoF not applicable,
 *          for of loop not work,
 *          for in loop work
 *  ***************/

// a.
// //  forEach
// let arr = [1, 2, 3, 4];
// arr.forEach(function (elem, idx) {
//     print("Data at this idx", idx, " is ", elem)
// })

// // It will not work
// cap.forEach((elem, key) => {
// print("key", key , " : ", elem);
// })

// personMap.forEach((elem, key) => {
//     print("key", key, " : ", elem);
// })

// // b. for of loop
// for (let [key, elem] of personMap) {
//     print("key", key, " : ", elem);
// }

// for (let [elem, key] of cap) {
//     print("key", key, " : ", elem);
// }

// // c.  for in loop
// for (let key in personMap) {
//     print("key", key, " : ", personMap[key]);
// }
// console.log("after map for in ")

// for (let key in cap) {
//     print("key", key, " : ", cap[key]);
// }

/******
 * Map -> keys can be of any type
 * Obj -> String , Number , Symbols
 * Usecase : when you want to store properties with a key that has some metadata
 * ***/

// //  user -> multiple entries
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };
// const user3 = { id: 3, name: 'Charlie' };

// //  extended data
// let preferenecsObj1 = { theme: 'dark', language: 'en' }
// let preferenecsObj2 = { theme: 'light', language: 'fr' }
// let preferenecsObj3 = { theme: 'dark', language: 'de' }  // de = dutch/german

// let preferenceMap = new Map();

// preferenceMap.set(user1, preferenecsObj1);
// preferenceMap.set(user2, preferenecsObj2);
// preferenceMap.set(user3, preferenecsObj3);

// console.log("first Users name", user1.name);
// console.log("first users preference", preferenceMap.get(user1));

/******************object format of implementaion************************/

// const user1 = {
//     id: 1, name: 'Alice',
//     pereferences: { theme: 'dark', language: 'en' }
// };
// const user2 = {
//     id: 2, name: 'Bob',
//     pereferences: { theme: 'light', language: 'fr' }
// };
// const user3 = {
//     id: 3, name: 'Charlie',
//     pereferences: { theme: 'dark', language: 'de' }
// };

// console.log("first Users name", user1.name);
// console.log("first users preference", user1.pereferences);

//  2. when you have lot update / delete -> amount of data set -> Map

// print(cap);
// print(personMap);

// print("````````````````");
// let strMap = JSON.stringify(personMap);
// console.log("strMap: ", strMap);
// print("````````````````");
// let strObj = JSON.stringify(cap);
// print("strObj: ", strObj);

// ----------------------------------- ## Set ## -------------------------------
/**
 * Array : a collection of value
 * set: collection of unique values
 * */

const uniqueSet = new Set(); // It works on concept of hashing.

// add any value to the set
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
uniqueSet.add(1);

console.log(uniqueSet);
console.log(uniqueSet.size);
uniqueSet.delete(2);
console.log(uniqueSet.has(2));
console.log(uniqueSet);

// ----------------------------------- ## Week Reference ## -------------------------------
/********Q1***************/

// let jhon={};
// jhon.age=25;
// console.log("John 5", jhon);
// jhon=null;
// console.log("John 7", jhon);

/*******************Q2***************/

// let jhon = {};

// jhon.age = 25;
// let arr = [jhon];
// console.log("John 15", jhon);
// // arr[0]=null;
// jhon = null;
// console.log("John 15", jhon);
// console.log("John 17", arr[0]);

/****
 * Garage collection : when an unused type  -> object ,value etc -> they are not in use then
 * JS's Garbage collector removes it from the memory and frees up the memory for further usage
 *
 * Ques How do you define whether a type is unused ->
 * Mark and sweep algorithm -> identified unused types and then remove them  -> if a type is not
 * refering to any other type/var/ array
 *
 * **/

/***********************
 * Map and strong refrences
 *
 * ******************/

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "hi");
// // let john1 = john;
// john = null;
// console.log("in map", map);
// console.log("48", map.get(john));

/****
 * WeakMap : In weakMap you cannot have primitives a key
 * weakMap.set(key, value)
      weakMap.get(key)
      weakMap.delete(key)
      weakMap.has(key)
 *
 * */
let john = { name: "John" };
let john2 = { name: "steve" };
let weakMap = new WeakMap();
weakMap.set(john, "hi");
weakMap.set(john2, "Bi");
// john = null;
console.log("in map", weakMap);
console.log("60", weakMap.get(john));
console.log("61", weakMap.get(john2));

// ----------------------------------- ## Week Set ## -------------------------------
/***
 * Weakset :  it also takes only object as keys
 * add
 * delete
 * has
 * **/

let visitedSet = new WeakSet();

let john_ = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// // visitedSet has 2 users now
john = null;
// // check if John visited?
console.log(visitedSet.has(john)); // false

// // check if Mary visited?
console.log(visitedSet.has(mary)); // false
// visitedSet.delete(pete)
console.log(visitedSet.has(pete)); // true

// ----------------------------------- ## Week map ## -------------------------------

let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    // processing
    // let futDate = Date.now() + 2000;
    // while (Date.now() < futDate) {
    // }

    let result = obj;
    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}
// module.exports
module.exports = {
  process,
  cache,
};

// ----------------------------------- ## Genrators ## -------------------------------

function* fn() {
  console.log("Before first Yield");
  console.log("Before first Yield");
  console.log("Before first Yield");
  yield 10;

  console.log("before second yield");
  console.log("before second yield");

  yield 20;
  console.log("after second yield");
}

let genrator = fn();
console.log("Before-------------------------------------");
console.log("res of first yield", genrator.next().value);

console.log("Between-------------------------------------");
console.log("res of first yield", genrator.next().value);

console.log("After-------------------------------------");
console.log("res of first yield", genrator.next().value);
