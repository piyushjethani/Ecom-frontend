import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ImageUpload from '@/components/ImageUpload'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setProducts } from '@/redux/productSlice'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const AddProduct = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const {products} = useSelector(store=>store.product)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    productName : '',
    productPrice : '0',
    brand : '',
    category : '',
    productDesc : '',
    productImg:[]
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const submitHandler = async(e) => {  
    e.preventDefault()
    const formData = new FormData();
    formData.append('productName', productData.productName);
    formData.append('productPrice', productData.productPrice);
    formData.append('brand', productData.brand);
    formData.append('category', productData.category);
    formData.append('productDesc', productData.productDesc);
    if(productData.productImg.length === 0){
      toast.error('Please upload at least one image')
      return;
    }
    productData.productImg.forEach((img)=>{
      formData.append('files', img);
    })

    try{
      setLoading(true);
      const res = await axios.post('http://localhost:6100/api/v1/product/add', formData, {
        headers:{
          Authorization : `Bearer ${accessToken}`

        }
      })
      if(res.data.success){
        dispatch(setProducts([...products, res.data.product]));
        toast.success(res.data.message)
        // Redirect to dashboard products page after successful add
        setTimeout(() => {
          navigate('/dashboard/products')
        }, 1500)
      }

    } catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }


  return (
    <div className='pl-[350px] py-10 pr-20 mx-auto px-4 bg-gray-100'>
      <div className='flex items-center gap-3 mb-5'>
        <Button onClick={() => navigate('/dashboard/products')} variant='outline' className='flex items-center gap-2'>
          <FaArrowLeftLong /> Back to Products
        </Button>
      </div>
      <Card className='w-full my-20'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Add Product</CardTitle>
          <CardDescription> Enter Product details below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-2'>
            <div className='grid gap-2'>
              <label >Product Name</label>
              <input type="text" value={productData.productName} onChange={handleChange} name='productName' className='w-full border p-2 rounded-md' placeholder='Ex-Iphone' required />
            </div>
            <div className='grid gap-2'>
              <label >Price</label>
              <input type="number" value={productData.productPrice} onChange={handleChange} name='productPrice' className='w-full border p-2 rounded-md' placeholder='' required />
            </div>
            <div className='grid gap-2'>
              <label>Brand</label>
              <input type="text" value={productData.brand} onChange={handleChange} name='brand' className='w-full border p-2 rounded-md' placeholder='Ex-Apple' />
            </div>
            <div className='grid gap-2'>
              <label>Category</label>
              <input type="text" value={productData.category} onChange={handleChange} name='category' className='w-full border p-2 rounded-md' placeholder='Ex-mobile' />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
              <label>
                Description</label>
              </div>
              <textarea value={productData.productDesc} onChange={handleChange} name='productDesc' placeholder='Enter product description' className='w-full border rounded-md'  />
            </div>
         <ImageUpload productData={productData} setProductData={setProductData} />
        </div>
        <CardFooter>
          <Button disabled={loading} className='bg-blue-600 w-full rounded-lg mt-2' type='submit' onClick={submitHandler}>
            {loading ? (
              <span className='flex gap-1 items-center'>
                <Loader2 className='animate-spin' /> Please Wait
              </span>
            ) : (
              'Add Product'
            )}
          </Button>
        </CardFooter>
        </CardContent>

      </Card>
    </div>
  )
}

export default AddProduct