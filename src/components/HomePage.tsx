import { Button } from './ui/button';
import { Card } from './ui/card';
import { Leaf, Building2, ShoppingBag, ArrowRight, TreePine, UserCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // This is now a public landing/info page after login
  // Users should be redirected to their specific dashboards

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-xl font-semibold text-foreground">EcoConnect</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => onNavigate('shop')} className="text-foreground hover:text-green-600 transition-colors">Shop</button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNavigate('profile')}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Offset Your Carbon Footprint with Every Click 🌍
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Buy, Sell, or Earn Carbon Credits and Make a Real Environmental Impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => onNavigate('shop')}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Start Shopping
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('profile')}
                >
                  <UserCircle className="w-5 h-5 mr-2" />
                  My Profile
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635618067406-65148064bd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHRyZWVzJTIwbmF0dXJlfGVufDF8fHx8MTc2MDk0MzMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Green forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform connects companies, NGOs, and eco-conscious customers in a seamless carbon credit marketplace.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Companies Buy Credits</h3>
              <p className="text-muted-foreground">
                Businesses offset their carbon emissions by purchasing verified carbon credits from our marketplace.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">NGOs Earn Credits</h3>
              <p className="text-muted-foreground">
                NGOs and NSS clubs earn credits by planting trees and completing verified environmental projects.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customers Shop Eco</h3>
              <p className="text-muted-foreground">
                Buy eco-friendly products and sponsor tree planting initiatives to make a positive impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco Store Preview */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Eco-Friendly Marketplace</h2>
              <p className="text-muted-foreground">
                Discover sustainable products that make a difference
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('shop')}
            >
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bamboo Toothbrush',
                price: 299,
                image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Reusable Water Bottle',
                price: 599,
                image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Organic Cotton Tote',
                price: 399,
                image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzYwODc1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹{product.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-green-400" />
                <span className="font-semibold">EcoConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making carbon offsetting accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer">About Us</div>
                <div className="hover:text-white cursor-pointer">How It Works</div>
                <div className="hover:text-white cursor-pointer">Impact Report</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer">Contact Us</div>
                <div className="hover:text-white cursor-pointer">FAQs</div>
                <div className="hover:text-white cursor-pointer">Privacy Policy</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer">Instagram</div>
                <div className="hover:text-white cursor-pointer">LinkedIn</div>
                <div className="hover:text-white cursor-pointer">Twitter</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 EcoConnect. All rights reserved. Made with 💚 for a greener planet.
          </div>
        </div>
      </footer>
    </div>
  );
}
