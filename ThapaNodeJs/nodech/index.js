const fs = require("fs");
fs.writeFileSync("read.txt", "i am diptanshu bhawsar");
fs.appendFileSync("read.txt", "going to buy car in 2023😍");
const data = fs.readFileSync("read.txt", "utf8");
console.log(data);
fs.renameSync("read.txt", "dipss.txt");
fs.unlinkSync("dipss.txt");
