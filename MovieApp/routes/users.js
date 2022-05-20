'use strict';
let express = require('express');
let router = express.Router();
let authenticateJWT = require("./authentication.js")

//let usersdb = require('../db/usersdb');
let controller = require('../controllers/user.controller')

router.post('/register', controller.save);

router.post('/login', controller.find);

router.get("/logout", authenticateJWT, (req, res) => {
    return res
        .clearCookie("authorization")
        .status(200)
        .redirect("/")
});

module.exports = router;
