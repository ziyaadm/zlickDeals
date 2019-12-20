import React from 'react';
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  componentDidMount() {
    const specificProduct = this.props.viewProp.productId;
    fetch(`/api/products?productId=${specificProduct}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(err => console.error('Get All Products fetch failed', err));
  }

  render() {
    const priceDivide = this.state.product.price / 100;
    var buttonText = '< Back to catalog';
    return (
      <div className="container mt-2">

        <div className="row mb-4">
          <button className="btn btn-link" onClick={() => this.props.setView('catalog', {})}>{buttonText}</button>
        </div>

        <div className="row mb-4">
          <div className="col-6">
            <img className="img-fluid w-100" src={this.state.product.image} alt="Card image cap" />
          </div>
          <div className="col-6">
            <h5 className="card-title mb-3">{this.state.product.name}</h5>
            <h6 className="card-subtitle mb-4 text-muted">{'$' + priceDivide.toFixed(2)}</h6>
            <p className="card-text mb-4">{this.state.product.shortDescription}</p>
            <button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(this.state.product)}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="card-text">{this.state.product.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
