// import React from 'react'
// import {Link} from 'react-router-dom'
// import myLogo from '../assets/logo.png';
// import { Button } from './ui/button';
// import { FaCartPlus } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import axios from "axios";

// import { toast } from "sonner"

// const Navbar = () => {
//   try{
//   const {user} = useSelector(store=>store.user)
//   const accessToken = localStorage.getItem('accessToken')
//   const  logoutHandler  = async() =>{
//      const res = await axios.post(`http://localhost:6100/api/v1/user/logout`,{},{
//        headers:{
//         Authorization:`Bearer${accessToken}`
//        }
//     })
//     if(res.data.success){
//       toast.success(res.data.message)
//     }


//   }
// }catch(error){
//       console.log(error)
//     }

//   }

//    return (
//     <header className='bg-blue-50 fixed w-full z-20 vorder-b border-blue-200'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
//         {/* { logo section} */}
//         <div>
//           <img src={myLogo} alt="" className='w-[100px]'/>
//         </div>
//         {/* nav section */}

//       <nav className='flex gap-10 justify-between item-center'>
//         <ul className='flex gap-10 items-center text-xl font-semibold'>
//           <Link to="/"><li>Home</li></Link>
//           <Link to="/products"><li>Products</li></Link>
//           {
//             user &&  <Link to={"/profile"}><li>Hello,{user.firstName}</li></Link>
//           }

//         </ul>
//          <Link to="/cart" className='relative'>
//          <FaCartPlus className='text-[30px] text-gray-500'/>
//          <span className='bg-yellow-300 rounded-full absolute text-black -top-3 -right-4 px-1'>0</span>
//          </Link>
//          {
//           user  ? <Button className='bg-blue-600 text-white cursor-pointer'>Logout</Button>:
//           <Button className=' bg-gradient-to-tl from-pink-600 to-purple-600 text-white cursor-pointer'>Logout</Button>
//          }

//       </nav>
//       </div>
//     </header>
//    )
  



// export default Navbar

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import myLogo from "../assets/logo.png";
import { Button } from "./ui/button";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.product);
  const admin = user?.role === "admin" ? true : false;
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCartQuantity = cart?.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:6100/api/v1/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        dispatch(setUser(null))
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <header className="bg-blue-50 fixed w-full z-20 border-b border-blue-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        
        {/* Logo */}
        <div>
          <img src={myLogo} alt="logo" className="w-[100px]" />
        </div>

        {/* Navbar */}
        <nav className="flex gap-10 justify-between items-center">
          <ul className="flex gap-10 items-center text-xl font-semibold">
            <Link to="/"><li>Home</li></Link>
            <Link to="/products"><li>Products</li></Link>

            {user && (
              <Link to="/profile">
                <li>Hello, {user.firstName}</li>
              </Link>
            )}

             {admin && (
              <Link to="/dashboard/sales">
                <li>Dashboard</li>
              </Link>
            )}
          </ul>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaCartPlus className="text-[30px] text-gray-500" />
            <span className="bg-yellow-300 rounded-full absolute text-black -top-3 -right-4 px-1">
              {totalCartQuantity}
            </span>
          </Link>

          {/* Button */}
          {user ? (
            <Button
              onClick={logoutHandler}
              className="bg-blue-600 text-white cursor-pointer"
            >
              Logout
            </Button>
          ) : (
            <Button onClick={()=>navigate('/login')}  className="bg-gradient-to-tl from-pink-600 to-purple-600 text-white cursor-pointer">
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

