import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <main className="container-data">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </main>
    );
  }
}

export default ShoppingCart;
