import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import "./Cart.css";

const Cart = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  console.log(cart);

  return (
    <div className=" cart-page">
      <h1>this is cart page{cart.length} </h1>
    </div>
  );
};

export default Cart;
