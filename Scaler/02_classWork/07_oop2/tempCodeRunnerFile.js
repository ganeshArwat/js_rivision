const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "f1.txt");
console.log("Before");
fs.readFile(filePath, function (err, data) {
  console.log("data: " + data);
})
console.log("After");