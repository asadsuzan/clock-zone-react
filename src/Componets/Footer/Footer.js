import React from "react";

import { FaPlaceOfWorship } from "react-icons/fa";
import {
  AiFillUnlock,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container my-5 py-5">
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
      <section className="footer-info-wraper my-5 py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="h-brand text-uppercase">
              <span>clock</span>
              <span>zone</span>
            </div>
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4>Quick Links</h4>
            <div className="d-flex flex-column f-links">
              <Link to={"/shop"}>about</Link>
              <Link to={"/"}>Offers & Discounts</Link>
              <Link to={"/"}>Get Coupon</Link>
              <Link to={"/"}>Contact Us</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4>New Products</h4>
            <div className="d-flex flex-column f-links">
              <Link to={"/shop"}>Woman Cloth</Link>
              <Link to={"/"}>Fashion Accessories</Link>
              <Link to={"/"}>Man Accessories</Link>
              <Link to={"/"}>Rubber made Toys </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4>Support</h4>
            <div className="d-flex flex-column f-links">
              <Link to={"/shop"}>Frequently Asked Questions</Link>
              <Link to={"/"}>Terms & Conditions</Link>
              <Link to={"/"}>Privacy Policy</Link>
              <Link to={"/"}>Report a Payment Issue </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright-text">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-9 col-12">
            Copyright ©2022 All rights reserved | This template is made with by
            <a
              href="https://www.facebook.com/asad.sujon.16/"
              className="text-danger px-2 fw-bold"
            >
              ASAD
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="social-links d-flex">
              <a href="https://www.facebook.com/asad.sujon.16/">
                <BsFacebook />
              </a>
              <a href="https://github.com/asadsuzan">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/asad.sujon.16/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/asad.sujon.16/">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
