'use strict';

const Bookmark = require('../models/bookmark.model');

exports.save = (req, res) => {
    const bookmark = {
        movieid: req.query.movieid,
        userid: req.query.userid
    }

    Bookmark.create(bookmark)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
}

exports.find = (req, res) => {
    const bookmark = {
        movieid: req.query.movieid,
        userid: req.query.userid
    }

    Bookmark.findOne(
        {
            where: userinfo
        })
        .then(bookmark => {
            if (bookmark === null)
                res.send("NOT FOUND!")
            else res.send(bookmark)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
}

exports.findall = (req, res) => {
    Bookmark.findAll(
        {
            where: { userid: req.query.userid}
        })
        .then(bookmarks => {
            if (bookmarks === null)
                res.send("NOT FOUND!")
            else res.send(bookmarks)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
}

exports.delete = (req, res) => {
    const bookmark = {
        movieid: req.query.movieid,
        userid: req.query.userid
    }

    Bookmark.delete(
        {
            where: userinfo
        })
        .then(user => {
            if (user === null)
                res.send("NOT FOUND!")
            else res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
}