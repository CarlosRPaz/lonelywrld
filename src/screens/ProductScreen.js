import React, { useState, useEffect } from "react";
import "./styles/ProductScreen.css";
import { useStateValue } from "../StateProvider";
import Nav from "../components/Nav";

function ProductScreen({ productPrim, handleUpdateCartQty }) {
  const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //  dispatch({
  //   type: "ADD_TO_BASKET",
  //    item: {
  //      id: productPrim.id,
  //      title: productPrim.name,
  //      img: productPrim.img,
  //      price: productPrim.price
  //    }
  //  });
  //};

  return (
    <div className="productScreen">
      product screen
      {/*<h1>{productPrim.id}</h1>
      <h2>{productPrim.title}</h2>
  <button onClick={addToBasket}>Add to basket</button>*/}
    </div>
  );
}

export default ProductScreen;
