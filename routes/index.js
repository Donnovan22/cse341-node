const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Main Page");
})

routes.use("/names", require("./names"));

routes.use("/contacts", require("./contacts"));

module.exports = routes;
