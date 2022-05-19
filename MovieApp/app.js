'use strict';
let debug = require('debug')('my express app');
let express = require('express');
let path = require('path');
// let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let pages = require('./routes/pages');
let users = require('./routes/users');
let bookmarks = require('./routes/bookmarks');
let search = require('./routes/search');

let app = express();

// view engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pages);
app.use('/user', users);
app.use('/search', search);
app.use('/bookmark', bookmarks);

console.log(__dirname)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.set('port', 3000);

let server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
