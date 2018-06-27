#!/usr/bin/env node

const app = require('./common/app');
const http = require('http');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);