import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ArrowLeft, TreePine, Upload, CheckCircle, Clock, DollarSign, Award } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface NGODashboardProps {
  onNavigate: (page: string) => void;
}

interface Project {
  id: string;
  name: string;
  treesPlanted: number;
  location: string;
  creditsGenerated: number;
  creditsSold: number;
  status: 'approved' | 'pending' | 'available';
  dateSubmitted: string;
  revenue: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Mumbai Reforestation 2024',
    treesPlanted: 5000,
    location: 'Mumbai, Maharashtra',
    creditsGenerated: 50,
    creditsSold: 35,
    status: 'available',
    dateSubmitted: '2024-09-15',
    revenue: 17500,
  },
  {
    id: '2',
    name: 'School Campus Greening',
    treesPlanted: 1200,
    location: 'Mumbai, Maharashtra',
    creditsGenerated: 12,
    creditsSold: 12,
    status: 'approved',
    dateSubmitted: '2024-08-10',
    revenue: 6000,
  },
  {
    id: '3',
    name: 'Coastal Tree Belt Initiative',
    treesPlanted: 3500,
    location: 'Konkan Region',
    creditsGenerated: 35,
    creditsSold: 0,
    status: 'pending',
    dateSubmitted: '2024-10-01',
    revenue: 0,
  },
];

export function NGODashboard({ onNavigate }: NGODashboardProps) {
  const [projectName, setProjectName] = useState('');
  const [treesPlanted, setTreesPlanted] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const totalCreditsGenerated = mockProjects.reduce((sum, p) => sum + p.creditsGenerated, 0);
  const totalCreditsSold = mockProjects.reduce((sum, p) => sum + p.creditsSold, 0);
  const totalRevenue = mockProjects.reduce((sum, p) => sum + p.revenue, 0);
  const totalTrees = mockProjects.reduce((sum, p) => sum + p.treesPlanted, 0);

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectName || !treesPlanted || !location) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Project submitted successfully! Awaiting verification.');
    
    // Reset form
    setProjectName('');
    setTreesPlanted('');
    setLocation('');
    setDescription('');
    setShowForm(false);
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-700">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700">Pending Review</Badge>;
      case 'available':
        return <Badge className="bg-blue-100 text-blue-700">Credits Available</Badge>;
    }
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
              onClick={() => onNavigate('ngo-landing')}
            >
              Home
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TreePine className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold">NGO Dashboard</h1>
                <p className="text-muted-foreground">Hello, Green Warriors 🌱</p>
              </div>
            </div>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => setShowForm(!showForm)}
            >
              <Upload className="w-4 h-4 mr-2" />
              {showForm ? 'Cancel' : 'New Project'}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-start justify-between mb-2">
              <TreePine className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-1">{totalTrees.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Total Trees Planted</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-start justify-between mb-2">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-1">{totalCreditsGenerated}</h3>
            <p className="text-sm text-muted-foreground">Credits Generated</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="flex items-start justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-1">{totalCreditsSold}</h3>
            <p className="text-sm text-muted-foreground">Credits Sold</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <div className="flex items-start justify-between mb-2">
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-1">₹{totalRevenue.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
          </Card>
        </div>

        {/* Project Submission Form */}
        {showForm && (
          <Card className="p-6 mb-8 border-green-200">
            <h3 className="font-semibold text-lg mb-6">Submit New Green Project</h3>
            <form onSubmit={handleSubmitProject} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    placeholder="e.g., Mumbai Reforestation 2025"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="treesPlanted">Number of Trees Planted *</Label>
                  <Input
                    id="treesPlanted"
                    type="number"
                    placeholder="e.g., 5000"
                    value={treesPlanted}
                    onChange={(e) => setTreesPlanted(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Mumbai, Maharashtra"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your green initiative..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proof">Upload Proof (Photos/Documents)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit for Verification
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Projects Table */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-6">Your Projects</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Trees Planted</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>{project.treesPlanted.toLocaleString()}</TableCell>
                    <TableCell>{project.creditsGenerated}</TableCell>
                    <TableCell>{project.creditsSold}</TableCell>
                    <TableCell>₹{project.revenue.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell>{new Date(project.dateSubmitted).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 p-6 bg-green-50 border-green-200">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">How Credits are Generated</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For every 100 trees planted and verified, your NGO earns 1 carbon credit. Credits are automatically generated once your project is approved by our verification team. You can track sales and revenue in real-time.
              </p>
              <div className="flex gap-2 text-sm">
                <Badge variant="outline" className="bg-white">100 trees = 1 credit</Badge>
                <Badge variant="outline" className="bg-white">Average ₹500/credit</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
