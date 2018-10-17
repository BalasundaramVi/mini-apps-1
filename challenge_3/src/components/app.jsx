var Homepage = () => {
  return(
    <div id='homepage'>
      <h1>Shopping Cart</h1>
      <img src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4910c787e5c5a31049583e85aa109c80&auto=format&fit=crop&w=1950&q=80'></img>
      <h3 id='checkout' onClick={homepageNext}>CHECKOUT</h3>
    </div>
  )
}

// FORM PAGES /////////////////////////////////

var F1 = (props) => {
  return(
    <div id='F1'>
      <h1>Step 1</h1>
      <div className='inputs'>
        <h2>Please fill in your information below:</h2>
        <div className ='name holder'>
          <span className='n title'>Name:</span>
          <input type='text' id='name' required></input>
        </div>
        <div className ='email holder'>
          <span className='e title'>Email:</span>
          <input type='text' id='email'></input>
        </div>
        <div className ='password holder'>
          <span className='p title'>Password:</span>
          <input type='text' id='password'></input>
        </div>
      </div>
      <h3 id='checkout' onClick={F1Next}>NEXT</h3>
    </div>
  )
}

var F2 = (props) => {
  return(
    <div id='F2'>
      <h1>Step 2</h1>
      <div className='inputs'>
        <h2>Please fill in your delivery information below:</h2>
        <div className ='address1 holder'>
          <span className='street1 title'>Street 1:</span>
          <input type='text' id='addressline1' placeholder='line 1'></input>
        </div>
        <div className ='address2 holder'>
          <span className='street2 title'>Street 2:</span>
          <input type='text' id='addressline2' placeholder='line 2'></input>
        </div>
        <div className ='city holder'>
          <span className='city title'>City:</span>
          <input type='text' id='city'></input>
        </div>
        <div className ='state holder'>
          <span className='state title'>State:</span>
          <input type='text' id='state'></input>
        </div>
        <div className ='zipcode holder'>
          <span className='zipcode title'>Zip Code:</span>
          <input type='text' id='zipcode'></input>
        </div>
        <div className ='phonenumber holder'>
          <span className='phonenumber title'>Phone Number:</span>
          <input type='text' id='phonenumber'></input>
        </div>
      </div>
      <h3 id='checkout' onClick={F2Next}>NEXT</h3>
    </div>
  )
}

var F3 = (props) => {
  return(
    <div id='F3'>
      <h1>Step 3</h1>
      <div className='inputs'>
        <h2>Please fill in your credit card information below:</h2>
        <div className ='creditcard holder'>
          <span className='creditcard title'>Card #:</span>
          <input type='text' id='creditcard'></input>
        </div>
        <div className ='expiry holder'>
          <span className='expiry title'>Expiry Date:</span>
          <input type='text' id='expiry'></input>
        </div>
        <div className ='CVV holder'>
          <span className='CVV title'>CVV:</span>
          <input type='text' id='CVV'></input>
        </div>
        <div className ='billingzipcode holder'>
          <span className='billingzipcode title'>Billing Zip Code:</span>
          <input type='text' id='billingzipcode'></input>
        </div>
      </div>
      <h3 id='checkout' onClick={F3Next}>NEXT</h3>
    </div>
  )
}

var SuccessPage = (props) => {
  return(
    <div id='SuccessPage'>
      <h1>SUCCESS!</h1>
      <div className='inputs' id='success'>
        <h2>Your order has been placed!</h2>
      </div>
      <h3 id='checkout' onClick={successNext}>Home</h3>
    </div>
  )
}


// REQUESTS TO SERVER /////////////////////////////////
var homepageNext = () => {
  fetch('/homepageNext', {
    method: 'get'
  }).then((res) => {
    ReactDOM.render(
      <F1 />,
      document.getElementById('app')
    )
  });
}

var F1Next = () => {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  fetch('/F1Next', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"name": name, "email": email, "password": password})
  }).then((res) => {
    ReactDOM.render(
      <F2 />,
      document.getElementById('app')
    )
  });
}

var F2Next = () => {
  var street1 = document.getElementById('addressline1').value;
  var street2 = document.getElementById('addressline2').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zipcode = document.getElementById('zipcode').value;
  var phonenumber = document.getElementById('phonenumber').value;
  fetch('/F2Next', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
    { "street1": street1,
      "street2": street2,
      "city": city,
      "state": state,
      "zipcode": zipcode,
      "phonenumber": phonenumber })
  }).then((res) => {
    ReactDOM.render(
      <F3 />,
      document.getElementById('app')
    )
  });
}

var F3Next = () => {
  var card = document.getElementById('creditcard').value;
  var expiry = document.getElementById('expiry').value;
  var CVV = document.getElementById('CVV').value;
  var billingzipcode = document.getElementById('billingzipcode').value;
  fetch('/F3Next', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      { "card": card,
        "expiry": expiry,
        "CVV": CVV,
        "billingzipcode": billingzipcode })
  }).then((res) => {
    ReactDOM.render(
      <SuccessPage />,
      document.getElementById('app')
    )
  });
}

var successNext = () => {
  fetch('/successNext', {
    method: 'GET'
  }).then((res) => {
    ReactDOM.render(
      <Homepage />,
      document.getElementById('app')
    )
  });
}


// RENDER THE APP TO THE DOM //////////////////////////

ReactDOM.render(
  <F3 />,
  document.getElementById('app')
);