import React from 'react';
import { Plus, Edit, Trash2, Search, Filter, Upload, Save, X } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

const ProductManager = () => {
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    price: '',
    description: '',
    category: '',
    ingredients: '',
    benefits: '',
    howToUse: '',
    stock: '',
    image: ''
  });

  const products = [
    { id: 1, name: 'AYUMIST Skin Dew Gel', price: 899, category: 'Skincare', stock: 45, status: 'Active' },
    { id: 2, name: 'AYUMIST Glow Nectar Face Cream', price: 1299, category: 'Skincare', stock: 32, status: 'Active' },
    { id: 3, name: 'AYUMIST Kesh Nectar Hair Oil', price: 799, category: 'Hair Care', stock: 28, status: 'Active' },
    { id: 4, name: 'AYUMIST Shine Dew Shampoo', price: 649, category: 'Hair Care', stock: 56, status: 'Active' },
    { id: 5, name: 'AYUMIST Soft Dew Body Lotion', price: 899, category: 'Body Care', stock: 41, status: 'Active' },
    { id: 6, name: 'AYUMIST Pink Bliss Lip Balm', price: 299, category: 'Skincare', stock: 73, status: 'Active' },
    { id: 7, name: 'AYUMIST Nature Touch Soap', price: 199, category: 'Body Care', stock: 89, status: 'Active' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowAddForm(false);
    setFormData({
      name: '',
      price: '',
      description: '',
      category: '',
      ingredients: '',
      benefits: '',
      howToUse: '',
      stock: '',
      image: ''
    });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Product Manager</h1>
              <p className="text-gray-600">Manage your product catalog</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-ayur-500 to-ayur-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5 text-gray-600" />
              <span>Filter</span>
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Stock</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">{product.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-ayur-100 text-ayur-800">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-800">₹{product.price}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          product.stock > 50 ? 'bg-green-100 text-green-800' :
                          product.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Product Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-800">Add New Product</h2>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                          placeholder="Enter product name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                          placeholder="Enter price"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="Skincare">Skincare</option>
                          <option value="Hair Care">Hair Care</option>
                          <option value="Body Care">Body Care</option>
                          <option value="Wellness">Wellness</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                        <input
                          type="number"
                          name="stock"
                          value={formData.stock}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                          placeholder="Enter stock quantity"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                        placeholder="Enter product description"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Key Ingredients</label>
                      <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                        placeholder="List the key ingredients"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Benefits</label>
                      <textarea
                        name="benefits"
                        value={formData.benefits}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                        placeholder="List the key benefits"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How to Use</label>
                      <textarea
                        name="howToUse"
                        value={formData.howToUse}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ayur-500 focus:border-ayur-500 transition-colors"
                        placeholder="Instructions for use"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-ayur-400 transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-ayur-500 to-ayur-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                      >
                        <Save className="h-5 w-5" />
                        <span>Save Product</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManager;