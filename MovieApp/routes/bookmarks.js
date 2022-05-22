'use strict';
let express = require('express');
let router = express.Router();
let authenticateJWT = require("./authentication.js")

//let usersdb = require('../db/usersdb');
let controller = require('../controllers/bookmark.controller')

router.post('/', authenticateJWT, controller.save);

router.get('/:imdbID', authenticateJWT, controller.find)

router.get('/', authenticateJWT, controller.findall)

router.delete('/', authenticateJWT, controller.delete)

module.exports = router;