const express = require("express");
const routes = express.Router();
const pool = require("./connections");

routes.get("/", function(req, res) {
    pool.query('SELECT * FROM usaproducts;'). then( (results) => {
    res.status(200);
    res.json(results.rows);
  });

});

module.exports = routes