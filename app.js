const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("app is on the dashboard web page");
});

app.get("/test", (req, res) => {
  res.send("app is on the test web page");
});

app.get("/hello", (req, res) => {
  res.send("app is on the hello web page");
});

app.listen(3000, () => {
  console.log("app is working on port");
});
