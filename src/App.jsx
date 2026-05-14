import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Verify from './pages/Verify.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'
import Footer from './components/Footer.jsx'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard.jsx'
import AddProduct from './pages/admin/AddProduct.jsx'
import AdminOrders from './pages/admin/AdminOrders.jsx'
import AdminProduct from './pages/admin/AdminProduct.jsx'
import AdminSales from './pages/admin/AdminSales.jsx'
import AdminUsers from './pages/admin/AdminUsers.jsx'
import ShowUserOrders from './pages/admin/ShowUserOrders.jsx'
import UserInfo from './pages/admin/UserInfo.jsx'
import AddressForm from './pages/AddressForm.jsx'
import OrderSuccess from './pages/OrderSuccess.jsx'
import MyOrder from './pages/MyOrder.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import BreadCrums from './components/BreadCrums.jsx'
import SideBar from './components/Sidebar.jsx'

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
