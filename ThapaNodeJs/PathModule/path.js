const path = require("path");
console.log(path.dirname("D:/THAPATNODE/PathModule/path.js"));
console.log(path.extname("D:/THAPATNODE/PathModule/path.js"));
console.log(path.basename("D:/THAPATNODE/PathModule/path.js"));

const myPath=path.parse("D:/THAPATNODE/PathModule/path.js")
console.log(myPath.root)