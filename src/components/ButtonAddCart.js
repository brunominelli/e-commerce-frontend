import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddCart extends Component {
  render() {
    const { addProduct, product } = this.props;
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => addProduct(product) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

ButtonAddCart.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ButtonAddCart;
