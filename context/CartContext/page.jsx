"use client";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
