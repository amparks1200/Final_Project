const { Pool } =
require("pg");
const credentials = new 
Pool({
    user: "bvdyskfvnwitpw",
    password: "",
    host: "ec2-54-89-49-242.compute-1.amazonaws.com",
    port: 5432,
    database: "da3k6o5k4pli1m",
    ssl: {rejectUnauthorized: false}
});

module.exports = credentials;