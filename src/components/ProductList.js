// src/components/ProductList.js
import React, { useState } from "react";
import products from "../data/products";
import Filters from "./Filters";

function ProductList() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) => {
    // Implement your filter logic here based on categoryFilter, priceRangeFilter, and ratingFilter
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (priceRangeFilter === "" ||
        (priceRangeFilter === "0-20" && product.price <= 20) ||
        (priceRangeFilter === "20-50" && product.price > 20 && product.price <= 50)) &&
      (ratingFilter === "" || product.rating >= parseInt(ratingFilter))
    );
  });

  const addToCart = (product) => {
    // Implement adding products to the cart
  };

  const removeFromCart = (productId) => {
    // Implement removing products from the cart
  };

  return (
    <div>
      <Filters
        onCategoryChange={setCategoryFilter}
        onPriceRangeChange={setPriceRangeFilter}
        onRatingChange={setRatingFilter}
      />

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.jpg} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  Price: ${product.price.toFixed(2)}
                  <br />
                  Category: {product.category}
                  <br />
                  Rating: {product.rating}
                </p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
