import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />,
        <ProductList/>
      </div>
    );
  }
}
