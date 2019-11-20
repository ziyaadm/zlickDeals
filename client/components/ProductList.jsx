import React from 'react';
import ProductListItem from './ProductListItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.error('Get All Products fetch failed', err));
  }

  render() {
    const productsArray = this.state.products.map((product, index) => <ProductListItem key={index} productProp={product} setView={this.props.setView}/>);
    return (
      <div className="container col-md-9">
        <div className="row">
          {productsArray}
        </div>
      </div>
    );
  }
}
