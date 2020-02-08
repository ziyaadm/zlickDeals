import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
    this.success = this.success.bind(this);
  }

  sendInfos() {
    const sendValue = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendValue)
    });
    this.props.setEmptyCart();
    this.props.setView('success');
  }

  success() {
    this.props.setView('success');
  }

  checkEmpty() {
    event.preventDefault();
    if (!this.state.name || !this.state.creditCard || !this.state.shippingAddress) {
      return this.setState({ status: 'Please enter all the required fields *' });
    } else {
      this.sendInfos();
    }
  }

  handleChange() {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    var buttonText = '< Back to catalog';

    return (
      <div>
        <button className="btn btn-link" onClick={() => this.props.setView('catalog', {})}>{buttonText}</button>
        <h2 className="font-weight-bold d-flex justify-content-center mt-3">Checkout</h2>
        <div className="d-flex justify-content-center">
          <div className="border border-dark rounded-lg col-xl-4 col-lg-3 col-md-4 col-sm-4 col-12 d-flex justify-content-center">
            <form onSubmit={this.checkEmpty}>
              <h3 className="ml-5">Customer Info</h3>
              <div className="form-group w-85 col-12">
                <label> Name: * </label>
                <input type="text" className="form-control" placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
              </div>
              <div className="form-group w-85 col-12">
                <label> Credit Card: * </label>
                <input type="text" className="form-control" placeholder="Credit Card Number" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}></input>
              </div>
              <div className="form-group w-85 col-12">
                <label> Address: * </label>
                <input type="text" className="form-control" placeholder="Address" name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange}></input>
              </div>
              <p className="text-danger">* required</p>
              <div className="text-danger">{this.state.status}</div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={this.checkEmpty} className="btn btn-outline-success mb-3"> Place Order</button>
        </div>
      </div>
    );
  }
}
