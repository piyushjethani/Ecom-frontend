import React from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import {toast} from 'sonner';
import { useDispatch } from 'react-redux';
import { setCart } from '@/redux/productSlice';

const ProductDesc = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = async(productId)=>{
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      toast.error('Please login first');
      return;
    }

    try{
      const res = await axios.post('http://localhost:6100/api/v1/cart/add', {productId}, {
        headers:{
          Authorization : `Bearer ${accessToken}`
        }
      });
      if(res.data.success){
        toast.success(res.data.message || 'Product added to cart');
        dispatch(setCart(res.data.cart));
      }

    } catch (error){
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to add to cart');
    }
  }
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-4xl text-gray-800'>{product?.productName}</h1>
      <p className='text-gray-800'>{product?.category} | {product?.brand}</p>
      <h2 className='text-blue-500 font-bold text-2xl'>₹{product?.productPrice}</h2>
      <p className='line-clamp-12 text-muted-foreground'>{product?.productDesc}</p>
      <div className='flex gap-2 items-center w-[300px]'>
        <p className='text-gray-800 font-semibold'>Quantity :</p>
        <input type="number" className='w-14' defaultValue={1} />

      </div>
      <Button onClick={() => addToCart(product?._id)} className='bg-blue-600 w-max'>Add to Cart</Button>


    </div>
  )
}

export default ProductDesc