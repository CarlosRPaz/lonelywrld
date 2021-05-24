import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ProductScreen from "./screens/ProductScreen";
import ContactScreen from "./screens/ContactScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";

import OrdersScreen from "./screens/OrdersScreen";

import { commerce } from "./lib/commerce";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [orderFN, setOrderFN] = useState("");
  const [orderLN, setOrderLN] = useState("");
  const [customerRef, setCustomerRef] = useState("");
  const [orderEmail, setOrderEmail] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, variantInfo) => {
    if (variantInfo) {
      const { cart } = await commerce.cart.add(
        productId,
        quantity,
        variantInfo
      );
      setCart(cart);
    } else {
      window.alert("Please select a product size");
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleUpdateSize = async (productId, variantInfo) => {
    const { cart } = await commerce.cart.update(variantInfo);
    setCart(cart);
  };

  const handleRemoveFromCart = async productId => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      setOrderFN(incomingOrder.customer.firstname);
      setOrderLN(incomingOrder.customer.lastname);
      setCustomerRef(incomingOrder.customer_reference);
      setOrderEmail(incomingOrder.customer.email);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/contact">
            <Nav totalItems={cart.total_items} />
            <ContactScreen />
          </Route>
          <Route path="/orders">
            <Nav totalItems={cart.total_items} />
            <OrdersScreen />
          </Route>
          <Route path="/checkout">
            <Nav totalItems={cart.total_items} />
            <CheckoutScreen
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
              orderFN={orderFN}
              orderLN={orderLN}
              customerRef={customerRef}
              orderEmail={orderEmail}
            />
          </Route>
          <Route path="/cart">
            <Nav totalItems={cart.total_items} />
            <CartScreen
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateSize={handleUpdateSize}
            />
          </Route>
          <Route path="/product">
            <Nav totalItems={cart.total_items} />
            <ProductScreen handleUpdateCartQty={handleUpdateCartQty} />
          </Route>
          <Route exact path="/">
            <Nav totalItems={cart.total_items} />
            <HomeScreen products={products} onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
