const express = require('express');
const app = express();
const routes = require('./routes/route');
require("babel-polyfill");

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});

app.use("/api", routes);