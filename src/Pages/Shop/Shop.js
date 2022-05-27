import React, { useContext } from "react";
import { toast } from "react-toastify";
import { cartQuantuty } from "../../App";
import Products from "../../Componets/Products/Products";
import { addToDb } from "../../fackDb/fackDb";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const { totalCartItems, setTotalCartItems } = useContext(cartQuantuty);
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
    // set cart number
    setTotalCartItems(totalCartItems + 1);
    localStorage.setItem("cartNo", JSON.stringify(totalCartItems));
    toast("Item Added", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
  };
  return (
    <div className="row gx-3 gy-5 my-5">
      {products.map((product) => (
        <Products
          key={product.id}
          product={product}
          handleAddCart={handleAddCart}
        />
      ))}
    </div>
  );
};

export default Shop;
