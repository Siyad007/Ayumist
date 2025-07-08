import React from 'react';
import { Search, Filter, Eye, Edit, Truck, Package, CheckCircle } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

const OrderManager = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');

  const orders = [
    { 
      id: '#1001', 
      customer: 'Priya Sharma', 
      email: 'priya@email.com',
      amount: 1299, 
      status: 'delivered', 
      date: '2024-01-15',
      items: 2,
      address: 'Mumbai, Maharashtra'
    },
    { 
      id: '#1002', 
      customer: 'Rahul Patel', 
      email: 'rahul@email.com',
      amount: 899, 
      status: 'processing', 
      date: '2024-01-14',
      items: 1,
      address: 'Ahmedabad, Gujarat'
    },
    { 
      id: '#1003', 
      customer: 'Anita Singh', 
      email: 'anita@email.com',
      amount: 1548, 
      status: 'shipped', 
      date: '2024-01-13',
      items: 3,
      address: 'Delhi, Delhi'
    },
    { 
      id: '#1004', 
      customer: 'Vikram Mehta', 
      email: 'vikram@email.com',
      amount: 649, 
      status: 'pending', 
      date: '2024-01-12',
      items: 1,
      address: 'Pune, Maharashtra'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'shipped':
        return <Truck className="h-4 w-4" />;
      case 'processing':
        return <Package className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order =>
    (statusFilter === 'all' || order.status === statusFilter) &&
    (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
     order.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Order Management</h1>
            <p className="text-gray-600">Track and manage customer orders</p>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">{order.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.email}</div>
                          <div className="text-sm text-gray-500">{order.address}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{order.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{order.items} items</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-800">₹{order.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-gold-600 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;