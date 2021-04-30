import React, { useState, useEffect } from "react";
import "./styles/CheckoutScreen.css";
import Nav from "../components/Nav";
import { useStateValue } from "../StateProvider";
import CartProduct from "../components/CartProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./../reducer";
import { useHistory } from "react-router-dom";
import axios from "./../axios";

function CheckoutScreen() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currency's subunits
        url: `/checkout/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The Secret is >>> ", clientSecret);

  const handleSubmit = async e => {
    // do all the fancy Stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET"
        });

        history.replace("/orders");
      });
  };

  const handleChange = e => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details'
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="checkoutScreen">
      {/* Delivery Address */}
      <div className="checkoutScreen__section">
        <div className="checkoutScreen__sectionTitle">
          <h3>Delivery Address</h3>
        </div>
        <div className="checkoutScreen__address">
          <p>123 React Lane</p>
          <p>Los Angeles, CA</p>
        </div>
      </div>

      {/* Review Items */}
      <div className="checkoutScreen__section">
        <div className="checkoutScreen__sectionTitle">
          <h3>Review items and delivery</h3>
        </div>
        <div className="checkoutScreen__items">
          {basket.map(item => (
            <CartProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="checkoutScreen__section">
        <div className="checkoutScreen__sectionTitle">
          <h3>Payment Method</h3>
        </div>
        <div className="checkoutScreen__paymentDetails">
          {/* Stripe Magic */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="checkoutScreen__paymentPriceContainer">
              <CurrencyFormat
                renderText={value => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
              </button>
            </div>

            {/* Errors */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
