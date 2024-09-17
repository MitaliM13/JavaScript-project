/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/ContextProvider'; 

function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(5);
  const { cart, dispatch } = useContext(CartContext);

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    let shuffled = array.slice(); // Copy the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
  };

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, { signal: controller.signal });
        // Shuffle the data here after fetching
        setData(shuffleArray(response.data));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [search]);

  useEffect(() => {
    const storedCartItem = localStorage.getItem('cartItems');
    if(storedCartItem) {
      dispatch({ type: 'Load', payload: JSON.parse(storedCartItem) });
    }
  }, [dispatch]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    dispatch({ type: 'Add', payload: product });
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);
  

  return (
    <div className="bg-background w-full min-h-screen flex justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <h1 className="text-3xl md:text-4xl font-bold text-heading-primary text-left mb-8 drop-shadow-lg">
          Shop By Category
        </h1>

        {/* Search Product */}
        <div className="flex items-center  gap-2 mb-8">
          <input
            type="text"
            placeholder="Search for the products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 p-2 border border-card-border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-text"
          />
        </div>

        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.slice(0, visibleProducts).map((item) => (
            <div
              key={item.id}
              className="group relative bg-card-bg rounded-lg shadow-card-shadow overflow-hidden p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img className="w-full h-40 object-cover rounded-md" src={item.image} alt={item.name} />
              <h2 className="text-lg font-semibold text-gray-800 mt-3">{item.name}</h2>
              <p className="text-button-bg text-md font-medium mt-1">Rs: {item.price}</p>

              <button
                className="bg-button-bg hover:bg-hover-link text-button-text text-sm font-semibold py-2 px-2 mt-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleViewDetails(item)}
              >
                View Details
              </button>
              <button
                className="bg-active-link hover:bg-hover-link text-button-text text-sm font-semibold py-2 px-2 mt-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => addToCart(item)} 
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < data.length && (
          <button
            className="text-gray-500 font-semibold py-2 px-2 mt-5 rounded block mx-auto"
            onClick={loadMoreProducts}
          >
            Load More..
          </button>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300">
            <div className="relative bg-card-bg shadow-lg p-6 rounded-lg w-[90%] max-w-4xl max-h-[90%] overflow-y-auto transition-transform duration-300">
              <button
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-800"
                onClick={handleCloseDetails}
              >
                &times;
              </button>
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-6 lg:mb-0">
                  <img className="w-full lg:w-[400px] object-cover rounded-md mb-4" src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-6 text-center lg:text-left">
                  <h2 className="text-2xl font-semibold text-heading-primary mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-700 mb-4">{selectedProduct.detail}</p>
                  <p className="text-button-bg text-xl font-medium">Price: Rs {selectedProduct.price}</p>
                  <button
                    className="bg-button-bg hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
                    onClick={handleCloseDetails}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center font-semibold mt-4">
            <p>Oops! Something went wrong while fetching the products.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
