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

  decreaseQuantity = ({ target: { value } }, product) => {
    const decrease = product.quantidade - parseInt(value, 10);
    const { cart } = this.state;
    cart.filter((item) => {
      if (item.id === product.id) {
        if (item.quantidade > 0) {
          item.quantidade = decrease;
          localStorage.setItem('cart', JSON.stringify([...cart]));
        } else item.quantidade = 0;
      }
      return true;
    });
    this.getProducts();
  }

  increaseQuantity = ({ target: { value } }, product) => {
    const increase = product.quantidade + parseInt(value, 10);
    const { cart } = this.state;
    cart.filter((item) => {
      if (item.id === product.id) {
        item.quantidade = increase;
        localStorage.setItem('cart', JSON.stringify([...cart]));
      }
      return true;
    });
    this.getProducts();
  };

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
            <div>
              <input type="button" value=" X " />
              Quantidade:
              <button
                type="button"
                data-testid="product-decrease-quantity"
                value={ 1 }
                onClick={ (event) => this.decreaseQuantity(event, product) }
              >
                -
              </button>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {product.quantidade }
              </span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                value={ 1 }
                onClick={ (event) => this.increaseQuantity(event, product) }
              >
                +
              </button>
              <span>{`R$${product.price}`}</span>

            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default ShoppingCart;
