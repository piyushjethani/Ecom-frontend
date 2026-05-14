

// const Verify = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        
//         <h2 className="text-2xl font-semibold text-green-500 mb-4">
//           Check Your Email
//         </h2>

//         <p className="text-gray-500 text-sm">
//           We've sent you an email to verify your account. Please check your inbox and click the verification link.
//         </p>

//       </div>

//     </div>
//   )
// }

import React from "react";
import { MailCheck } from "lucide-react";

const Verify = () => {

    const openEmail = () => {
  window.open("https://mail.google.com", "_blank");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 px-4">
      
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-center border border-white/40">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <MailCheck className="text-green-500 w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Verify Your Email 📩
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          We’ve sent a verification link to your email.  
          Please check your inbox and click the link to activate your account.
        </p>

        {/* Button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
        onClick={() => openEmail()}>
          Open Email App
        </button>

       

      </div>

    </div>
  );
};

export default Verify;
