import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    const existingIndex = cartList.findIndex(product => product.id === item.id);
    if (existingIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[existingIndex].quantity += qty;
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, {...item, quantity: qty}]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    const existingIndex = cartList.findIndex(product => product.id === id);
    if (existingIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList.splice(existingIndex, 1);
      setCartList(updatedCartList);
    }
  };

  return (
    <ItemsContext.Provider value={{ cartList, addToCart, removeList, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default CartContextProvider ;
