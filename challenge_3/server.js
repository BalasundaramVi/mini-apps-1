const express = require('express');
const path = require('path');

var app = express();

app.use(express.static('./public'));

const port = 3000;
app.listen(port);
console.log(`Express server listening on port ${port}...`);


app.get('/compiled/src/index.js', (req,res) => {
  res.sendFile(path.join(__dirname, '/compiled/src/index.js'));
})

app.get('/compiled/src/components/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/compiled/src/components/app.js'));
})