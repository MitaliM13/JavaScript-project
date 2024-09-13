// CartReducer.js
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      // Check if product is already in the cart
      { const existingProduct = state.find(item => item.id === action.product.id);
      if (existingProduct) {
        // If it exists, increase its quantity instead of adding a duplicate
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add product with initial quantity
      return [...state, { ...action.product, quantity: 1 }]; }

    case 'Remove':
      return state.filter(item => item.id !== action.product.id);

    case 'Increase':
      // Increase quantity with validation
      return state.map(item =>
        item.id === action.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'Decrease':
      // Decrease quantity with validation to prevent negative quantities
      return state.map(item =>
        item.id === action.product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export default CartReducer;
