'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

let Bookmark = sequelize.define('Bookmarks', {
    imdbID: Sequelize.INTEGER,
    userid: Sequelize.INTEGER
});

Bookmark.sync().then(() => {
    console.log('New table created');
});

module.exports = Bookmark;