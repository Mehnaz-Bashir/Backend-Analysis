const fs = require("fs");


// fs.mkdir("mehnaz", (err) =>{
//     console.log("Folder created");
// });

// fs.writeFile("mehnaz/bio.txt", "Hello this is Asyn file! ", (err) =>{
//     console.log("File ceated");
// });

// fs.appendFile("mehnaz/bio.txt", " Learning is Fun!", (err) => {
//     console.log("data appended!");
// });

// fs.readFile("mehnaz/bio.txt", "utf8", (err, data) => {
//     console.log(data);
// });

// fs.rename("mehnaz/bio.txt", "mehnaz/myBio.txt", (err) =>{
//     console.log("rename done!")
// });

// fs.unlink("mehnaz/myBio.txt", (err) =>{
//     console.log("File deleted!");
// });

fs.rmdir("mehnaz", (err) =>{
    console.log("folder deleted");
});