import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button'
const OrderCard = ({userOrder}) => {
     const navigate = useNavigate()
  return (
    <div className='pr-20 flex items-center gap-4 mb-6'>
        <div className='flex items-center gap-4 mb-6' >
            <Button onClick={()=>navigate(-1)}><FaArrowLeftLong/></Button>
            <h1 className='text-2xl font-bold'>Orders</h1>

        </div>
        {
            userOrder?.length === 0 ? (
                <p className='text-gray-800 space-y-6 text-2xl'>No Orders found for this user</p>
            ) :(
                <div className='space-y-6 w-full'>
                    {
                        userOrder?.map((order)=>(
                            <div key={order._id} className='shadow-lg rounded-2xl p-5 border-gray-200'>
                                {/* order header */}
                                <div className='flex justify-between items-center mb-4'>
                                    <h2 className='text-lg font-semibold'>
                                        order Id:{" "}
                                        <span className='text-gray-600'>{order._id}</span>
                                    </h2>
                                    <p className='text-sm text-gray-500'>
                                        Amount:{" "}
                                        <span className='font-bold'>
                                            {order.currency} {order.amount.toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                                {/* user info */}
<div className="flex justify-between items-center">
  
  <div className="mb-4">
    <p className="text-sm text-gray-700">
      <span className="font-medium">User:</span>{" "}
      {order.user?.firstName || "Unknown"} {order.user?.lastName}
    </p>

    <p className="text-sm text-gray-500">
      Email: {order.user?.email || "N/A"}
    </p>
  </div>

  {/* Status Badge */}
  <span
    className={`${
      order.status === "Paid"
        ? "bg-green-500"
        : order.status === "Failed"
        ? "bg-red-500"
        : "bg-orange-300"
    } text-white px-2 py-1 rounded-lg text-sm`}
  >
    {order.status}
  </span>

</div>
{/* products */}
<div>
  <h3 className="font-medium mb-2">Products:</h3>

  <ul className="space-y-2">
    {order.products?.map((product, index) => (
      <li
        key={index}
        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
      >
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
          onClick={()=>navigate(`/product/${product?.productid?._id || product?.productId?._id}`)}
            className="w-16 h-16 object-cover rounded cursor-pointer"
            src={product?.productid?.productImg?.[0]?.url || product?.productId?.productImg?.[0]?.url}
            alt="product"
          />

          <div>
            <span className="block w-[200px] line-clamp-2 text-sm">
              {product?.productid?.productName || product?.productId?.productName}
            </span>

            <span className="text-xs text-gray-400">
              ID: {product?.productid?._id || product?.productId?._id}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <span className="font-medium text-sm">
          ₹{product?.productid?.productPrice || product?.productId?.productPrice} × {product?.quantity}
        </span>
      </li>
    ))}
  </ul>
</div>
                            </div>

                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default OrderCard