const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
var Generator = require('./controller');
const fs = require('fs');

app = express();
app.use(express.static('./client'));

app.use(parser.json());
app.use(morgan('dev'));

port = 3000;
app.listen(port);
console.log(`CSV istening on port ${port}...`);

/********************* RENDERS THE PAGE *********************/
app.get('/', (req, res) => {
  res.render(path.join(__dirname, './client/index.html'));
});

app.get('/styles.css', (req,res) => {
  res.sendFile(path.join(__dirname, '/client/styles.css'))
})


/******************** GETS THE INFORMATION ********************/
app.post('/', (req, res) => {
  var data = new Generator(req.body);
  res.send(JSON.stringify(data));
})