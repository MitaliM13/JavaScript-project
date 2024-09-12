// CartContext.js
/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Export them individually
export { CartContext, ContextProvider };
