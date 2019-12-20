import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.setView('catalog', {})}>Back to Catalog</button>
        Full Name: <input type="text"/>
        Credit Card Number: <input type="number"/>
        Shipping Address: <input type="text"/>
        <button>Place Order</button>
      </div>
    );
  }
}
