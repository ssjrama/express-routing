const express = require("express");
const route = require("./router");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", route);

app.get("/", (req, res) => {
  res.end("Routing App");
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
