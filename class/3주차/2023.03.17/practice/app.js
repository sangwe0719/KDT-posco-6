const response = require("express");
const express = require("express");
const app = express();

const port = 7777;

app.set("view engine", "ejs");

app.set("/selector", "views");
app.use("/selector", express.static(__dirname + "/selector"));

app.get("/", function (request, response) {
  response.render("test");
});

app.listen(port, () => {
  console.log(port + "is open!");
});
