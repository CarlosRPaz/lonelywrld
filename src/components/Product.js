import React from "react";
import "./styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price
      }
    });
  };

  return (
    <div className="product">
      <div
        alt=""
        className="product__img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center center"
        }}
      />
      <div className="product__info">
        <div className="product__title">{title}</div>
        <div className="product__price">{price}</div>
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
