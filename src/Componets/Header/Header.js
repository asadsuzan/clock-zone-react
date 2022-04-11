import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header  d-flex px-3 shadow-sm align-items-center justify-content-center">
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
      <div className="h-actions-btn d-flex">
        <AiOutlineUser />
        <AiOutlineShoppingCart />
      </div>
    </header>
  );
};

export default Header;
