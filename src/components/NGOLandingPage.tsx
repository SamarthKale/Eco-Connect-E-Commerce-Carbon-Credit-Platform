import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Heart, Users, TrendingUp, Target, Award, ArrowRight, TreePine, DollarSign, Calendar, ChevronRight, BarChart3, Globe, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NGOLandingPageProps {
  onNavigate: (page: string) => void;
  userType: 'company' | 'ngo' | 'customer';
  isAuthenticated: boolean;
}

export function NGOLandingPage({ onNavigate, userType, isAuthenticated }: NGOLandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
                    onClick={() => onNavigate('ngo')}
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
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              Welcome to Your NGO Portal
            </Badge>
            <h1 className="text-5xl mb-6 text-foreground">
              Amplify Your Environmental Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage your green initiatives, connect with companies for funding, and track the real-world impact of your environmental projects.
            </p>
          </div>

          {/* Stats Dashboard Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <TreePine className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">12,847</div>
              <div className="text-sm opacity-90">Trees Planted</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">₹8.4L</div>
              <div className="text-sm opacity-90">Donations Received</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">342</div>
              <div className="text-sm opacity-90">Active Volunteers</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8" />
                <TrendingUp className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-3xl mb-1">28</div>
              <div className="text-sm opacity-90">Active Projects</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Campaigns Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2 text-foreground">Active Campaigns</h2>
              <p className="text-muted-foreground">Your ongoing environmental initiatives and fundraising campaigns</p>
            </div>
            <Button 
              onClick={() => onNavigate('ngo')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Monsoon Tree Planting 2025',
                target: '₹5,00,000',
                raised: '₹3,42,000',
                progress: 68,
                volunteers: 156,
                impact: '2,500 trees',
                status: 'Active',
              },
              {
                title: 'River Cleanup Drive',
                target: '₹2,00,000',
                raised: '₹1,85,000',
                progress: 93,
                volunteers: 89,
                impact: '50km cleaned',
                status: 'Active',
              },
              {
                title: 'Solar Panel Installation',
                target: '₹10,00,000',
                raised: '₹4,20,000',
                progress: 42,
                volunteers: 45,
                impact: '50 panels',
                status: 'Active',
              },
            ].map((campaign, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    {campaign.status}
                  </Badge>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                
                <h3 className="text-xl mb-3 text-foreground">{campaign.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Raised</span>
                    <span className="text-green-600">{campaign.raised}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Target</span>
                    <span className="text-foreground">{campaign.target}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Volunteers</div>
                    <div className="flex items-center gap-1 text-foreground">
                      <Users className="w-4 h-4" />
                      <span>{campaign.volunteers}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Impact</div>
                    <div className="flex items-center gap-1 text-foreground">
                      <Target className="w-4 h-4" />
                      <span>{campaign.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center text-foreground">What Would You Like to Do?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('ngo')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Manage Projects</h3>
              <p className="text-muted-foreground mb-4">
                Create and track your environmental projects, update progress, and showcase impact.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all">
                <span>Go to Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('ngo')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">View Donations</h3>
              <p className="text-muted-foreground mb-4">
                Track donations received from companies and individuals, manage fund utilization.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>

            <Card 
              className="p-8 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('ngo')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Manage Volunteers</h3>
              <p className="text-muted-foreground mb-4">
                Coordinate volunteer events, track participation, and engage your community.
              </p>
              <div className="flex items-center text-purple-600 group-hover:gap-2 transition-all">
                <span>Manage Team</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-foreground">Recent Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating the positive impact your organization has made on the environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Tree planting event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">
                  Completed
                </Badge>
                <h3 className="text-xl mb-2 text-foreground">
                  10,000 Trees Planted in Rural Areas
                </h3>
                <p className="text-muted-foreground mb-4">
                  With the support of 5 corporate partners and 200+ volunteers, we successfully completed our biggest tree plantation drive.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <TreePine className="w-4 h-4" />
                    <span>10,000 trees</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Globe className="w-4 h-4" />
                    <span>50 tons CO₂/year</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="River cleanup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-3">
                  Completed
                </Badge>
                <h3 className="text-xl mb-2 text-foreground">
                  Clean River Initiative - Phase 2
                </h3>
                <p className="text-muted-foreground mb-4">
                  Successfully cleaned 75km of riverbanks, removing over 2 tons of plastic waste and restoring natural habitats.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-blue-600">
                    <BarChart3 className="w-4 h-4" />
                    <span>2 tons waste</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Award className="w-4 h-4" />
                    <span>State Award</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Make a Bigger Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Access your complete dashboard to manage projects, track donations, and coordinate with your team.
          </p>
          <Button 
            onClick={() => onNavigate('ngo')}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100"
          >
            Go to NGO Dashboard
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
            Empowering NGOs to create lasting environmental change
          </p>
        </div>
      </footer>
    </div>
  );
}
