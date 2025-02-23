import React, { createContext, useState } from 'react';
export const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const[items, setItems] = useState([]);
    function removeFromCart(id) {
      setItems((prevItems) => prevItems.filter(item => item.id !== id));
    }
  return (
    <CartContext.Provider value={{items, setItems, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;