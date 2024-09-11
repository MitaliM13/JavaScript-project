/* eslint-disable react/no-unescaped-entities */
import  { useRef } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
function Special() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300; 
    } else {
      current.scrollLeft += 300; 
    }
  };

  const categories = [
    { name: 'Tops', img: 'https://i.pinimg.com/236x/26/ae/26/26ae2697ce1f362fdb06c0402f704a2a.jpg' },
    { name: 'Bottoms', img: 'https://i.pinimg.com/236x/ec/10/47/ec1047a1939ea9ac3bbf1be4ea65da97.jpg' },
    { name: 'Shoes', img: 'https://i.pinimg.com/236x/db/10/79/db1079dacc98ef91c442ed1b65d5467b.jpg' },
    { name: 'Chairs', img: 'https://i.pinimg.com/236x/36/d4/a1/36d4a1bd02b22bb9afc0945a249439a7.jpg' },
    { name: 'Tables', img: 'https://i.pinimg.com/236x/6b/27/24/6b2724cd4ec8013e4b537cd1c5a8893d.jpg' },
    { name: 'Soft Toys', img: 'https://i.pinimg.com/474x/44/f0/34/44f0347818d27e38dd871b29e9c1bd12.jpg' },
  ];

  return (
    <div className='w-full h-auto bg-white py-10 mt-14'>
      <h1 className='text-2xl font-bold text-center mb-12'>Browse Our Collecions</h1>

      <div className='relative flex items-center'>

        <button
          className='absolute left-0 z-10 p-2   text-green-600 hover:text-gray-900 transition-color duration-300'
          onClick={() => scroll('left')}
          style={{ marginLeft: '10px' }} 
        >
          <IoMdArrowDropleftCircle size={50} />
        </button>

        <div
          className='flex overflow-x-auto mx-20  space-x-6 px-16 md:px-24 scrollbar-hide touch-pan-x snap-x snap-mandatory'
          ref={scrollRef}
          style={{ padding: '0 40px' }} 
        >

    {categories.map((category, index) => (
      <div
        key={index}
        className="min-w-[200px] flex flex-col items-center mx-3 my-2 bg-gray-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
      <img
        src={category.img}
        alt={category.name}
        className="w-32 h-32 object-cover mb-4 rounded-full shadow-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2>
      
      </div>
    ))}

    </div>
      <button
        className='absolute right-0 z-10 p-2 text-green-600 hover:text-gray-900 transition-color duration-300'
        onClick={() => scroll('right')}
        style={{ marginRight: '20px' }} 
      >
        <IoMdArrowDroprightCircle size={50} />
      </button>
    </div>

    <div className='flex flex-row items-center mx-14 gap-10 my-14 opacity-60'>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <MdOutlineShoppingBag size={36} 
          className="text-purple-500 mb-2" 
        />

      <h1 className="text-md font-semibold text-gray-800">Free Shipping Worldwide</h1>
      <p className="text-sm text-gray-600 mt-1 text-center">
        Enjoy our global free shipping on every order, no minimum purchase required!
      </p>
      </div>

      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
        <FaMoneyBillTransfer 
          size={36} 
          className="text-green-500 mb-2" 
        />
        <h1 className="text-md font-semibold text-gray-800">Money Back Guarantee</h1>
        <p className="text-sm text-gray-600 mt-1 text-center">
          Shop with confidence—get a full refund within 30 days if you're not satisfied.
        </p>
      </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
          <RiCustomerService2Fill 
            size={36} 
            className="text-blue-500 mb-2" 
          />
          <h1 className="text-md font-semibold text-gray-800">Customer Support 24/7</h1>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Our friendly support team is here to assist you anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Special;
