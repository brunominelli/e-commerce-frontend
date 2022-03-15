import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

class Search extends Component {
  render() {
    const { results } = this.props;
    return (
      <section>
        {
          results.map((product) => (
            <div
              key={ product.id }
              data-testid="product"
              className="container-products"
            >
              <Link
                data-testid="product-detail-link"
                to={ `/product-details/${product.id}` }
              >
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.title }</p>
                <p>{`R$${product.price}`}</p>
              </Link>
              <ButtonAddCart product={ product } />
            </div>
          ))
        }
      </section>
    );
  }
}

Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
