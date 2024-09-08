import { useState } from 'react';
import logo from '../image/online-shopping.png';
import cart from '../image/shopping-cart.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-20 shadow-lg bg-green-600">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="bg-white flex items-center space-x-2 p-2 rounded-full">
          <img className="w-9 h-9" src={logo} alt="Logo" />
          <h1 className="font-serif text-xl text-green-600">NovaCart</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white text-xl">
          <li className="hover:text-green-200 cursor-pointer transition">Home</li>
          <li className="hover:text-green-200 cursor-pointer transition">Products</li>
          <li className="hover:text-green-200 cursor-pointer transition">Shop now</li>
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
          <button
            className="text-gray-600 hover:text-purple-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-64 bg-white shadow-lg flex flex-col p-4 space-y-4">
            <button
              className="self-end text-gray-600 hover:text-green-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="space-y-4 text-gray-800">
              <li className="hover:text-green-600 cursor-pointer transition">Home</li>
              <li className="hover:text-green-600 cursor-pointer transition">Products</li>
              <li className="hover:text-green-600 cursor-pointer transition">Contact</li>
              <li className="hover:text-green-600 cursor-pointer transition">About</li>
            </ul>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
                <img className="w-7 h-7" src={cart} alt="cart" />
              </button>
              <button className="px-4 py-2 border-2 border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

export default Header;
