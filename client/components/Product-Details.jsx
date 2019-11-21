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
    var buttonText = '< Back to catalog';
    return (
      <div className="container" style={{ width: '40rem', height: '40rem' }}>
        <button className= "btn btn-link" onClick={() => this.props.setView('catalog', {})}>{buttonText}</button>
        <img className="" src={this.state.product.image} alt="Card image cap" />
        {/* <p>&nbsp;</p> */}
        <button type="button" className="btn btn-primary fas fa-cart-plus" onClick={() => this.props.addToCart(this.state.product)}>
          <span className="badge badge-light"></span>
        </button>
        <div className="card-body">
          <h5 className="card-title">{this.state.product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.product.price}</h6>
          <p className="card-text">{this.state.product.longDescription}</p>
        </div>
      </div>
    );
  }
}
