/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [showFullImage, setShowFullImage] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10);

  useEffect(() => {

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, 
          { signal: controller.signal });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    }


  }, [search]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <div className="bg-green-300 w-full min-h-screen flex justify-center mt-10 py-12 px-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
          Shop By Category
        </h1>

      {/*Search Product*/}

      <div className="flex items-center justify-center gap-2 mb-8">
        <input 
          type="text" 
          placeholder="Search for the products..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
        <button 
          className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded'
        >
          Search</button>
      </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {data.slice(0, visibleProducts).map((item) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-lg shadow-lg overflow-hidden p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <img
            className="w-full h-40 object-cover rounded-md"
            src={item.image}
            alt={item.name}
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-3">{item.name}</h2>
          <p className="text-green-500 text-md font-medium mt-1">Rs: {item.price}</p>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mt-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleViewDetails(item)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>

        {/* Load More Button */}
        {visibleProducts < data.length && (
          <button
            className=" text-gray-500 font-semibold py-2 px-2 mt-5 rounded block mx-auto"
            onClick={loadMoreProducts}
          >
            Load More..
          </button>
        )}
        {/* Product Details Modal */}
        {selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="relative bg-white shadow-lg p-6 rounded-lg w-[90%] max-w-4xl max-h-[90%] overflow-y-auto transform transition-all duration-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img
            className="w-full lg:w-[400px] object-cover rounded-md mb-4 cursor-pointer"
            src={selectedProduct.image}
            alt={selectedProduct.name}
            onClick={() => setShowFullImage(true)} 
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 w-full lg:pl-6 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {selectedProduct.name}
          </h2>
          <p className="text-gray-700 mb-4">{selectedProduct.detail}</p>
          <p className="text-green-500 text-xl font-medium">
            Price: Rs {selectedProduct.price}
          </p>
          <p className="text-gray-500 mb-2 text-sm">Click image to view full size</p>
          <div className="flex justify-center lg:justify-start space-x-2 mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Cart
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Full Image View */}
    {showFullImage && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60"
        onClick={() => setShowFullImage(false)} 
      >
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="max-w-full max-h-full rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    )}
  </div>
)}

        {/* Cart Modal */}
        
      </div>
    </div>
  );
}

export default Products;
