import React from "react";
import thumb1 from "../../assets/thumb_img/thumb1.png";
import thumb2 from "../../assets/thumb_img/thumb2.png";
import thumb3 from "../../assets/thumb_img/thumb3.png";
import thumb4 from "../../assets/thumb_img/thumb4.png";
import "./Gellery.css";
const Gellery = () => {
  return (
    <section className="gellery  ">
      <div className="container-fluid">
        <div className="g-wraper">
          <div className="g-right">
            <img src={thumb1} alt="" className="img-fluid" />
            <img src={thumb2} alt="" className="img-fluid" />
          </div>
          <div className="g-left">
            <img src={thumb3} alt="" className="img-fluid" />
            <img src={thumb4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gellery;
