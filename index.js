'use strict';

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('dotenv').config();
const PORT = process.env.HTTP_PORT;

// middlewares
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    socket.on('new message', message => {
        socket.broadcast.emit('new message', message);
    });
});

server.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
