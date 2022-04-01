'use strict';
var express = require('express');
var router = express.Router();

//var usersdb = require('../db/usersdb');
var controller = require('../controllers/user.controller')

router.get('/', controller.save);

router.get('/', controller.find)

module.exports = router;
