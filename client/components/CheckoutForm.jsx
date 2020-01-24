import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var buttonText = '< Back to catalog';

    return (
      <div className="container">
        <button className="btn btn-link" onClick={() => this.props.setView('catalog', {})}>{buttonText}</button>
        <div className="row justify-content-center">
          <h3>
            Checkout
          </h3>
        </div>
        <div className="form-group">
          <label htmlFor="usr">Name:</label>
          <input type="text" className="form-control" id="usr"/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Credit Card:</label>
          <input type="number" className="form-control" id="pwd"/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Shipping Address</label>
          <textarea className="form-control" id="pwd" />
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={() => this.props.setView('success', {})}>Place Order</button>
        </div>
      </div>
    );
  }
}
