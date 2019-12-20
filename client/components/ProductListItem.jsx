import React from 'react';

export default function ProductListItem(props) {
  const priceDivide = props.productProp.price / 100;

  return (
    <div className="card col-sm-6 col-lg-3 m-4 onClick={() => props.setView('details', { productId: props.productProp.productId })}">
      <img className="card-img-top" src={props.productProp.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.productProp.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{'$' + priceDivide.toFixed(2)}</h6>
        <p className="card-text des">{props.productProp.shortDescription}</p>
      </div>
    </div>

  );
}
