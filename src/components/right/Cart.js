import React, { useState } from "react";
import "./Cart.css";

const circle = (quantity) => {
  return <span className="circle">{quantity}</span>;
};

// MAKING A SIMPLE MENU
function Cart() {
  // GENERAL PRICE
  let defaultGeneralPrice = 13;
  const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice);

  // QUANTITY
  const [quantity, setQuantaty] = useState(1);

  // DISCOUNT
  let dafaultDiscount = 5;
  // let defaultCouponDiscount = quantity * dafaultDiscount ;
  const [couponDiscount, setCouponDiscount] = useState(dafaultDiscount);
  console.log(couponDiscount);

  // TOTAL PRICE
  // let defaultTotalPrice = generalPrice * quantity - couponDiscount ;
  // console.log(defaultTotalPrice);
  const [totalPrice, setTotalPrice] = useState(generalPrice);

  const [addToCart, setAddToCart] = useState(false);
  console.log(`Add to cart button click ? ${addToCart}`);

  function incrementQuentaty() {
    // EVERYTIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
    // AND TOTAL PRICE WILL BE CHANGE
    // PRICE * QUANITY = TOTAL
    setQuantaty((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevPrice) => prevPrice + generalPrice);
  }
  function decrementQuantity() {
    setQuantaty((prevQuantity) => prevQuantity - 1);
    setTotalPrice((prevPrice) => prevPrice - generalPrice);
  }
  function usingCouponDiscount(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value == 123) {
      console.log("set total price and coupon discount");
      setCouponDiscount((prevDiscount) => prevDiscount);
      setTotalPrice((prevPrice) => prevPrice - couponDiscount * quantity);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setAddToCart((prevAddToCart) => (prevAddToCart = true));
  }

  return (
    <div className="Cart">
      <div className="box">
        <div className="image">
          <img
            src="https://www.treehugger.com/thmb/qPA2kCyZisQB1IuG_G6-gbZ6aAI=/806x806/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2019__11__cubbit1-cb283f18c2ce4684b21935317e0a8852.jpg"
            alt=""
          />
        </div>
        <div className="set-quan set-bg">
          <div className="quantaty">Quantity {quantity}</div>
          <div className="btns">
            <button className="btn" onClick={incrementQuentaty}>
              +
            </button>
            <button className="btn" onClick={decrementQuantity}>
              -
            </button>
          </div>
        </div>
        <div className="price">
          <div className="gp">General price {generalPrice}€</div>
          <div className="coupon set-bg">
            Use Coupon
            <form>
              <input
                onChange={usingCouponDiscount}
                placeholder="Enter coupon code 123"
                type="text"
              />
            </form>
          </div>
          <hr></hr>
          <div className="total-price">Total Price {totalPrice}€</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
