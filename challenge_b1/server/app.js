const express = require('express');

const path = require('path');
const favicon = require('serve-favicon');

// MIDDLEWARE
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(favicon(path.join(__dirname, '../client/assets/Checkers_Icon.png')));

module.exports = app;
