import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
 
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'


import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";


import { toast } from "sonner"
import { useDispatch } from 'react-redux'
import {setUser} from '@/redux/userSlice'



const Login = () => {
  const [showPassword,setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
 const {name,value} = e.target;
 setFormData((prev)=>({
  ...prev,
  [name]:value
 }))
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    console.log(formData);

    try{
      setLoading(true)
      const res = await axios.post(`http://localhost:6100/api/v1/user/login`,formData,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(res.data.success){
        navigate('/');
        dispatch(setUser(res.data.user))
        localStorage.setItem("accessToken",res.data.accessToken)
        toast.success(res.data.message)

      }

    } catch(error){
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to login. Please check server connection.")
    }
    finally{
      setLoading(false)
    }
  }
  return (
//     

<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 px-4">
  <Card className="w-full max-w-md shadow-2xl rounded-2xl backdrop-blur-lg bg-white/80 border border-white/40">
    
    <CardHeader className="text-center space-y-2">
      <CardTitle className="text-2xl font-bold text-gray-800">
        Create your account
      </CardTitle>
      <CardDescription className="text-gray-500">
        Login to continue your journey
      </CardDescription>
    </CardHeader>

    <CardContent>
      <form   onSubmit={submitHandler}className="space-y-5">

     

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            className="focus:ring-2 focus:ring-purple-400"
            value={formData.email}
              onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <span className="text-sm text-purple-600 hover:underline cursor-pointer">
              Forgot?
            </span>
          </div>
          <div className='relative'>

          
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="focus:ring-2 focus:ring-purple-400"
            value={formData.password}
              onChange={handleChange}
            required
            />
            {
                showPassword? < IoIosEyeOff  onClick={() => setShowPassword(false)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-purple-600 transition"/>:
                <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-purple-600 transition" onClick={() => setShowPassword(true)}/>
            }
            </div>
        </div>
        {/* Button */}
        <Button
          type="submit"
          className="w-[90%] ml-5  bg-purple-600  hover:bg-purple-700 transition-all duration-200"
        >
         {loading?
         <>
         <Loader2 className='h-4 w-4 animate-spin mr-2'/>Please wait
         </>:'Login'} 
        </Button>
       
      </form>
    </CardContent>
   

    <CardFooter className="justify-center text-sm text-gray-600">
       
      <p className='text-gray-700 text-sm'>Don't have an account?  
     
         <Link to={'/signup'} className="text-purple-600 ml-1 cursor-pointer hover:underline">Signup</Link>
         </p>
      
    </CardFooter>

  </Card>
</div>

   



  )
}

export default Login