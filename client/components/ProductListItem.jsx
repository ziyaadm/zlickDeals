import React from 'react';

export default function ProductListItem(props) {
  const priceDivide = props.productProp.price / 100;

  return (
    <div className="container" style={{ width: '18rem', height: '23rem' }}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="card">
          <img className="card-img-top" src={props.productProp.image} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{'$' + priceDivide.toFixed(2)}</h6>
            <p className="card-text">{props.productProp.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
