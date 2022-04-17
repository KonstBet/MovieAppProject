'use strict';

const Bookmark = require('../models/bookmark.model');

exports.save = (req, res) => {
    const bookmark = {
        movieid: req.body.movieid,
        userid: req.user.id
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
        movieid: req.params.movieid,
        userid: req.user.id
    }

    Bookmark.findOne(
        {
            where: bookmark
        })
        .then(bookmark => {
            if (bookmark === null)
                res.status(404).send("NOT FOUND!")
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
            where: { userid: req.user.id}
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
        movieid: req.body.movieid,
        userid: req.user.id
    }

    Bookmark.delete(
        {
            where: bookmark
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