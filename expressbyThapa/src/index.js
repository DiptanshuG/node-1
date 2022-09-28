// capital use nahi karskte white giving name to express npm init
// const express = require("express");
// const path = require("path");
// const app = express();

// console.log(__dirname)
// console.log(path.join(__dirname, "../public"));

// THIS IS HOW WE CAN USE THIS MIDDLEWARE EXPRESS.STATIC AND GIVE NAME OF THE PATH OF OUR STATIC WEBSITE AND CONNECT IT TO NODE AND SENT DATA
// const staticPath = path.join(__dirname, "../public");

// builtin middleware
// app.use(express.static(staticPath));

// app.get(route,callback)
// app.get("/",(req,res))

// API
// get
// post
// put
// delete

// app.get("/", (req, res) => {
//   res.send("hell from diptanshu");
// });
// app.get("/about", (req, res) => {
//   res.send("hell from about");
// });
// app.listen(2000, () => {
//   console.log("listenting");
// });

// NOW MAKING PROJECT HTML CSS EXPRESSJS SERVE STATIC WEBSITE

const express = require("express");

const path = require("path");

const app = express();
const hbs = require("hbs");

console.log(path.join(__dirname, "/public"));
const staticpath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

const port = 8000;

// STATIC WEBSITE KO SERVE KARNE K LIYE SIRF ONE LINE OF CODE THAT IS MIDDLEWARE
//  BUILT IN MIDDLEWARE  EXPRESS.STATIC
// PATH SHOULD BE ABSOLUTE NOT RELATIVE(../../)

// toset the view engine
// we are using hbs view engines
// view folder is defined if we chage folder or directory name so error comes
//  we can change the name of the view directly by a function name app.set('view'to the path 'whrere youne new name exists')

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("hello from express server");
});

app.listen(8000, () => {
  console.log(`listening to the port ${port}`);
});
