import React, { useEffect, useState } from "react";
import Gellery from "../../Componets/Gellery/Gellery";
import NewArrivals from "../../Componets/NewArrivals/NewArrivals";
import Products from "../../Componets/Products/Products";
import Slider from "../../Componets/Slider/Slider";
import useProducts from "../../hooks/useProducts";
import "./Home.css";

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [products] = useProducts();
  useEffect(() => {
    fetch("new_products.json")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data));
  }, []);

  return (
    <section className="home">
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
        <h2>Popular Items</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
        <div className="row g-5">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
