import React from 'react';

export default function Success(props) {

  const buttonText = '< Back to catalog';

  return (
    <div className="container">
      <button className="btn btn-link" onClick={() => props.setView('catalog', {})}>{buttonText}</button>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <h1> Order Confirmed! </h1>
      </div>
    </div>
  );
}
