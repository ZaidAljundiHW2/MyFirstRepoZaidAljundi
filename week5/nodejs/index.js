const express = require("express");
const mysql = require("mysql");
let port = 34521;
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const exp = require("constants");
dotenv.config({path:"./.env"});


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {

    if (error) {
        console.log("Error connecting to MySQL:", error);
    }

    else {
        console.log("Connected Successfully");
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"))

const publicDir = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.use(express.static(publicDir));

app.listen(port, (err) => {
    if (err) {
        console.log("Error");
    }

    else {
        console.log("Connected Successfully");
    }
});