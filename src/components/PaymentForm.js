import React, { useState, useEffect } from "react";
import "./styles/PaymentForm.css";
import { useStateValue } from "../StateProvider";
import {
  Elements,
  CardElement,
  ElementsConsumer
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Typography, Button, Divider } from "@material-ui/core";
import Review from "./Review";
import CurrencyFormat from "react-currency-format";

// Publishable Key from Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({
  checkoutToken,
  shippingData,
  nextStep,
  backStep,
  onCaptureCheckout,
  timeout
}) {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          street_2: shippingData.address2,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      timeout();

      nextStep();
    }
  };
  console.log(checkoutToken);

  return (
    <>
      <div className="paymentForm">
        <Review shippingData={shippingData} checkoutToken={checkoutToken} />
        <Divider />
        <Elements stripe={stripePromise}>
          {/* Payment Method */}
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form
                onSubmit={e => handleSubmit(e, elements, stripe)}
                className="paymentForm__form"
              >
                <div className="paymentForm__orderInfoContainer">
                  <h3 className="paymentForm__orderInfo">Order Info</h3>
                  <div className="paymentForm__orderRow">
                    <p className="paymentForm__subtotal">Subtotal (5 items):</p>
                    <p className="paymentForm__subtotalPrice">
                      {checkoutToken.live.subtotal.formatted_with_symbol}
                    </p>
                  </div>
                  <div className="paymentForm__orderRow">
                    <p className="paymentForm__subtotal">Shipping Fee:</p>
                    <p className="paymentForm__subtotalPrice">
                      {
                        checkoutToken.shipping_methods[0].price
                          .formatted_with_symbol
                      }
                    </p>
                  </div>
                  <div className="paymentForm__orderRow">
                    <p className="paymentForm__total">Order Total:</p>
                    <p className="paymentForm__totalPrice">
                      <CurrencyFormat
                        renderText={value => <p>{value}</p>}
                        decimalScale={2}
                        value={
                          checkoutToken.live.subtotal.raw +
                          checkoutToken.shipping_methods[0].price.raw
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </p>
                  </div>
                </div>
                <CardElement />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginBottom: "20px"
                  }}
                >
                  <Button variant="outlined" onClick={backStep}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!stripe}
                    color="primary"
                  >
                    Pay $
                    {checkoutToken.live.subtotal.raw +
                      checkoutToken.shipping_methods[0].price.raw}
                  </Button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </>
  );
}

export default PaymentForm;
