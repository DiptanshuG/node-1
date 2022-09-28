const fs = require("fs");
// creating a new file

// fs.writeFileSync('diptanshu.txt','welcome to thapa technical fullstack to make diptanshu a full stack developer')

// fs.appendFileSync(
//   "diptanshu.txt",
//   "so see the progress now you  should be in touch with me"
// );

const blue = fs.readFileSync("diptanshu.txt");

// node js include an additional data type called buffer
//  not available in browser javascript)
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network
// console.log(blue);


org_data=blue.toString()
console.log(org_data);


fs.renameSync('diptanshu.txt','diptanshucoder.txt')