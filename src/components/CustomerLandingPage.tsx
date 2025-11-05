import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, ShoppingBag, TreePine, Award, ArrowRight, Heart, Star, Package, ChevronRight, Sparkles, Gift, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CustomerLandingPageProps {
  onNavigate: (page: string) => void;
  userType: 'company' | 'ngo' | 'customer';
  isAuthenticated: boolean;
}

export function CustomerLandingPage({ onNavigate, userType, isAuthenticated }: CustomerLandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-foreground">EcoConnect</span>
            </div>
            <div className="flex items-center gap-4">
              {isAuthenticated && (
                <>
                  <Button 
                    variant="ghost"
                    onClick={() => onNavigate('landing')}
                    className="text-foreground hover:text-green-600"
                  >
                    Home
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => onNavigate('customer')}
                    className="text-foreground hover:text-green-600"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => onNavigate('shop')}
                    className="text-foreground hover:text-green-600"
                  >
                    EcoShop
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => onNavigate('profile')}
                    className="text-foreground hover:text-green-600"
                  >
                    Profile
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              Welcome Back to EcoConnect
            </Badge>
            <h1 className="text-5xl mb-6 text-foreground">
              Your Sustainable Shopping Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover eco-friendly products, track your environmental impact, and make a difference with every purchase.
            </p>
          </div>

          {/* Stats Dashboard Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <TreePine className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">24</div>
              <div className="text-sm opacity-90">Trees Sponsored</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <ShoppingBag className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">18</div>
              <div className="text-sm opacity-90">Eco Products Bought</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Leaf className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">42kg</div>
              <div className="text-sm opacity-90">CO₂ Saved</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">Gold</div>
              <div className="text-sm opacity-90">Eco Warrior Tier</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Featured Eco Products</h2>
              <p className="text-muted-foreground">Handpicked sustainable products just for you</p>
            </div>
            <Button 
              onClick={() => onNavigate('shop')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Browse All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Bamboo Toothbrush Set',
                price: '₹299',
                originalPrice: '₹499',
                category: 'Personal Care',
                image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
                co2Saved: '0.5kg',
                rating: 4.8,
                discount: 40,
              },
              {
                name: 'Stainless Steel Water Bottle',
                price: '₹599',
                originalPrice: '₹899',
                category: 'Drinkware',
                image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
                co2Saved: '2.0kg',
                rating: 4.9,
                discount: 33,
              },
              {
                name: 'Organic Cotton Tote Bag',
                price: '₹399',
                originalPrice: '₹599',
                category: 'Bags',
                image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
                co2Saved: '1.5kg',
                rating: 4.7,
                discount: 33,
              },
            ].map((product, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0">
                    {product.discount}% OFF
                  </Badge>
                  <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0">
                    <Leaf className="w-3 h-3 mr-1" />
                    {product.co2Saved} CO₂
                  </Badge>
                </div>
                <div className="p-6">
                  <Badge className="bg-green-100 text-green-700 border-green-200 mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl mb-2 text-foreground">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating}/5.0</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl text-green-600">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>

                  <Button 
                    onClick={() => onNavigate('shop')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Sponsorship Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Your Tree Sponsorships</h2>
              <p className="text-muted-foreground">Trees you've sponsored and their growth journey</p>
            </div>
            <Button 
              onClick={() => onNavigate('customer')}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              View All Trees
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Tree planting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">
                  <TreePine className="w-3 h-3 mr-1" />
                  Growing
                </Badge>
                <h3 className="text-xl mb-2 text-foreground">
                  Mango Tree - Batch #2045
                </h3>
                <p className="text-muted-foreground mb-4">
                  Planted on Jan 15, 2025 in collaboration with Green Earth Foundation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Growth Progress</span>
                    <span className="text-green-600">8 months old</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">CO₂ Absorbed</span>
                    <span className="text-foreground">12kg/year</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl">Sponsor More Trees</h3>
                  <p className="opacity-90">Make a bigger impact today</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Choose from 10+ tree species</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Get regular growth updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Receive digital certificate</span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate('customer')}
                className="w-full bg-white text-green-600 hover:bg-gray-100"
              >
                Sponsor a Tree
                <Heart className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center text-foreground">What Would You Like to Do?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('shop')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Browse EcoShop</h3>
              <p className="text-muted-foreground mb-4">
                Discover sustainable products that help reduce your carbon footprint and support eco-friendly brands.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all">
                <span>Start Shopping</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('customer')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Sponsor Trees</h3>
              <p className="text-muted-foreground mb-4">
                Support reforestation by sponsoring trees and tracking their growth over time with our partners.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                <span>Plant a Tree</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('customer')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Track Your Impact</h3>
              <p className="text-muted-foreground mb-4">
                View your environmental impact dashboard, earned badges, and carbon offset achievements.
              </p>
              <div className="flex items-center text-purple-600 group-hover:gap-2 transition-all">
                <span>View Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Recent Orders</h2>
              <p className="text-muted-foreground">Track your latest sustainable purchases</p>
            </div>
            <Button 
              onClick={() => onNavigate('customer')}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              View All Orders
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                id: '#ORD-2847',
                items: 'Bamboo Toothbrush Set + 2 more items',
                date: 'Nov 2, 2025',
                total: '₹1,247',
                status: 'Delivered',
                co2Saved: '4.5kg',
              },
              {
                id: '#ORD-2821',
                items: 'Organic Cotton Tote Bag',
                date: 'Oct 28, 2025',
                total: '₹399',
                status: 'In Transit',
                co2Saved: '1.5kg',
              },
            ].map((order, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-foreground">{order.id}</span>
                        <Badge className={order.status === 'Delivered' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 text-blue-700 border-blue-200'}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.items}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground">{order.date}</span>
                        <span className="text-sm text-green-600">
                          <Leaf className="w-3 h-3 inline mr-1" />
                          {order.co2Saved} CO₂ saved
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl text-foreground mb-2">{order.total}</div>
                    <Button 
                      onClick={() => onNavigate('order-status')}
                      variant="outline"
                      size="sm"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Track Order
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl mb-4">Continue Your Eco-Friendly Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Explore more sustainable products and track your environmental impact on your dashboard.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={() => onNavigate('shop')}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Browse Products
              <ShoppingBag className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={() => onNavigate('customer')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl">EcoConnect</span>
          </div>
          <p className="text-gray-400">
            Shop sustainably, live consciously, impact positively
          </p>
        </div>
      </footer>
    </div>
  );
}
