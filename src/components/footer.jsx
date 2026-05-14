// import React from "react";

// import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Logo & About */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">E-Zone</h2>
//           <p className="text-sm">
//             Your one-stop shop for latest smartphones, gadgets and accessories.
//             Best prices, fast delivery & trusted service.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">Shop</li>
//             <li className="hover:text-white cursor-pointer">About</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Smartphones</li>
//             <li className="hover:text-white cursor-pointer">Laptops</li>
//             <li className="hover:text-white cursor-pointer">Accessories</li>
//             <li className="hover:text-white cursor-pointer">Smart Watches</li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Help Center</li>
//             <li className="hover:text-white cursor-pointer">Returns</li>
//             <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//             <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
//           </ul>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4 text-white text-lg">
//             <FaFacebookF className="cursor-pointer hover:text-blue-500" />
//             <FaInstagram className="cursor-pointer hover:text-pink-500" />
//             <FaTwitter className="cursor-pointer hover:text-blue-400" />
//             <FaEnvelope className="cursor-pointer hover:text-green-400" />
//           </div>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
//         © {new Date().getFullYear()} E-Zone. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="bg-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Text */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Stay in the Loop
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to get special offers, free giveaways, and more
            </p>
          </div>

          {/* Input + Button */}
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-64 rounded-l-lg outline-none bg-white text-black"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Zone</h2>
          <p className="text-sm">
            Your one-stop shop for latest smartphones, gadgets and accessories.
            Best prices, fast delivery & trusted service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Smartphones</li>
            <li className="hover:text-white cursor-pointer">Laptops</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
            <li className="hover:text-white cursor-pointer">Smart Watches</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white text-lg">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaEnvelope className="cursor-pointer hover:text-green-400" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} E-Zone. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;