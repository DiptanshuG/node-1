const EventEmitter = require("events");

const event = new EventEmitter();

event.on("ssssss", (sc, msg) => {
  console.log(`statuc code is ${sc} and msg is ${msg}`);
});
// event.on('ssssss',()=>{
//     console.log('your name is sing')
// })
// event.on('ssssss',()=>{
//     console.log('your name is music')
// })
// event.on('ssssss',()=>{
//     console.log('your name is and')
// })
// event.on('ssssss',()=>{
//     console.log('your name is ths')
// })
event.emit("ssssss", 200, "ok");
