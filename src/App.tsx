import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProductManager from './pages/Admin/ProductManager';
import OrderManager from './pages/Admin/OrderManager';
import CustomerManager from './pages/Admin/CustomerManager';
import WhatsAppChat from './components/WhatsAppChat';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <FavoritesProvider>
            <Router>
              <div className="min-h-screen bg-cream-50">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/admin" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/products" element={
                    <ProtectedRoute>
                      <ProductManager />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/orders" element={
                    <ProtectedRoute>
                      <OrderManager />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/customers" element={
                    <ProtectedRoute>
                      <CustomerManager />
                    </ProtectedRoute>
                  } />
                </Routes>
                <WhatsAppChat />
              </div>
            </Router>
          </FavoritesProvider>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;