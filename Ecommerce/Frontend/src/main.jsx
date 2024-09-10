import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero.jsx'
import Special from './components/Special.jsx'
import Products from './components/Products.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/hero',
        element: <Hero />,
      },
      {
        path: '/special',
        element: <Special />,
      },
      {
        path: '/products',
        element: <Products />,
      }
      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
