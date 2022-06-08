'use strict';

const jwt = require("jsonwebtoken");
const JWT_SECRET = 'secretFromEnv';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.cookies.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, result) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = result.user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;