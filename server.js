const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(express.static(__dirname + "/public"));

let port = process.env.PORT ||3000;

app.listen(port, _ => console.log(`Server is running on port ${port}`));

app.get('/test', (req, res) => {
    res.json('Healthcheck succeeded');
});
