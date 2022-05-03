'use strict';
let express = require('express');
let router = express.Router();

//let usersdb = require('../db/usersdb');
let controller = require('../controllers/user.controller')

router.post('/signup', controller.save);

router.post('/login', controller.find)

module.exports = router;
