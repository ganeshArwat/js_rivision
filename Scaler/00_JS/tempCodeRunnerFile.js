let jhon = {};

jhon.age = 25;
let arr = [jhon];
console.log("John 15", jhon);
// arr[0]=null;
jhon = null;
console.log("John 15", jhon);
console.log("John 17", arr[0]);