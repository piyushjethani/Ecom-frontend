import OrderCard from "@/components/OrderCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUserOrders = () => {
  const { userId } = useParams();

  const [userOrder, setUserOrder] = useState([]);
 

  const getUserOrders = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/user-orders/${userId}`,
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
      console.error(err);
     
  };

  useEffect(() => {
    getUserOrders();
  }, []);



  return (
    <div className="pl-[350] py-20">
<OrderCard userOrder={userOrder}/>
    </div>
  )
}
}
export default ShowUserOrders

