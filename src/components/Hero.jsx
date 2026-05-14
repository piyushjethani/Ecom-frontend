




import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/pro3.jpg";
import hero2 from "../assets/pro1.jpg";
import hero3 from "../assets/pro2.jpg";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Tech Experience",
    highlight: "Smart Devices",
    desc: "Explore latest smartphones, laptops and accessories at unbeatable prices.",
    image: hero1,
  },
  {
    id: 2,
    title: "Next Gen Gadgets",
    highlight: "Future Tech",
    desc: "Experience innovation with cutting-edge electronics and AI devices.",
    image: hero2,
  },
  {
    id: 3,
    title: "Best Deals Everyday",
    highlight: "Mega Sale",
    desc: "Save big with exclusive discounts on top brands and products.",
    image: hero3,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white overflow-hidden">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        
        {/* 🔥 Animation Wrapper */}
        <AnimatePresence mode="wait" initial={false}>
          
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {current.title} <br />
                <span className="text-yellow-300">{current.highlight}</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                {current.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>navigate('/products')}className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
                  Shop Now 🚀
                </button>

                <button className="border border-white/40 backdrop-blur-md bg-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300">
                  View Deals
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE (ANIMATED) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-30 rounded-xl"></div>

              <img
                src={current.image}
                alt="Hero"
                className="relative rounded-xl shadow-2xl transform hover:scale-105 h-[500px] w-[700px] mt-2 transition  overflow-hidden duration-500"
              />
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;