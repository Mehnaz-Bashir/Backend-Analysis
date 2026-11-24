const fs = require("fs");

const bioData = {
    name : "Mehnaz Bashir",
    age : 24,
    course: "MCA",
};

//console.log(bioData.name);
const jsondata = JSON.stringify(bioData);
//console.log(jsondata);

// const objData = JSON.parse(jsondata);
// console.log(objData);

// fs.writeFile('json1.json',jsondata, (err) =>{
//     console.log("Done");
// });

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});