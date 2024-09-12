const CartReducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      return [...state, action.product];

    case 'Remove':
      return state.filter((item) => item.id !== action.product.id);

    case 'Increase':
      // Logic to increase the quantity of the product
      return state.map((item) =>
        item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'Decrease':
      // Logic to decrease the quantity of the product
      return state.map((item) =>
        item.id === action.product.id ? { ...item, quantity: item.quantity - 1 } : item
      );

    default:
      return state;
  }
};

export default CartReducer;
