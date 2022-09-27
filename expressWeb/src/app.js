const express = require("express");
const app = express();
const path = require("path");
// process.env.PORT ||
const port = 2000 || process.env.PORT;

// public static path
// console.log(path.join(__dirname, "../public"));
const staticPath=path.join(__dirname, "../public")
app.use(express.static(staticPath));

// ROUTING
app.get("/", (req, res) => {
  res.send("welcomet o diptanshu bhawsar");
});
app.get("/about", (req, res) => {
  res.send("welcomet o diptanshu about bhawsar");
});
app.get("/weather", (req, res) => {
  res.send("welcomet o diptanshu weather bhawsar");
});
app.get("*", (req, res) => {
  res.send("404 OOPs Not found");
});

app.listen(port, () => {
  console.log("working");
});
