import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="container-data">
        <input type="text" name="search" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default Main;
