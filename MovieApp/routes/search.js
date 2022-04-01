'use strict';
var express = require('express');
var router = express.Router();

const axios = require('axios');

let OMDBAPIkey = 'c62c98a6';

/* GET search results. */
router.get('/', function (req, res) {
    var type = req.query.movietype;

    axios.get('http://www.omdbapi.com/?apikey=' + OMDBAPIkey + '&s=' + type)
        .then((resp) => {
            res.send(resp.data);
        });
});

router.get('/id/', function (req, res) {
    var id = req.query.imdbID;

    axios.get('http://www.omdbapi.com/?apikey=' + OMDBAPIkey, {
        params: {
            i: id
        }
    })
        .then((resp) => {
            res.send(resp.data);
        });
});

module.exports = router;
