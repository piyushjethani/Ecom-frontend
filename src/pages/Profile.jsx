import React, { useEffect, useState } from 'react'
import imgup from "../assets/user1.png";
import axios from 'axios';
import {toast} from 'sonner'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import MyOrder from './MyOrder.jsx'
 
import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Profile = () => {
  const { user } = useSelector((store) => store.user)
  const userId = user?._id
  const [updateUser, setUpdateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    zipCode: "",
    profilePic: "",
    role: "",
  })

  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setUpdateUser({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNo: user.phoneNo || "",
        address: user.address || "",
        city: user.city || "",
        zipCode: user.zipCode || "",
        profilePic: user.profilePic || "",
        role: user.role || "",
      })
    }
  }, [user])
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
    
  return (
    <div className='pt-20 min-h-screen bg-gray-100'>
        <Tabs defaultValue="profile" className='max-w-7xl mx-auto items-center'>
            <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="update">Update</TabsTrigger>
                <TabsTrigger value="orders">oders</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <div>
                    <div className='flex flex-col justify-center items-center bg-gray-100 '>
                        <h1 className='font-bold mb-7 text-2xl text-gray-800'>Update Profile</h1>
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
                                        <input type="text" name='firstName' className='w-full border rounded-lg px-3 py-2 mt-1'placeholder='Jhon' value={updateUser.firstName} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Last Name</Label>
                                        <input type="text" name='lastName' className='w-full border rounded-lg px-3 py-2 mt-1' placeholder=' Doe 'value={updateUser.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                        <Label className='block text-sm font-medium'>Email</Label>
                                        <input placeholder='Enter Email' type="email" name='email'  className='w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100 cursor-pointer'value={updateUser.email} onChange={handleChange} />
                                    </div>
                                         <div>
                                        <Label className='block text-sm font-medium'>Phone Number</Label>
                                        <input type="text" name='phoneNo'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your Phone No'value={updateUser.phoneNo} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Address</Label>
                                        <input type="text" name='address'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder=' Enter your Address'value={updateUser.address} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Enter Your city </Label> 
                                        <input type="text" name='city'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your city ' value={updateUser.city} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <Label className='block text-sm font-medium'>Zip Code</Label>
                                        <input type="text" name='zipCode'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter your Zipcode'value={updateUser.zipCode} onChange={handleChange} />
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
            </TabsContent>
           <TabsContent value="update"> 
             <div>
                    <div className='flex flex-col justify-center items-center bg-gray-100'>
                        <h1 className='font-bold mb-7 text-2xl text-gray-800'>Change Password</h1>
                        <div className='w-full flex gap-10 justify-between items-start px-7 max-w-2xl'>
                            {/* profile form */}
                            <form className='space-y-4 shadow-lg p-5 rounded-lg bg-white'>
                          
              <p className="text-center text-red-500 bg-red-50 p-3 rounded-lg">
                After saving, you will be logged out
              </p>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <Label className='block text-sm font-medium'>Current Password</Label>
                                        <input type="text" name='currentPassword' className='w-full border rounded-lg px-3 py-2 mt-1'placeholder='Enter Your Current Password' />
                                    </div>
                                   
                                </div>
                          
                                         <div>
                                        <Label className='block text-sm font-medium'>New Password</Label>
                                        <input type="text" name='newPassword'  className='w-full border rounded-lg px-3 py-2 mt-1' placeholder='Enter new Password' />
                                    </div>
                                    
                                    <Button type='submit' className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg'>
                                         {loading?
                                                 <>
                                                 <Loader2 className='h-4 w-4 animate-spin mr-2'/>Please wait
                                                 </>:'Save Password '} </Button>
                            </form>
                        </div>
                    </div>
                </div>

           </TabsContent>
           <TabsContent value="orders">
                <MyOrder/>
           </TabsContent>
            

        </Tabs>
    </div>
  )


}

export default Profile



// import React, { useState } from "react";
// import imgup from "../assets/pro.jpg";

// import { Button } from "@/components/ui/button";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// import { Label } from "@/components/ui/label";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Profile = () => {
//   const { user } = useSelector((store) => store.user);
//   const params = useParams();
//   const userId = params.userId;

//   const [updateUser, setUpdateUser] = useState({
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     email: user?.email || "",
//     address: user?.address || "",
//     city: user?.city || "",
//     zipCode: user?.zipcode || "",
//     phoneNo: user?.phoneNo || "",
//     profilePic: user?.profilePic || "",
//     role: user?.role || "",
//   });

//   const [file, setFile] = useState(null);

//   // handle input change
//   const handleChange = (e) => {
//     setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
//   };

//   // handle file upload
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     setFile(selectedFile);
//     setUpdateUser({
//       ...updateUser,
//       profilePic: URL.createObjectURL(selectedFile), // preview
//     });
//   };

//   // submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(updateUser);
//   };

//   return (
//     <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">
//       <Tabs defaultValue="profile" className="max-w-6xl mx-auto">
        
//         {/* Tabs */}
//         <TabsList className="bg-white shadow-md rounded-xl p-1 flex justify-center gap-2 mb-8">
//           <TabsTrigger
//             value="profile"
//             className="px-6 py-2 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition"
//           >
//             Profile
//           </TabsTrigger>
//           <TabsTrigger
//             value="orders"
//             className="px-6 py-2 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition"
//           >
//             Change Password
//           </TabsTrigger>
//         </TabsList>

//         {/* ================= PROFILE TAB ================= */}
//         <TabsContent value="profile">
//           <div className="grid md:grid-cols-3 gap-8 px-4">
            
//             {/* Profile Image */}
//             <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition">
//               <img
//                 src={updateUser.profilePic || imgup}
//                 alt="profile"
//                 className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
//               />

//               <Label className="mt-5 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//                 Change Picture
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
//               </Label>
//             </div>

//             {/* Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="md:col-span-2 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 space-y-5"
//             >
//               <h2 className="text-xl font-semibold text-gray-700">
//                 Update Profile
//               </h2>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-sm font-semibold text-gray-600">
//                     First Name
//                   </Label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={updateUser.firstName}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <Label className="text-sm font-semibold text-gray-600">
//                     Last Name
//                   </Label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={updateUser.lastName}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-600">
//                   Email
//                 </Label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={updateUser.email}
                  
//                   className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded-xl px-4 py-2 mt-1 cursor-not-allowed"
//                 />
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-600">
//                   Phone Number
//                 </Label>
//                 <input
//                   type="text"
//                   name="phoneNo"
//                   value={updateUser.phoneNo}
//                   disabled
//                   className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded-xl px-4 py-2 mt-1 cursor-not-allowed"
//                 />
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-600">
//                   Address
//                 </Label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={updateUser.address}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-sm font-semibold text-gray-600">
//                     City
//                   </Label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={updateUser.city}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <Label className="text-sm font-semibold text-gray-600">
//                     Zip Code
//                   </Label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={updateUser.zipCode}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg transition">
//                 Update Profile
//               </Button>
//             </form>
//           </div>
//         </TabsContent>

//         {/* ================= PASSWORD TAB ================= */}
//         <TabsContent value="orders">
//           <div className="max-w-xl mx-auto px-4">
//             <form className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 space-y-5">
              
//               <h2 className="text-xl font-semibold text-gray-700 text-center">
//                 Change Password
//               </h2>

//               <p className="text-center text-red-500 bg-red-50 p-3 rounded-lg">
//                 After saving, you will be logged out
//               </p>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-600">
//                   Current Password
//                 </Label>
//                 <input
//                   type="password"
//                   className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <Label className="text-sm font-semibold text-gray-600">
//                   New Password
//                 </Label>
//                 <input
//                   type="password"
//                   className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl hover:shadow-lg">
//                 Save Password
//               </Button>
//             </form>
//           </div>
//         </TabsContent>

//       </Tabs>
//     </div>
//   );
// };

// export default Profile;



