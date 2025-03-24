'use client';

import React from 'react';
import { Users, Search, Filter, Plus, Mail, Phone } from 'lucide-react';

export default function CustomersPage() {
  // Sample customer data
  const customers = [
    { 
      id: 1, 
      name: 'Chez Maman Restaurant', 
      contactName: 'Marie Dupont',
      email: 'contact@chezmaman.com', 
      phone: '+221 78 123 4567', 
      orderCount: 12, 
      totalSpent: '145,000 CFA', 
      lastOrder: '2024-03-15',
      status: 'Active' 
    },
    { 
      id: 2, 
      name: 'Hotel Magnificient', 
      contactName: 'Jean Diop',
      email: 'reservations@hotelmagnicifient.com', 
      phone: '+221 77 987 6543', 
      orderCount: 8, 
      totalSpent: '230,500 CFA', 
      lastOrder: '2024-03-12',
      status: 'Active' 
    },
    { 
      id: 3, 
      name: 'Le Petit Café', 
      contactName: 'Amadou Sow',
      email: 'info@lepetitcafe.com', 
      phone: '+221 76 456 7890', 
      orderCount: 5, 
      totalSpent: '84,200 CFA', 
      lastOrder: '2024-03-10',
      status: 'Active' 
    },
    { 
      id: 4, 
      name: 'Beach Resort', 
      contactName: 'Fatou Ndiaye',
      email: 'booking@beachresort.com', 
      phone: '+221 70 234 5678', 
      orderCount: 15, 
      totalSpent: '350,000 CFA', 
      lastOrder: '2024-03-08',
      status: 'Active' 
    },
    { 
      id: 5, 
      name: 'City Supermarket', 
      contactName: 'Omar Gueye',
      email: 'sales@citysupermarket.com', 
      phone: '+221 78 345 6789', 
      orderCount: 3, 
      totalSpent: '67,500 CFA', 
      lastOrder: '2024-03-01',
      status: 'Inactive' 
    },
    { 
      id: 6, 
      name: 'Dakar Medical Center', 
      contactName: 'Aisha Mbaye',
      email: 'info@dakarmedical.com', 
      phone: '+221 77 567 8901', 
      orderCount: 6, 
      totalSpent: '105,800 CFA', 
      lastOrder: '2024-02-25',
      status: 'Active' 
    },
    { 
      id: 7, 
      name: 'Express Convenience', 
      contactName: 'Moussa Fall',
      email: 'contact@expressconvenience.com', 
      phone: '+221 76 890 1234', 
      orderCount: 0, 
      totalSpent: '0 CFA', 
      lastOrder: '-',
      status: 'Inactive' 
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-gray-500">Manage your customer relationships</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Add Customer
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-white">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <Filter size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-white">
                <option>All Time</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
              </select>
              <Filter size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-md flex items-center justify-center">
                        <Users size={18} className="text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">CUS-{customer.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.contactName}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Mail size={14} className="mr-1" />
                      {customer.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone size={14} className="mr-1" />
                      {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orderCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastOrder}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing 1 to 7 of 7 customers
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm" disabled>Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
} 