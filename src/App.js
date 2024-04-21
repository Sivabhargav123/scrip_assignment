import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route />
     </Routes>
     <div>
     <Header/>
     <ProductList/>
     </div>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
