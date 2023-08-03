import React, { useContext } from "react";
import "./../../css/shop.css";
import { ShopContext } from "./../../context/context";

function Product(props) {
  const { id, productName, productPrice, productimg } = props.data;
  const { additem, cartitems } = useContext(ShopContext);
  const productCardStyle = {
    width: "200px",
    margin: "10px",
  };

  const cartitemAmount = cartitems[id];
  return (
    <div style={productCardStyle}>
      <div className="card text-black">
        <img src={productimg} className="card-img-top" alt="Product" />
        <div className="card-body ">
          <div className="text-center">
            <h5 className="card-title">{productName}</h5>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Price</span>
              <span>Rs. {productPrice}/-</span>
            </div>
            <div class="AddtoCart">
              <button
                type="button"
                class="btn btn-dark"
                onClick={() => additem(id)}
              >
                Add to Cart{cartitemAmount > 0 && <> ({cartitemAmount})</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
