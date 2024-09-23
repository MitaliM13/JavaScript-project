/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
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
    <div className="w-full h-auto bg-white pt-12 pb-8">
      <h1 className="text-2xl md:text-3xl drop-shadow-lg font-bold text-center mb-8 md:mb-12">
        Browse Our Collections
      </h1>

      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 z-10 p-1 md:p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
          onClick={() => scroll('left')}
        >
          <IoMdArrowDropleftCircle size={40} className="md:size-[50px]" />
        </button>

        <div
          className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 md:px-16 scrollbar-hide touch-pan-x snap-x snap-mandatory"
          ref={scrollRef}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[120px] md:min-w-[200px] flex flex-col items-center mx-2 my-1 md:mx-3 md:my-2 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition-shadow duration-300"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover mb-2 md:mb-4 rounded-full shadow-md"
              />
              <h2 className="text-lg md:text-xl font-semibold text-heading-secondary mb-1 md:mb-2">
                {category.name}
              </h2>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 p-1 md:p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
          onClick={() => scroll('right')}
        >
          <IoMdArrowDroprightCircle size={40} className="md:size-[50px]" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-14 gap-6 md:gap-10 my-10 md:my-14 opacity-80">
        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <MdOutlineShoppingBag size={30} className="text-rose-500 mb-2" />
          <h1 className="text-sm md:text-md font-semibold text-heading-primary text-center">Free Shipping Worldwide</h1>
          <p className="text-xs md:text-sm text-gray-600 mt-1 text-center">
            Enjoy our global free shipping on every order, no minimum purchase required!
          </p>
        </div>

        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaMoneyBillTransfer size={30} className="text-green-600 mb-2" />
          <h1 className="text-sm md:text-md font-semibold text-heading-primary text-center">Money Back Guarantee</h1>
          <p className="text-xs md:text-sm text-gray-600 mt-1 text-center">
            Shop with confidence—get a full refund within 30 days if you're not satisfied.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <RiCustomerService2Fill size={30} className="text-yellow-500 mb-2" />
          <h1 className="text-sm md:text-md font-semibold text-heading-primary text-center">Customer Support 24/7</h1>
          <p className="text-xs md:text-sm text-gray-600 mt-1 text-center">
            Our friendly support team is here to assist you anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Special;
