import React, { useContext } from "react";
import { PRODUCTS } from "./../../products";
import "./../../css/cartitem.css";
import { ShopContext } from "./../../context/context";
export const CartItem = (props) => {
  const { additem, removeitem, cartitems } = useContext(ShopContext);

  const { id, productName, productPrice, productimg } = props.data;
  const cartitemAmount = cartitems[id];
  return (
    <div className="cart-item">
      <img src={productimg}></img>
      <div className="about">
        <p className="title">
          <b>{productName}</b>
        </p>
        <p className="price">Rs. {productPrice}/-</p>
      </div>
      <div className="counter">
        <div className="butn" onClick={() => additem(id)}>
          +
        </div>
        <div className="count"> {cartitemAmount} </div>
        <div className="butn" onClick={() => removeitem(id)}>
          -
        </div>
      </div>
    </div>
  );
};
