import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { Leaf, Building2, Users, User, Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface RegisterPageProps {
  onRegister: (userType: 'company' | 'ngo' | 'customer') => void;
}

type UserType = 'company' | 'ngo' | 'customer';

export function RegisterPage({ onRegister }: RegisterPageProps) {
  const [selectedUserType, setSelectedUserType] = useState<UserType>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 15;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    return Math.min(strength, 100);
  };

  const passwordStrength = calculatePasswordStrength(registerPassword);
  
  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 70) return 'Medium';
    return 'Strong';
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!loginEmail.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    toast.success('Welcome back!');
    setTimeout(() => {
      onRegister(selectedUserType);
    }, 500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerName || !registerEmail || !registerPassword || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!registerEmail.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    if (registerPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (passwordStrength < 40) {
      toast.error('Please use a stronger password');
      return;
    }

    if (!agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    toast.success('Account created successfully!');
    setTimeout(() => {
      onRegister(selectedUserType);
    }, 500);
  };

  const userTypes = [
    {
      type: 'customer' as UserType,
      icon: User,
      title: 'Individual',
      description: 'Shop eco-friendly products',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      type: 'company' as UserType,
      icon: Building2,
      title: 'Company',
      description: 'Buy carbon credits',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      type: 'ngo' as UserType,
      icon: Users,
      title: 'NGO / NSS',
      description: 'Sell carbon credits',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">EcoConnect</h1>
                <p className="text-muted-foreground">Carbon Credits Marketplace</p>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1598813960856-a83fa955c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2MDk0Mzg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nature sustainability"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Offset Your Carbon Footprint 🌍
                </h2>
                <p className="text-white/90">
                  Join thousands making a real environmental impact through carbon credits and sustainable shopping.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '50K+', label: 'Trees Planted' },
                { value: '2K+', label: 'Active Users' },
                { value: '100+', label: 'NGO Partners' },
              ].map((stat, index) => (
                <Card key={index} className="p-4 text-center border-green-200 bg-white/80 backdrop-blur">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <Card className="p-8 shadow-2xl border-green-100 bg-white/95 backdrop-blur">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">EcoConnect</h1>
              <p className="text-sm text-muted-foreground">Carbon Credits Platform</p>
            </div>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <Label className="mb-3 block">I am a</Label>
            <div className="grid grid-cols-3 gap-3">
              {userTypes.map((userType) => {
                const Icon = userType.icon;
                const isSelected = selectedUserType === userType.type;
                return (
                  <button
                    key={userType.type}
                    onClick={() => setSelectedUserType(userType.type)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? `${userType.borderColor} ${userType.bgColor} shadow-md scale-105`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${userType.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-medium text-center">{userType.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="login-email">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="h-11 transition-all focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="h-11 pr-10 transition-all focus:ring-2 focus:ring-green-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox id="remember" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <button type="button" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all"
                >
                  Login
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="register-name">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name / Organization
                  </Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder={selectedUserType === 'company' ? 'Company Name' : selectedUserType === 'ngo' ? 'NGO Name' : 'Your Name'}
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    className="h-11 transition-all focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="h-11 transition-all focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="h-11 pr-10 transition-all focus:ring-2 focus:ring-green-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {registerPassword && (
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Password strength</span>
                        <span className={`font-medium ${
                          passwordStrength < 40 ? 'text-red-600' : 
                          passwordStrength < 70 ? 'text-yellow-600' : 
                          'text-green-600'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <Progress value={passwordStrength} className={`h-1.5 ${getPasswordStrengthColor()}`} />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-11 pr-10 transition-all focus:ring-2 focus:ring-green-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <div className="flex items-center gap-2 text-xs mt-1">
                      {registerPassword === confirmPassword ? (
                        <span className="text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Passwords match
                        </span>
                      ) : (
                        <span className="text-red-600">Passwords do not match</span>
                      )}
                    </div>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <Checkbox 
                    id="terms" 
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    I agree to the{' '}
                    <button type="button" className="text-green-600 hover:text-green-700 font-medium">
                      Terms & Conditions
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-green-600 hover:text-green-700 font-medium">
                      Privacy Policy
                    </button>
                  </span>
                </label>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>Eco-Certified</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
