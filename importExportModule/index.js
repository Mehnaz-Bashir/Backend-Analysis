// const oper = require("./operator");

// console.log(oper(5,6)); // argument passed so add will be called

// console.log(oper); // no argument passed so name will be printed 

// console.log(oper.add(5,5));
// console.log(oper.sub(10,5));


// Other Way instead of using oper. again and again  
const { add, sub, mult, name} = require("./operator");

console.log(add(5, 6));
console.log(sub(15, 6));
console.log(mult(15, 6));
console.log(name);