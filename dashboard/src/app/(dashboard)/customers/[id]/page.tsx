import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Package, 
  CreditCard, 
  AlertCircle,
  Edit,
  Trash,
  Send,
  Download,
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

// Generate static params for the dynamic route
export function generateStaticParams() {
  // Generate static paths for customer IDs 1-7
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' }
  ];
}

// This is a placeholder for demonstration purposes
// In a real app, you would fetch the customer data based on the ID parameter
export default function CustomerDetail({ params }: { params: { id: string } }) {
  const customerId = params.id;
  
  // Sample customer data
  const customer = {
    id: customerId,
    name: 'Chez Maman Restaurant',
    contactName: 'Marie Dupont',
    email: 'contact@chezmaman.com',
    phone: '+221 78 123 4567',
    address: '123 Avenue de la République, Dakar, Senegal',
    joinDate: 'January 15, 2023',
    totalOrders: 12,
    totalSpent: '145,000 CFA',
    lastOrder: 'March 15, 2024',
    status: 'Active',
    notes: 'Premium customer. Prefers deliveries on Mondays and Thursdays before 10 AM. Has a standing order for 20 bottles of water every week.'
  };
  
  // Sample order history
  const orderHistory = [
    { 
      id: 'ORD-1001', 
      date: 'March 15, 2024', 
      items: 'Water Bottle 500ml (x24)', 
      total: '12,000 CFA', 
      status: 'Delivered' 
    },
    { 
      id: 'ORD-986', 
      date: 'March 1, 2024', 
      items: 'Water Gallon 5L (x5), Ice Bag 2kg (x3)', 
      total: '33,750 CFA', 
      status: 'Delivered' 
    },
    { 
      id: 'ORD-954', 
      date: 'February 15, 2024', 
      items: 'Water Bottle 1L (x36)', 
      total: '27,000 CFA', 
      status: 'Delivered' 
    },
    { 
      id: 'ORD-932', 
      date: 'February 1, 2024', 
      items: 'Ice Cubes - Premium (x10)', 
      total: '19,950 CFA', 
      status: 'Delivered' 
    },
    { 
      id: 'ORD-901', 
      date: 'January 15, 2024', 
      items: 'Water Bottle 500ml (x24), Water Gallon 5L (x2)', 
      total: '29,980 CFA', 
      status: 'Delivered' 
    }
  ];

  return (
    <div>
      {/* Back Navigation and Header */}
      <div className="mb-6">
        <Link href="/customers" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft size={16} className="mr-1" />
          Back to Customers
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{customer.name}</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center text-gray-700 hover:bg-gray-50">
              <Edit size={16} className="mr-2" />
              Edit
            </button>
            <button className="px-4 py-2 border border-red-300 rounded-md flex items-center text-red-700 hover:bg-red-50">
              <Trash size={16} className="mr-2" />
              Delete
            </button>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {customer.status}
          </span>
          <span className="text-gray-500 ml-2">Customer ID: CUS-{customerId.padStart(4, '0')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Customer Information</h2>
            </div>
            <div className="p-4">
              <div className="mb-4 flex items-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{customer.contactName}</h3>
                  <p className="text-gray-500">Primary Contact</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <Mail className="text-gray-400 mt-0.5 mr-3" size={16} />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{customer.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gray-400 mt-0.5 mr-3" size={16} />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{customer.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-gray-400 mt-0.5 mr-3" size={16} />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium">{customer.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-gray-400 mt-0.5 mr-3" size={16} />
                  <div>
                    <p className="text-sm text-gray-600">Customer Since</p>
                    <p className="font-medium">{customer.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100">
              <h3 className="font-semibold mb-3">Customer Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-md p-3">
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <div className="flex items-center mt-1">
                    <Package size={16} className="text-blue-600 mr-1" />
                    <p className="text-lg font-semibold">{customer.totalOrders}</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-md p-3">
                  <p className="text-sm text-gray-500">Total Spent</p>
                  <div className="flex items-center mt-1">
                    <CreditCard size={16} className="text-green-600 mr-1" />
                    <p className="text-lg font-semibold">{customer.totalSpent}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Customer Notes</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{customer.notes}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700">
                <ShoppingBag size={16} className="mr-2" />
                Create New Order
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md flex items-center justify-center hover:bg-gray-50">
                <Send size={16} className="mr-2" />
                Send Message
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md flex items-center justify-center hover:bg-gray-50">
                <Download size={16} className="mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Order History</h2>
              <Link href="/orders" className="text-blue-600 text-sm hover:underline">View All Orders</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
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
                  {orderHistory.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {order.items}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.total}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Activity Timeline</h2>
            </div>
            <div className="p-4">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute h-full w-px bg-gray-200 left-2.5"></div>
                
                {/* Timeline Events */}
                <div className="space-y-6 relative">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-600 flex-shrink-0 relative z-10"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Order Delivered</p>
                      <p className="text-xs text-gray-500">March 15, 2024 at 11:42 AM</p>
                      <p className="text-sm text-gray-700 mt-1">Order #ORD-1001 was delivered successfully.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-600 flex-shrink-0 relative z-10"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Payment Received</p>
                      <p className="text-xs text-gray-500">March 15, 2024 at 09:30 AM</p>
                      <p className="text-sm text-gray-700 mt-1">Payment of 12,000 CFA received for order #ORD-1001.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-purple-600 flex-shrink-0 relative z-10"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Order Shipped</p>
                      <p className="text-xs text-gray-500">March 15, 2024 at 08:15 AM</p>
                      <p className="text-sm text-gray-700 mt-1">Order #ORD-1001 has been shipped.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-yellow-600 flex-shrink-0 relative z-10"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Order Placed</p>
                      <p className="text-xs text-gray-500">March 14, 2024 at 03:45 PM</p>
                      <p className="text-sm text-gray-700 mt-1">Customer placed order #ORD-1001 for Water Bottle 500ml (x24).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 