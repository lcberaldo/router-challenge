import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Header from './Components/Header';
import ProductSingle from './pages/ProductSingle/ProductSingle';

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function loadlProducts() {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const json = await response.json();
      setProducts(json);
    }
    loadlProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products productsArray={products} />} />
          <Route path="product/:id" element={<ProductSingle />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
