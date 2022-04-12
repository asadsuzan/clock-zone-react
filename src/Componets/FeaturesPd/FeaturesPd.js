import React from "react";

import Button from "../Button/Button";
import "./FeaturesPd.css";

const FeaturesPd = ({ fimg, dicrection }) => {
  return (
    <div
      className="f-product row align-items-center my-5 gx-5 gy-5"
      style={{ flexDirection: dicrection }}
    >
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="f-left d-flex   flex-column">
          <h2 className="title">Watch of Choice </h2>
          <p className="-f-des">
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <Button text={"show watch"} />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="f-right">
          <img src={fimg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPd;
