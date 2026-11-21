const fs = require("fs");

// fs.writeFile("read.txt", "Today is awesome day", (err)=>{
//     console.log("File is created");
//     console.log(err);
// });

// fs.appendFile("read.txt"," Node.js is fun", (err) =>{
//     console.log("task completed");
// });

fs.readFile("read.txt", "utf8", (err, data) =>{
    console.log(data);
});