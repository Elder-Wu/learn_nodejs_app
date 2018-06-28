const createError = require('http-errors');
const express = require('express');
const path = require('path');
const utils = require("./utils")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static files
app.use(express.static(path.join(process.cwd(), 'public')));

// view
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

//router
const indexRouter = require('../router/form/index');
app.use('/', indexRouter);
const usersRouter = require('../router/api/users');
app.use('/users', usersRouter);


app.use(function (req, res, next) {
    next(createError(404));
});


app.use(function (err, req, res, next) {
    const options = {
        message: err.message,
        statusCode: err.statusCode || 500,
        stack: utils.isDevMode() ? err.stack : undefined
    }
    res.render('error', options);
});

module.exports = app;
