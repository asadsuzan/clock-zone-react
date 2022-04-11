import React from "react";
import thumb1 from "../../assets/thumb_img/thumb1.png";
import thumb2 from "../../assets/thumb_img/thumb2.png";
import thumb3 from "../../assets/thumb_img/thumb3.png";
import thumb4 from "../../assets/thumb_img/thumb4.png";

const Gellery = () => {
  return (
    <section className="gellery">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src={thumb1} alt="thumb" className="img-fluid w-100" />
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={thumb2} alt="thumb" className="img-fluid w-100" />
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <img src={thumb3} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-lg-6 col-md-6">
                <img src={thumb4} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gellery;
