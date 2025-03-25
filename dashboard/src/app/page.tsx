'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to the BlueSpring water and ice distribution dashboard.</p>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-blue-600">Total Revenue</h3>
          <p className="text-2xl font-bold">$67,890</p>
          <p className="text-xs text-blue-600">↑ 12% from previous period</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-green-600">Orders</h3>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-xs text-green-600">↑ 5% from previous period</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-purple-600">Active Customers</h3>
          <p className="text-2xl font-bold">890</p>
          <p className="text-xs text-purple-600">↑ 8% from previous period</p>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/inventory" className="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50">
            Inventory
          </a>
          <a href="/orders" className="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50">
            Orders
          </a>
          <a href="/customers" className="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50">
            Customers
          </a>
          <a href="/reports" className="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50">
            Reports
          </a>
        </div>
      </div>
      
      {/* Placeholder for Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
        <p className="text-gray-500 text-center py-8">
          Recent activity will be displayed here
        </p>
      </div>
    </div>
  );
}
