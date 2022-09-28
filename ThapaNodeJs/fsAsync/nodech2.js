const fs = require("fs");

// folder
fs.mkdir("diptanshuu", (err) => {
  console.log("folder created");
});
// file
fs.writeFile("./diptanshuu/bio.txt", "my name is diptanshu coder ", (err) => {
  console.log(err);
});
// data append
fs.appendFile(
  "./diptanshuu/bio.txt",
  "my name is diptanshu coder  appender",
  (err) => {
    console.log(err);
  }
);
// reads
fs.readFile("./diptanshuu/bio.txt", "utf-8", (err, data) => {
  console.log(data);
});
// rename
fs.rename("./diptanshuu/bio.txt", "./diptanshuu/myybio.txt", (err) => {
  console.log(err);
});
// delete
fs.unlink("./diptanshuu/bio.txt", (err) => {
  console.log("deleted");
});
fs.rmdir("./diptanshuu", (err) => {
  console.log("foldeleted");
});
