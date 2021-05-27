import React from "react";
import "./styles/CartProduct.css";
import { useStateValue } from "../StateProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function CartProduct({
  cartItem,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateSize
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: cartItem.id
    });
  };

  return (
    <div className="cartProduct">
      <div
        alt=""
        className="cartProduct__img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${cartItem.media.source})`,
          backgroundPosition: "center top"
        }}
      />
      <div className="cartProduct__info">
        <h4 className="cartProduct__title">{cartItem.name}</h4>
        <h5 className="cartProduct__price">${cartItem.price.raw}</h5>
        <div className="cartProduct__amount">
          <button
            className="cartProduct__amountButton"
            onClick={() =>
              handleUpdateCartQty(cartItem.id, cartItem.quantity - 1)
            }
          >
            <RemoveIcon className="cartProduct__amountAddSubIcons" />
          </button>
          <p className="cartProduct__amountNum">{cartItem.quantity}</p>
          <button
            className="cartProduct__amountButton"
            onClick={() =>
              handleUpdateCartQty(cartItem.id, cartItem.quantity + 1)
            }
          >
            <AddIcon className="cartProduct__amountAddSubIcons" />
          </button>

          <label htmlFor="sizes" className="cartProduct__sizeLabel">
            Size:
          </label>
          <p className="cartProduct__size">
            {cartItem.selected_options[0].option_name}
          </p>
        </div>

        <button
          onClick={() => handleRemoveFromCart(cartItem.id)}
          className="cartProduct__removeButton"
        >
          <DeleteIcon className="cartProduct__removeIcon" />
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
