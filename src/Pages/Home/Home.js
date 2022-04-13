import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Componets/Button/Button";
import FeaturesPd from "../../Componets/FeaturesPd/FeaturesPd";
import Gellery from "../../Componets/Gellery/Gellery";
import NewArrivals from "../../Componets/NewArrivals/NewArrivals";
import Products from "../../Componets/Products/Products";
import Slider from "../../Componets/Slider/Slider";

import feature1 from "../../assets/features_img/feature1.png";
import feature2 from "../../assets/features_img/feature2.png";
import "./Home.css";
import { addToDb } from "../../fackDb/fackDb";
import usePrpducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [products] = usePrpducts();
  const [cart, setCart] = useCart(products);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("new_products.json")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data));
  }, []);
  const handleAddCart = (selectedProduct) => {
    let newCart = [];
    const exitsProducts = cart.find(
      (cartItem) => cartItem.id === selectedProduct.id
    );
    if (!exitsProducts) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const remainingProducts = cart.filter(
        (cartItem) => cartItem.id !== selectedProduct.id
      );
      const quantity = selectedProduct.quantity;
      selectedProduct.quantity = quantity + 1;
      newCart = [...remainingProducts, selectedProduct];
    }
    addToDb(selectedProduct.id);
    setCart(newCart);
  };

  return (
    <section className="home my-5 pt-4">
      <Slider />
      <div className="container new-arival-container my-5">
        <h1 className="n-title">New Arrivals</h1>
        <div className="row g-4 my-4">
          {newArrivals.map((newPd) => (
            <NewArrivals key={newPd.id} newPd={newPd} />
          ))}
        </div>
      </div>
      <Gellery />
      <div className="products-wraper container">
        <div className="text-center my-5">
          <h2 className="title">Popular Items</h2>
          <p className="lead w-75 mx-auto">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className="row gx-3 gy-5 my-5">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
        <div className="text-center">
          <Button
            text={"view more products"}
            action={() => navigate("/shop")}
          />
        </div>
      </div>
      <div className="features-produsts container">
        <FeaturesPd fimg={feature1} />
        <FeaturesPd fimg={feature2} dicrection="row-reverse" />
      </div>
    </section>
  );
};

export default Home;
