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
    return (
      <main className="container-data">
        {!cart.length
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {cart.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{ product.title }</p>
            <p>{`R$${product.price}`}</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </main>
    );
  }
}

export default ShoppingCart;
