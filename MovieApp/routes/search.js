'use strict';
let express = require('express');
let router = express.Router();

const axios = require('axios');

let OMDBAPIkey = 'c62c98a6';

/* GET search results. */
router.get('/', function (req, res) {
    let title = req.query.title;

    axios.get('http://www.omdbapi.com/?apikey=' + OMDBAPIkey + '&s=' + title)
        .then((resp) => {
            res.send(resp.data.Search); //Search is a list of json
        });
});

router.get('/id/', function (req, res) {
    let id = req.query.imdbID;
    let Plot = req.query.plot

    axios.get('http://www.omdbapi.com/?apikey=' + OMDBAPIkey, {
        params: {
            i: id,
            plot: Plot
        }
    })
        .then((resp) => {
            res.send(resp.data);
        });
});

module.exports = router;
