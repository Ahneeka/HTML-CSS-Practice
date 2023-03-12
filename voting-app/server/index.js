//dependencies

const express = require("express");
const express = require("fs"); // interact with json files
const express = require("path"); // it will be used to create a path to  a particular file

const app = express();
const datafile = path.join(__dirname, "data.json");

app.listen(3000, () => console.log("Server is running...."));
