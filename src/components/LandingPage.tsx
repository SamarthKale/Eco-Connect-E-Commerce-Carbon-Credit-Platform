import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Building2, ShoppingBag, TreePine, ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Shield, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-foreground">EcoConnect</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => onNavigate('landing')} 
                className="text-foreground hover:text-green-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('about')} 
                className="text-foreground hover:text-green-600 transition-colors font-medium"
              >
                About Us
              </button>
              <a href="#how-it-works" className="text-foreground hover:text-green-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#features" className="text-foreground hover:text-green-600 transition-colors font-medium">
                Features
              </a>
              <a href="#impact" className="text-foreground hover:text-green-600 transition-colors font-medium">
                Impact
              </a>
            </div>
            <Button 
              onClick={() => onNavigate('register')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md"
            >
              Login / Sign Up
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                🌍 Carbon Credits Marketplace
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Offset Your Carbon Footprint with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Every Click
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join the revolution in carbon credit trading. Connect companies, NGOs, and eco-conscious individuals in one sustainable ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all h-12 px-8"
                  onClick={() => onNavigate('register')}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-2"
                  onClick={() => onNavigate('about')}
                >
                  Learn More
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '50K+', label: 'Trees Planted' },
                  { value: '2K+', label: 'Active Users' },
                  { value: '100+', label: 'NGO Partners' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635618067406-65148064bd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHRyZWVzJTIwbmF0dXJlfGVufDF8fHx8MTc2MDk0MzMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Green forest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Floating Cards */}
              <Card className="absolute -left-4 top-20 p-4 shadow-xl bg-white/95 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Carbon Credits</div>
                    <div className="text-sm text-muted-foreground">Verified & Trusted</div>
                  </div>
                </div>
              </Card>
              <Card className="absolute -right-4 bottom-20 p-4 shadow-xl bg-white/95 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">100% Transparent</div>
                    <div className="text-sm text-muted-foreground">Blockchain Verified</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Simple Process
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform seamlessly connects all stakeholders in the carbon credit ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Companies Buy Credits',
                description: 'Businesses offset their carbon emissions by purchasing verified carbon credits from our transparent marketplace.',
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'bg-blue-50',
                step: '01'
              },
              {
                icon: TreePine,
                title: 'NGOs Earn Credits',
                description: 'NGOs and NSS clubs earn credits by planting trees and completing verified environmental projects.',
                color: 'from-green-500 to-emerald-600',
                bgColor: 'bg-green-50',
                step: '02'
              },
              {
                icon: ShoppingBag,
                title: 'Customers Shop Eco',
                description: 'Buy eco-friendly products and sponsor tree planting initiatives to make a positive environmental impact.',
                color: 'from-purple-500 to-pink-600',
                bgColor: 'bg-purple-50',
                step: '03'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all border-2 hover:border-green-200 relative overflow-hidden group`}>
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-green-50 transition-colors">
                    {item.step}
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              Platform Features
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose EcoConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide everything you need for transparent and efficient carbon credit trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Projects',
                description: 'All projects are thoroughly verified and certified for authenticity'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with NGOs and companies worldwide in our marketplace'
              },
              {
                icon: TrendingUp,
                title: 'Real-time Tracking',
                description: 'Monitor your carbon offset progress with detailed analytics'
              },
              {
                icon: Award,
                title: 'Certificates',
                description: 'Get official certificates for ESG reporting and compliance'
              },
              {
                icon: Zap,
                title: 'Instant Trading',
                description: 'Buy and sell carbon credits instantly with secure payments'
              },
              {
                icon: Users,
                title: 'Community Driven',
                description: 'Join a growing community of eco-conscious individuals and organizations'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Impact
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Making a Real Difference Together
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Through our platform, we've helped offset thousands of tons of CO₂ and planted forests across the globe.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Total CO₂ Offset', value: '12,500 tons', icon: Leaf },
                  { label: 'Trees Planted', value: '50,000+', icon: TreePine },
                  { label: 'Active Projects', value: '250+', icon: Award },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{item.label}</div>
                        <div className="text-2xl font-bold text-green-600">{item.value}</div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630421550301-21aaa9315f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBjcmVkaXRzJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzYwOTc0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Join thousands of companies, NGOs, and individuals working towards a sustainable future
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl h-14 px-10"
              onClick={() => onNavigate('register')}
            >
              Get Started for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-14 px-10"
              onClick={() => onNavigate('about')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">EcoConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making carbon offsetting accessible for everyone through transparent and verified carbon credit trading.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">For Companies</div>
                <div className="hover:text-white cursor-pointer transition-colors">For NGOs</div>
                <div className="hover:text-white cursor-pointer transition-colors">Eco Marketplace</div>
                <div className="hover:text-white cursor-pointer transition-colors">How It Works</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('about')}>About Us</div>
                <div className="hover:text-white cursor-pointer transition-colors">Our Impact</div>
                <div className="hover:text-white cursor-pointer transition-colors">Blog</div>
                <div className="hover:text-white cursor-pointer transition-colors">Careers</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Contact Us</div>
                <div className="hover:text-white cursor-pointer transition-colors">FAQs</div>
                <div className="hover:text-white cursor-pointer transition-colors">Privacy Policy</div>
                <div className="hover:text-white cursor-pointer transition-colors">Terms of Service</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 EcoConnect. All rights reserved. Made with 💚 for a greener planet.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer transition-colors">Instagram</div>
              <div className="hover:text-white cursor-pointer transition-colors">LinkedIn</div>
              <div className="hover:text-white cursor-pointer transition-colors">Twitter</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
