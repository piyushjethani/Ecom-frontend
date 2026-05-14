import React from "react";
import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      icon: <Truck size={40} />,
      title: "Free Shipping",
      desc: "Enjoy free shipping on all orders.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payment",
      desc: "Your transactions are safe and encrypted",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Easy Payments",
      desc: "Multiple payment options available",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "We are here to help anytime",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;