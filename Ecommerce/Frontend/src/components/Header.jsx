import React from 'react';
import logo from '../image/online-shopping.png';
import cart from '../image/shopping-cart.png';

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20 shadow-lg">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 bg-white opacity-80 p-2 rounded-sm">
          <img className="w-9 h-9" src={logo} alt="Logo" />
          <h1 className="font-serif text-xl text-green-600">NovaCart</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white text-xl">
          <li className="hover:text-green-600 cursor-pointer transition">Home</li>
          <li className="hover:text-green-600 cursor-pointer transition">Products</li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-white rounded hover:bg-green-600 transition">
            <img className="w-7 h-7" src={cart} alt="cart" />
          </button>
          <button className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-green-600 transition">
            Login
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          <button className="text-gray-600 hover:text-purple-600 focus:outline-none">
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
    </header>
  );
}

export default Header;
