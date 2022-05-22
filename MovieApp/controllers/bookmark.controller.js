'use strict';

const Bookmark = require('../models/bookmark.model');

exports.save = (req, res) => {
    const bookmark = {
        imdbID: req.body.imdbID,
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
        imdbID: req.params.imdbID,
        userid: req.user.id
    }

    Bookmark.findOne(
        {
            where: bookmark
        })
        .then(bookmark => {
            if (bookmark === null)
                res.status(404).send("NOT FOUND!")
            else res.status(200).send(bookmark)
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
                res.status(404).send("NOT FOUND!")
            else res.status(200).send(bookmarks)
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
        imdbID: req.body.imdbID,
        userid: req.user.id
    }

    Bookmark.destroy(
        {
            where: bookmark
        })
        .then(user => {
            console.log(user)
            if (user === null)
                res.status(404).send("NOT FOUND!")
            else res.status(200)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
}