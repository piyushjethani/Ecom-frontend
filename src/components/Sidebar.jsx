// import React from 'react'
// import { LuLayoutGrid } from "react-icons/lu";
// import { NavLink } from 'react-router-dom';
// import { SiHackthebox } from "react-icons/si";
// import { FaUserShield } from "react-icons/fa6";
// import { FaBoxOpen } from "react-icons/fa6";
// import { HiPencilAlt } from "react-icons/hi";

// const SideBar = () => {
//   return (
//     <div className='hidden fixed md:block border-r bg-pink-50 border-pink-200 x-10 w-[300px] p-10 space-y-2 h-screen'>
//         <div className='text-center pt-10 px-3 space-y-2'>
//         <NavLink to='/dashboard/sales' className={({isActive})=> `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600':'bg-transparent'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}><LuLayoutGrid /><span>Dashboard</span></NavLink>
//         <NavLink to='/dashboard/add-product' className={({isActive})=> `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600':'bg-transparent'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}><SiHackthebox /><span>Add Product</span></NavLink>
//         <NavLink to='/dashboard/products' className={({isActive})=> `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600':'bg-transparent'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}><FaBoxOpen /><span>Products</span></NavLink>
//         <NavLink to='/dashboard/users' className={({isActive})=> `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600':'bg-transparent'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}><FaUserShield /><span>Users</span></NavLink>
//         <NavLink to='/dashboard/orders' className={({isActive})=> `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600':'bg-transparent'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}><HiPencilAlt /><span>Orders</span></NavLink>
//         </div>
//     </div>
//   )
// }

// export default SideBar


import React from 'react'
import { LuLayoutGrid } from "react-icons/lu"
import { NavLink } from 'react-router-dom'
import { SiHackthebox } from "react-icons/si"
import { FaUserShield } from "react-icons/fa6"
import { FaBoxOpen } from "react-icons/fa6"
import { HiPencilAlt } from "react-icons/hi"

const SideBar = () => {
  return (
    <div className='hidden fixed md:block border-r bg-pink-50 border-pink-200 x-10 w-[300px] p-10 space-y-2 h-screen'>
      
      <div className='text-center pt-10 px-3 space-y-2'>

        <NavLink
          to='/dashboard/sales'
          className={({ isActive }) =>
            `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`
          }
        >
          <LuLayoutGrid /> <span>Dashboard</span>
        </NavLink>

        <NavLink
          to='/dashboard/add-product'
          className={({ isActive }) =>
            `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`
          }
        >
          <SiHackthebox /> <span>Add Product</span>
        </NavLink>

        <NavLink
          to='/dashboard/products'
          className={({ isActive }) =>
            `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`
          }
        >
          <FaBoxOpen /> <span>Products</span>
        </NavLink>

        <NavLink
          to='/dashboard/users'
          className={({ isActive }) =>
            `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`
          }
        >
          <FaUserShield /> <span>Users</span>
        </NavLink>

        <NavLink
          to='/dashboard/orders'
          className={({ isActive }) =>
            `text-xl ${isActive ? 'text-blue-600' : 'text-gray-600'} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`
          }
        >
          <HiPencilAlt /> <span>Orders</span>
        </NavLink>

      </div>
    </div>
  )
}

export default SideBar