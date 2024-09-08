import  { useRef } from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

function Special() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300; // Scroll left by 300px
    } else {
      current.scrollLeft += 300; // Scroll right by 300px
    }
  };

  const categories = [
    { name: 'Tops', img: 'https://i.pinimg.com/236x/26/ae/26/26ae2697ce1f362fdb06c0402f704a2a.jpg' },
    { name: 'Bottoms', img: 'https://i.pinimg.com/236x/ec/10/47/ec1047a1939ea9ac3bbf1be4ea65da97.jpg' },
    { name: 'Shoes', img: 'https://i.pinimg.com/236x/db/10/79/db1079dacc98ef91c442ed1b65d5467b.jpg' },
    { name: 'Chairs', img: 'https://i.pinimg.com/236x/36/d4/a1/36d4a1bd02b22bb9afc0945a249439a7.jpg' },
    { name: 'Tables', img: 'https://i.pinimg.com/236x/6b/27/24/6b2724cd4ec8013e4b537cd1c5a8893d.jpg' },
    { name: 'Soft Toys', img: 'https://i.pinimg.com/474x/44/f0/34/44f0347818d27e38dd871b29e9c1bd12.jpg' }
  ];

  return (
    <div className='w-full h-auto bg-white py-16'>
      <h1 className='text-4xl font-bold text-center mb-12'>Shop by Categories</h1>

      <div className='relative flex items-center'>
        {/* Left Arrow */}
        <button
          className='absolute left-0 z-10 p-2 text-gray-500 hover:text-gray-900'
          onClick={() => scroll('left')}
          style={{ marginLeft: '20px' }} // Push the button to the side
        >
          <IoMdArrowDropleftCircle size={50} />
        </button>

        {/* Scrollable container */}
        <div
          className='flex overflow-x-auto space-x-6 px-16 md:px-24 scrollbar-hide touch-pan-x snap-x snap-mandatory'
          ref={scrollRef}
          style={{ padding: '0 80px' }} // Padding to create space for the buttons
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className='min-w-[200px] flex flex-col  items-center mx-6 my-2 bg-gray-100 p-6 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
              <img
                src={category.img}
                alt={category.name}
                className='w-32 h-32 object-cover mb-4 overflow-hidden rounded-full'
              />
              <h2 className='text-xl font-semibold'>{category.name}</h2>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className='absolute right-0 z-10 p-2 text-gray-500 hover:text-gray-900'
          onClick={() => scroll('right')}
          style={{ marginRight: '20px' }} // Push the button to the side
        >
          <IoMdArrowDroprightCircle size={50} />
        </button>
      </div>
    </div>
  );
}

export default Special;
