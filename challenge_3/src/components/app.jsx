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
        <div className ='cvv holder'>
          <span className='cvv title'>CVV:</span>
          <input type='text' id='cvv'></input>
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

var SummaryPage = ({name, email, password, street1, street2, city, state, zipcode, phonenumber, creditcard, expiry, cvv, billingzipcode}) => {
  return(
    <div id='summaryPage'>
      <h1>Order Summary</h1>
      <div className='inputs' id='summary'>
        <div className ='summary sName'>
          <span className='summary key t-name'>Name:</span>
          <span className='summary val s-name'>{name}</span>
        </div>
        <div className ='summary sEmail'>
          <span className='summary key t-email'>Email:</span>
          <span className='summary val s-email'>{email}</span>
        </div>
        <div className ='summary sPassword'>
          <span className='summary key t-password'>Password:</span>
          <span className='summary val s-password'>{password}</span>
        </div>
        <div className ='summary sStreet1'>
          <span className='summary key t-street1'>Street 1:</span>
          <span className='summary val s-street1'>{street1}</span>
        </div>
        <div className ='summary sStreet2'>
          <span className='summary key t-street2'>Street 2:</span>
          <span className='summary val s-street2'>{street2}</span>
        </div>
        <div className ='summary sCity'>
          <span className='summary key t-city'>City:</span>
          <span className='summary val s-city'>{city}</span>
        </div>
        <div className ='summary sState'>
          <span className='summary key t-state'>State:</span>
          <span className='summary val s-state'>{state}</span>
        </div>
        <div className ='summary sZipcode'>
          <span className='summary key t-zipcode'>Zip-Code:</span>
          <span className='summary val s-zipcode'>{zipcode}</span>
        </div>
        <div className ='summary sPhonenumber'>
          <span className='summary key t-phonenumber'>Phone Number:</span>
          <span className='summary val s-phonenumber'>{phonenumber}</span>
        </div>
        <div className ='summary sCreditcard'>
          <span className='summary key t-creditcard'>Credit Card #:</span>
          <span className='summary val s-creditcard'>{creditcard}</span>
        </div>
        <div className ='summary sExpiry'>
          <span className='summary key t-expiry'>Expiry Date:</span>
          <span className='summary val s-expiry'>{expiry}</span>
        </div>
        <div className ='summary scvv'>
          <span className='summary key t-cvv'>CVV:</span>
          <span className='summary val s-cvv'>{cvv}</span>
        </div>
        <div className ='summary sBillingzipcode'>
          <span className='summary key t-billingzipcode'>Billing Zip Code:</span>
          <span className='summary val s-billingzipcode'>{billingzipcode}</span>
        </div>
      </div>
      <h3 id='checkout' onClick={summaryNext}>Confirm</h3>
    </div>
  )
}

var SuccessPage = (props) => {
  return(
    <div id='successPage'>
      <h1>SUCCES!</h1>
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
  var cvv = document.getElementById('cvv').value;
  var billingzipcode = document.getElementById('billingzipcode').value;
  fetch('/F3Next', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      { "card": card,
        "expiry": expiry,
        "cvv": cvv,
        "billingzipcode": billingzipcode })
  }).then((data) => {
    return data.json();
  }).then((res) => {
    if (res === 'fail') {
      console.log('error');
      ReacttDOM.render(<Homepage />);
    } else {
      ReactDOM.render(
        <SummaryPage
        name={res.name}
        email={res.email}
        password={res.password}
        street1={res.street1}
        street2={res.street2}
        city={res.city}
        state={res.state}
        zipcode={res.zipcode}
        phonenumber={res.phonenumber}
        creditcard={res.creditcard}
        expiry={res.expiry}
        cvv={res.CVV}
        billingzipcode={res.billingzipcode} />,
        document.getElementById('app')
      )
    }
  });
}

var summaryNext = () => {
  fetch('/summaryNext', {
    method: 'GET'
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
  <Homepage />,
  document.getElementById('app')
)