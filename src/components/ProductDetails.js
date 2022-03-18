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
    product.quantidade = 1;
    const storage = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify([...storage, product]));
  }

  // Referência:  https://devpleno.com/loopsrepeticoesiteracoes-no-jsx-do-react
  rowStars(index) {
    // return <div className="rate" data-testeid={ `${index}-rating` }>teste</>;
    return <div className="icon-star" data-testid={ `${index}-rating` } />;
  }

  render() {
    const { product, attributes } = this.state;
    const limit = 5;
    const stars = [];
    // Referência:  https://devpleno.com/loopsrepeticoesiteracoes-no-jsx-do-react
    for (let i = 1; i <= limit; i += 1) {
      stars.push(i);
    }
    return (
      <div>
        <header className="container-header">
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <div className="icon-cart" />
          </Link>
        </header>
        <div className="container-product-detail flex-container row">
          <h2
            data-testid="product-detail-name"
          >
            {`${product.title} - R$${product.price}`}
          </h2>
          <figure className="figure-container flex-container col">
            <img src={ product.thumbnail } alt={ `Imagem do ${product.title} ` } />
            <ButtonAddCart
              addProduct={ this.addProduct }
              product={ product }
              dataTestId="product-detail-add-to-cart"
            />
          </figure>
          <div className="container-product-technical-detail">
            <h3>Especificações Técnicas</h3>
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
          {/* Referência:  https://devpleno.com/loopsrepeticoesiteracoes-no-jsx-do-react */}
          <div className="container-evaluation flex-container col">
            <h2>Avaliações</h2>
            <input
              type="email"
              placeholder="Digite seu email"
              data-testid="product-detail-email"
            />
            <div className="container-stars flex-container row">
              {stars.map(this.rowStars)}
            </div>
            <textarea
              placeholder="Deixe aqui seu comentário"
              data-testid="product-detail-evaluation"
            />
            <button type="button" data-testeid="submit-review-btn">Avaliar</button>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
