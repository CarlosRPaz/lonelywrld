import React from "react";
import "./styles/CartProduct.css";
import { useStateValue } from "../StateProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function CartProduct({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="cartProduct">
      <div
        alt=""
        className="cartProduct__img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center center"
        }}
      />
      <div className="cartProduct__info">
        <h4 className="cartProduct__title">{title}</h4>
        <h5 className="cartProduct__price">${price}</h5>
        <div className="cartProduct__amount">
          <button className="cartProduct__amountButton">
            <RemoveIcon className="cartProduct__amountAddSubIcons" />
          </button>
          <p className="cartProduct__amountNum">1</p>
          <button className="cartProduct__amountButton">
            <AddIcon className="cartProduct__amountAddSubIcons" />
          </button>
        </div>

        <button
          onClick={removeFromBasket}
          className="cartProduct__removeButton"
        >
          <DeleteIcon className="cartProduct__removeIcon" />
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
