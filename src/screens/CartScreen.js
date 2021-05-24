import React from "react";
import "./styles/CartScreen.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import grayLogo from "./../img/grayLogo.png";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import CartProduct from "../components/CartProduct";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function CartScreen({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateSize
}) {
  const [{ basket }, dispatch] = useStateValue();

  if (!cart.line_items) return "Loading ... ";

  return (
    <div className="cartScreen">
      <div className="cartScreen__nav">
        <Link to="/">
          <button className="cartScreen__backButton">
            <ArrowBackIosIcon className="cartScreen__back" />
          </button>
        </Link>
        <h1 className="cartScreen__myCart">My Cart</h1>
      </div>
      <div className="cartScreen__products">
        {cart.line_items.map(item => (
          <CartProduct
            key={item.id}
            cartItem={item}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateSize={handleUpdateSize}
          />
        ))}

        {!cart.line_items.length ? (
          <div className="cartScreen__emptyCart">Your cart is empty</div>
        ) : (
          void 0
        )}

        <div className="extraSpace" />
      </div>
      <div className="cartScreen__subtotal">
        <Subtotal
          subtotal={cart.subtotal.formatted_with_symbol}
          totalItems={cart.total_items}
          cartLength={cart.line_items.length}
        />
      </div>
    </div>
  );
}

export default CartScreen;
