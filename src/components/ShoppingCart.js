import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    this.setState({
      cart: JSON.parse(localStorage.getItem('cart')),
    });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <main className="container-data">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </main>
    );
  }
}

export default ShoppingCart;
