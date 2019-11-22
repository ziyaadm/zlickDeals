import React from 'react';
// import ProductList from './ProductList';

export default function CartSummaryItem(props) {
  return (
    <div>
      <img className="" src={props.cartItems.image} alt="Card image cap" />
      <p>
        {props.cartItems.name}
      </p>
      <p>
        {props.cartItems.price}
      </p>
      <p>
        {props.cartItems.shortDescription}
      </p>
    </div>
  );
}
