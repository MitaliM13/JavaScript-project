import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import Layout from './Layout.jsx';
import Hero from './components/Hero.jsx';
import Special from './components/Special.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';

// Create a UserContext for global access to authentication state
const UserContext = createContext(null);

// Custom hook for easy access to UserContext
export const useAuth = () => useContext(UserContext);

// PrivateRoute Component to handle protected routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// PublicRoute Component to handle routes for non-authenticated users
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};

// Main App component
const App = () => {
  const [user, setUser] = useState(null); // Initial state

  // Fetch the logged-in user info from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function to update user state and persist login info
  const login = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo)); // Save user info in localStorage
  };

  // Logout function to clear user state and remove login info
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user info from localStorage
  };

  // If user is not authenticated, redirect to login page
  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        { path: '/', element: <Hero /> },
        { path: '/hero', element: <Hero /> },
        { path: '/special', element: <Special /> },
        { path: '/products', element: <Products /> },
        { path: '/contact', element: <Contact /> },
        { path: '/cart', element: <Cart /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '/login',
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    }
  ]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
