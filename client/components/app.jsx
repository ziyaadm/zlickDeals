import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './Product-Details';

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
      .then(data => this.setState({ cart: data }))
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
          <Header cartItemCount={this.state.cart.length}/>,
          <ProductList setView={this.setView} />
        </div>);
    } else {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length}/>,
          <ProductDetails setView={this.setView} viewProp={this.state.view.params} addToCart={this.addToCart}/>
        </div>);
    }
  }
}
