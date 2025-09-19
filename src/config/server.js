const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const initServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));
    return app;
};

module.exports = initServer;