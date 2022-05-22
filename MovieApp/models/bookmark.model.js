'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

//const User = require('./user.model');

let Bookmark = sequelize.define('Bookmarks', {
    imdbID: Sequelize.INTEGER,
    userid: Sequelize.INTEGER
});

Bookmark.sync().then(() => {
    console.log('New table created');
});

/*User.hasMany(Bookmark);
Bookmark.belongsTo(User);*/

module.exports = Bookmark;