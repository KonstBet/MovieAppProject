'use strict';
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'secretFromEnv';

const User = require('../models/user.model');

exports.save = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
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
        email: req.body.email,
        password: req.body.password
    }

    User.findOne(
        {
            where: userinfo
        })
        .then(user => {
            if (user === null)
                res.status(404).send("NOT FOUND!")

            else {
                let accessToken = jwt.sign({ user: user }, JWT_SECRET, {expiresIn: '1d'})

                res.json(
                    {
                        user: user,
                        token: accessToken
                    }
                )
            }
        })
        .catch (err => {
        res.status(500).send({
            message:
                err.message
        });
    });
}