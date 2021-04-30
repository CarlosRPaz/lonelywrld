import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrdersScreen from "./screens/OrdersScreen";

// Publishable Key from Stripe
const promise = loadStripe(
  "pk_test_51Ij8vELtQZupClmNQvvarkLsHff6D7HdVdkl9q9xXJKrR1KCKOPtIY08J8lG8MJhJmDGCFaXZqM1MMLGT2otlrQN00AUsBmSUt"
);

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Nav />
            <OrdersScreen />
          </Route>
          <Route path="/checkout">
            <Nav />
            <Elements stripe={promise}>
              <CheckoutScreen />
            </Elements>
          </Route>
          <Route path="/cart">
            <Nav />
            <CartScreen />
          </Route>
          <Route path="/product">
            <Nav />
            <ProductScreen />
          </Route>
          <Route exact path="/">
            <Nav />
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
