import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { cartQuantuty } from "../../App";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const { totalCartItems } = useContext(cartQuantuty);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);
  return (
    <header
      className={`header  d-flex px-3  align-items-center justify-content-center ${
        shadow ? "shadow-lg bg-light" : "shadow-sm"
      }`}
    >
      <div className="h-brand text-uppercase">
        <span>clock</span>
        <span>zone</span>
      </div>
      <nav className="h-nav d-flex justify-content-center ">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>shop</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>blog</Link>
        <Link to={"/contact"}>contact</Link>
      </nav>
      <div className="h-actions-btn d-flex align-items-center">
        <Link to={"/user"}>
          {" "}
          <AiOutlineUser />
        </Link>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart />
          <sup>{totalCartItems}</sup>
        </Link>
      </div>
    </header>
  );
};

export default Header;
// header  d-flex px-3 shadow-sm align-items-center justify-content-center
