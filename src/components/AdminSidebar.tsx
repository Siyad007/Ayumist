import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  Leaf,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminSidebar = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Package, label: 'Products', href: '/admin/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
    { icon: Users, label: 'Customers', href: '/admin/customers' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
    { icon: MessageSquare, label: 'Reviews', href: '/admin/reviews' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <Link to="/admin/dashboard" className="flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold">AYUMIST</h1>
            <p className="text-sm text-gray-400">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">{user?.name?.[0] || 'A'}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-gray-400">{user?.email || 'admin@ayumist.com'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
              isActive(item.href)
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className={`h-5 w-5 transition-transform duration-300 ${
              isActive(item.href) ? 'scale-110' : 'group-hover:scale-110'
            }`} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300 group"
        >
          <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;