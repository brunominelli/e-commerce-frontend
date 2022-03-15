import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';

class ButtonAddCart extends Component {
  setProps = (product) => <ShoppingCart product={ product } />

  addProduct = () => {
    const { product } = this.props;
    this.setProps(product);
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.addProduct }
      >
        Add Cart
      </button>
    );
  }
}

ButtonAddCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ButtonAddCart;
