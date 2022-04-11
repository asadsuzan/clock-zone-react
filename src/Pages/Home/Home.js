import React, { useEffect, useState } from "react";
import Gellery from "../../Componets/Gellery/Gellery";
import NewArrivals from "../../Componets/NewArrivals/NewArrivals";
import Slider from "../../Componets/Slider/Slider";
import "./Home.css";

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
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
    </section>
  );
};

export default Home;
