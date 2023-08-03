import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "./../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartitems, setcartitems] = useState(getDefaultCart);
  const [zeroitems, setzeroitems] = useState(true); // Move zeroitems state here

  const additem = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeitem = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const resetAll = () => {
    const resetCartItems = {};
    for (let itemId in cartitems) {
      resetCartItems[itemId] = 0;
    }
    setcartitems(resetCartItems);
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let itemId in cartitems) {
      if (cartitems[itemId] > 0) {
        let iteminfo = PRODUCTS.find(
          (product) => product.id === Number(itemId)
        );
        totalAmount += cartitems[itemId] * Number(iteminfo.productPrice);
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    // Update zeroitems whenever cartitems changes
    setzeroitems(Object.values(cartitems).every((item) => item === 0));
  }, [cartitems]);

  const contextValue = {
    cartitems,
    additem,
    removeitem,
    resetAll,
    getTotalAmount,
    zeroitems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
