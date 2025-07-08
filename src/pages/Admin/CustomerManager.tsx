import React from 'react';
import { Search, Filter, Eye, Mail, Phone, MapPin } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

const CustomerManager = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const customers = [
    { 
      id: 1,
      name: 'Priya Sharma', 
      email: 'priya@email.com',
      phone: '+91 98765 43210',
      location: 'Mumbai, Maharashtra',
      orders: 5,
      totalSpent: 6495,
      joinDate: '2023-08-15',
      status: 'active'
    },
    { 
      id: 2,
      name: 'Rahul Patel', 
      email: 'rahul@email.com',
      phone: '+91 87654 32109',
      location: 'Ahmedabad, Gujarat',
      orders: 3,
      totalSpent: 2697,
      joinDate: '2023-09-22',
      status: 'active'
    },
    { 
      id: 3,
      name: 'Anita Singh', 
      email: 'anita@email.com',
      phone: '+91 76543 21098',
      location: 'Delhi, Delhi',
      orders: 8,
      totalSpent: 12384,
      joinDate: '2023-06-10',
      status: 'active'
    },
    { 
      id: 4,
      name: 'Vikram Mehta', 
      email: 'vikram@email.com',
      phone: '+91 65432 10987',
      location: 'Pune, Maharashtra',
      orders: 2,
      totalSpent: 1548,
      joinDate: '2023-11-05',
      status: 'active'
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Customer Management</h1>
            <p className="text-gray-600">Manage customer relationships and data</p>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
              />
            </div>
          </div>

          {/* Customers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{customer.name[0]}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {customer.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{customer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{customer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{customer.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brown-700">{customer.orders}</div>
                    <div className="text-sm text-gray-600">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brown-700">₹{customer.totalSpent}</div>
                    <div className="text-sm text-gray-600">Total Spent</div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Joined: {customer.joinDate}
                </div>

                <button className="w-full bg-gradient-to-r from-brown-600 to-brown-700 hover:from-brown-700 hover:to-brown-800 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManager;