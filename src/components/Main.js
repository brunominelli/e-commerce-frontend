import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Search from './Search';
import * as api from '../services/api';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  loadAPI = async ({ target: { value } }) => {
    const response = await api.getProductsFromQuery(value);
    const { results } = response;
    this.setState({
      results,
    });
  }

  render() {
    const { query, results } = this.state;
    return (
      <main className="container-data">
        <Categories />
        <section>
          <input
            type="text"
            name="query"
            data-testid="query-input"
            value={ query }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            data-testid="query-button"
            value={ query }
            onClick={ this.loadAPI }
          >
            Buscar
          </button>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">Meu carrinho</Link>
          {
            !query
              ? (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )
              : <Search results={ results } />
          }
        </section>
      </main>
    );
  }
}

export default Main;
