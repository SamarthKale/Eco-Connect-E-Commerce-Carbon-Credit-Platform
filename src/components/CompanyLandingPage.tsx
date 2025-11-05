import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Building2, TrendingUp, Award, ArrowRight, TreePine, Target, BarChart3, ChevronRight, Globe, Shield, Users, DollarSign, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CompanyLandingPageProps {
  onNavigate: (page: string) => void;
  userType: 'company' | 'ngo' | 'customer';
  isAuthenticated: boolean;
}

export function CompanyLandingPage({ onNavigate, userType, isAuthenticated }: CompanyLandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
                    onClick={() => onNavigate('company')}
                    className="text-foreground hover:text-green-600"
                  >
                    Dashboard
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
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Welcome to Your Corporate Portal
            </Badge>
            <h1 className="text-5xl mb-6 text-foreground">
              Drive Your CSR Impact Forward
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage your carbon credits, partner with verified NGOs, and track the measurable environmental impact of your corporate social responsibility initiatives.
            </p>
          </div>

          {/* Stats Dashboard Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Globe className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">2,450</div>
              <div className="text-sm opacity-90">Carbon Credits</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <TreePine className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">8,340</div>
              <div className="text-sm opacity-90">Trees Sponsored</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">12</div>
              <div className="text-sm opacity-90">NGO Partnerships</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">₹24L</div>
              <div className="text-sm opacity-90">CSR Investment</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CSR Impact Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Your CSR Impact Overview</h2>
              <p className="text-muted-foreground">Track and measure the real-world impact of your sustainability initiatives</p>
            </div>
            <Button 
              onClick={() => onNavigate('company')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Full Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-foreground">Carbon Neutrality</h3>
                  <p className="text-muted-foreground">Progress towards net-zero emissions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Annual Target</span>
                    <span className="text-foreground">78% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Emissions Offset</div>
                    <div className="text-2xl text-green-600">245 tons</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Target Remaining</div>
                    <div className="text-2xl text-foreground">70 tons</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-foreground">Investment Analytics</h3>
                  <p className="text-muted-foreground">CSR fund utilization breakdown</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-foreground">Tree Plantation</span>
                  </div>
                  <span className="text-sm text-muted-foreground">₹8.5L (35%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm text-foreground">Carbon Credits</span>
                  </div>
                  <span className="text-sm text-muted-foreground">₹7.2L (30%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-sm text-foreground">Clean Energy</span>
                  </div>
                  <span className="text-sm text-muted-foreground">₹5.5L (23%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-sm text-foreground">Waste Management</span>
                  </div>
                  <span className="text-sm text-muted-foreground">₹2.8L (12%)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Available NGO Partnerships */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Partnership Opportunities</h2>
              <p className="text-muted-foreground">Connect with verified NGOs for your next CSR initiative</p>
            </div>
            <Button 
              onClick={() => onNavigate('company')}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Browse All NGOs
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Green Earth Foundation',
                focus: 'Reforestation',
                projects: 24,
                impact: '45,000 trees',
                rating: 4.8,
                verified: true,
              },
              {
                name: 'Clean Rivers Initiative',
                focus: 'Water Conservation',
                projects: 18,
                impact: '150km cleaned',
                rating: 4.9,
                verified: true,
              },
              {
                name: 'Solar for All',
                focus: 'Renewable Energy',
                projects: 12,
                impact: '500 installations',
                rating: 4.7,
                verified: true,
              },
            ].map((ngo, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  {ngo.verified && (
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl mb-2 text-foreground">{ngo.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ngo.focus}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Projects</span>
                    <span className="text-foreground">{ngo.projects}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Impact</span>
                    <span className="text-green-600">{ngo.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="text-foreground">⭐ {ngo.rating}/5.0</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onNavigate('company')}
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  View Details
                </Button>
              </Card>
            ))}
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
              onClick={() => onNavigate('company')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Purchase Carbon Credits</h3>
              <p className="text-muted-foreground mb-4">
                Offset your company's carbon footprint by purchasing verified carbon credits from eco-friendly projects.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all">
                <span>Browse Credits</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('company')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Partner with NGOs</h3>
              <p className="text-muted-foreground mb-4">
                Connect with verified environmental NGOs for impactful CSR collaborations and initiatives.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                <span>Find Partners</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('company')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Track Impact Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Monitor your environmental contributions, generate reports, and showcase your sustainability achievements.
              </p>
              <div className="flex items-center text-purple-600 group-hover:gap-2 transition-all">
                <span>View Analytics</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-foreground">Recent CSR Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting your company's latest contributions to environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Corporate tree planting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">
                  <Sparkles className="w-3 h-3 mr-1" />
                  New Achievement
                </Badge>
                <h3 className="text-xl mb-2 text-foreground">
                  Carbon Neutral Certification Earned
                </h3>
                <p className="text-muted-foreground mb-4">
                  Successfully offset 500 tons of CO₂ through verified carbon credit purchases and green initiatives.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <Award className="w-4 h-4" />
                    <span>Certified</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Globe className="w-4 h-4" />
                    <span>500 tons offset</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Partnership celebration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-3">
                  <Users className="w-3 h-3 mr-1" />
                  Partnership
                </Badge>
                <h3 className="text-xl mb-2 text-foreground">
                  Strategic Partnership with 5 NGOs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Established long-term partnerships with leading environmental NGOs for sustainable impact initiatives.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-blue-600">
                    <Target className="w-4 h-4" />
                    <span>5 partners</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <DollarSign className="w-4 h-4" />
                    <span>₹12L invested</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Enhance Your CSR Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Access your complete dashboard to manage carbon credits, partnerships, and track your sustainability metrics.
          </p>
          <Button 
            onClick={() => onNavigate('company')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Go to Company Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
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
            Empowering businesses to lead in corporate environmental responsibility
          </p>
        </div>
      </footer>
    </div>
  );
}
