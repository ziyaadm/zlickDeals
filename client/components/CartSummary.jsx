import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default function CartSummary(props) {
  const newprodArray = props.cartItems.map((item, index) => <CartSummaryItem key={index} cartItems={item}/>);
  const totalPrice = props.cartItems.reduce((total, value) => (total + value.price), 0);

  if (newprodArray.length < 1) {
    return (
      <div>
        <h1> No cart items </h1>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn btn-link" onClick={() => props.setView('catalog', {})}>Back to Catalog</button>
        <h1>
          Cart Summary
        </h1>
        <table>
          {newprodArray}
        </table>
        <h1>Total Price Summary</h1>
        {totalPrice}
      </div>
    );
  }
}
