import React from 'react';

function Special() {
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
      <div className='relative'>
        {/* Scrollable container */}
        <div className='flex overflow-x-auto space-x-6 px-4 md:px-12 scrollbar-hide touch-pan-x snap-x snap-mandatory'>
          {categories.map((category, index) => (
            <div key={index} className='min-w-[200px] flex flex-col items-center m-2 bg-gray-100 p-6 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <img 
                src={category.img} 
                alt={category.name} 
                className='w-32 h-32 object-cover mb-4 overflow-hidden rounded-full'
              />
              <h2 className='text-xl font-semibold'>{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Special;
