import React from 'react';
import bgImage from '../image/Background.png';

function Hero() {
  return (
    <div className="bg-green-300 w-full h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Slogan and Button Section */}
      <div className="flex flex-col items-center text-center z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg mb-6">
          Discover. Shop. Thrive. Your Style, Your Way.
        </h1>
        <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-green-600 hover:text-white transition transform hover:scale-105 focus:outline-none">
          Shop Now
        </button>
      </div>

      {/* Image Positioned on the Right */}
      <img
        src={bgImage}
        alt="Hero"
        className="absolute right-0 bottom-0 md:w-1/2 w-2/3 h-auto object-contain opacity-80"
      />
    </div>
  );
}

export default Hero;
