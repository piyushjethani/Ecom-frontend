import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';
import OrderCard from '@/components/OrderCard'
const MyOrder = () => {

     const [userOrder, setUserOrder] = useState(null);
     const navigate = useNavigate()


  const getUserOrders = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/myorder`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        setUserOrder(res.data.orders);
      }
    } catch (err) {
      
      console.log(err);
    } 
  };

  useEffect(() => {
    getUserOrders();
  }, []);
  return (
    <>
    <OrderCard userOrder={userOrder}/>
    </>
  )
}

export default MyOrder