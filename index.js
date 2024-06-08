require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to Twitter!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running successfully at port${process.env.PORT}`);
});
