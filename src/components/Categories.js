import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <nav className="container-data">
        {
          categories.map((category) => (
            <label
              key={ category.id }
              htmlFor={ category.id }
              data-testid="category"
            >
              <input type="radio" id={ category.id } />
              { category.name }
            </label>
          ))
        }
      </nav>
    );
  }
}

export default Categories;
