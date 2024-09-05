import React from 'react';
import logo from '../image/online-shopping.png'; // Assuming this is used elsewhere or for future use
import cart from '../image/shopping-cart.png';

function Header() {
  return (
    <div className="bg-white shadow-md">
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <nav className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <img className="w-9 h-9" src={logo} alt="Logo" />
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 ml-8 text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-600 cursor-pointer transition">Products</li>
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button className="text-gray-600 hover:text-purple-600 focus:outline-none">
              {/* Mobile Navigation Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
            <img className='w-7 h-7' src={cart} alt="cart" />
          </button>
          <button className="px-4 py-2 border-2 border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
