import React from "react";

import { FaPlaceOfWorship } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="container">
      <section className="polices-wraper">
        <div className="row polices">
          <div className="col-lg-4 col-md-4 col-12 plc-left">
            <FaPlaceOfWorship />
            <h3>Free Shipping Method</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 plc-middle">
            <AiFillUnlock />
            <h3>Secure Payment System</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 plc-right">
            <GrShieldSecurity />
            <h3>Secure Payment System</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
