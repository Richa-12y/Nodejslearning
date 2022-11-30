const express = require("express");
const app = express();

app.get("/students", (req, res) => {
  res.status(200).send({
    message: "Hello student",
  });
});

app.post("/students", (req, res) => {
  res.status(201).send({
    message: "student created",
  });
});

const cb1 = (req, res, next) => {
  console.log("first callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("second callback");
  next();
};
app.get("/movies", [cb1, cb2], (req, res) => {
  console.log("Multiple handlers");
  res.status(201).send({
    message: "Movies",
  });
});

/**
 * normally use of  all is bad praties
 */
app.all("/stud", (req, res) => {
  res.status(200).send({
    message: "Handle all type of request",
  });
});

app.listen(8000, () => {
  console.log("Server has started as a port no 8000");
});
