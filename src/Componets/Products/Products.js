import React from "react";
import "./Products.css";

const Products = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="product border">
        <div className="p-img">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="p-info">
          <p className="p-name">{name}</p>
          <span className="p-price">${price}</span>
        </div>
        <div className="add-cart-btn">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
