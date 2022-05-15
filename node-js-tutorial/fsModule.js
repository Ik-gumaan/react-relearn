const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err,data)=>{
// console.log("ERR==>",err,"DATA====>",data);
// });

// const a=fs.readFileSync('file.txt');

// console.log(a.toString());
// console.log("Finish Reading File");

// fs.writeFile('file2.txt','THIS IS DATA',()=>{
//     console.log("Written");
//     });


const b = fs.writeFileSync('file2.txt', 'THIS IS DATA');
console.log(b);
console.log("Finish Writing File");
