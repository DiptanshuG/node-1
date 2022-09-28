const fs = require("fs");
// fs.mkdir('shiva.txt')
// asynchronouse is all about callbacks only
fs.writeFile("shiva.txt", "tpdau os the awesome day", (err) => {
  console.log("file is created");
  console.log(err);
});

fs.appendFile("shiva.txt", "my challeo", (err) => {
  console.log("task addded");
});

fs.readFile("shiva.txt", "utf-8", (err, res) => {
  console.log(res);
});
