import React from "react";
import "./styles/ReviewProduct.css";

function ReviewProduct({ reviewItem }) {
  console.log(reviewItem);
  return (
    <div className="reviewProduct">
      <div
        alt=""
        className="reviewProduct__img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${reviewItem.media.source})`,
          backgroundPosition: "center center"
        }}
      />
      <div className="reviewProduct__info">
        <h4 className="reviewProduct__title">{reviewItem.name}</h4>
        <div className="reviewProduct__prodDetails">
          <h5 className="reviewProduct__price">
            {reviewItem.price.formatted_with_symbol}
          </h5>
          <div className="reviewProduct__detail">
            <p className="reviewProduct__label">Size:</p>
            <p className="reviewProduct__value">
              {reviewItem.selected_options[0].option_name}
            </p>
          </div>
          <div className="reviewProduct__detail">
            <p className="reviewProduct__label">Quantity:</p>
            <p className="reviewProduct__value">{reviewItem.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewProduct;
