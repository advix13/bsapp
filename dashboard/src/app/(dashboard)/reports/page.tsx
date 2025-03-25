'use client';

import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ReportsPage() {
  const [timePeriod, setTimePeriod] = useState('6months');
  const [activeReportType, setActiveReportType] = useState('sales');

  // Simplified version to avoid syntax errors
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reports Dashboard</h1>
      
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <div className="flex space-x-2">
            <select 
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Total Revenue</h3>
            <p className="text-2xl font-bold">$67,890</p>
            <p className="text-xs text-blue-600">↑ 12% from previous period</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Orders</h3>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-green-600">↑ 5% from previous period</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Active Customers</h3>
            <p className="text-2xl font-bold">890</p>
            <p className="text-xs text-purple-600">↑ 8% from previous period</p>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button 
          className={`px-4 py-2 rounded ${activeReportType === 'sales' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReportType('sales')}
        >
          Sales Reports
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeReportType === 'inventory' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReportType('inventory')}
        >
          Inventory Reports
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeReportType === 'customers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReportType('customers')}
        >
          Customer Reports
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {activeReportType === 'sales' && 'Sales Trend'}
          {activeReportType === 'inventory' && 'Inventory Status'}
          {activeReportType === 'customers' && 'Customer Growth'}
        </h2>
        
        <p className="text-center text-gray-500 py-10">
          [Chart Data Will Be Displayed Here]
        </p>
      </div>
    </div>
  );
} 