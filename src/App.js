import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
