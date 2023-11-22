const mysql = require ("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.signup = (req, res) => {
    console.log(req.body);

    const {name, email, password, passwordConfirm} = req.body;

    db.query("SELECT email FROM table1 WHERE email = ?", [email], async(error, result) => {
        
        if (error) {
            console.log(error);
        }

        if (result.length > 0) {
            return res.render("signup"), {
                message: "This email is already taken..."
            }
        }

        else if (password !== passwordConfirm) {
            return res.render("signup", {
                message: "Passwords don't match."
            })
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query("INSERT INTO table1 SET ?", {username: name, email:email, password:hashedPassword}, (error)=> {
            if (error) {
                console.log(error);
            }

            else {
                console.log(result);
                return res.render("signup", {
                    message:"User registered"
                });
            }
        })

        res.send("form submitted.");
    })

    
};