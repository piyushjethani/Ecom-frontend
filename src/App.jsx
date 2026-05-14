import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verify from './pages/verify'
import VerifyEmail from './pages/verifyEmail'
import Footer from './components/footer'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import AddProduct from './pages/admin/AddProduct'
import AdminOrders from './pages/admin/AdminOrders'
import AdminProduct from './pages/admin/AdminProduct'
import AdminSales from './pages/admin/AdminSales'
import AdminUsers from './pages/admin/AdminUsers'
import ShowUserOrders from './pages/admin/ShowUserOrders'
import UserInfo from './pages/admin/UserInfo'
import AddressForm from './pages/AddressForm'
import OrderSuccess from './pages/OrderSuccess'
import MyOrder from './pages/MyOrder'
import SingleProduct from './pages/SingleProduct'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verify',
    element: <Verify />,
  },
  {
    path: '/verify/:token',
    element: <VerifyEmail />,
  },
  {
    path: '/profile',
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
  },
  {
    path: '/profile/:userId',
    element: (
      <ProtectedRoute>
        <Navbar />
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/products',
    element: (
      <>
        <Navbar />
        <Products />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <ProtectedRoute>
        <Navbar />
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: '/address',
    element: (
      <ProtectedRoute>
        <AddressForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/order-success',
    element: (
      <ProtectedRoute>
        <OrderSuccess />
      </ProtectedRoute>
    ),
  },
  {
    path: '/orders',
    element: (
      <ProtectedRoute>
        {/* <Navbar /> */}
        <MyOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <>
        <Navbar />
        <SingleProduct />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute adminOnly={true}>
        <Navbar />
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminSales />,
      },
      {
        path: 'sales',
        element: <AdminSales />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'products',
        element: <AdminProduct />,
      },
      {
        path: 'orders',
        element: <AdminOrders />,
      },
      {
        path: 'users/orders/:userId',
        element: <ShowUserOrders />,
      },
      {
        path: 'users',
        element: <AdminUsers />,
      },
      {
        path: 'users/:id',
        element: <UserInfo />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
