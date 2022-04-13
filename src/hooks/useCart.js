import { useEffect, useState } from "react";
import { getFromDb } from "../fackDb/fackDb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const shpoingCart = getFromDb();
    const addedItems = [];
    for (const id in shpoingCart) {
      const exitsItems = products.find((pd) => pd.id == id);
      if (exitsItems) {
        const quantity = shpoingCart[id];
        exitsItems.quantity = quantity;
        addedItems.push(exitsItems);
      }
    }
    setCart(addedItems);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
