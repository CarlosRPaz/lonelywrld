import React from "react";
import "./styles/CartScreen.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import CartProduct from "../components/CartProduct";

function CartScreen() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="cartScreen">
      <div className="cartScreen__nav">
        <button className="cartScreen__backButton">
          <ArrowBackIosIcon className="cartScreen__back" />
        </button>
        <h1 className="cartScreen__myCart">My Cart</h1>
      </div>
      <div className="cartScreen__products">
        {basket.map(item => (
          <CartProduct
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
          />
        ))}
        {basket.length === 0 ? <div>Your cart is empty</div> : void 0}
      </div>
      <div className="cartScreen__subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default CartScreen;
