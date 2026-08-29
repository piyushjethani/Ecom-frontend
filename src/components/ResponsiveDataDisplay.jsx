import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResponsiveDataDisplay = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Connecting with an API to get a response
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Example API call - you can replace this with your own VITE_URL endpoints
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setData(res.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 my-10">
            <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
                {/* Left Side: Text and Data */}
                <div className="flex-1 w-full text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                        Responsive API Integration
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm md:text-base">
                        This component is fully responsive for mobile, tablet, and desktop views. It fetches data dynamically.
                    </p>
                    
                    {loading && (
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-4 py-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto md:mx-0"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto md:mx-0"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && (
                        <p className="text-red-500 font-semibold bg-red-50 p-4 rounded-xl border border-red-100">
                            Error: {error}
                        </p>
                    )}

                    {data && (
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 transition-all hover:shadow-md text-left">
                            <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Live API Response</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 capitalize mb-3">
                                {data.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {data.body}
                            </p>
                            
                            {/* Responsive Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm shadow-blue-200 w-full sm:w-auto">
                                    Primary Action
                                </button>
                                <button className="px-6 py-2.5 bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl font-medium transition-colors w-full sm:w-auto">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Visual Graphic */}
                <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center p-8 transform transition-transform hover:scale-105 mt-6 md:mt-0">
                    <div className="text-white text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-90 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="font-bold text-xl mb-1">API Connected</p>
                        <p className="text-blue-100 text-sm">Mobile & Tablet Ready</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveDataDisplay;
