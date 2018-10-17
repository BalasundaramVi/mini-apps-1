const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const fs = require('file-system');
var Generator = require('./controller');

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
});


/******************** GETS THE INFORMATION ********************/
app.post('/', (req, res) => {
  var data = new Generator(req.body);
  res.send(JSON.stringify(data));
});

/*************** ALLOWS THE USER TO DOWNLOAD THE FILE ***************/
app.post('/download', (req, res) => {
  fs.writeFile(path.join(__dirname, `/downloads/report.csv`), req.body.data, (err) => {
    if (err) {
      console.log('Unable to write file');
    }
  });
  res.end();
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, './downloads/report.csv'), 'report.csv', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success downloading');
    }
  });
})