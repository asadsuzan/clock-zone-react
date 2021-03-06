import { toast } from "react-toastify";
import { removeFromDb } from "../../fackDb/fackDb";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const removeItem = (id) => {
    const exitsItems = cart.filter((pd) => pd.id != id);
    setCart(exitsItems);
    removeFromDb(id);
    toast.warn("Item Dleted", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
  };

  return (
    <div className="container">
      <Banner text={"CART"} />
      <div className="cart-items-wraper ">
        <div className="cart-header">
          <div className="row m-0 text-uppercase py-5 shadow-sm ">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">Products</div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">price</div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">quantity</div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">total</div>
          </div>
        </div>
        <div className="items my-5">
          <div className="row m-0 align-items-center">
            {cart.map((item) => (
              <CartItems
                key={item.id}
                removeItem={removeItem}
                item={item}
              ></CartItems>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
