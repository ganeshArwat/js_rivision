// ------------------------------- ## Deep and Shallow Copy ## -------------------------------
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];

// // assigning arr to copiedArr
// let copiedArr = arr;   // copy the refrence, Shallow copy
// console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr: ", arr, "copiedArr: ",copiedArr);

/***
 * array , object -> two types of values -> primitves(values) , non primitives(reference)
 * Assignment ->
 *  values ->  are not copied, only main address copied.
 *  reference -> they are also not copied, only main address copied.
 *
 * */

/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**----------------------- spread --------------------------------------------*/
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];  // Partial Deep copy. (Level 1 deep copy)
// spreadArray[2] = 100;
// spreadArray[4][1] = 200;
// console.log("outputs ", spreadArray, arr);

/**----------------------------------- Object.assign -----------------------------------**/
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let veryShallowCopy = person;
// veryShallowCopy.firstName = "Tapaswini";
// console.log("person", person);
// console.log("copiedObject", veryShallowCopy);

// let copiedObject = Object.assign({}, person);   // Partial deep copy or Level 1 deep copy
// let copiedObject = { ...person };  // Partial deep copy or Level 1 deep copy

// console.log("Copied Object: ", copiedObject);

// copiedObject.lastName = "Odison";
// copiedObject.address.street = "South 1st Street";

// console.log("person: ", person);
// console.log("copiedObject: ", copiedObject);

/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

// Convert obj to string.
let stringSyntaxOfObject = JSON.stringify(person);
// console.log(typeof stringSyntaxOfObject)

/**deep copy -> object like string*/
let deepClonedObj = JSON.parse(stringSyntaxOfObject);
// console.log(typeof deepCloneObj)

deepClonedObj.lastName = "Odinson";
deepClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("copiedObject", deepClonedObj);

// ------------------------------- ## Deep Polly ## -------------------------------
// This object  -> copy of it
let person1 = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
  friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
  sayHi: function () {
    console.log("Hi Class!");
  },
};

//N = 12,  T: O(N), Run time space: O(N)  to be precise: O(Height of recusrive stack or tree)
function superCloneEffective(input) {
  // Base case or edge cases.
  if (!Array.isArray(input) && typeof input !== "object") {
    // Function or either primitive data type.
    return input;
  }

  // Create a new container on the basis of type whether it is a array or object.
  let clone = Array.isArray(input) ? [] : {};

  // Copy all the key and values.
  for (let key in input) {
    const value = input[key];
    clone[key] = superCloneEffective(value);
  }

  // return object after completion.
  return clone;
}

// Testcases.
let superDeeplyClonedObj = superCloneEffective(person);

superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);

superDeeplyClonedObj.sayHi();

// ------------------------------- ## Flatten an Array ## -------------------------------
// input  -> nested array
// let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 110]]];
// output -> single level of array with num
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]
// [] -> []

let input = [[[[[1]]]], 2];

// Array contains only Integers.
function flatten(srcArr) {
  let newArr = [];
  for (element of srcArr) {
    if (Array.isArray(element)) {
      let flatteredArrayUsingRecursion = flatten(element);
      // for(ele of flatteredArrayUsingRecursion){
      //     newArr.push(ele);
      // }

      newArr.push(...flatteredArrayUsingRecursion);
    } else {
      newArr.push(element);
    }
  }

  return newArr;
}

let flattenedArr = flatten(input);
console.log("flattenedArr: ", flattenedArr);
// ------------------------------- ## Array ## -------------------------------
/** array is an object */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//-------------------------- Slice ans Spliced --------------------------

// //  it gives you the copy
// // params -> starting index , ending index
// // it copies the elem from  [si to ei + 1) == [si, lastIndex), lastIndex = ei - 1, T: O(N), S: O(N)
// let slicedArr  = arr.slice(2, 5);
// console.log("slicedArr: ", slicedArr);

// // modifies the original array
// // params -> starting index , delete count, T: O(N), S: O(N)
// let splicedArr = arr.splice(2, 5);
// console.log("splicedArr: ", arr,splicedArr);

/**-------------------------- concat --------------------------*/
// It concat a two array without chainging the original array
// First parent array get copied followed by concat array so Time: O(N + M), , S: O(N + M)
// let concatArr = arr.concat([100, 200, 300]);
// console.log("concatArr: ", concatArr);
// console.log("arr",arr)

// -------------------------- split and join --------------------------
// split splits a string into an array of string with the use of a delimiter , T:O(N), S:O(N)
let str = "      Hi i am google     ".trim(); // trim remove whitespaces.
let arrStr = str.split(" ");
console.log("splitted Array: ", arrStr);

// joins the array of string into  string on the basis of delimiter, , T:O(N), S:O(N)
let joinedStr = arrStr.join("+");
console.log("joinedStr", joinedStr);
// ------------------------------- ## Functions In IIFEE ## -------------------------------
/**
 * functions are also object
 * object : key : value pair
 * */

// // fn defintion
// function fn() {
//     let a = 10;
//     console.log("Hi I am an fn");
//     console.log("Hi I am an fn2");
//     console.log("Hi I am an fn3");
//     fn.count++;
// }

// fn.count = 0;
// fn();  // cont 0 -> 1
// fn(); // count 1 -> 2
// console.log(fn.count);

// /** method to a fn */
// fn.showCount = function () {
//     console.log("count on fn  is ", this.count); // fn.count -> 2
// }
// fn.showCount();

// for (let key in fn) {
//     console.log("key: ", key, " vaue: ", fn[key]);
// // count: 2
// // showCount: [Function (anonymous)]
// }

/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called. */

/***
 *  0. function are first class citizens in JS ->
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable
 * */

/******a. assignment***/
// let a = [10, 20, 30];
// let b = a;

/**fn experssion**/
// const addrFn = function () {
//     console.log(" I am a variable that's why addrfn stores my address");
// }
// addrFn();

/**** b. pass a variable as a parameter*/

// function fn(param) {
//     console.log(" I recived a param", param);
//     if (typeof param === "function") {
//         param()
//     }u
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// fn(smallerfn);
// fn({name: "Debasish"})

/***HOF -> fn that accepts or returns a fn */
// function HOF(cb) {
//     console.log("Inside HOF");
//     cb();
//     return () => {
//         console.log("I got returned");
//     }
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// let returnVaue = HOF(smallerfn);
// returnVaue();

// A bug in function.

// real();
// // this can cause a bug
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("You both are wasted"); }

// Solution of this bug.
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }
// ------------------------------- ## HOF ## -------------------------------
// let arr = [2, 3, 4, 5, 6, 7];

// //  following DRY code to square every element in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
// }
// console.log("arr",arr);

// code to cube every elemnt in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr",arr);

// // Assuming that each and every element is Integer/Decimal.
// const transformer = function (arr, cb_logic){
//     let newArr = [];
//     for(ele of arr){
//         newArr.push(cb_logic(ele));
//     }
//     return newArr;
// }

//  // Smaller functions.
// const squarer = function (ele) {
//     return ele * ele;
// }

// const cuber = function (ele) {
//     return ele * ele * ele;
// }

// // I passed my small function knows as call back function into transformer.
// const squaredArr = transformer(arr, squarer);
// const cubedArr = transformer(arr, cuber);

// console.log("squaredArr: ", squaredArr);
// console.log("cubedArr: ", cubedArr);

/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function.
 * Callbacks -> function that are passed as a paramtere to another are known as cb fns.
 *
 * They usually be called by Higher order functios(HOFns)
 * */

/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
 * foreach ->
 * map ->
 * filter ->
 * reduce ->
 * sort ->
 * */

/***traversal -> it is used to travsrese the arr*/
// let arr = [2, 3, 4, 5];
// const printElem = function (ele) {
//     console.log(ele * ele);
//     return ele * ele;
// }

// let rVal = arr.forEach(printElem);
// console.log("return Value: ", rVal);  // you will get undefined coz in forEach return is not allowed.

// arr.forEach((ele) => {
//     console.log(ele * ele * 10);
// });

/***************Map-> It changes every element according to the cb fn*****/
// let arr = [2, 3, 4, 5];

// function squarer(elem) {
//     return elem * elem;
// }

// function cuber(elem) {
//     return elem * elem * elem;
// }

// let squaredArr = arr.map(squarer);
// console.log("squaredArr", squaredArr);

// let cubedArr = arr.map(cuber);
// let cubedArr = arr.map((ele) => ele * ele * ele)
// console.log("cubedArr", cubedArr);

/**Polyfill of map*/
Array.prototype.myMap = function (logic) {
  let newArray = [];

  for (ele of this) {
    newArray.push(logic(ele));
  }

  return newArray;
};

// let squaredArr = arr.myMap(squarer);
// console.log("squaredArr", squaredArr);

// let cubedArr = arr.myMap(cuber);
// console.log("cubedArr", cubedArr);

/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/

// let elems = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }

// // odd values
// let oddvaluesArr = elems.filter(isOdd);
// console.log("oddvaluesArr: ", oddvaluesArr);

// // is greater than 5.
// let isGrtThan5 = elems.filter(isgtr5);
// console.log("isGrtThan5: ", isGrtThan5);

// let arr = [{ "name": "Rajneeesh", "lastName": "kumar" }, { "name": "Rajneeesh", "lastName": "Sign" }, { "name": "Jasbir", "lastName": "Bano" }, { "name": "Rajneeesh", "lastName": "Swain" }, { "name": "Jasbir", "lastName": "Sign" }];
// console.log(arr.filter((obj) => {
//     return obj.name === "Jasbir";
// }));

/**write polyfill of filter */

// Array.prototype.myFilter = function (logic) {
// let newArray = [];

// for (ele of this) {
//     if (logic(ele)) {
//         newArray.push(ele);
//     }
// }

// return newArray;
// }

// let oddvaluesArr = elems.myFilter(isOdd);
// console.log("oddvaluesArr", oddvaluesArr);
// console.log("elem", elems);

/*********************reduce******************/

// let elems = [1, 2, 3, 4, 5];

// // Smaller cb functions
// // two parameters: acc, nextElement
// function sum(sumSoFar, elem) {
//     return sumSoFar + elem;
// }

// function product(ProductSoFar, elem) {
//     return ProductSoFar * elem;
// }

// console.log("sum: ", elems.reduce(sum));
// console.log("Prod: ", elems.reduce(product));

/**final version-> polyfill of reduce => HW **/
// Array.prototype.myReduce = function (cb, defVal) {
//    if (!this.length && defVal === undefined) {
//       throw new TypeError("Reduce of empty array with no initial value");
//    }

//    let accumulator = defVal !== undefined ? defVal : this[0];
//    let startIndex = defVal !== undefined ? 0 : 1;

//    for (let i = startIndex; i < this.length; i++) {
//       accumulator = cb(accumulator, this[i], i, this);
//    }

//    return accumulator;
// }

// const arr = [1, 2, 3, 4];
// const sum = arr.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 10

/** Polyfill of sort */
// Array.prototype.mySort = function (compareFn) {
//    for (let i = 0; i < this.length - 1; i++) {
//        for (let j = 0; j < this.length - i - 1; j++) {
//            if (compareFn ? compareFn(this[j], this[j + 1]) > 0 : this[j] > this[j + 1]) {
//                [this[j], this[j + 1]] = [this[j + 1], this[j]];
//            }
//        }
//    }
//    return this;
// };

// // Example usage:
// console.log([5, 2, 9, 1, 3].mySort((a, b) => a - b)); // [1, 2, 3, 5, 9]
// ------------------------------- ## Class Work ## -------------------------------
// Solution 1
let obj = {
  name: "John",
  age: 30,
  address: {
    local: "22 Alaknanda",
    city: "Dehradun",
    state: "UK",
  },
};

let objstring = JSON.stringify(obj);
let objcopy = JSON.parse(objstring);

// Solution 2
let obj1 = {
  name: "John",
  age: 30,
  address: {
    local: "22 Alaknanda",
    city: "Dehradun",
    state: "UK",
  },
};

function superCloneEffective(input) {
  // Base case or edge cases.
  if (typeof input !== "object") {
    return input;
  }

  // Create a new container on the basis of type whether it is a array or object.
  if (Array.isArray(input)) {
    let objcopy = [];
  } else {
    let objcopy = {};
  }

  // Copy all the key and values.
  for (let key in input) {
    objcopy[key] = superCloneEffective(input[key]);
  }

  // return object after completion.
  return objcopy;
}

let obj1copy = superCloneEffective(obj1);

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      temp = flattenArray(arr[i]);
      for (let j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
