import React from 'react';

export default function CartSummaryItem(props) {
  const priceDivide = props.cartItems.price / 100;
  return (
    <div className="row border border-dark col-9 mb-2">
      <div className="col-3">
        <img className="" src={props.cartItems.image} alt="Card image cap" />
      </div>
      <div className="col-6 mt-4">
        <h6>
          {props.cartItems.name}
        </h6>
        <p className="text-muted">
          {'$' + priceDivide.toFixed(2)}
        </p>
        <p>
          {props.cartItems.shortDescription}
        </p>
      </div>
    </div>
  );
}
