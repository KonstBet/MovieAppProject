'use strict';
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render("index");
});

router.get('/bookmarks', function (req, res) {
    res.render("bookmarks");
});

router.get('/login', function (req, res) {
    res.render("login");
});

module.exports = router;
