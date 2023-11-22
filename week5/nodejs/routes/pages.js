const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("index.hbs")
})

router.get("/signup", (req, res) => {
    res.render("signup.hbs");
});

module.exports = router;

