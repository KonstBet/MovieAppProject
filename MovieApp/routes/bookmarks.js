'use strict';
var express = require('express');
var router = express.Router();

//var usersdb = require('../db/usersdb');
var controller = require('../controllers/bookmark.controller')

router.get('/', controller.save);

router.get('/:movieid', controller.find)

router.get('/find', controller.findall)

router.get('/delete', controller.delete)

module.exports = router;