import bgImage from '../image/Background.png';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-between relative overflow-hidden px-16">

      <div className="flex flex-col z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-green-600 leading-tight drop-shadow-lg mb-6">
          Discover. Shop. Thrive. Your Style, Your Way.
        </h1>
        <NavLink to="/products">
          <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-green-600 hover:text-white transition transform hover:scale-105 focus:outline-none">
            Shop Now
          </button>
        </NavLink>
      </div>

      <img
        src='https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=400'
        alt="Hero"
        className="absolute right-0  p-4 w-2/3 h-full object-contain "
      />

    </div>
  );
}

export default Hero;
