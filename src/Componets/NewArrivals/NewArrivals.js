import React from "react";
import "./NewArrivals.css";

const NewArrivals = ({ newPd }) => {
  const { img, name, price } = newPd;
  return (
    <div className="new-arival col-lg-4 col-md-4 col-sm-6 col-12 ">
      <div className="new-ariva-thumb">
        <img className="img-fluid n-img w-100 h-100" src={img} alt={name} />
      </div>
      <div className="new-arival-info text-center">
        <p className="new-ariva-name">{name}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default NewArrivals;
