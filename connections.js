const { Pool } =
require("pg");
const credentials = new 
Pool({
    user: "bvdyskfvnwitpw",
    password: "c1fb11b1ebd4efba0c8bddbcc0af8e8744d31b4f1fb6ca683d5df852ff800189",
    host: "localhost",
    port: 5432,
    database: "da3k6o5k4pli1m",
    ssl: false
});

module.exports = credentials;