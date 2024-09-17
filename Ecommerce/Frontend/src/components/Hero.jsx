import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="w-full h-screen bg-white flex flex-col-reverse md:flex-row items-center justify-evenly relative overflow-hidden px-6 md:px-16">
      <div className="flex flex-col z-10 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-highlight-text leading-tight drop-shadow-lg mb-6">
          Discover. Shop. Thrive. Your Style, Your Way.
        </h1>
        <NavLink to="/products">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-hover-link hover:text-button-text transition transform hover:scale-105 focus:outline-none">
            Shop Now
          </button>
        </NavLink>
      </div>

      <img
        src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Hero"
        className="w-full h-64 sm:h-80 md:h-auto max-w-full shadow-lg rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 mb-6 md:mb-0 md:mr-16"
      />
    </div>
  );
}

export default Hero;
