import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiArrowLeft } from "react-icons/ti";
import { useState } from 'react';
import imgup from "../../assets/user1.png";
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {toast} from 'sonner'
import { useSelector,useDispatch } from 'react-redux';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const UserInfo = () => {
  const navigate = useNavigate()
    const [updateUser, setUpdateUser] = useState(null)
    const [file,setFile] = useState(null)
    const [loading,setLoading] = useState(false)
    const {user} =useSelector(store=>store.user)
    const dispatch=useDispatch()
    const params = useparams()
    const userId = params.id


       const handleChange = (e)=>{
        setUpdateUser({...updateUser,[e.target.name]:e.target.value})
    }
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
        setUpdateUser({...updateUser,profilePic:URL.createObjectURL(selectedFile)})
    }// preview only
        const handleSubmit= async(e)=>{
            e.preventDefault()
            const accessToken = localStorage.getItem("accessToken")
        if (!userId) {
          toast.error("Unable to update profile: user not loaded yet")
          return
        }

        try {
          setLoading(true)
          const formData = new FormData()
          formData.append("firstName", updateUser.firstName)
          formData.append("lastName", updateUser.lastName)
          formData.append("email", updateUser.email)
          formData.append("phoneNo", updateUser.phoneNo)
          formData.append("address", updateUser.address)
          formData.append("city", updateUser.city)
          formData.append("zipCode", updateUser.zipCode)
          formData.append("role", updateUser.role)

          if (file) {
            formData.append("file", file)
          }

          const res = await axios.put(
            `http://localhost:6100/api/v1/user/update/${userId}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          )

          if (res.data.success) {
            toast.success(res.data.message)
            setUpdateUser((prev) => ({ ...prev, profilePic: res.data.user.profilePic || prev.profilePic }))
            dispatch(setUser(res.data.user))

          }
        } catch (error) {
          console.error(error)
          toast.error("Failed to update profile")
        } finally {
          setLoading(false)
        }
        }

        const getUserDetails= async() =>{
  

  try{
    const res = await axios.get(`http://localhost:6100/api/v1/user/get-user/${userId}`)

    if(res.data.success){
      setUsers(res.data.users)
    }

  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  getUserDetails()
},[])
  
  return (
    <div className='pt-5 min-h-screen bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
          <div className='flex justify-between gap-10'>
            <Button onClick={()=> navigate(-1)}><TiArrowLeft/></Button>
            <h1 className='font-bold md-7 text-2xl text-gray-800'>Update Profile</h1>
          </div>
          <div className='w-full flex gap-10 justify-between items-start px-7 max-w-2xl'>
                            {/* profile picture */}
                            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center '>
                                <img src={updateUser?.profilePic || imgup} alt="profile" className='w-22 h-22 rounded-full object-cover border-4 border-blue-400  ' />
                                <Label className='mt-4 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'> Change Picture
                                    <input type="file" accept='image/*' className='hidden' onChange={handleFileChange}/>
                                </Label>
                            </div>
                            {/* profile form */}
                            <form  onSubmit={handleSubmit} className='space-y-4 shadow-lg p-5 rounded-lg bg-white'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <Label className='block text-sm font-medium'>First Name</Label>
                                        <input type="text" name='firstName' className='w-full border rounded-lg px-3 py-2 mt-1'placeholder='Jhon' value={updateUser?.firstName} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Last Name</Label>
                                        <input type="text" name='lastName' className='w-full border rounded-lg px-3 py-2 mt-1' placeholder=' Doe 'value={updateUser?.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                        <Label className='block text-sm font-medium'>Email</Label>
                                        <input placeholder='Enter Email' type="email" name='email'  className='w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100 cursor-pointer'value={updateUser?.email} onChange={handleChange} />
                                    </div>
                                         <div>
                                        <Label className='block text-sm font-medium'>Phone Number</Label>
                                        <input type="text" name='phoneNo'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your Phone No'value={updateUser?.phoneNo} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Address</Label>
                                        <input type="text" name='address'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder=' Enter your Address'value={updateUser?.address} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Enter Your city </Label> 
                                        <input type="text" name='city'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your city ' value={updateUser?.city} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Zip Code</Label>
                                        <input type="text" name='zipCode'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your Zipcode'value={updateUser?.zipCode} onChange={handleChange} />
                                    </div>
                                      <div className='flex gap-3 items-center'>
                                        <label className='block text-sm font-medium'>Role:</label>
                                        <RadioGroup 
                                        value={updateUser?.role}
                                        onValueChange={(value)=>setUpdateUser({...updateUser,role:value})}
                                        className='flex items-center'>
                                          <div className='flex items-center space-x-2'>
                                            <RadioGroupItem value="user" id="user"/>
                                            <Label htmlFor="user">User</Label>
                                              </div>
                                               <div className='flex items-center space-x-2'>
                                            <RadioGroupItem value="admin" id="admin"/>
                                            <Label htmlFor="admin">Admin</Label>
                                              </div>

                                        </RadioGroup>

                                      </div>

                                    <Button type='submit' className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg'>
                                       {loading?
                                                 <>
                                                 <Loader2 className='h-4 w-4 animate-spin mr-2'/>Please wait
                                                 </>:' Update Profile '} </Button>
                            </form>
                        </div>
        </div>
      </div>

    </div>
  )
}

export default UserInfo