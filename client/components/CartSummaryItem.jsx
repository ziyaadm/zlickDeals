import React from 'react';

export default function CartSummaryItem(props) {
  const priceDivide = props.cartItems.price / 100;
  return (

    <div className="border border-dark d-flex col-9 mb-2 flex-column text-center">
      <div>
        <img className="" src={props.cartItems.image} alt="Card image cap" />
      </div>
      <div className="">
        <h6>
          {props.cartItems.name}
        </h6>
        <p className="text-muted">
          {'$' + priceDivide.toFixed(2)}
        </p>
        <p className="">
          {props.cartItems.shortDescription}
        </p>
      </div>
    </div>
  );
}
