'use strict';
var express = require('express');
var router = express.Router();
let authenticateJWT = require("./authentication.js")

//var usersdb = require('../db/usersdb');
var controller = require('../controllers/bookmark.controller')

router.post('/', authenticateJWT, controller.save);

router.get('/:movieid', authenticateJWT, controller.find)

router.get('/', authenticateJWT, controller.findall)

router.delete('/', authenticateJWT, controller.delete)

module.exports = router;