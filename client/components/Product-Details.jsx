import React from 'react';
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    // fetch(`/api/products?productId=${productId}`)
    fetch('/api/products?productId=1')
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error('Get All Products fetch failed', err));
  }

  render() {
    return (
      <div className="container" style={{ width: '18rem', height: '25rem' }}>
        <img className="card-img-top" src={this.state.product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.state.product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.product.price}</h6>
          <p className="card-text">{this.state.product.longDescription}</p>
        </div>
      </div>
    );
  }
}
