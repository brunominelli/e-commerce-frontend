import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      attributes: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductFromId(id);
    const { attributes } = product;
    this.setState({
      product,
      attributes,
    });
  }

  render() {
    const { product, attributes } = this.state;
    return (
      <div className="container-product-detail">
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Meu carrinho</Link>
        <h2
          data-testid="product-detail-name"
        >
          {`${product.title} - R$${product.price}`}
        </h2>
        <figure>
          <img src={ product.thumbnail } alt={ `Imagem do ${product.title} ` } />
        </figure>
        <div className="container-product-technical-detail">
          <ul>
            {
              attributes.map((attribute) => (
                <li key={ attribute.id }>
                  { `${attribute.name}: ${attribute.value_name}` }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
