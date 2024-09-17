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

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert('Please enter a valid password.');
      return;
    }

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
      <div className="w-full h-screen grid lg:grid-cols-2 grid-cols-1 bg-gradient-to-r from-blue-700 to-indigo-300">
        {/* Left Side */}
        <div className="h-full flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Hello Again, Trendsetter!</h1>
        <p className="text-xl">Discover your next favorite find and shop effortlessly.</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8">
          <form 
            className="w-full max-w-md bg-white p-4 shadow-lg rounded-lg" 
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-3xl font-semibold mb-2 text-gray-700">
              {isRegisterMode ? 'Register' : 'Login'}
            </h2>

            {/* Username */}
            <div className="mb-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email (only show if registering) */}
            {isRegisterMode && (
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className={`w-full mt-2 p-3 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all ease-in-out duration-300"
            >
              {isRegisterMode ? 'Register' : 'Login'}
            </button>

            {/* Switch between Login/Register */}
            <div className="mt-6 text-center">
              <button
                type="button"
                className="text-sm text-indigo-500 hover:underline"
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
