// src/components/Filters.js
import React from "react";

function Filters({ onCategoryChange, onPriceRangeChange, onRatingChange }) {
  return (
    <div>
      <h2>Filters</h2>
      {/* Category Filter */}
      <div>
        <label>Category:</label>
        <select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          {/* Add more category options */}
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label>Price Range:</label>
        <select onChange={(e) => onPriceRangeChange(e.target.value)}>
          <option value="">All</option>
          <option value="0-20">$0 - $20</option>
          <option value="20-50">$20 - $50</option>
          {/* Add more price range options */}
        </select>
      </div>

      {/* Ratings Filter */}
      <div>
        <label>Ratings:</label>
        <select onChange={(e) => onRatingChange(e.target.value)}>
          <option value="">All</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          {/* Add more rating options */}
        </select>
      </div>
    </div>
  );
}

export default Filters;
