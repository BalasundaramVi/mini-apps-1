class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purchases: []
    }
  }

  render() {
    return(
      <div id='homepage'>
        <h1>Shopping Cart</h1>
        <img src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4910c787e5c5a31049583e85aa109c80&auto=format&fit=crop&w=1950&q=80'></img>
        <h3 id='checkout'>CHECKOUT</h3>
      </div>
    )
  }
}

// RENDER THE APP TO THE DOM //////////////////////////

ReactDOM.render(
  <App />,
  document.getElementById('app')
);