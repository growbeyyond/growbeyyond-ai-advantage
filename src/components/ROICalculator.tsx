import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calculator, Sparkles, Target, BarChart3, Zap } from 'lucide-react';

interface ROICalculatorProps {
  onOpenAuditPopup?: () => void;
}

const ROICalculator = ({ onOpenAuditPopup }: ROICalculatorProps) => {
  const [monthlySpend, setMonthlySpend] = useState([10000]);
  const [industry, setIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [currentROI, setCurrentROI] = useState([200]);
  
  // Calculated values
  const [projectedROI, setProjectedROI] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlyGain, setYearlyGain] = useState(0);
  const [efficiencyGain, setEfficiencyGain] = useState(0);

  // Industry multipliers for ROI calculation
  const industryMultipliers: Record<string, number> = {
    'ecommerce': 2.5,
    'saas': 3.2,
    'healthcare': 2.1,
    'finance': 2.8,
    'education': 2.3,
    'retail': 2.4,
    'real-estate': 2.7,
    'consulting': 3.0
  };

  // Business size multipliers
  const sizeMultipliers: Record<string, number> = {
    'startup': 1.8,
    'small': 2.2,
    'medium': 2.5,
    'large': 2.8,
    'enterprise': 3.0
  };

  useEffect(() => {
    if (industry && businessSize) {
      const baseROI = currentROI[0];
      const industryMult = industryMultipliers[industry] || 2.0;
      const sizeMult = sizeMultipliers[businessSize] || 2.0;
      
      // Calculate projected ROI improvement
      const improvement = (industryMult + sizeMult) / 2;
      const newROI = baseROI * improvement;
      
      setProjectedROI(newROI);
      
      // Calculate monthly savings (20-40% cost reduction)
      const costReduction = 0.3 * monthlySpend[0];
      setMonthlySavings(costReduction);
      
      // Calculate yearly gain
      const monthlyGain = (newROI - baseROI) * monthlySpend[0] / 100;
      setYearlyGain(monthlyGain * 12);
      
      // Calculate efficiency gain (60-80% time savings)
      setEfficiencyGain(65 + (improvement - 2) * 10);
    }
  }, [monthlySpend, industry, businessSize, currentROI]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${Math.round(value)}%`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Calculator className="w-4 h-4 mr-2" />
            AI ROI Calculator
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Calculate Your{' '}
            <span className="gradient-text">AI Marketing ROI</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how much AI can boost your marketing performance and reduce costs. 
            Get instant projections based on your current setup.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <Card className="p-8 glass-card border-primary/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Your Current Setup
                </h3>
              </div>

              {/* Monthly Marketing Spend */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">
                  Monthly Marketing Spend
                </label>
                <div className="space-y-3">
                  <Slider
                    value={monthlySpend}
                    onValueChange={setMonthlySpend}
                    max={500000}
                    min={5000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹5K</span>
                    <span className="font-semibold text-primary text-lg">
                      {formatCurrency(monthlySpend[0])}
                    </span>
                    <span>₹5L+</span>
                  </div>
                </div>
              </div>

              {/* Industry Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">
                  Industry
                </label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS & Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance & Banking</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business Size */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">
                  Business Size
                </label>
                <Select value={businessSize} onValueChange={setBusinessSize}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select business size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                    <SelectItem value="small">Small (11-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                    <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Current ROI */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">
                  Current Marketing ROI (%)
                </label>
                <div className="space-y-3">
                  <Slider
                    value={currentROI}
                    onValueChange={setCurrentROI}
                    max={500}
                    min={50}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>50%</span>
                    <span className="font-semibold text-primary text-lg">
                      {formatPercentage(currentROI[0])}
                    </span>
                    <span>500%+</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-8 glass-card border-primary/20 shadow-premium">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3 text-primary" />
                  Your AI Marketing Potential
                </h3>
                <p className="text-muted-foreground">
                  Projected improvements with AI implementation
                </p>
              </div>

              {industry && businessSize ? (
                <div className="grid grid-cols-2 gap-6">
                  {/* Projected ROI */}
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      {formatPercentage(projectedROI)}
                    </div>
                    <div className="text-sm text-muted-foreground">Projected ROI</div>
                    <div className="text-xs text-green-400 mt-1">
                      +{formatPercentage(projectedROI - currentROI[0])} increase
                    </div>
                  </div>

                  {/* Monthly Savings */}
                  <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-accent mb-1">
                      {formatCurrency(monthlySavings)}
                    </div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                    <div className="text-xs text-green-400 mt-1">
                      30% cost reduction
                    </div>
                  </div>

                  {/* Yearly Gain */}
                  <div className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {formatCurrency(yearlyGain)}
                    </div>
                    <div className="text-sm text-muted-foreground">Yearly Gain</div>
                    <div className="text-xs text-green-400 mt-1">
                      Additional revenue
                    </div>
                  </div>

                  {/* Efficiency Gain */}
                  <div className="text-center p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {formatPercentage(efficiencyGain)}
                    </div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                    <div className="text-xs text-green-400 mt-1">
                      Process automation
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Please fill in your details above to see your ROI projections
                  </p>
                </div>
              )}
            </Card>

            {/* CTA Section */}
            {industry && businessSize && (
              <Card className="p-8 text-center glass-card border-primary/20">
                <h4 className="text-xl font-semibold mb-4">
                  Ready to Unlock This Potential?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Get a personalized AI strategy session worth ₹25,000 - completely free!
                </p>
                <Button 
                  onClick={onOpenAuditPopup}
                  size="lg" 
                  className="shadow-premium hover:shadow-intense transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Your Free AI Audit
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  No commitment required • Custom strategy included
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h5 className="font-semibold">Proven Results</h5>
            <p className="text-sm text-muted-foreground">
              Based on 500+ successful AI implementations
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-accent/10 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h5 className="font-semibold">Instant Analysis</h5>
            <p className="text-sm text-muted-foreground">
              Real-time calculations based on your industry
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <h5 className="font-semibold">Custom Strategy</h5>
            <p className="text-sm text-muted-foreground">
              Tailored recommendations for your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;