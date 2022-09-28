const fs = require("fs");
// const data =fs.readFileSync('shiva.txt','utf-8');
// console.log(data)

fs.readFile("shiva.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("after the dataS");
fs.appendFile("shiva.txt", "shia is my gsss", (err, data) => {
  console.log(data);
});
