import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx'
import Products from './components/Products.jsx'
import { Provider } from 'react-redux'
import Store from './components/Redux/Store.jsx'
import Bag from './components/Bag.jsx'
import Favriote from './components/Favriote.jsx'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/product/:productId",
      element: <Product/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/bag",
      element: <Bag/>
    },
    {
      path: "/fav",
      element: <Favriote/>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
