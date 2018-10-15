const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const engines = require('consolidate');

var app = express();
app.engine('html', engines.mustache);

app.use(morgan('dev'));
app.use(parser.json());

var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}...`)

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/../index.html'));
})

app.get('/app.js', (req,res) => {
  res.sendFile(path.join(__dirname, '../app.js'));
})

app.get('/styles.css', (req,res) => {
  res.sendFile(path.join(__dirname, '../styles.css'));
})