const express = require("express");
const body_parser = require("body-parser");
const sequelize = require("sequelize");
require("dotenv/config");
const port = process.env.APPLICATION_PORT || 3000;

// Create express app
const app = express();

// Create db connection
const conn = new sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

conn
    .authenticate()
    .then(() => {
        console.log("Connection to database has been established successfully");
    })
    .catch(err => {
        console.error("Unable to connect to database", err);
    })

// Import routes
const index_routes = require("./routes/index_routes");

app.use(body_parser.json());
app.use("/", index_routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});