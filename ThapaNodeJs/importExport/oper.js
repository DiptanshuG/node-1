const add = (a, v) => {
  return a + v;
};
const sub = (a, v) => {
  return a - v;
};
const name = "diptanshu";
// how can we write it im one line
// module.exports.add = add;
// module.exports.sub = sub;
module.exports = { add, sub, name };
