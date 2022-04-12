// const getFromDb = () => {
//   return JSON.parse(localStorage.getItem("shoping_cart"));
// };

// const addToDb = (id) => {
//   let shopingCart = {};
//   let exits = getFromDb();
//   if (!exits) {
//     shopingCart[id] = 1;
//   } else {
//     shopingCart = exits;
//     if (shopingCart[id]) {
//       const quantity = shopingCart[id] + 1;
//       shopingCart[id] = quantity;
//     } else {
//       shopingCart[id] = 1;
//     }
//   }
//   localStorage.setItem("shoping_cart", JSON.stringify(shopingCart));
// };
// export { addToDb, getFromDb };
const getFromDb = () => {
  return JSON.parse(localStorage.getItem("shoping_cart"));
};
const removeFromBd = () => {
  localStorage.removeItem("shoping_cart");
};
const removeItemFromDb = (id) => {
  const savedItems = JSON.parse(localStorage.getItem("shoping_cart"));

  if (savedItems) {
    for (const itemId in savedItems) {
      if (itemId === id) {
        delete savedItems[id];
      }
    }
  }
  localStorage.setItem("shoping_cart", JSON.stringify(savedItems));
};
const addToDb = (id) => {
  let shopingCart = {};
  let exits = getFromDb();
  if (!exits) {
    shopingCart[id] = 1;
  } else {
    shopingCart = exits;
    if (shopingCart[id]) {
      const quantity = shopingCart[id] + 1;
      shopingCart[id] = quantity;
    } else {
      shopingCart[id] = 1;
    }
  }
  localStorage.setItem("shoping_cart", JSON.stringify(shopingCart));
};
export { addToDb, getFromDb, removeFromBd, removeItemFromDb };
