import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Star, ShoppingCart, Heart, Shield, Truck, RotateCcw, Award } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState('description');

  const product = {
    id: 1,
    name: "AYUMIST Skin Dew Gel",
    price: 899,
    images: [
      "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3685539/pexels-photo-3685539.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 5,
    reviews: 234,
    description: "Experience the ultimate hydration with our AYUMIST Skin Dew Gel. This luxurious gel combines the power of ancient Ayurvedic herbs with modern skincare science to deliver exceptional results.",
    benefits: [
      "Deep hydration for 24 hours",
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Natural glow enhancement",
      "Suitable for all skin types"
    ],
    ingredients: "Aloe Vera, Turmeric, Neem, Rose Water, Glycerin, Vitamin E",
    howToUse: "Apply a thin layer on clean face and neck. Gently massage until absorbed. Use twice daily for best results."
  };

  const reviews = [
    { name: "Priya S.", rating: 5, comment: "Amazing product! My skin feels so soft and hydrated.", date: "2 days ago" },
    { name: "Rajesh M.", rating: 5, comment: "Been using for 3 months. Visible improvement in skin texture.", date: "1 week ago" },
    { name: "Anita K.", rating: 4, comment: "Good quality, natural ingredients. Recommended!", date: "2 weeks ago" }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-ayur-600 hover:text-ayur-700">Home</Link></li>
            <li><span className="text-gray-500">/</span></li>
            <li><Link to="/products" className="text-ayur-600 hover:text-ayur-700">Products</Link></li>
            <li><span className="text-gray-500">/</span></li>
            <li className="text-gray-500">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-3xl overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <p className="text-4xl font-bold text-ayur-600 font-serif">₹{product.price}</p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-3">Product Benefits:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ayur-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:text-ayur-600"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-ayur-600"
                >
                  +
                </button>
              </div>
              <button className="text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-ayur-500 to-ayur-600 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Buy Now</span>
              </Link>
              
              <button className="w-full bg-white border-2 border-ayur-200 text-ayur-600 py-4 px-8 rounded-full font-semibold text-lg hover:bg-ayur-50 transition-colors duration-300">
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="h-8 w-8 text-ayur-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">100% Natural</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-ayur-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-ayur-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">30-Day Return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'ingredients', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-ayur-500 text-ayur-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">How to Use:</h4>
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Ingredients:</h4>
                <p className="text-gray-700 text-lg">{product.ingredients}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-800">Customer Reviews</h4>
                  <button className="bg-ayur-600 text-white px-6 py-2 rounded-full hover:bg-ayur-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-ayur-100 rounded-full flex items-center justify-center">
                            <span className="text-ayur-600 font-semibold">{review.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{review.name}</p>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;