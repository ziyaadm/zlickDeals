import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default function CartSummary(props) {
  const newprodArray = props.cartItems.map((item, index) => <CartSummaryItem key={index} cartItems={item}/>);
  const totalPrice = props.cartItems.reduce((total, value) => (total + value.price), 0);
  const buttonText = '< Back to catalog';
  const priceDivide = totalPrice / 100;

  if (newprodArray.length < 1) {
    return (
      <div>
        <h1> No cart items </h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <button className="btn btn-link" onClick={() => props.setView('catalog', {})}>{buttonText}</button>
        <div className="row justify-content-center">
          <h3>
            My Cart
          </h3>
        </div>
        <div className="row justify-content-center">
          {newprodArray}
        </div>
        <div className="row">
          <h3>Item Total: {'$' + priceDivide.toFixed(2)}</h3>
          <button type="button" className="btn btn-primary" onClick={() => props.setView('checkout', {})}>Checkout</button>
        </div>
      </div>
    );
  }
}
