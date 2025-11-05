import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Leaf, 
  ShoppingBag, 
  TreePine, 
  Award, 
  ArrowLeft, 
  UserCircle, 
  Package,
  TrendingUp,
  Heart,
  Target
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CustomerDashboardProps {
  onNavigate: (page: string) => void;
}

export function CustomerDashboard({ onNavigate }: CustomerDashboardProps) {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data for customer
  const customerData = {
    name: 'John Doe',
    email: 'john@example.com',
    totalOrders: 12,
    totalSpent: 8950,
    co2Saved: 15.8,
    treesSponsored: 8,
    impactLevel: 'Eco Warrior',
    impactProgress: 65,
  };

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '2025-11-03',
      items: 3,
      total: 1197,
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwcm9kdWN0cyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MDk0MzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'ORD-002',
      date: '2025-10-28',
      items: 2,
      total: 998,
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2MDg1OTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const sponsoredTrees = [
    {
      id: 'T-001',
      location: 'Maharashtra',
      date: '2025-10-15',
      ngo: 'Green Earth Foundation',
      status: 'Growing',
    },
    {
      id: 'T-002',
      location: 'Karnataka',
      date: '2025-09-20',
      ngo: 'Tree Warriors NSS',
      status: 'Growing',
    },
  ];

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
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
                <Leaf className="w-6 h-6 text-green-600" />
                <span className="font-semibold">EcoConnect</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost"
                onClick={() => onNavigate('customer-landing')}
              >
                Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate('shop')}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onNavigate('profile')}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {customerData.name}! 👋</h1>
          <p className="text-muted-foreground">Track your eco-impact and continue your sustainability journey</p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-600 text-white">{customerData.impactLevel}</Badge>
            </div>
            <div className="text-2xl font-bold text-green-700">{customerData.co2Saved} kg</div>
            <div className="text-sm text-muted-foreground">CO₂ Saved</div>
            <Progress value={customerData.impactProgress} className="mt-3 bg-green-200" />
          </Card>

          <Card className="p-6">
            <TreePine className="w-8 h-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold">{customerData.treesSponsored}</div>
            <div className="text-sm text-muted-foreground">Trees Sponsored</div>
          </Card>

          <Card className="p-6">
            <Package className="w-8 h-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">{customerData.totalOrders}</div>
            <div className="text-sm text-muted-foreground">Total Orders</div>
          </Card>

          <Card className="p-6">
            <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold">₹{customerData.totalSpent.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Spent</div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="trees">Sponsored Trees</TabsTrigger>
            <TabsTrigger value="impact">Impact Report</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Orders</h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedTab('orders')}
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={order.image}
                          alt="Order"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{order.id}</div>
                        <div className="text-sm text-muted-foreground">{order.items} items • ₹{order.total}</div>
                        <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => onNavigate('shop')}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => onNavigate('shop')}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Browse Eco Products
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setSelectedTab('trees')}
                  >
                    <TreePine className="w-4 h-4 mr-2" />
                    Sponsor a Tree
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setSelectedTab('impact')}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Impact Report
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => onNavigate('profile')}
                  >
                    <UserCircle className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                {/* Impact Goal */}
                <Card className="p-4 mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">Next Impact Goal</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        20 kg CO₂ saved to reach <span className="font-semibold text-green-700">Eco Champion</span> level
                      </p>
                      <Progress value={79} className="h-2 bg-green-200" />
                      <p className="text-xs text-green-700 mt-1 font-medium">79% complete</p>
                    </div>
                  </div>
                </Card>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">All Orders</h3>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded overflow-hidden">
                        <ImageWithFallback
                          src={order.image}
                          alt="Order"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{order.id}</div>
                        <div className="text-sm text-muted-foreground">Ordered on {order.date}</div>
                        <div className="text-sm text-muted-foreground">{order.items} items • ₹{order.total}</div>
                        <Badge className="mt-1 bg-green-100 text-green-700 border-green-200">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => onNavigate('order-status')}>
                      Track Order
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Trees Tab */}
          <TabsContent value="trees">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Your Sponsored Trees</h3>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <TreePine className="w-4 h-4 mr-2" />
                  Sponsor More Trees
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {sponsoredTrees.map((tree) => (
                  <Card key={tree.id} className="p-4 border-green-200 bg-green-50/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TreePine className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">{tree.id}</span>
                      </div>
                      <Badge className="bg-green-600 text-white">{tree.status}</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{tree.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Planted by:</span>
                        <span className="font-medium">{tree.ngo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{tree.date}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact">
            <Card className="p-6">
              <h3 className="font-semibold mb-6">Your Environmental Impact</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">{customerData.co2Saved} kg</div>
                  <div className="text-sm text-muted-foreground">Total CO₂ Saved</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Equivalent to driving 40 km less in a car
                  </p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TreePine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-700">{customerData.treesSponsored}</div>
                  <div className="text-sm text-muted-foreground">Trees Sponsored</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    These trees will absorb ~200 kg CO₂ annually
                  </p>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-700">{customerData.totalOrders}</div>
                  <div className="text-sm text-muted-foreground">Eco Purchases</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supporting sustainable businesses
                  </p>
                </div>
              </div>

              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Eco Warrior Status</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      You're in the top 30% of eco-conscious customers! Keep up the great work.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">
                      Share Your Impact
                    </Button>
                  </div>
                </div>
              </Card>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
