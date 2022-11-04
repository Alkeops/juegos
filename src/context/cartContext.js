import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };


  const addProduct = (item, qty) => {
    const element = cart.find((product) => product.id === item.id);

    if (!element) return setCart([...cart, { ...item, qty }]);

    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, qty: product.qty + qty };
      }
      return product;
    });
    setCart(newCart);
  };

  const getTotal = () => cart.reduce((acc, product) => acc + product.precio * product.qty ,0)

  const getCartQty = () => cart.reduce((acc,product) => acc + product.qty , 0);
  

  const value = {
    cart,
    addProduct,
    removeProduct,
    getCartQty,
    getTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
