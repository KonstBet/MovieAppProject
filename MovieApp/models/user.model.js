'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

let User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    type: Sequelize.STRING
});

User.sync().then(() => {
    console.log('New table created');
});

module.exports = User;