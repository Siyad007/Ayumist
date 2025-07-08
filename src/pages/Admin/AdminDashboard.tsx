import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BarChart3,
  DollarSign,
  Star
} from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Products', value: '20', icon: Package, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { name: 'Total Orders', value: '1,234', icon: ShoppingCart, color: 'bg-gradient-to-r from-ayur-500 to-ayur-600' },
    { name: 'Total Customers', value: '5,678', icon: Users, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { name: 'Revenue', value: '₹2,34,567', icon: DollarSign, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
  ];

  const products = [
    { id: 1, name: 'AYUMIST Skin Dew Gel', price: 899, stock: 45, rating: 4.8, image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 2, name: 'AYUMIST Glow Nectar Face Cream', price: 1299, stock: 32, rating: 4.9, image: 'https://images.pexels.com/photos/3685539/pexels-photo-3685539.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 3, name: 'AYUMIST Kesh Nectar Hair Oil', price: 799, stock: 28, rating: 4.7, image: 'https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 4, name: 'AYUMIST Shine Dew Shampoo', price: 649, stock: 56, rating: 4.6, image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  const recentOrders = [
    { id: '#1001', customer: 'Priya Sharma', amount: 1299, status: 'Delivered', date: '2 hours ago' },
    { id: '#1002', customer: 'Rahul Patel', amount: 899, status: 'Processing', date: '4 hours ago' },
    { id: '#1003', customer: 'Anita Singh', amount: 1548, status: 'Shipped', date: '6 hours ago' },
    { id: '#1004', customer: 'Vikram Mehta', amount: 649, status: 'Pending', date: '8 hours ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.color} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Products Table */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-800">Products</h2>
                <Link
                  to="/admin/products"
                  className="bg-gradient-to-r from-ayur-500 to-ayur-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Product</span>
                </Link>
              </div>
              
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-ayur-600 font-semibold">₹{product.price}</span>
                        <span className="text-gray-500 text-sm">Stock: {product.stock}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-ayur-600 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-800">Recent Orders</h2>
                <Link
                  to="/admin/orders"
                  className="text-ayur-600 hover:text-ayur-700 font-medium text-sm"
                >
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-800">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">₹{order.amount}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold text-gray-800">Sales Analytics</h2>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-ayur-600" />
                <span className="text-sm text-gray-600">Monthly Revenue</span>
              </div>
            </div>
            
            <div className="h-64 bg-gradient-to-br from-ayur-50 to-cream-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-ayur-400 mx-auto mb-4" />
                <p className="text-gray-600">Chart visualization would appear here</p>
                <p className="text-sm text-gray-500">Integration with chart library like Chart.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;