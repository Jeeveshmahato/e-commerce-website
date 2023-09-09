// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      {/* Your navigation/header component */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Add more routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;
