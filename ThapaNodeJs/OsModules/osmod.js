const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.tmpdir());
console.log(os.type());

const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024 / 1024}`);
const total = os.totalmem();
console.log(`${total / 1024 / 1024 / 1024}`);
