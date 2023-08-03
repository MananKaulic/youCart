import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product.jsx";

function Shop() {
  const heading = {
    textAlign: "center",
    justifyContent: " center",
  };
  return (
    <div>
      <h1 style={heading}>Lets Shop!</h1>
      <div
        className="products"
        style={{
          display: "flex",
        }}
      >
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
export default Shop;
