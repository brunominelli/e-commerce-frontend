import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ButtonAddCart from './ButtonAddCart';

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

  addProduct = (product) => {
    const storage = JSON.parse(localStorage.getItem('cart'));
    product.quantidade = 1;
    localStorage.setItem('cart', JSON.stringify([...storage, product]));
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
          <ButtonAddCart
            addProduct={ this.addProduct }
            product={ product }
            dataTestId="product-detail-add-to-cart"
          />
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
