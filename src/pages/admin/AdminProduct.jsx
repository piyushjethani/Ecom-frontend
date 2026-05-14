// import React from 'react'
// import { IoMdSearch } from "react-icons/io";
// import {Label} from './ui/label'
// import {Input} from './ui/input'
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import {
//   Select,
//   SelectContent,
  
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useDispatch, useSelector } from 'react-redux';
// import {Card} from '@/components/ui/card';

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Field, FieldGroup } from "@/components/ui/field"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// import {Textarea} from '@/components/ui/textarea'
// import ImageUpload from '@/components/ui/ImageUpload'
// import { toast } from 'sonner';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { useDispatch } from 'react-redux';
// import { setProducts } from '@/redux/productSlice';
// import { GiDespair } from 'react-icons/gi';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"


// const AdminProduct = () => {
//   const {products} = useSelector(store=>store.product)
//   const [editProduct ,setEditProduct] = useState(null)
//   const [open,setOpen] = useSate(false)
//   const [searchTerm,setSearchTerm] = useState("")
//   const [sortOrder,setSortOrder] = useState("")
//   const dispatch  = useDispatch()
//   const accessToken = localStorage.getItem("accessToken")

//   let filteredProducts = products.filter((product)=>
//   product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   product.brand.toLowerCase().include(searchTerm.toLowerCase))||
//   product.category.toLowercase().includes(searchTerm.toLowerCase())
//   )

//   if(sortOrdeer === 'lowToHigh'){
//     filteredProducts = [...filteredProducts].sort((a,b)=>a.productPrice - b.productsPrice)
//   }
//     if(sortOrdeer === 'highToLow'){
//     filteredProducts = [...filteredProducts].sort((a,b)=>b.productPrice - a.productsPrice)
//   }


//   const handleChange = (e)=>{
//     const {name,value} = e.target
//     setEditProduct(prev=>({
//       ...prev,
//       [name]:value
//     }))
//   }
//   const handleSave = async(e)=>{
//     e.preventDefault()
//     const formData = new Formdata()
//     formData.append("productName",editProduct.ProductName)
//     formData.append("productDesc",editProduct.ProductDesc)
//     formData.append("productPrice",editProduct.ProductPrice)
//     formData.append("category",editProduct.category)
//     formData.append("brand",editProduct.brand)
//     // add existing images public_ids
//     const existingImages = editProduct.productImg.filter((img)=> !(img instanceof File) && img.public_id)
//     .map((img)=>img.public_id)

//     formData.append("existingImages",JSON.stringify(existingImages))

//     // add new file
//     editProduct.productImg.filter((img)=> !(img instanceof File).forEach((file)=>{
//       formdata.append("files",file)
//     })
//     try{
//       const res = await axios.put(`http://localhost:6100/api/v1/product/update/${editProduct._id}`,formData,{
//         headers:{
//           Authorization:`Bearer: ${accessToken}`
//         }
//       })
//       if(res.data.success){
//         toast.success("product updated successfully")
//         const updateProducts= products.map((p)=> p._id === editProduct._id ? res.data.product : p)
//         dispatch(setProducts(updateProducts))
//         setOpen(false)
//       }

//     } catch (error){
//       console.log(error)
//     }
//   }

//   const deleteProductHandler = async(productId)=>{
//     try{
//      const remainingProducts = products.filter((product)=>product._id !== productId)
//      const res = await axios.delete(`http://localhost:6100/api/v1/product/delete/${productId}`,{
//       headers:{
//         Authorization:`Bearer ${accessToken}`
//       }
//      }) 
//      if(res.data.success){
//       toast.success(res.data.message)
//       dispatch(setProducts(remainingProducts))
//      }
//     } catch(error){
//       console.log(error)
//     }
//   }
//   return (
//     <div className='pq-[350px] py-20 pr-20 flex flex-col gap-3 min-h-screen bg-gray-100 '>
//       <div className='flex justify-between'>
//         <div className='relative bg-white rounded-lg'>
//           <Input type='text'values={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search Product...'className='w-[400px] items-center' ></Input>
//           <IoMdSearch  className='absoluteright-3 top-1.5 text-gray-500'/>

//         </div>
  

// <Select onValueChange={(value)=>setSortOrder(value)}>
//   <SelectTrigger className="w-[200px] bg-white">
//     <SelectValue placeholder="Sort by Price" />
//   </SelectTrigger>
//   <SelectContent>
    
//      <SelectItems value="lowToHigh">Price: Low to High</SelectItems>
//      <SelectItems value="highToLow">Price: High to Low </SelectItems>
  
//   </SelectContent>
// </Select>
//       </div>
//       {
//         filteredProducts.map({product,index}=>{
//           return<Card key={index} className='px-4'>
//             <div className='flex items-center justify-between'>
//               <div className='flex gap-2 items-center'>
//                 <img src={product.productImg[0].url} alt="" className='w-25 h-25'/>
//                 <h1 className='font-semibold text-gray-700'>{product.productName}</h1>

//               </div>
//               <h1 className='font-semibold text-gray-800'>{product.productPrice}</h1>
//               <div className='flex gap-3'>
//                 <Dialog open={open} onOpenChange={setOpen}>
      
//         <DialogTrigger asChild>
//            < FaEdit onClick={()=>{setOpen(true), setEditProduct(product)}} className='text-green-500 cursor-pointer'/>
//            <DialogTrigger/>
//         <DialogContent className="sm:max-w-[740px] overflow-y-scroll">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </DialogDescription>
//           </DialogHeader>
//           <div className='flex flex-col gap-2'>
//             <div className='grid gap-2'>
//            <Label>Product Name</Label>
//               <Input type='text'
//               value={editProduct?.productName} 
//               onChange={handleChange} name="productName" placeholder="EX-Iphon" required/>
//             </div>
//              <div className='grid gap-2'>
//            <Label>Price</Label>
//               <Input type='number'value={editProduct?.productPrice} onChange={handleChange} name="produtPrice"  required/>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <div className='grid gap-4'>
//              <Label>Brand</Label>
//               <Input type='text' value={editProduct?.brand} onChange={handleChange} name="brand" placeholder='EX-Apple'  required/>
//               </div>
//                 <div className='grid gap-4'>
//              <Label>Category</Label>
//               <Input type='text'value={editProduct?.category} onChange={handleChange} name="category" placeholder='EX-mobile'  required/>
//               </div>
//             </div>
//             <div className='grid gap-2'>
//               <div className='flex items-center'>
//                <Lable>Description</Lable>
//               </div>
//               <Textarea name='productDesc'value={editProduct?.productDesc} onChange={handleChange} placeholder='Enter brief description of product'>
//             </div>
//             <ImageUplode productData={editProduct} setProductData={setEditProduct}/>
//           </div>
          
           
          
//           <DialogFooter>
//            <DialogClose asChild>
//           <Button variant='outline'>Cancle</Button>
//            </DialogClose>
//            <Button onClick={handleSave}
//             type='submit'>Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
      
//     </Dialog>
//        <AlertDialog>
//       <AlertDialogTrigger >
//            <MdDelete className='text-red-500 cursor-pointer'/>
        
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={()=>deleteProductHandler(product._id)}>Continue</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>

//               </div>

//             </div>
//           </Card>
//         })
//       }
//    </div>
//   )
// }

// export default AdminProduct





import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useDispatch, useSelector } from 'react-redux'
import { Card } from '@/components/ui/card'
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ImageUpload from '@/components/ImageUpload'

import { toast } from 'sonner'
import axios from 'axios'
import { setProducts } from '@/redux/productSlice'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const AdminProduct = () => {

  const { products } = useSelector(store => store.product)

  const [editProduct, setEditProduct] = useState(null)
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("")

  const dispatch = useDispatch()
  const accessToken = localStorage.getItem("accessToken")

  // FILTER
  let filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // SORT
  if (sortOrder === 'lowToHigh') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.productPrice - b.productPrice)
  }

  if (sortOrder === 'highToLow') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.productPrice - a.productPrice)
  }

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target
    setEditProduct(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // SAVE
  const handleSave = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("productName", editProduct.productName)
    formData.append("productDesc", editProduct.productDesc)
    formData.append("productPrice", editProduct.productPrice)
    formData.append("category", editProduct.category)
    formData.append("brand", editProduct.brand)

    const existingImages = editProduct.productImg
      .filter((img) => !(img instanceof File) && img.public_id)
      .map((img) => img.public_id)

    formData.append("existingImages", JSON.stringify(existingImages))

    // NEW FILES
    editProduct.productImg
      .filter((img) => img instanceof File)
      .forEach((file) => {
        formData.append("files", file)
      })

    try {
      const res = await axios.put(
        `http://localhost:6100/api/v1/product/update/${editProduct._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      if (res.data.success) {
        toast.success("Product updated successfully")

        const updatedProducts = products.map((p) =>
          p._id === editProduct._id ? res.data.product : p
        )

        dispatch(setProducts(updatedProducts))
        setOpen(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  // DELETE
  const deleteProductHandler = async (productId) => {
    try {
      const remainingProducts = products.filter(
        (product) => product._id !== productId
      )

      const res = await axios.delete(
        `http://localhost:6100/api/v1/product/delete/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      if (res.data.success) {
        toast.success(res.data.message)
        dispatch(setProducts(remainingProducts))
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='px-[350px] py-20 pr-20 flex flex-col gap-3 min-h-screen bg-gray-100'>

      {/* SEARCH + SORT */}
      <div className='flex justify-between'>
        <div className='relative bg-white rounded-lg'>
          <Input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search Product...'
            className='w-[400px]'
          />
          <IoMdSearch className='absolute right-3 top-2 text-gray-500' />
        </div>

        <Select onValueChange={(value) => setSortOrder(value)}>
          <SelectTrigger className="w-[200px] bg-white">
            <SelectValue placeholder="Sort by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
            <SelectItem value="highToLow">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* PRODUCTS */}
      {
        filteredProducts.map((product, index) => (
          <Card key={index} className='px-4'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <img
                  src={product.productImg?.[0]?.url}
                  alt=""
                  className='w-24 h-24'
                />
                <h1 className='font-semibold'>{product.productName}</h1>
              </div>

              <h1>{product.productPrice}</h1>

              <div className='flex gap-3'>

                {/* EDIT */}
                <FaEdit
                  onClick={() => {
                    setEditProduct(product)
                    setOpen(true)
                  }}
                  className='text-green-500 cursor-pointer'
                />

                {/* DELETE */}
                <AlertDialog>
                  <AlertDialogTrigger>
                    <MdDelete className='text-red-500 cursor-pointer' />
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the product.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => deleteProductHandler(product._id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

              </div>
            </div>
          </Card>
        ))
      }

      {editProduct && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[740px] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
              <DialogDescription>
                Update product details and images, then save changes.
              </DialogDescription>
            </DialogHeader>

            <div className='flex flex-col gap-4'>
              <div className='grid gap-2'>
                <Label>Product Name</Label>
                <Input
                  type='text'
                  value={editProduct.productName || ''}
                  onChange={handleChange}
                  name='productName'
                  placeholder='Ex-Phone'
                  required
                />
              </div>

              <div className='grid gap-2'>
                <Label>Price</Label>
                <Input
                  type='number'
                  value={editProduct.productPrice || ''}
                  onChange={handleChange}
                  name='productPrice'
                  required
                />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-2'>
                  <Label>Brand</Label>
                  <Input
                    type='text'
                    value={editProduct.brand || ''}
                    onChange={handleChange}
                    name='brand'
                    placeholder='Ex-Apple'
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label>Category</Label>
                  <Input
                    type='text'
                    value={editProduct.category || ''}
                    onChange={handleChange}
                    name='category'
                    placeholder='Ex-mobile'
                    required
                  />
                </div>
              </div>

              <div className='grid gap-2'>
                <Label>Description</Label>
                <textarea
                  value={editProduct.productDesc || ''}
                  onChange={handleChange}
                  name='productDesc'
                  placeholder='Enter brief description of product'
                  className='w-full border rounded-md p-2'
                />
              </div>

              <ImageUpload productData={editProduct} setProductData={setEditProduct} />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button onClick={handleSave} type='button'>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

    </div>
  )
}

export default AdminProduct
 
  
