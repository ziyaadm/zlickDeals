import React from 'react';

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      $ ZlickDeals
      <button type="button" className="btn btn-primary fas fa-shopping-cart" onClick={() => props.setView('cart', {})}>
        <span className="badge badge-light">{props.cartItemCount}</span>
      </button>
    </nav>
  );
}
