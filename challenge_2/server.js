const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

app = express();
app.use(express.static('./client'));

app.use(parser.json());
app.use(morgan('dev'));

port = 3000;
app.listen(port);
console.log(`CSV istening on port ${port}...`);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, './client/index.html'));
});

app.get('/styles.css', (req,res) => {
  res.sendFile(path.join(__dirname, '/client/styles.css'))
})

app.post('/', (req, res) => {
  console.log(req.body.data);
  res.end();
})