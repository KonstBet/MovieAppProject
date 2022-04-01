'use strict';

const User = require('../models/user.model');

exports.save = (req, res) => {
    const user = {
        email: req.query.email,
        password: req.query.password
    }

    User.create(user)
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
    const userinfo = {
        email: req.query.email,
        password: req.query.password
    }

    User.findOne(
        {
            where: userinfo
        })
        .then(user => {
            if (user === null)
                res.send("NOT FOUND!")
            else res.send(user)
        })
        .catch (err => {
        res.status(500).send({
            message:
                err.message
        });
    });
}