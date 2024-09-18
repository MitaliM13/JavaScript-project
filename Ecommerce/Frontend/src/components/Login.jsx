import React, { useState } from 'react';

const Login = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

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
    setIsLoginModalOpen(false);
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <>
      <div className="w-full h-screen grid lg:grid-cols-2 grid-cols-1">
        {/* Left Side (Hidden on small screens) */}
        <div className="hidden lg:flex flex-col justify-center items-center p-8 bg-gradient-to-b from-indigo-200 to-indigo-50 rounded-lg shadow-lg">
          <h1 className="text-4xl lg:text-5xl text-indigo-900 font-extrabold mb-6 transition-transform duration-300 hover:scale-105">
            Welcome Back, Trendsetter!
          </h1>
          <p className="text-base lg:text-lg text-gray-600 font-medium mb-6 text-center lg:text-left">
            Shop with ease and explore the latest trends
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-4 lg:p-8">
          <form 
            className="w-full max-w-md bg-white p-6 lg:p-8 shadow-md rounded-lg" 
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-center lg:text-left">
              {isRegisterMode ? 'Register' : 'Login'}
            </h2>

            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email (only show if registering) */}
            {isRegisterMode && (
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              {isRegisterMode ? 'Register' : 'Login'}
            </button>

            {/* Switch between Login/Register */}
            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
              >
                {isRegisterMode ? 'Already have an account? Login' : 'New here? Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
