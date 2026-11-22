const add = (a, b) => {
    return a + b;
};

const name = "Mehnaz";

console.log("Inside operator.js");

console.log(__filename);
console.log(__dirname);

module.exports = { add, name };