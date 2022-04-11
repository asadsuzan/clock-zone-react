import React from "react";
import banner from "../../assets/banner/banner.png";
import Button from "../Button/Button";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="row s-wraper">
          <div className="s-left col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
            <h1 className="s-title">Select Your New Perfect Style</h1>
            <p className="s-des">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <Button text={"Shop now"}></Button>
          </div>
          <div className="s-right text-center col-lg-5 col-md-5 col-sm-5">
            <img className="img-fluid" src={banner} alt="banner thumb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
