import React from 'react';
import * as api from './services/api';
import './App.css';

function App() {
  return (
    <>
      <p>Trybelibre</p>
      { api.getCategories().then((categories) => console.log(categories)) }
      { api.getProductsFromCategoryAndQuery('MLB271599', 'Agro')
        .then((categories) => console.log(categories)) }
    </>
  );
}

export default App;
