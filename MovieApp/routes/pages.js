'use strict';
let express = require('express');
const authenticateJWT = require("./authentication");
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var loggedIn = false
    if (req.cookies.authorization !== undefined)
        loggedIn = true
    res.render("index", { loggedIn: loggedIn} );
});

router.get('/bookmarks', authenticateJWT, function (req, res) {
    var loggedIn = false
    if (req.cookies.authorization !== undefined)
        loggedIn = true
    res.render("bookmarks", { loggedIn: loggedIn} );
});

router.get('/login', function (req, res) {
    var loggedIn = false
    if (req.cookies.authorization !== undefined)
        res.sendStatus(401)
    else res.render("login", { loggedIn: loggedIn} );
});

router.get('/register', function (req, res) {
    var loggedIn = false
    if (req.cookies.authorization !== undefined)
        res.sendStatus(401)
    else res.render("register", { loggedIn: loggedIn} );
});

module.exports = router;
