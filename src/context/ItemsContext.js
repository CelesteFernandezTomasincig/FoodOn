import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

const initialState = () => [
  {
    id: 1,
    hamburguesa: "Hamburguesa Bacone",
    price: 1999,
  },
];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([initialState]);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {children}
    </ItemsContext.Provider>
  );
};
