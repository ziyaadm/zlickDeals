import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var buttonText = '< Back to catalog';

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-link" onClick={() => this.props.setView('catalog', {})}>{buttonText}</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            Full Name: <input type="text" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            Credit Card Number: <input type="number" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            Shipping Address: <input type="text" />
          </div>
        </div>
        <button type="button" className="btn btn-primary">Place Order</button>
      </div>
    );
  }
}
