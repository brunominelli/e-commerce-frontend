import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
