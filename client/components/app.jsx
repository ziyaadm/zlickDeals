import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './Product-Details';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  placeOrder(product) {
    fetch('/api/orders', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(product)
    }).then(response => response.json())
      .then(data => this.setState({ cart: [] }))
      .then(data => this.setState({ view: { name: 'catalog', params: {} } }))
      .catch(err => console.error('Place Order fetch failed', err));
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => this.setState({ cart: data }))
      .catch(err => console.error('Get All Products fetch failed', err));
  }

  addToCart(product) {
    fetch('/api/cart', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(product)
    }).then(response => response.json())
      .then(data => this.setState({ cart: this.state.cart.concat(data) }))
      .catch(err => console.error('Add to cart fetch failed', err));
  }

  setView(name, params) {
    const newView = {
      name: name,
      params: params
    };
    this.setState({ view: newView });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductList setView={this.setView} />
        </div>);
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <CartSummary cartItems={this.state.cart} setView={this.setView}/>
        </div>);
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails setView={this.setView} viewProp={this.state.view.params} addToCart={this.addToCart}/>
        </div>);
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <CheckoutForm setView={this.setView} viewProp={this.state.view.params} placeOrder={this.placeOrder}/>
        </div>);
    }
  }
}
