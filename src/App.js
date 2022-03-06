import React from 'react';
import Header from './componentes/header';
import Dish from './componentes/Dish';
import  { Route , Routes }  from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>proyecto curso de react</h2>
      <Header/>
      <Dish/>
    </div>
  );
}

export default App;
