const express = require('express');
const path = require('path');

var app = express();

app.use(express.static('./public'));

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

app.get('/F1Next', (req, res) => {
  res.send('success');
})

app.get('/F2Next', (req, res) => {
  res.send('success');
})

app.get('/F3Next', (req, res) => {
  res.send('success');
})

app.get('/successNext', (req, res) => {
  res.send('success');
})