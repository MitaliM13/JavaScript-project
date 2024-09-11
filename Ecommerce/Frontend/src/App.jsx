import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero.jsx'
import Special from './components/Special.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
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
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
