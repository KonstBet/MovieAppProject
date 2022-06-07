'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

let User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    type: Sequelize.STRING
});

User.sync().then(() => {
    console.log('New table created');
});

module.exports = User;