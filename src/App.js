import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/categories" component={ Categories } />
      <Route exact path="/not-found" component={ NotFound } />
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
