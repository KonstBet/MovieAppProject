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
            res.header("aaa").set
            res.status(200).send(data);
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
            if (user === null) {
                console.log("IMHERE")
                res.status(404).send("NOT FOUND!")

            }

            else {
                let accessToken = jwt.sign({ user: user }, JWT_SECRET, {expiresIn: '1d'})

                res.status(200)
                    .cookie("authorization", 'Bearer '+accessToken, {
                        maxAge: 3600000
                    })
                    .json(
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