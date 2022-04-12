const { useState, useEffect } = require("react");

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("all_products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};
export default useProducts;
