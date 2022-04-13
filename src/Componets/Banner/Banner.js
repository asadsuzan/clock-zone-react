import React from "react";
import "./Banner.css";
// import banner from "../../assets/banner/banner2.png";

const Banner = ({ text }) => {
  return (
    <div className="container-fluid banner-wraper">
      <h1>{text}</h1>{" "}
    </div>
  );
};

export default Banner;
