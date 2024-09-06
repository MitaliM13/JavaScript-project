import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Products() {

    const [Data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get("/api/products");
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(true);
                console.log(error);
                
            } finally {
                setLoading(false); 
            }
        })()

        if(error) {
            console.log(error);
        }

        if(loading) {
            console.log(loading);
        }
    })


    return (
        <div className="bg-green-300 w-full min-h-screen flex justify-center py-10 px-4">
  <div className="max-w-6xl w-full">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
      Our Top Products
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {Data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 hover:scale-105"
        >
          <img
            className="w-full h-40 object-cover rounded-t-md"
            src={item.image}
            alt={item.name}
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-3">{item.name}</h2>
          <p className="text-green-500 text-md font-medium mt-1">Rs: ${item.price}</p>
          <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 mt-2 rounded'>View Details</button>
        </div>
      ))}
    </div>
  </div>
</div>

    );
}

export default Products;
