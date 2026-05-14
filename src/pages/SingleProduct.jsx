import React from 'react'
import BreadCrums from '../components/BreadCrums';
import ProductDesc from '../components/ProductDesc';
import Productimg from '@/components/Productimg';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const params = useParams();
  const productId = params.id;
  const {products} = useSelector((state) => state.product);
  const product = products.find((item) => item._id === productId);

  if (!product) {
    return (
      <div className='pt-20 py-10 max-w-7xl mx-auto text-center'>
        <p className='text-lg font-medium'>Product not found or still loading.</p>
      </div>
    )
  }

  return (
    <div className='pt-20 py-10 max-w-7xl mx-auto'>
      <BreadCrums product={product}/>
      <div className='mt-10 grid grid-cols-2 items-start'>
        <Productimg images={product.productImg} />
        <ProductDesc product={product} />
      </div>
    </div>
  )
}

export default SingleProduct