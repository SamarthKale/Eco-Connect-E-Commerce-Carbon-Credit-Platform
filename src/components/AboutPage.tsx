import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, ArrowLeft, Target, Eye, Heart, Users, Award, Lightbulb, TrendingUp, Globe2, Shield, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
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
                className="text-green-600 font-medium"
              >
                About Us
              </button>
            </div>
            <Button 
              variant="ghost"
              onClick={() => onNavigate('landing')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-200 text-base px-4 py-1">
              About EcoConnect
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Building a Sustainable Future{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to make carbon offsetting accessible, transparent, and impactful for everyone. 
              From corporations to individuals, we're creating a marketplace where environmental action meets real change.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To democratize carbon credit trading and empower every individual, organization, and business to actively participate in climate action through transparent, verified, and accessible solutions.',
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description: 'A world where carbon neutrality is not just a goal but a reality, achieved through collective action, innovative technology, and unwavering commitment to our planet.',
                color: 'from-green-500 to-emerald-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'Transparency, integrity, and impact drive everything we do. We believe in verified projects, honest reporting, and creating real environmental change that future generations will thank us for.',
                color: 'from-purple-500 to-pink-600',
                bgColor: 'bg-purple-50'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all border-2 hover:border-green-200">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
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

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjA5MjQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                How We Started
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  EcoConnect was born from a simple observation: carbon credit trading was complex, opaque, 
                  and inaccessible to most people who wanted to make a difference.
                </p>
                <p>
                  In 2023, a group of environmental engineers, tech entrepreneurs, and climate activists came 
                  together with a shared vision — to create a platform that would make carbon offsetting as 
                  easy as online shopping.
                </p>
                <p>
                  Today, we've grown into a thriving community of 2,000+ users, partnering with 100+ NGOs 
                  worldwide, and we've facilitated the planting of over 50,000 trees. But we're just getting started.
                </p>
                <p className="font-semibold text-green-600">
                  Every credit traded, every tree planted, and every sustainable purchase on our platform is a step 
                  towards the future we all deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another marketplace — we're a movement for transparent, verified, and impactful climate action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Verified Projects',
                description: 'Every project on our platform undergoes rigorous third-party verification to ensure authenticity and impact.'
              },
              {
                icon: Globe2,
                title: 'Global Impact',
                description: 'Work with NGOs and companies across 25+ countries, creating environmental impact where it matters most.'
              },
              {
                icon: TrendingUp,
                title: 'Real-Time Analytics',
                description: 'Track your carbon offset journey with detailed dashboards, impact reports, and transparent metrics.'
              },
              {
                icon: Zap,
                title: 'Instant Transactions',
                description: 'Buy and sell carbon credits instantly with our secure, blockchain-backed payment infrastructure.'
              },
              {
                icon: Award,
                title: 'ESG Compliance',
                description: 'Generate official certificates and reports that meet international ESG and sustainability standards.'
              },
              {
                icon: Users,
                title: 'Community First',
                description: 'Join a passionate community of 2,000+ changemakers working together for a sustainable future.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet the Changemakers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team of environmental experts, technologists, and passionate individuals united by one goal
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Priya Sharma', role: 'Founder & CEO', expertise: 'Environmental Science' },
              { name: 'Rahul Mehta', role: 'CTO', expertise: 'Blockchain & Tech' },
              { name: 'Anjali Verma', role: 'Head of Partnerships', expertise: 'NGO Relations' },
              { name: 'Vikram Singh', role: 'Carbon Credit Specialist', expertise: 'Sustainability' },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '50,000+', label: 'Trees Planted', icon: Leaf },
              { value: '2,000+', label: 'Active Users', icon: Users },
              { value: '100+', label: 'NGO Partners', icon: Award },
              { value: '12,500', label: 'Tons CO₂ Offset', icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-8 text-center border-2 hover:border-green-200 transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Be part of the change. Start your carbon offset journey today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl h-14 px-10"
              onClick={() => onNavigate('register')}
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-14 px-10"
              onClick={() => onNavigate('landing')}
            >
              Back to Home
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
                Making carbon offsetting accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">For Companies</div>
                <div className="hover:text-white cursor-pointer transition-colors">For NGOs</div>
                <div className="hover:text-white cursor-pointer transition-colors">Eco Marketplace</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('about')}>About Us</div>
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
