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
  const size = req.query.size;
  const state = req.query.state;
  const filters = ["%"+ search + "%"];
  let query = "SELECT * FROM usaproducts WHERE product_name ILIKE $1";
  if (size){
    query += "AND business_size = $" + (filters.length + 1);
    filters.push(size)
  }
  if (state){
    query += "AND state = $" + (filters.length + 1);
    filters.push(state);
  }
  pool.query(query, filters). then( (results) => {
  res.status(200);
  res.json(results.rows);
});

});

routes.get("/category/:category", function(req, res){
  const category = req.params.category;
  pool.query("SELECT * FROM usaproducts WHERE category ILIKE $1;", ["%"+ category + "%"]). then( (results) => {
    res.status(200);
    res.json(results.rows);
})

});


module.exports = routes