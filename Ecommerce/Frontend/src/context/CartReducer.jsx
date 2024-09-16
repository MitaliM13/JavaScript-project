const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        // Check if the product already exists in the cart
        const existingProductIndex = state.findIndex(p => p.id === action.product.id);
        if (existingProductIndex !== -1) {
          // If the product exists, increase its quantity
          const updatedState = [...state];
          updatedState[existingProductIndex] = {
            ...updatedState[existingProductIndex],
            quantity: updatedState[existingProductIndex].quantity + 1,
          };
          return updatedState;
        } else {
          // Add new product with quantity of 1
          return [...state, { ...action.product, quantity: 1 }];
        }
  
      case "Remove":
        return state.filter(p => p.id !== action.id);
  
      case "Increase":
        return state.map(p => 
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        );
  
      case "Decrease":
        return state.map(p => 
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        );
  
      default:
        return state;  // Always return the current state for unhandled actions
    }
  };
  
  export default CartReducer;
  