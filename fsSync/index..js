const fs = require('fs');
// creating a new file
//fs.writeFileSync('read.txt', "welcome to nodeJs");
//fs.writeFileSync('read.txt', "Hey welcome to nodeJs"); 
//fs.appendFileSync("read.txt"," learning backend concepts!");


//Buffer data
// const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

// Node .js includes an additional data type called Buffer (not avalable in browser.s javaScript).
// Buffer is mainly used to store binary data.
// while reading from a file or receiving packets over the network.

// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readWrite.txt");
