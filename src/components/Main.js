import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Main extends Component {
  render() {
    return (
      <main className="container-data">
        <Categories />
        <section>
          <input type="text" name="search" />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">Meu carrinho</Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </main>
    );
  }
}

export default Main;
