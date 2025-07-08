import React, { createContext, useContext, useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  tags: string[];
  inStock: boolean;
  featured: boolean;
}

interface SearchContextType {
  products: Product[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredProducts: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  searchHistory: string[];
  addToSearchHistory: (term: string) => void;
  clearSearchHistory: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

const allProducts: Product[] = [
  {
    id: 1,
    name: "AYUMIST Skin Dew Gel",
    price: 899,
    originalPrice: 1199,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 234,
    description: "Hydrating face gel with natural herbs for glowing skin. Enriched with aloe vera and turmeric.",
    category: "skincare",
    tags: ["hydrating", "natural", "glowing", "aloe vera", "turmeric"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "AYUMIST Glow Nectar Face Cream",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.pexels.com/photos/3685539/pexels-photo-3685539.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 189,
    description: "Nourishing face cream with turmeric and saffron for radiant complexion.",
    category: "skincare",
    tags: ["nourishing", "turmeric", "saffron", "radiant", "anti-aging"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "AYUMIST Kesh Nectar Herbal Hair Oil",
    price: 799,
    originalPrice: 999,
    image: "https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    reviews: 156,
    description: "Strengthening hair oil with 21 herbal extracts for healthy, lustrous hair.",
    category: "haircare",
    tags: ["strengthening", "herbal", "hair growth", "natural", "ayurvedic"],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "AYUMIST Shine Dew Herbal Shampoo",
    price: 649,
    originalPrice: 799,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    reviews: 278,
    description: "Gentle cleansing shampoo with natural ingredients for soft, manageable hair.",
    category: "haircare",
    tags: ["gentle", "cleansing", "natural", "soft hair", "sulfate-free"],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "AYUMIST Soft Dew Herbal Body Lotion",
    price: 899,
    originalPrice: 1099,
    image: "https://images.pexels.com/photos/3685539/pexels-photo-3685539.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 145,
    description: "Moisturizing body lotion with coconut and aloe vera for silky smooth skin.",
    category: "bodycare",
    tags: ["moisturizing", "coconut", "aloe vera", "smooth skin", "hydrating"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "AYUMIST Pink Bliss Lip Balm",
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 89,
    description: "Nourishing lip balm with natural oils and butters for soft, pink lips.",
    category: "skincare",
    tags: ["nourishing", "natural oils", "soft lips", "pink tint", "moisturizing"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "AYUMIST Nature Touch Herbal Soap",
    price: 199,
    originalPrice: 249,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    reviews: 234,
    description: "Handcrafted soap with natural herbs and essential oils for gentle cleansing.",
    category: "bodycare",
    tags: ["handcrafted", "natural herbs", "essential oils", "gentle", "cleansing"],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "AYUMIST Radiance Face Mask",
    price: 549,
    originalPrice: 699,
    image: "https://images.pexels.com/photos/3685539/pexels-photo-3685539.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 167,
    description: "Brightening face mask with turmeric and honey for instant glow.",
    category: "skincare",
    tags: ["brightening", "turmeric", "honey", "instant glow", "face mask"],
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "AYUMIST Herbal Hair Conditioner",
    price: 599,
    originalPrice: 749,
    image: "https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4,
    reviews: 203,
    description: "Deep conditioning treatment with argan oil and hibiscus for smooth hair.",
    category: "haircare",
    tags: ["conditioning", "argan oil", "hibiscus", "smooth hair", "deep treatment"],
    inStock: false,
    featured: false
  },
  {
    id: 10,
    name: "AYUMIST Wellness Tea Blend",
    price: 399,
    originalPrice: 499,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
    reviews: 312,
    description: "Herbal tea blend with ashwagandha and tulsi for daily wellness.",
    category: "wellness",
    tags: ["herbal tea", "ashwagandha", "tulsi", "wellness", "daily health"],
    inStock: true,
    featured: false
  }
];

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addToSearchHistory = (term: string) => {
    if (term.trim() && !searchHistory.includes(term)) {
      const newHistory = [term, ...searchHistory.slice(0, 9)]; // Keep last 10 searches
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const value = {
    products,
    searchTerm,
    setSearchTerm,
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    searchHistory,
    addToSearchHistory,
    clearSearchHistory
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};