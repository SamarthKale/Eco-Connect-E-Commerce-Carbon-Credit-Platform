import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArrowLeft, Building2, Award, TrendingDown, MapPin, TreePine, FileCheck } from 'lucide-react';
import type { PaymentData } from '../App';

interface CompanyDashboardProps {
  onNavigate: (page: string) => void;
  onInitiatePayment: (data: PaymentData) => void;
}

const mockNGOProjects = [
  {
    id: '1',
    ngoName: 'Green Earth Foundation',
    location: 'Mumbai, Maharashtra',
    treesPlanted: 5000,
    creditsAvailable: 50,
    pricePerCredit: 500,
    verified: true,
  },
  {
    id: '2',
    ngoName: 'EcoWarriors NSS',
    location: 'Bangalore, Karnataka',
    treesPlanted: 3200,
    creditsAvailable: 32,
    pricePerCredit: 480,
    verified: true,
  },
  {
    id: '3',
    ngoName: 'Save Nature NGO',
    location: 'Delhi NCR',
    treesPlanted: 7500,
    creditsAvailable: 75,
    pricePerCredit: 520,
    verified: true,
  },
  {
    id: '4',
    ngoName: 'Youth for Environment',
    location: 'Pune, Maharashtra',
    treesPlanted: 2100,
    creditsAvailable: 21,
    pricePerCredit: 450,
    verified: true,
  },
];

export function CompanyDashboard({ onNavigate, onInitiatePayment }: CompanyDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const currentEmissions = 25; // tons CO2
  const creditsOwned = 10;
  const creditsNeeded = 15;
  const offsetPercentage = (creditsOwned / currentEmissions) * 100;

  const filteredProjects = mockNGOProjects.filter(project => 
    project.ngoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyCredits = (project: typeof mockNGOProjects[0], amount: number) => {
    const paymentData: PaymentData = {
      type: 'credits',
      items: [{
        id: project.id,
        name: `${amount} Carbon Credits`,
        price: project.pricePerCredit * amount,
        image: '',
        quantity: 1,
      }],
      total: project.pricePerCredit * amount,
      ngoName: project.ngoName,
      creditsAmount: amount,
    };
    onInitiatePayment(paymentData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('landing')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button 
              variant="ghost"
              onClick={() => onNavigate('company-landing')}
            >
              Home
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold">Company Dashboard</h1>
              <p className="text-muted-foreground">Welcome, TechCorp Industries</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Emissions</p>
                <h3 className="text-3xl font-bold text-red-600">{currentEmissions} Tons</h3>
              </div>
              <TrendingDown className="w-10 h-10 text-red-400" />
            </div>
            <p className="text-sm text-muted-foreground">CO₂ this month</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Credits Owned</p>
                <h3 className="text-3xl font-bold text-green-600">{creditsOwned}</h3>
              </div>
              <Award className="w-10 h-10 text-green-400" />
            </div>
            <p className="text-sm text-muted-foreground">Carbon credits</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Credits Needed</p>
                <h3 className="text-3xl font-bold text-blue-600">{creditsNeeded}</h3>
              </div>
              <TreePine className="w-10 h-10 text-blue-400" />
            </div>
            <p className="text-sm text-muted-foreground">To reach net-zero</p>
          </Card>
        </div>

        {/* Carbon Offset Progress */}
        <Card className="p-6 mb-8">
          <h3 className="font-semibold mb-4">Carbon Offset Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Offset</span>
              <span className="font-semibold">{offsetPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={offsetPercentage} className="h-3" />
            <p className="text-sm text-muted-foreground">
              You need {creditsNeeded} more credits to offset all your emissions this month.
            </p>
          </div>
        </Card>

        {/* Available Projects */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Available NGO Projects</h2>
            <Input
              placeholder="Search by NGO or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
          </div>

          <div className="grid gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{project.ngoName}</h3>
                      {project.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <FileCheck className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Trees Planted:</span>
                        <span className="font-semibold ml-2">{project.treesPlanted.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Credits Available:</span>
                        <span className="font-semibold ml-2 text-green-600">{project.creditsAvailable}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price per credit</p>
                      <p className="text-2xl font-bold text-green-600">₹{project.pricePerCredit}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleBuyCredits(project, 5)}
                      >
                        Buy 5 Credits
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleBuyCredits(project, 10)}
                      >
                        Buy 10 Credits
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificate Info */}
        <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Carbon Offset Certificate</h3>
              <p className="text-sm text-muted-foreground mb-3">
                After purchasing carbon credits, you'll receive a verified certificate that you can use for ESG reporting and sustainability disclosures.
              </p>
              <Button variant="outline" size="sm">
                View Sample Certificate
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
