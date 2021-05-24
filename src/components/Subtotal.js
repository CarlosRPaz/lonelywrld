import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "./../reducer";
import { useHistory } from "react-router-dom";

function Subtotal({ subtotal, totalItems, cartLength }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <h1 className="subtotal__orderInfo">Order Info</h1>
      <CurrencyFormat
        renderText={value => (
          <>
            <div className="subtotal__orderRow">
              <p className="subtotal__subtotal">
                Subtotal ({totalItems} items):
              </p>
              <p className="subtotal__subtotalPrice">{value}</p>
            </div>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={e => history.push("/checkout")}
        className="subtotal__proceedButton"
        disabled={!cartLength}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
