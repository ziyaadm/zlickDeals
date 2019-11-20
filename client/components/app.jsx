import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  setView(name, params) {
    this.setState({
      view: name,
      params: params
    });
  }

  render() {
    return (
      <div>
        <Header />,
        <ProductList setView={this.setView}/>
      </div>
    );
  }
}
