const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;

var app = express();

app.use(express.static('./public'));

app.use(parser.json());
app.use(morgan('dev'));

const port = 3000;
app.listen(port);
console.log(`Express server listening on port ${port}...`);

/****************** MONGODB CONNECTION ***********************/

var id;
var url = 'mongodb://localhost:27017/checkout';
mongoose.connect(url, (err, connect) => {
  if(!err) {
    console.log('Connection established...');
  }
});

var checkoutSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  street1: String,
  street2: String,
  city: String,
  state: String,
  zipcode: Number,
  phonenumber: Number,
  creditcard: Number,
  expiry: String,
  CVV: Number,
  billingzipcode: Number
})

var Checkout = mongoose.model('Checkout', checkoutSchema);


/****************** SEND INITIAL FILES FOR MAIN PAGE ***********************/
app.get('/compiled/src/components/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/compiled/src/components/app.js'));
})
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/styles.css'));
})

/****************** PAGE REQUESTS ***********************/
app.get('/homepageNext', (req, res) => {
  newCheckout = new Checkout();
  id = newCheckout._id;
  newCheckout.save((err) => {
    if (err) {
      console.log(err);
    }
  })
  res.send('F1');
})

app.post('/F1Next', (req, res) => {
  Checkout.findOneAndUpdate({_id: id}, {name: req.body.name, email: req.body.email, password: req.body.password}, (err, checkout) => {
    if(err) {
      console.log(err);
    }
  })
  res.send('success');
})

app.post('/F2Next', (req, res) => {
  Checkout.findOneAndUpdate({_id: id}, {street1: req.body.street1, street2: req.body.street2, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode, phonenumber: req.body.phonenumber }, (err, checkout) => {
    if(err) {
      console.log(err);
    }
  })
  res.send('success');
})

app.post('/F3Next', (req, res) => {
  Checkout.findOneAndUpdate({_id: id}, {creditcard: req.body.card, expiry: req.body.expiry, CVV: req.body.cvv, billingzipcode: req.body.billingzipcode}, (err, checkout) => {
    if(err) {
      console.log(err);
    }
  })
  Checkout.findById(id, (err, checkout) => {
    if (err) {
      console.log(err);
      res.send('fail');
    } else {
      res.send(checkout);
    }
  })
})

app.get('/summaryNext', (req, res) => {
  res.send('success');
})

app.get('/successNext', (req, res) => {
  res.send('success');
})