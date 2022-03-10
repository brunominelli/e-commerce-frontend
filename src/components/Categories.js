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
          categories.map((category) => <p key={ category.id }>{ category.name }</p>)
        }
      </nav>
    );
  }
}

export default Categories;
