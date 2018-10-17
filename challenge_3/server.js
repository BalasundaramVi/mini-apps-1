const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');

var app = express();

app.use(express.static('./public'));

app.use(parser.json());
app.use(morgan('dev'));

const port = 3000;
app.listen(port);
console.log(`Express server listening on port ${port}...`);


/****************** SEND INITIAL FILES FOR MAIN PAGE ***********************/
app.get('/compiled/src/components/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/compiled/src/components/app.js'));
})
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/styles.css'));
})

/****************** PAGE REQUESTS ***********************/
app.get('/homepageNext', (req, res) => {
  res.send('F1');
})

app.post('/F1Next', (req, res) => {
  console.log(req.body);
  res.send('success');
})

app.post('/F2Next', (req, res) => {
  console.log(req.body);
  res.send('success');
})

app.post('/F3Next', (req, res) => {
  console.log(req.body);
  res.send('success');
})

app.get('/successNext', (req, res) => {
  res.send('success');
})