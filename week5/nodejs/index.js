const { error } = require("console");
const express = require("express");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const exp = require("constants");
dotenv.config({path:".env"});

app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/register", (req, res) => {
    res.render("register.hbs");
});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {

    if (err) {
        console.log("Error connecting to MySQL:", err);
    }

    else {
        console.log("Connected Successfully");
    }
});

const publicDir = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.use(express.static(publicDir));

app.listen(5001, ()=> {
    console.log("Listening on port 5001");
});