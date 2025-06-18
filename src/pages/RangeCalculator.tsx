
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calculator, Battery, Zap, Car, Bike } from "lucide-react";

const RangeCalculator = () => {
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [batterySize, setBatterySize] = useState('');
  const [usageStyle, setUsageStyle] = useState<'slow' | 'moderate' | 'fast'>('moderate');
  const [estimatedRange, setEstimatedRange] = useState<number | null>(null);

  const calculateRange = () => {
    const battery = parseFloat(batterySize);
    if (isNaN(battery) || battery <= 0) return;

    let efficiency = vehicleType === 'car' ? 4.5 : 25; // km/kWh base efficiency
    
    // Adjust efficiency based on usage style
    switch (usageStyle) {
      case 'slow':
        efficiency *= 1.15; // +15% for slow city driving
        break;
      case 'fast':
        efficiency *= 0.75; // -25% for highway/fast driving
        break;
      default:
        break; // moderate remains unchanged
    }

    const range = Math.round(battery * efficiency);
    setEstimatedRange(range);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-500 p-4 rounded-2xl">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EV Range Calculator</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate estimated range based on battery capacity and driving style for Indian conditions
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Vehicle Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">Vehicle Type</Label>
                    <div className="flex gap-2">
                      <Button
                        variant={vehicleType === 'car' ? 'default' : 'outline'}
                        onClick={() => setVehicleType('car')}
                        className="flex-1"
                      >
                        <Car className="h-4 w-4 mr-2" />
                        Car
                      </Button>
                      <Button
                        variant={vehicleType === 'bike' ? 'default' : 'outline'}
                        onClick={() => setVehicleType('bike')}
                        className="flex-1"
                      >
                        <Bike className="h-4 w-4 mr-2" />
                        Bike
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="battery" className="text-sm font-medium text-gray-700 mb-2 block">
                      Battery Capacity (kWh)
                    </Label>
                    <Input
                      id="battery"
                      type="number"
                      placeholder="Enter battery size"
                      value={batterySize}
                      onChange={(e) => setBatterySize(e.target.value)}
                      min="0"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Usage Style</Label>
                    <Select value={usageStyle} onValueChange={(value: 'slow' | 'moderate' | 'fast') => setUsageStyle(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slow">Slow (City, 20-40 km/h)</SelectItem>
                        <SelectItem value="moderate">Moderate (Mixed city-highway)</SelectItem>
                        <SelectItem value="fast">Fast (Highway, 100+ km/h)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateRange} className="w-full" size="lg">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Range
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Battery className="h-5 w-5 mr-2" />
                    Estimated Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {estimatedRange !== null ? (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">
                        {estimatedRange} km
                      </div>
                      <p className="text-gray-600 mb-4">Estimated range under Indian conditions</p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Details:</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Vehicle: {vehicleType === 'car' ? 'Electric Car' : 'Electric Bike'}</p>
                          <p>Battery: {batterySize} kWh</p>
                          <p>Usage: {usageStyle.charAt(0).toUpperCase() + usageStyle.slice(1)}</p>
                          <p>Efficiency: ~{vehicleType === 'car' ? '4-5' : '20-30'} km/kWh</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Battery className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Enter vehicle details to calculate estimated range</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Battery Size and Usage Affect Range</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Electric vehicle range depends primarily on battery capacity (measured in kWh) and energy efficiency. 
                In Indian driving conditions, several factors significantly impact your EV's range performance.
              </p>
              <p>
                <strong>Battery Capacity:</strong> Larger batteries store more energy, directly increasing range. 
                A 30 kWh battery typically provides 2-3x the range of a 15 kWh battery, though charging time and cost also increase.
              </p>
              <p>
                <strong>Driving Style Impact:</strong> City driving with frequent stops can be more efficient due to regenerative braking, 
                while highway speeds above 80 km/h significantly reduce range. Indian traffic conditions often favor moderate, 
                consistent speeds for optimal efficiency.
              </p>
              <p>
                Climate also affects range - air conditioning in hot weather can reduce range by 15-20%, 
                while extreme heat or cold impacts battery performance. Plan for 10-15% less range in peak summer conditions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RangeCalculator;
