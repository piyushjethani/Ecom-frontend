import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { IoMdSearch } from "react-icons/io";
import { div, header } from 'framer-motion/client';
import imgup from "../../assets/user1.png";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import {Button} from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';




const AdminUsers = () => {
const [ users,setUsers] = useState([])
const [searchTerm,setSearchTerm] = useState("")
const navigate = useNavigate()


const getAllUsers= async() =>{
  const accessToken = localStorage.getItems("accessToken")

  try{
    const res = await axios.get(`http://localhost:6100/api/v1/user/all-user`,{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    }
    )

    if(res.data.success){
      setUsers(res.data.users)
    }

  }catch(error){
    console.log(error)
  }
}

const filteredUsers = users.filter(user=>
  `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.email.toLowercase().includes(searchTerm.toLowerCase())
)

useEffect(()=>{
getAllUsers()
},[])

  return (
    <div className='pl-[350px] py-20 pr-20 mx-auto px-4'>
      <h1 className='font-bold text-2xl'>User Management</h1>
      <p>View and manage register users</p>
      <div className='flex relative w-[300px] mt-6' >
     <IoMdSearch className='absolute left-2 top-1 text-gray-600 w-5'/>
     <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='pl-10' type="text" placeholder='Search Users...' />
      </div>
      <div className='grid grid-cols-3 gap-7 mt-7'>
{
  users.map((user,index)=>{
    return  <div key={index} className='bg-blue-100 p-5 rounded-lg'>
      <div className='flex items-center gap-2'>
        <img src={user?.profilePic || imgup} alt="" className='rounded-full w-16 aspect-square object-cover border border-blue-600' />
        <div>
          <h1>{user?.firstName} {user?.lastName}</h1>
          <h3>{user?.email}</h3>
        </div>
      </div>
      <Button onClick={()=>navigate(`/dashboard/users/${user?._id}`)} variant='outline'><FiEdit/>Edit</Button>
      <Button onClick={()=>navigate(`/dashboard/users/orders/${user?._id}`)}>< FaEye/>Show Order</Button>
    </div>
  })
}
      </div>

    </div>
  )
}

export default AdminUsers