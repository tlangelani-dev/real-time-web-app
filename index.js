'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const PORT = process.env.HTTP_PORT;

// middlewares
app.use(morgan('combined'));

app.get('/', (req, res) => {
    console.log(req, res);
    res.send('Listing Categories!');
});

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
