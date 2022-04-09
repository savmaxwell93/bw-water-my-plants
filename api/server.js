const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'something went wrong',
        message: err.message
    })
})

module.exports = server;