import React from "react";
import { BsTrash } from "react-icons/bs";
import { removeFromDb } from "../../fackDb/fackDb";

const CartItems = ({ item, removeItem }) => {
  const { img, name, price, quantity } = item;

  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <img src={img} alt={name} className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-8">{name}</div>
        </div>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-2">$ {price}</div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-2">{quantity}</div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
        $ {price * quantity}
        <button
          onClick={() => removeItem(item.id)}
          className="m-3 border-0 text-danger"
        >
          <BsTrash />
        </button>
      </div>
      <hr />
    </>
  );
};

export default CartItems;
