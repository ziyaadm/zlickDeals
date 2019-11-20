import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './Product-Details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    const newView = {
      name: name,
      params: params
    };
    this.setState({ view: newView });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />,
          <ProductList setView={this.setView} />
        </div>);
    } else {
      return (
        <div>
          <Header />,
          <ProductDetails setView={this.setView}/>
        </div>);
    }
  }
}
