import React, { useState, useEffect } from "react";
import "./styles/CheckoutScreen.css";
import Nav from "../components/Nav";
import { useStateValue } from "../StateProvider";
import CartProduct from "../components/CartProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AddressForm from "./../components/AddressForm";
import PaymentForm from "./../components/PaymentForm";

import { commerce } from "./../lib/commerce";

import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
  Typography
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const steps = ["Shipping address", "Payment details"];

function CheckoutScreen({
  cart,
  order,
  onCaptureCheckout,
  error,
  orderFN,
  orderLN,
  customerRef,
  orderEmail
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const history = useHistory();

  // Generate Commercejs checkout token
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart"
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
        if (activeStep === 0 || activeStep === 1) {
          history.push("/");
        }
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const next = data => {
    setShippingData(data);

    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    !error && isFinished ? (
      <>
        <div className="checkoutScreen__postCheckout">
          <Typography variant="h5">
            Thank you, {orderFN} {orderLN}!
          </Typography>
          <Divider />
          <Typography
            variant="subtitle2"
            className="checkoutScreen__postCheckout"
            style={{ marginBottom: "10px" }}
          >
            Order ref: {customerRef}
          </Typography>
          <p>Your order is being processed.</p>
          <p>
            Check your email:{" "}
            <span style={{ fontWeight: "600" }}>{orderEmail}</span>
          </p>
        </div>
        <br />
        <Button
          component={Link}
          to="/"
          variant="outlined"
          type="button"
          style={{ marginLeft: "10px" }}
        >
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div className="checkoutScreen__postCheckout">
          {error ? (
            <Typography variant="h5">
              There was an error with your purchase.
            </Typography>
          ) : (
            <Typography variant="h5">Thank you for your purchase!</Typography>
          )}
        </div>
        <Divider />
        <h4 className="checkoutScreen__postCheckout">Error: {error}</h4>
        <br />
        <Button
          component={Link}
          to="/"
          variant="outlined"
          type="button"
          style={{ marginLeft: "10px" }}
        >
          Back to Home
        </Button>
      </>
    ) : (
      <div className="checkoutScreen__circularProgress">
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <h5>Error: {error}</h5>
      <br />
      <Button
        component={Link}
        to="/"
        variant="outlined"
        type="button"
        style={{ marginLeft: "10px" }}
      >
        Back to Home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
      />
    );

  if (!cart.line_items) return "Loading ... ";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="checkoutScreen">
        <main>
          <Paper elevation={0}>
            <div className="checkoutScreen__nav">
              <h1 className="checkoutScreen__myCart">Checkout</h1>
            </div>
            <Stepper activeStep={activeStep}>
              {steps.map(step => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </main>
      </div>
    </>
  );
}

export default CheckoutScreen;
