import { useContext } from 'react';
import cartLogo from '../image/shopping-cart.png';
import { CartContext } from '../context/ContextProvider';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    dispatch({ type: 'Remove', id: productId });
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: 'Increase', id: productId });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: 'Decrease', id: productId });
  };

  return (
    <div className='w-full min-h-screen bg-gray-100 p-4'>
      <div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <img src={cartLogo} alt="Cart" className="w-28 h-28" />
            <h1 className="text-3xl font-bold text-gray-700 mt-4">Your Cart is Empty</h1>    
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Cart</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white w-64 sm:w-full rounded-lg shadow-lg p-6 flex flex-col justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-gray-600 mb-4">
                      Price: <span className="font-bold">${product.price}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      className="bg-button-bg hover:bg-active-link text-white font-bold py-2 px-4 rounded transition-all duration-300"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="bg-button-bg hover:bg-active-link text-white font-bold py-2 px-4 rounded transition-all duration-300"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <button
                      className="bg-slogan-text hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                      onClick={() => handleRemoveItem(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
