'use strict';
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'secretFromEnv';

const User = require('../models/user.model');

exports.save = (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        type: "basic"
    }

    User.create(user)
        .then(data => {
            res.sendStatus(200);
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
        password: req.body.password,
        type: "basic"
    }

    User.findOne(
        {
            where: userinfo
        })
        .then(user => {
            if (user === null) {
                res.status(404).send("NOT FOUND!")
            }
            else {
                let accessToken = jwt.sign({ user: user }, JWT_SECRET, {expiresIn: '1d'})

                res.cookie("authorization", 'Bearer '+accessToken, {
                        maxAge: 3600000
                    }).sendStatus(200)
            }
        })
        .catch (err => {
        res.status(500).send({
            message:
                err.message
        });
    });
}

//----------------------------------------------------------
//----------------------------------------------------------

exports.saveAuthAccount = (username, email, type) => {
    const user = {
        username: username,
        email: email,
        type: type
    }

    return User.create(user)
        .then(data => {
            return true;
        })
        .catch(_ => {
            return false;
        });
}

exports.findAuthAccount = (username, email, type) => {

    const userinfo = {
        username: username,
        email: email,
        type: type
    }

    return User.findOne(
        {
            where: userinfo
        })
        .then(user => {
            if (user === null) {
                return undefined;
            }
            let accessToken = jwt.sign({user: user}, JWT_SECRET, {expiresIn: '1d'})
            return accessToken;
        })
        .catch(_ => {
            return undefined;
        });
}