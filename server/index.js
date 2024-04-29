const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("../static"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("*", (req, res) => {
  res.sendFile("index.html");
});

app.post("/reg", (req, res) => {
  console.log("Request body: ", req.body);
  fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) => {
    if (err) res.status(500).send("Fail");
    else res.status(201).send("Success!");
  });
});
