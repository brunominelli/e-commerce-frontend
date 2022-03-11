import React, { Component } from 'react';
import * as api from '../services/api';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  requestAPI = async () => {
    const searchQuery = await api.getProductsFromQuery('livro');
    const { results } = searchQuery;
    this.setState({
      results,
    });
  }

  render() {
    this.requestAPI();
    const { results } = this.state;
    return (
      <>
        <p>Pesquisa</p>
        {results.map((product) => <p key={ product.id }>{ product.title }</p>)}
      </>
    );
  }
}

export default Search;
