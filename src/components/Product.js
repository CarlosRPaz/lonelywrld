import React, { useState, useEffect, Component } from "react";
import "./styles/Product.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from "react-dom";
import { commerce } from "../lib/commerce";

function Product({ mainProduct, onAddToCart }) {
  const [show, setShow] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [tempQty, setTempQty] = useState(1);
  const [sizes, setSizes] = useState([]);
  const [active, setActive] = useState("");
  const [variantInfo, setVariantInfo] = useState();
  const [prodVariants, setProdVariants] = useState([]);
  const [mainProductVG_ID, setMainProductVG_ID] = useState("");
  const [tempStock, setTempStock] = useState(1);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [tempVrntStock, setTempVrntStock] = useState(1);

  const fetchProductVariants = prod_id => {
    commerce.products
      .getVariants(prod_id)
      .then(variants => setProdVariants(variants.data));
  };

  const toggleModal = () => {
    setShow(!show);
  };

  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const addTempCartQty = () => {
    setTempQty(tempQty + 1);
  };
  const subTempCartQty = () => {
    setTempQty(tempQty - 1);
  };
  if (tempQty > tempVrntStock) {
    setTempQty(tempVrntStock);
  }

  const activeBtn = (btn, vrntStock) => {
    setActive(btn);
    setVariantInfo({ [mainProduct.variant_groups[0].id]: btn });

    setTempVrntStock(vrntStock);
  };
  const processInventory = () => {
    let tempNum =
      prodVariants[0]?.inventory +
      prodVariants[1]?.inventory +
      prodVariants[2]?.inventory +
      prodVariants[3]?.inventory;

    setTempStock(tempNum);
    if (tempNum === 0) {
      setIsSoldOut(true);
    } else {
      setIsSoldOut(false);
    }
  };

  useEffect(() => {
    let finalSizeArray = mainProduct.variant_groups[0].options.map(option => {
      let sizeInfo = {};

      sizeInfo.key = option.name;
      sizeInfo.text = option.name;
      sizeInfo.value = option.id;

      return sizeInfo;
    });

    setSizes(finalSizeArray);
  }, []);

  useEffect(() => {
    fetchProductVariants(mainProduct.id);
    setMainProductVG_ID(mainProduct.variant_groups[0].id);
    //console.log(mainProduct.variant_groups[0].id);

    processInventory();
  }, [show]);

  //console.log(mainProduct.id);
  //vrnt_gvRjwOQ3qG54mN
  //fetchProductVariants(mainProduct.id)
  //console.log(mainProduct);
  //{console.log(prodVariants)}
  //{console.log(prodVariants[idx].inventory)}
  //console.log(mainProduct.inventory.available);

  return (
    <div>
      <div className="product" onClick={toggleModal}>
        <div
          alt=""
          className="product__img"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${mainProduct.media.source})`,
            backgroundPosition: "center top"
          }}
        >
          {prodVariants[0]?.inventory +
            prodVariants[1]?.inventory +
            prodVariants[2]?.inventory +
            prodVariants[3]?.inventory ===
          0 ? (
            <div className="product__tag tag__soldOut">Sold Out</div>
          ) : (
            void 0
          )}
          {mainProduct.categories[0] &&
          mainProduct.categories[0].name === "Limited Edition" ? (
            <div className="product__tag tag__limitedEd">Limited Edition</div>
          ) : (
            void 0
          )}
        </div>
        <div className="product__info">
          <div className="product__title">{mainProduct.name}</div>
          <div className="product__price">
            {mainProduct.price.formatted_with_symbol}
          </div>
        </div>
      </div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {show && (
        <div className="productModal">
          <div className="productModal__underlayClose" onClick={toggleModal} />
          <div className="productModal__productView">
            <div className="productModal__imageGallery" style={{ zIndex: 100 }}>
              <button
                className="productModal__closeButton"
                onClick={toggleModal}
              >
                <ClearIcon className="productModal__closeIcon" />
              </button>

              <Carousel
                className="productModal__carousel"
                autoPlay={false}
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                emulateTouch={true}
                infiniteLoop={false}
                selectedItem={0}
                dynamicHeight={true}
                /*
                style={{ zIndex: 100 }}
                width={100}
                centerMode={true}
                centerSlidePercentage={100}
              */
              >
                {mainProduct.assets.map(img => (
                  <div className="productModal__imageCont">
                    <img
                      key={img.id}
                      src={img.url}
                      alt="Product Image"
                      className="productModal__image"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="productModal__productInfo">
              <div className="productModal__nameprice">
                <h3 className="productModal__name">{mainProduct.name}</h3>
                <h3 className="productModal__price">
                  {mainProduct.price.formatted_with_symbol}
                </h3>
              </div>
              <div className="productModal__descriptionstock">
                <p
                  className="productModal__description"
                  dangerouslySetInnerHTML={{ __html: mainProduct.description }}
                />
                {isSoldOut ? (
                  <div className="productModal__soldOut">Sold Out</div>
                ) : (
                  <p className="productModal__stock">
                    <span>{tempStock}</span> left in stock
                  </p>
                )}
              </div>

              <div className="productModal__variantsContainer">
                <div className="productModal__variant">
                  <p className="productModal__variantLabel">Size</p>
                  {sizes.map((option, idx) => (
                    <button
                      key={option.key}
                      className={
                        active === option.value
                          ? "activeSizeButton"
                          : "productModal__sizeButton"
                      }
                      disabled={prodVariants[idx].inventory === 0}
                      value={option.text}
                      onClick={() =>
                        activeBtn(option.value, prodVariants[idx].inventory)
                      }
                    >
                      {option.text}
                    </button>
                  ))}
                </div>

                <div className="productModal__variant">
                  <p className="productModal__variantLabel">Amount</p>
                  <button
                    className="productModal__amountButton"
                    onClick={subTempCartQty}
                    disabled={tempQty === 1 || isSoldOut}
                  >
                    <RemoveIcon className="productModal__amountAddSubIcons" />
                  </button>

                  <p className="productModal__amount">{tempQty}</p>
                  <button
                    className="productModal__amountButton"
                    onClick={addTempCartQty}
                    disabled={isSoldOut || tempQty >= tempVrntStock}
                  >
                    <AddIcon className="productModal__amountAddSubIcons" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(mainProduct.id, tempQty, variantInfo);
                  toggleModal();
                }}
                className="productModal__addButton"
                disabled={isSoldOut}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
