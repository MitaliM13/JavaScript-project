import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/online-shopping.png';
import cartLogo from '../image/shopping-cart.png';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  // Password Validation Criteria
  const validatePassword = (password) => {
    const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordCriteria.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
      );
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate password as user types
    if (name === 'password') {
      validatePassword(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Final password check before submission
    if (!isPasswordValid) {
      alert('Please enter a valid password.');
      return;
    }

    // Simulate form submission logic (login or register)
    if (isRegisterMode) {
      console.log('Registering:', formData);
    } else {
      console.log('Logging in:', formData);
    }

    // Close the modal after submission
    setIsLoginModalOpen(false);
    setFormData({ username: '', email: '', password: '' });
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
          <ul className="hidden md:flex space-x-6 text-xl">
            <NavLink
              to="/hero"
              className={({ isActive }) =>
                `hover:text-green-200 ${isActive ? 'text-white' : ' text-black'} cursor-pointer transition`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/special"
              className={({ isActive }) =>
                `hover:text-green-200 ${isActive ? 'text-white' : ' text-black'} cursor-pointer transition`
              }
            >
              <li>Collections</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-green-200 ${isActive ? 'text-white' : ' text-black'} cursor-pointer transition`
              }
            >
              <li>Shop now</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-green-200 ${isActive ? 'text-white' : ' text-black'} cursor-pointer transition`
              }
            >
              <li>Contact Us</li>
            </NavLink>
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105 flex flex-row items-center justify-between gap-2">
            <img className="w-7 h-7" src={cart} alt="cart" />
            <span className="text-sm font-semibold">{cartItems.length}</span>
          </button>
            <button
              onClick={toggleLoginModal}
              className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-green-600 transition"
            >
              {isRegisterMode ? 'Register' : 'Login'}
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
                <NavLink
                  to="/hero"
                  className={({ isActive }) =>
                    `hover:text-green-700 ${isActive ? 'text-green-400' : ' text-black'} cursor-pointer transition`
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  to="/special"
                  className={({ isActive }) =>
                    `hover:text-green-700 ${isActive ? 'text-green-400' : ' text-black'} cursor-pointer transition`
                  }
                >
                  <li>Collections</li>
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `hover:text-green-700 ${isActive ? 'text-green-400' : ' text-black'} cursor-pointer transition`
                  }
                >
                  <li>Shop now</li>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-green-700 ${isActive ? 'text-green-400' : ' text-black'} cursor-pointer transition`
                  }
                >
                  <li>Contat Us</li>
                </NavLink>
              </ul>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
                  <img className="w-7 h-7" src={cartLogo} alt="cart" />
                </button>
                <button
                  onClick={toggleLoginModal}
                  className="px-4 py-2 border-2 border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition"
                >
                  {isRegisterMode ? 'Register' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Login/Register Modal */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
              {/* Close Button */}
              <button
                onClick={toggleLoginModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl text-center font-semibold mb-4">
                {isRegisterMode ? 'Register' : 'Login'}
              </h3>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter Username"
                  required
                  className="w-full p-2 border rounded mb-3"
                />
                {isRegisterMode && (
                  <>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      required
                      className="w-full p-2 border rounded mb-3"
                    />
                  </>
                )}
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  required
                  className={`w-full p-2 border rounded ${
                    !isPasswordValid ? 'border-red-500' : ''
                  } mb-3`}
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                >
                  {isRegisterMode ? 'Register' : 'Login'}
                </button>
              </form>
              <div className="flex justify-between mt-4 text-sm">
                <span>
                  {isRegisterMode
                    ? 'Already have an account?'
                    : 'Don’t have an account?'}
                </span>
                <button
                  onClick={() => setIsRegisterMode(!isRegisterMode)}
                  className="text-green-500 hover:underline"
                >
                  {isRegisterMode ? 'Login' : 'Register'}
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
