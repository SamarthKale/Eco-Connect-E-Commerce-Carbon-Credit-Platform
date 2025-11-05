import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, User, Mail, Building2, TreePine, Award, Leaf, ShoppingBag, TrendingUp, Trophy } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
  userType: 'company' | 'ngo' | 'customer';
}

const recentActivity = [
  {
    id: '1',
    type: 'purchase',
    description: 'Purchased Bamboo Toothbrush Set',
    amount: '₹299',
    co2Saved: '0.5kg',
    date: '2025-10-18',
  },
  {
    id: '2',
    type: 'credits',
    description: 'Bought 10 Carbon Credits from Green Earth Foundation',
    amount: '₹5,000',
    co2Saved: '10kg',
    date: '2025-10-15',
  },
  {
    id: '3',
    type: 'purchase',
    description: 'Purchased Reusable Water Bottle',
    amount: '₹599',
    co2Saved: '2.0kg',
    date: '2025-10-12',
  },
  {
    id: '4',
    type: 'purchase',
    description: 'Purchased Organic Cotton Tote',
    amount: '₹399',
    co2Saved: '1.5kg',
    date: '2025-10-08',
  },
];

const achievements = [
  {
    id: '1',
    name: 'First Purchase',
    description: 'Made your first eco-friendly purchase',
    icon: ShoppingBag,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    unlocked: true,
  },
  {
    id: '2',
    name: 'Tree Planter',
    description: 'Offset 10kg of CO₂',
    icon: TreePine,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    unlocked: true,
  },
  {
    id: '3',
    name: 'Eco Warrior',
    description: 'Made 10 sustainable purchases',
    icon: Award,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    unlocked: false,
  },
  {
    id: '4',
    name: 'Carbon Neutral',
    description: 'Offset 50kg of CO₂',
    icon: Trophy,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    unlocked: false,
  },
];

export function ProfilePage({ onNavigate, userType }: ProfilePageProps) {
  const totalCO2Saved = 14; // kg
  const totalSpent = 6297;
  const totalPurchases = 4;
  const nextMilestone = 50;
  const progressToMilestone = (totalCO2Saved / nextMilestone) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('landing')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost"
                onClick={() => onNavigate(
                  userType === 'company' ? 'company-landing' : 
                  userType === 'ngo' ? 'ngo-landing' : 
                  'customer-landing'
                )}
              >
                Home
              </Button>
              <Button 
                variant="ghost"
                onClick={() => onNavigate(userType)}
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {userType === 'company' ? 'TechCorp Industries' : 
                   userType === 'ngo' ? 'Green Warriors NSS' : 
                   'Eco Enthusiast'}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">
                    {userType === 'company' ? 'contact@techcorp.com' :
                     userType === 'ngo' ? 'info@greenwarriors.org' :
                     'user@example.com'}
                  </span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {userType === 'company' ? (
                    <><Building2 className="w-3 h-3 mr-1" /> Company</>
                  ) : userType === 'ngo' ? (
                    <><TreePine className="w-3 h-3 mr-1" /> NGO</>
                  ) : (
                    <><Leaf className="w-3 h-3 mr-1" /> Customer</>
                  )}
                </Badge>
              </div>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </Card>

        {/* Carbon Impact */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-900">Your Carbon Impact</h2>
              <p className="text-green-700">Making a difference, one step at a time</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Total CO₂ Offset</p>
              <h3 className="text-3xl font-bold text-green-600">{totalCO2Saved} kg</h3>
              <p className="text-xs text-muted-foreground mt-1">
                ≈ {Math.round(totalCO2Saved * 10)} trees planted
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Eco Purchases</p>
              <h3 className="text-3xl font-bold text-blue-600">{totalPurchases}</h3>
              <p className="text-xs text-muted-foreground mt-1">Sustainable products</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Green Investment</p>
              <h3 className="text-3xl font-bold text-purple-600">₹{totalSpent.toLocaleString()}</h3>
              <p className="text-xs text-muted-foreground mt-1">Supporting sustainability</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Progress to Carbon Neutral Badge</span>
              <span className="text-muted-foreground">{totalCO2Saved}kg / {nextMilestone}kg</span>
            </div>
            <Progress value={progressToMilestone} className="h-3 mb-2" />
            <p className="text-xs text-muted-foreground">
              {nextMilestone - totalCO2Saved}kg more to unlock Carbon Neutral achievement!
            </p>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-4">
            <h3 className="font-semibold text-lg">Recent Activity</h3>
            {recentActivity.map((activity) => (
              <Card 
                key={activity.id} 
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => activity.type === 'purchase' && onNavigate('order-status')}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'credits' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {activity.type === 'credits' ? (
                        <Award className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ShoppingBag className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{activity.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{new Date(activity.date).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Leaf className="w-3 h-3 mr-1" />
                          {activity.co2Saved} CO₂ saved
                        </Badge>
                        {activity.type === 'purchase' && (
                          <span className="text-xs text-blue-600 hover:underline">View Order</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold text-green-600">{activity.amount}</span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <h3 className="font-semibold text-lg">Achievements & Badges</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={achievement.id} 
                    className={`p-6 ${achievement.unlocked ? 'border-green-200' : 'opacity-60'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.bgColor}`}>
                        <Icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{achievement.name}</h4>
                          {achievement.unlocked && (
                            <Badge className="bg-green-600">Unlocked</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Leaderboard Card */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-yellow-900" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Your Rank: #47</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You're in the top 15% of eco-warriors this month! Keep up the great work to climb the leaderboard.
              </p>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">+5 positions this week</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
