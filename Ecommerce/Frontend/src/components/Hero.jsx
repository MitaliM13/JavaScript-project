import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-between relative overflow-hidden px-16">
      <div className="flex flex-col z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-highlight-text leading-tight drop-shadow-lg mb-6">
          Discover. Shop. Thrive. Your Style, Your Way.
        </h1>
        <NavLink to="/products">
          <button className="px-6 py-3 bg-button-bg text-button-text font-semibold rounded-full shadow-md hover:bg-hover-link hover:text-button-text transition transform hover:scale-105 focus:outline-none">
            Shop Now
          </button>
        </NavLink>
      </div>

      <iframe src="https://videos.pexels.com/video-files/6841962/6841962-sd_640_360_25fps.mp4"></iframe>

      <img
      src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Hero"
      className="absolute  right-16 h-auto max-w-full shadow-lg rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"  
    />

    </div>
  );
}

export default Hero;
