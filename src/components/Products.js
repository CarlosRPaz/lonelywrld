import React, { useState, useEffect } from "react";
import "./styles/Products.css";
import Product from "./Product";
import { commerce } from "../lib/commerce";

function Products({ products, onAddToCart }) {
  return (
    <div className="products">
      <h5>* Girls' t-shirts run a size smaller</h5>
      <h1>Products</h1>
      <div className="products__productContainer">
        {products.map(product => (
          <Product
            key={product.id}
            mainProduct={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
