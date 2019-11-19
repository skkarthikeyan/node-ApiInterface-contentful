const express = require('express');
const app = express();
const routes = require('./routes/route');
require("babel-polyfill");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on port: "+PORT);
});

app.use("/api", routes);