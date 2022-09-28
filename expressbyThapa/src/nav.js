// routing with express

// www.diptanshu.com-welcome to diptanshu

// /about -about diptanshu
// /contact-about contect
// /temp-about temperature

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // ksese html data pass kar skte hain
  res.write("<h1>Welcom<h1/>");
  res.write("<h1>Welcom<h1/>");
  res.send();
});
app.get("/about", (req, res) => {
  res.status(200).send("about");
});
app.get("/contact", (req, res) => {
  res.status(200).send("contact");
});
app.get("/temp", (req, res) => {
  // kese json data pass kar skte hain routing mein
  res.status(200).send([
    {
      id: 1,
      name: "diptanshu",
    },
    {
      id: 1,
      name: "diptanshu",
    },
    {
      id: 1,
      name: "diptanshu",
    },
  ]);
});
app.listen(port, () => {
  console.log(`listening to the port no ${port}`);
});
// import tant point to understand

// the method are identical when an object or array is passsed but res.json will also convert non objects,such as null and undefined ,which are not valid json

// ROUTING BHI MIDDLEWARE HI HAI
// req aur response k bich me jo v kuch ho r h ye sab dkhna middleware ka kaam hai