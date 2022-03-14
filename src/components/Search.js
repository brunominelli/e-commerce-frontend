import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { results } = this.props;
    return (
      <>
        {
          results.map((product) => (
            <section
              key={ product.id }
              data-testid="product"
              className="container-products"
            >
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.title }</p>
              <p>{`R$${product.price}`}</p>
            </section>
          ))
        }
      </>
    );
  }
}

Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
