import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.addProductCart();
  }

  addProductCart = () => {
    const { product } = this.props;
    console.log(product);
    const { shoppingCart } = this.state;
    shoppingCart.push(product);
    this.setState({
      shoppingCart,
    });
    return shoppingCart.map((item) => console.log(item));
  }

  render() {
    // const { shoppingCart } = this.state;
    return (
      <main className="container-data">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
