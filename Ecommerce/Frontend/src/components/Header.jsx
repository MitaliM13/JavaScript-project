import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/ContextProvider';
import cartLogo from '../image/shopping-cart.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const {cart} = useContext(CartContext);

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
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 h-[55px] py-2 z-20 shadow-lg bg-indigo-800">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3 p-3 cursor-pointer rounded-full">
            <h1 className="font-serif font-extrabold text-2xl text-white hover:drop-shadow-lg ">NovaCart</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-xl">
            <NavLink
              to="/hero"
              className={({ isActive }) =>
                `hover:text-blue-300 ${isActive ? 'text-white font-semibold' : ' text-white'} cursor-pointer transition`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/special"
              className={({ isActive }) =>
                `hover:text-blue-300 ${isActive ? 'text-white font-semibold' : ' text-white'} cursor-pointer transition`
              }
            >
              <li>Collections</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-blue-300 ${isActive ? 'text-white font-semibold' : ' text-white'} cursor-pointer transition`
              }
            >
              <li>Shop now</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-300 ${isActive ? 'text-white font-semibold' : ' text-white'} cursor-pointer transition`
              }
            >
              <li>Contact Us</li>
            </NavLink>
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/cart" className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-lg shadow-md text-white bg-blue-600 hover:bg-header transition duration-200 ease-in-out transform hover:scale-105 flex items-center gap-2">
                <img className="w-5 h-5" src={cartLogo} alt="cart" />
                <span className="text-sm  font-semibold">{cart.length}</span>
              </button>
            </NavLink>
  
      <NavLink to = "/login">
      <button
        
        className="px-3 py-2 rounded-lg shadow-md text-white bg-blue-600 text-sm hover:bg-header transition duration-200 ease-in-out transform hover:scale-105 flex items-center"
      >
        Login
      </button>
      </NavLink>
    </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              className="text-gray-600 hover:text-active-link focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
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
            <div className="w-64 bg-indigo-800 text-nav-text shadow-lg flex flex-col p-4 space-y-4">
              <button
                className="self-end text-nav-text hover:text-active-link focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="space-y-4">
                <NavLink
                  to="/hero"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg ${isActive ? 'text-white font-bold'  : 'text-white'} hover:bg-indigo-600 transition`
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  to="/special"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg ${isActive ? 'text-white font-bold'  : 'text-white'} hover:bg-indigo-600 hover:text-header transition`
                  }
                >
                  <li>Collections</li>
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg ${isActive ? 'text-white font-bold'  : 'text-white'} hover:bg-indigo-600 hover:text-header transition`
                  }
                >
                  <li>Shop now</li>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg ${isActive ? 'text-white font-bold'  : 'text-white'} hover:bg-indigo-600 hover:text-header transition`
                  }
                >
                  <li>Contact Us</li>
                </NavLink>
              </ul>
              <div className="flex flex-col space-y-2 gap-1">
                <NavLink to="/cart">
                <button className="w-1/2 px-4 py-2 text-white bg-blue-600 text-sm rounded hover:bg-indigo-600 shadow-md transition flex items-center justify-evenly">
                  <img className="w-6 h-6" src={cartLogo} alt="cart" />
                  <span className="text-sm font-semibold">{cart.length}</span>
                </button>
                </NavLink>
                <NavLink to="/login">
                <button
                  className="w-1/2 px-4 py-2  text-white bg-blue-600 text-sm shadow-md rounded hover:bg-indigo-600 hover:text-header transition"
                >
                  Login
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}

      </header>
    </>
  );
}

export default Header;
