import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const AdminSales = () => {

  const [stats,setStats] = useState({
    totalUsers:0,
    totalProducts:0,
    totalOrders:0,
    totalSales:0,
    salesByDate:[]
  })

  const fetchStats = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/sales`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        setStats(res.data);
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchStats();
  }, [])
  return (

//     <div className="pl-[350px] bg-gray-100 py-20 pr-20 mx-auto px-4">
//   <div className="p-6 grid gap-6 lg:grid-cols-4">

//     {/* stats cards */}
//     <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow hover:scale-105 transition-transform duration-300">
//       <CardHeader>
//         <CardTitle>Total Users</CardTitle>
//       </CardHeader>
//       <CardContent className="text-2xl font-bold">{stats.totalUsers}</CardContent>
//     </Card>

//     <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow hover:scale-105 transition-transform duration-300">
//       <CardHeader>
//         <CardTitle>Total Products</CardTitle>
//       </CardHeader>
//       <CardContent className="text-2xl font-bold">{stats.totalProducts}</CardContent>
//     </Card>

//     <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:scale-105 transition-transform duration-300">
//       <CardHeader>
//         <CardTitle>Total Orders</CardTitle>
//       </CardHeader>
//       <CardContent className="text-2xl font-bold">{stats.totalOrders}</CardContent>
//     </Card>

//     <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:scale-105 transition-transform duration-300">
//       <CardHeader>
//         <CardTitle>Total Sales</CardTitle>
//       </CardHeader>
//       <CardContent className="text-2xl font-bold">{stats.totalSales}</CardContent>
//     </Card>
//     {/* sales chart  */}
// <Card className="lg:col-span-4">
//   <CardHeader>
//     <CardTitle>Sales (Last 30 Days)</CardTitle>
//   </CardHeader>

//   <CardContent style={{ height: 300 }}>
//     <ResponsiveContainer width="100%" height="100%">
//       <AreaChart data={stats.sales}>
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />

//         <Area
//           type="monotone"
//           dataKey="amount"
//           stroke="#4F46E5"   // indigo-600
//           fill="#8B5CF6"     // purple-500
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   </CardContent>
// </Card>

//   </div>
// </div>


<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  {/* Main Content Area */}
  <div className="lg:pl-[350px] pl-4 py-8 lg:py-20 pr-4 lg:pr-20">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Track your business performance and key metrics
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {/* Stats Cards */}
        <Card 
          className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
          aria-label="Total Users Statistics"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Total Users</CardTitle>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalUsers?.toLocaleString() || 0}</div>
            <p className="text-sm opacity-90 mt-2">+12% from last month</p>
          </CardContent>
        </Card>

        <Card 
          className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
          aria-label="Total Products Statistics"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Total Products</CardTitle>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalProducts?.toLocaleString() || 0}</div>
            <p className="text-sm opacity-90 mt-2">+8% from last month</p>
          </CardContent>
        </Card>

        <Card 
          className="bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
          aria-label="Total Orders Statistics"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Total Orders</CardTitle>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalOrders?.toLocaleString() || 0}</div>
            <p className="text-sm opacity-90 mt-2">+23% from last month</p>
          </CardContent>
        </Card>

        <Card 
          className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
          aria-label="Total Sales Statistics"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Total Sales</CardTitle>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${stats.totalSales?.toLocaleString() || 0}</div>
            <p className="text-sm opacity-90 mt-2">+18% from last month</p>
          </CardContent>
        </Card>

        {/* Sales Chart */}
        <Card className="lg:col-span-4 md:col-span-2 shadow-lg border-0 bg-white">
          <CardHeader className="border-b border-gray-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-gray-800">Sales Overview</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Revenue trends for the last 30 days</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Export
                </button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            {stats.sales && stats.sales.length > 0 ? (
              <div style={{ height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart 
                    data={stats.sales}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#9CA3AF"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                    />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#4F46E5"
                      strokeWidth={3}
                      fill="url(#colorAmount)"
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[350px] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500">No sales data available</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</div>
  )
}

export default AdminSales