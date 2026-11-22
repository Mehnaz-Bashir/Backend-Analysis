// IIFE in js  here it is called module wrapper function

console.log("Inside index.js");

const oper = require("./operator");

console.log(oper.add(5, 6));
console.log(oper.name);

console.log(__filename);
console.log(__dirname);