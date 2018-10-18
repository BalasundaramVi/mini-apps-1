const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/client/dist/')));

app.use(parser.json());
app.use(morgan('dev'));

port = 3001;
app.listen(port);
console.log(`Listening on port ${port}...`);

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/styles.css'));
})