const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("hell from the other side");
  } else if (req.url == "/about") {
    res.end("hello frem the about side");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.writeHead(200, { "Content-type": "Application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>4040 page dones not exis</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
