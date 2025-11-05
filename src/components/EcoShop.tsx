import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, ShoppingCart, Minus, Plus, X, Leaf, Search, SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { CartItem, PaymentData } from '../App';

interface EcoShopProps {
  onNavigate: (page: string) => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  onInitiatePayment: (data: PaymentData) => void;
  onViewProduct: (productId: string) => void;
}

const products = [
  {
    id: 'p1',
    name: 'Bamboo Toothbrush Set',
    price: 299,
    originalPrice: 499,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '0.5kg',
  },
  {
    id: 'p2',
    name: 'Stainless Steel Water Bottle',
    price: 599,
    originalPrice: 899,
    category: 'Drinkware',
    image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '2.0kg',
  },
  {
    id: 'p3',
    name: 'Organic Cotton Tote Bag',
    price: 399,
    originalPrice: 599,
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzYwODc1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '1.5kg',
  },
  {
    id: 'p4',
    name: 'Reusable Bamboo Cutlery Set',
    price: 349,
    originalPrice: 499,
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '0.8kg',
  },
  {
    id: 'p5',
    name: 'Eco-Friendly Yoga Mat',
    price: 1299,
    originalPrice: 1899,
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0fGVufDB8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '3.0kg',
  },
  {
    id: 'p6',
    name: 'Biodegradable Phone Case',
    price: 799,
    originalPrice: 1199,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MHx8fHwxNzYwODU5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    co2Saved: '1.0kg',
  },
];

export function EcoShop({ onNavigate, cart, addToCart, removeFromCart, updateCartQuantity, onInitiatePayment, onViewProduct }: EcoShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter and search products
  let filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'co2':
        return parseFloat(b.co2Saved) - parseFloat(a.co2Saved);
      default:
        return 0;
    }
  });

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const paymentData: PaymentData = {
      type: 'product',
      items: cart,
      total: cartTotal,
    };
    onInitiatePayment(paymentData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => onNavigate('landing')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <Button 
                variant="ghost"
                onClick={() => onNavigate('customer-landing')}
              >
                Home
              </Button>
              <Button 
                variant="ghost"
                onClick={() => onNavigate('customer')}
              >
                Dashboard
              </Button>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-green-600 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart ({cartCount} items)</SheetTitle>
                  <SheetDescription>
                    Review and manage items in your shopping cart
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex-1 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <Card key={item.id} className="p-4">
                          <div className="flex gap-4">
                            {item.image && (
                              <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                <ImageWithFallback
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                              <p className="text-green-600 font-semibold text-sm">₹{item.price}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 w-7 p-0"
                                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 w-7 p-0"
                                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 w-7 p-0 ml-auto"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-green-600">₹{cartTotal}</span>
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Eco-Friendly Marketplace</h1>
          <p className="text-muted-foreground">Shop sustainable products that make a difference</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
                <SelectItem value="co2">CO₂ Saved: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inCart = cart.find(item => item.id === product.id);
            
            return (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="relative h-48 bg-gray-100 cursor-pointer"
                  onClick={() => onViewProduct(product.id)}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    <Leaf className="w-3 h-3 mr-1" />
                    {product.co2Saved} CO₂
                  </Badge>
                </div>
                <div className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 
                    className="font-semibold mb-2 cursor-pointer hover:text-green-600 transition-colors"
                    onClick={() => onViewProduct(product.id)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                  {inCart ? (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => updateCartQuantity(product.id, inCart.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-semibold">{inCart.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => updateCartQuantity(product.id, inCart.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Banner */}
        <Card className="mt-12 p-6 bg-green-50 border-green-200">
          <div className="flex items-start gap-4">
            <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Every Purchase Makes a Difference</h3>
              <p className="text-sm text-muted-foreground">
                All products in our marketplace are eco-friendly and sustainably sourced. Each purchase helps reduce plastic waste and carbon emissions. The CO₂ saved amount shows the environmental impact compared to conventional alternatives.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
