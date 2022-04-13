const getFromDb = () => {
  return JSON.parse(localStorage.getItem("shoping_cart"));
};
const addToDb = (id) => {
  let shpoingCart = {};
  const exits = getFromDb();
  if (!exits) {
    shpoingCart[id] = 1;
  } else {
    shpoingCart = exits;
    if (shpoingCart[id]) {
      const quantity = shpoingCart[id] + 1;
      shpoingCart[id] = quantity;
    } else {
      shpoingCart[id] = 1;
    }
  }
  localStorage.setItem("shoping_cart", JSON.stringify(shpoingCart));
};
const removeFromDb = (id) => {
  const shpoingCart = getFromDb();
  if (id in shpoingCart) {
    delete shpoingCart[id];
    localStorage.setItem("shoping_cart", JSON.stringify(shpoingCart));
  }
};
export { addToDb, getFromDb, removeFromDb };
