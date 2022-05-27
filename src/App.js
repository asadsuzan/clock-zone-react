import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Cart from "./Componets/Cart/Cart";
import { createContext, useEffect, useState } from "react";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import User from "./Pages/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const cartQuantuty = createContext();

function App() {
  const [totalCartItems, setTotalCartItems] = useState(0);
  useEffect(() => {
    const cartNo = JSON.parse(localStorage.getItem("cartNo"));
    if (cartNo) {
      setTotalCartItems(cartNo);
    }
  }, []);

  return (
    <>
      <cartQuantuty.Provider value={{ totalCartItems, setTotalCartItems }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </cartQuantuty.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
