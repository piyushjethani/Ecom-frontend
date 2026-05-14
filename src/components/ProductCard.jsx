import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product,loading}) => {
  const {productImg,productPrice,productName} = product
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
  const AddToCart = async(productId)=>{
    if(!accessToken){
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }

    try{
       
     const res =  await axios.post(`http://localhost:6100/api/v1/cart/add`,{productId, quantity: 1 },{
      headers :{
        Authorization : `Bearer ${accessToken}`
      }
     })
     if(res.data.success){
      toast.success('Product added to cart');
      dispatch(setCart(res.data.cart));
     }

    } catch(error){
      console.error(error)
      const message = error.response?.data?.message || 'Unable to add product to cart';
      toast.error(message);
    }
  }
  return (
    <div className='shadow-lg rounded-lg overflow-hidden h-max'>
      <div className='w-full h-full aspect-square overflow-hidden'>
        {
          loading ? <Skeleton className='w-full h-full rounded-lg'/>:
        <img onClick={()=>navigate(`/product/${product._id}`)} src={productImg?.[0]?.url} alt="" className='w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer' />
        }
      </div>

      {loading ?<div className='px-2 space-y-1 my-2'> 
        <Skeleton className='w-[200px] h-4'/>
        <Skeleton className='w-[100px] h-4'/>
        <Skeleton className='w-[150px] h-8'/>
          </div>:<div className='px-2 space-y-1 '> 
        
      
        <h1 className='font-semibold h-12 line-clamp-2'>{productName}</h1>
        <h2>₹{productPrice}</h2>
        <Button onClick={()=>AddToCart(product._id)} className='bg-blue-600 mb-3 w-full'><FaCartPlus/> Add to Cart</Button>
      </div>
        }
    </div>
  
  )
}

export default ProductCard