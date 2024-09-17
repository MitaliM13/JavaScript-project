import { useContext } from 'react';
import cartLogo from '../image/shopping-cart.png';
import { CartContext } from '../context/ContextProvider';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  // useEffect(() => {
  //   // Store cart in localStorage on change
    
  //   localStorage.setItem('cartItems', JSON.stringify(cart));
  // }, [cart]);


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
    <div className='w-full h-screen bg-background'>
      <div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <img src={cartLogo} alt="Cart" className="w-32 h-32" />
            <h1 className="text-2xl font-bold text-heading-primary mt-4">Your Cart is Empty</h1>    
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-heading-primary mt-4">Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h2 className="text-lg font-bold text-heading-primary mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    Quantity: {product.quantity}
                  </p>
                  <p className="text-gray-700 mb-2">
                    Price: ${product.price}
                  </p>
                  <div className="flex justify-between">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      Increase
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      Decrease
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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
