const express = require("express");
const routes = express.Router();
const pool = require("./connections");

routes.get("/", function(req, res) {
    pool.query('SELECT * FROM usaproducts;'). then( (results) => {
    res.status(200);
    res.json(results.rows);
  });

});

routes.get("/:search", function(req, res) {
  const search = req.params.search;
  pool.query("SELECT * FROM usaproducts WHERE product_name ILIKE $1;", ["%"+ search + "%"]). then( (results) => {
  res.status(200);
  res.json(results.rows);
});

});

module.exports = routes