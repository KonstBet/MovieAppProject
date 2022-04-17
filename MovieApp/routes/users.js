'use strict';
var express = require('express');
var router = express.Router();

//var usersdb = require('../db/usersdb');
var controller = require('../controllers/user.controller')

router.post('/signup', controller.save);

router.post('/login', controller.find)

module.exports = router;
