import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main className="container-data">
        <input type="text" name="search" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Meu carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default Main;
