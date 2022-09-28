const fs = require("fs");
const http = require("http");

const server = http.createServer();
// 1st method
// server.on("request", (req, res) => {
//   var fs = require("fs");
//   fs.readFile("input.txt", function (err, data) {
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });
// server.listen(8000, "127.0.0.1");
server.on("request", (req, res) => {

    // 2nd
  //   const rstream = fs.createReadStream("input.txt");

  //   rstream.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

//   3rdd
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
