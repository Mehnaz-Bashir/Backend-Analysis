const fs = require("fs");

//fs.writeFileSync("read.txt","Understand the difference between synchronous and asynchronous!");

// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data);
// console.log("hello synchronous! after data");

const data = fs.readFile("read.txt", "utf8", (err, data) => {
    console.log(data);
});
console.log("hello Asynchronous! before data");
