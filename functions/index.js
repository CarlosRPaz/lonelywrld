const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ij8vELtQZupClmN2iPmWlskPWkfeBfryvwtmOhCTCGqrcWbDjKv1U73TO1eyILC0YGnAQGcFhAYMaxp7FBwFMe500yBWENmsl"
);

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/checkout/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd"
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/lonelywrld-9f698/us-central1/api
