


import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center">

        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl">
          ✓
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Payment Successful 🎉
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm mt-2 mb-6">
          Thank you for your purchase! Your order has been placed successfully.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/products" )}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition duration-200"
          >
            View My Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;