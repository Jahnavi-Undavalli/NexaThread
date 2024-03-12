// src/components/ProductDisplay.js
import React from 'react';

const ProductDisplay = ({ products }) => {
  return (
    <div>
      <h2>Similar Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDisplay;
