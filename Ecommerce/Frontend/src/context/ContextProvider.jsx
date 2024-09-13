// CartContext.js
/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

// Create a context for cart management
const CartContext = createContext();

// Context provider component
const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Export Context and Provider
export { CartContext, ContextProvider };
