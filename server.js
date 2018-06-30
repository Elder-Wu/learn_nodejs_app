#!/usr/bin/env node

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

//第三方中间件
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static files
app.use(express.static(path.join(process.cwd(), 'public')));

// view
app.set('views', path.join(process.cwd(), 'public'));
app.set('view engine', 'ejs');

//router
const indexRouter = require('./router/index');
app.use('/', indexRouter);
const usersRouter = require('./api/users');
app.use('/users', usersRouter);

// 404 中间件
app.use(function (req, res, next) {
    next()
});

//统一错误处理
app.use(function (err, req, res, next) {
    res.send(err.message)
});

const port = 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);