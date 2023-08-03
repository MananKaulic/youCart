import React, { useContext } from "react";
import { PRODUCTS } from "./../../products";
import { ShopContext } from "./../../context/context";
import { CartItem } from "./cart-item";
import "./../../css/cartitem.css";
import { Noitems } from "./noitems";

export const Cart = () => {
  const { cartitems, resetAll, getTotalAmount, zeroitems } =
    useContext(ShopContext);
  const totalAmount = getTotalAmount();

  if (zeroitems) {
    return <Noitems />;
  } else {
    return (
      <div className="container">
        <div className="header">
          <h1 class="heading">Your Cart Items</h1>
          <h3 class="Action" onClick={() => resetAll()}>
            Remove All
          </h3>
        </div>

        <div className="cart">
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartitems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="Subtotal">
            <p>Subtotal = Rs. {totalAmount}/-</p>
          </div>
        </div>
      </div>
    );
  }
};
