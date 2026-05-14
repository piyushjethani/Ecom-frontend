// import React, { useEffect, useState, useCallback } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { toast } from 'sonner'
// import { setCart } from '../redux/productSlice'
// import { div } from 'framer-motion/client'
// import { FaTrash } from "react-icons/fa";
// import userLogo from '../assets/user.png'
// import { Button } from '@/components/ui/button'
// import { Card, CardHeader,CardContent,CardTitle } from '@/components/ui/card'

// const Cart = () => {
//   const { cart } = useSelector((store) => store.product)

//   const Subtotal = cart?.totalPrice
//   const shipping = Subtotal > 299 ? 0 : 10
//   const tax = Subtotal * 0.05
//   const total = Subtotal + shipping + tax
//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(false)
//   const accessToken = localStorage.getItem('accessToken')

//   const fetchCart = useCallback(async () => {
//     if (!accessToken) return

//     try {
//       setLoading(true)
//       const res = await axios.get('http://localhost:6100/api/v1/cart', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       })
//       if (res.data.success) {
//         dispatch(setCart(res.data.cart))
//       }
//     } catch (error) {
//       console.error(error)
//       toast.error('Failed to fetch cart')
//     } finally {
//       setLoading(false)
//     }
//   }, [accessToken, dispatch])

//   const removeFromCart = async (productId) => {
//     try {
//       const res = await axios.delete('http://localhost:6100/api/v1/cart/remove', {
//         data: { productId },
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       })
//       if (res.data.success) {
//         dispatch(setCart(res.data.cart))
//         toast.success('Item removed from cart')
//       }
//     } catch (error) {
//       console.error(error)
//       toast.error('Failed to remove item')
//     }
//   }

//   const updateQuantity = async (productId, type) => {
//     try {
//       const res = await axios.put('http://localhost:6100/api/v1/cart/update', {
//         productId,
//         type
//       }, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       })
//       if (res.data.success) {
//         dispatch(setCart(res.data.cart))
//       }
//     } catch (error) {
//       console.error(error)
//       toast.error('Failed to update quantity')
//     }
//   }

//   useEffect(() => {
//     fetchCart()
//   }, [fetchCart])

//   if (loading) {
//     return <div className="pt-20 text-center">Loading cart...</div>
//   }

//   if (!cart || !cart.items || cart.items.length === 0) {
//     return (
//       <div className="pt-20 bg-gray-50  min-h-screen">
//         {
//           cart?.items?.length>0 ? <div className="max-w-7xl mx-auto"><h1 className='text-2xl font-bold'>Shopping Cart</h1>
//           <div className='max-w-7xl mx-auto flex gap-7'>
//             <div className='flex flex-col gap-5 flex-1'>
//               {cart?.items?.map((product,index)=>{
//                 return <Card key={index}>
//                   <div className='flex justify-between items-center pr-7'>
//                     <div className='flex items-center gw-[350px]'>
//                       <img src={product?.productId?.productImg?.[0]?.url || userLogo} alt="" className='w-25 h-25' />
//                       <div className='w-[280px]'>
//                         <h1 className='font-semibold truncate'>{product?.productId?.productName}</h1>
//                         <p>₹{product?.productId?.productPrice}</p>
//                       </div>
//                   </div>
//                   <div className='flex items-center gap-5'>
//                     <Button variant="outline" >-</Button>
//                     <span>1</span>
//                     <Button variant="outline" >+</Button>
//                   </div>
//                   <p>{(product?.productId?.productPrice) *( product?.quantity)}</p>
//                   <p className='flex text-red-500 item-center gap-1 curosr-pointer'><FaTrash className='w-4 h-4' /> Remove</p>
//                   </div>
                  
//                 </Card>

//               })}
//             </div>
//           </div>
          
//           <Card className='w-[400px]'>
//             <CardHeader>

//             <CardTitle>Order Summary</CardTitle>

//             </CardHeader>
//             <CardContent className='space-y-4'>
//         <div className='flex justify-between'>
//           <span> Subtotal ({cart?.items?.length} items)</span>
//           <span className='font-semibold'>₹{cart?.totalPrice?.toLocaleString('en-IN')}</span>
//         </div>
//         <div className='flex justify-between'>
//           <span> Shipping</span>
//           <span className='font-semibold'>₹{shipping}</span>
//         </div>
//          <div className='flex justify-between'>
//           <span> Tax(5%)</span>
//           <span className='font-semibold'>₹{tax}</span>
//         </div>
//         <Separator/>
//         <div className='flex justify-between font-bold text-lg'>
//           <span>Total</span>
//           <span>₹{total}</span>
//         </div>
//         <div className='space-y-3 pt-4'>
// <div className='flex space-x-2'>
//   <input placeholder='Promo Code' />
//   <Button variant='outline'>Apply</Button>
// </div>
// <Button className='w-full bg-blue-600 text-white'>PLACE ORDER</Button>
// <Button variant='outline' className='w-full bg-transparent'> <Link to="/products">Continue Shopping</Link></Button>
//         </div>
//         <div className='text-sm text-muted-foreground pt-4'>
//           <p>* Free shipping on orders over ₹299</p>
//           <p>* 30-days return policy</p>
//           <p>* Secure checkout SSl encryption</p>
//         </div>
//             </CardContent>
//             <Card/>
  
//     </div>
//   )
// }

// export default Cart


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setCart } from '../redux/productSlice'
import { FaTrash } from "react-icons/fa";
import userLogo from '../assets/user.png'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillCartCheckFill } from "react-icons/bs";

const Cart = () => {
  const { cart } = useSelector((store) => store.product)
  const navigate = useNavigate();

  const Subtotal = cart?.totalPrice || 0
  const shipping = Subtotal > 299 ? 0 : 10
  const tax = Subtotal * 0.05
  const total = Subtotal + shipping + tax

  const dispatch = useDispatch()
  const accessToken = localStorage.getItem('accessToken')

  const API = "http://localhost:6100/api/v1/cart"
 
  const handleUpdateQuantity = async(productId,type) =>{
   try{
    const res = await axios.put(`${API}/update`,{productId,type},{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    })
    if(res.data.success){
      dispatch(setCart(res.data.cart))
    }

   } catch(error){
    console.log(error)
   }
  }

  
  const handleRemove = async(productId) =>{
   try{
    const res = await axios.delete(`${API}/remove/${productId}`,{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
      // data:{productId}
    })
    if(res.data.success){
      dispatch(setCart(res.data.cart))
      toast.success('Product removed from cart')
    }

   } catch(error){
    console.log(error)
   }
  }

   
  const loadCart = async() =>{
   try{
    const res = await axios.get(API,{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
  
    })
    if(res.data.success){
      dispatch(setCart(res.data.cart))
    
    }

   } catch(error){
    console.log(error)
   }
  }



  useEffect(() => {
    loadCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
   

  


  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {
        cart?.items?.length > 0 ?
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>

        <div className="flex gap-7">
          {/* LEFT */}
          <div className="flex flex-col gap-5 flex-1">
            {cart.items.map((product, index) => (
              <Card key={index}>
                <div className="flex justify-between items-center p-5">
                  
                  {/* IMAGE + NAME */}
                  <div className="flex items-center gap-4">
                    <img
                      src={product?.productId?.productImg?.[0]?.url || userLogo}
                      alt=""
                      className="w-20 h-20"
                    />
                    <div>
                      <h1 className="font-semibold">
                        {product?.productId?.productName}
                      </h1>
                      <p>₹{product?.productId?.productPrice}</p>
                    </div>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3">
                    <Button onClick={() => handleUpdateQuantity(product.productId._id, "decrement")} variant='outline'>-</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => handleUpdateQuantity(product.productId._id, "increment")} variant='outline'>+</Button>
                  </div>

                  {/* PRICE */}
                  <p>
                    ₹{product.productId.productPrice * product.quantity}
                  </p>

                  {/* REMOVE */}
                  <p
                    onClick={() => handleRemove(product?.productId?._id)}
                    className="flex items-center gap-1 text-red-500 cursor-pointer"
                  >
                    <FaTrash /> Remove
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* RIGHT */}
          <Card className="w-[350px] h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{Subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax}</span>
              </div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <Button onClick={() => navigate('/address')} className="w-full bg-blue-600 text-white">
                PLACE ORDER
              </Button>

              <Button variant="outline" className="w-full">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div> : <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className='bg-blue-100 p-6 rounded-full'>
         <BsFillCartCheckFill className='text-blue-600 w-16 h-16' />
        </div>
        <h2 className=" font-bold text-gray-800 text-2xl mt-6">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button variant="outline" className="mt-6 curosr-pointer bg-blue-600 text-white py-6 px-6 hover:bg-blue-700">
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
}
    </div>
  )
}

export default Cart