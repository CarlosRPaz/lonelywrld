import React from "react";
import "./styles/Review.css";
import CartProduct from "./CartProduct";
import { Typography } from "@material-ui/core";
import ReviewProduct from "./ReviewProduct";

function Review({ shippingData, checkoutToken }) {
  console.log(shippingData);
  return (
    <div className="review">
      {/* Shipping Address */}
      <div className="review__section">
        <div className="review__sectionTitle">
          <h3>Shipping Address</h3>
        </div>
        <div className="review__address">
          <div className="review__saSection">
            <div className="review__saSectionLabel">Email</div>
            <div className="review__saSectionInfo">{shippingData.email}</div>
          </div>
          <div className="review__saSection">
            <div className="review__saSectionLabel">Name</div>
            <div className="review__saSectionInfo">
              {shippingData.firstName} {shippingData.lastName}
            </div>
          </div>
          <div className="review__saSection">
            <div className="review__saSectionLabel">Address</div>
            <div className="review__saSectionInfo">
              <div>
                {shippingData.address1} {shippingData.address2}
              </div>
              <div>
                {shippingData.city}, {shippingData.shippingSubdivision}{" "}
                {shippingData.zip}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review Items */}
      <div className="review__section">
        <div className="review__sectionTitle">
          <h3>Order Items</h3>
        </div>
        <div className="review__items">
          {checkoutToken.live.line_items.map(item => (
            <ReviewProduct key={item.id} reviewItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
