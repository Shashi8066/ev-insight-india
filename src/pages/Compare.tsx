
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { evVehicles } from "@/data/evData";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GitCompare, Car, Bike, Battery, Zap, Clock, IndianRupee } from "lucide-react";

const Compare = () => {
  const [vehicle1, setVehicle1] = useState('');
  const [vehicle2, setVehicle2] = useState('');

  const selectedVehicle1 = evVehicles.find(v => v.id === vehicle1);
  const selectedVehicle2 = evVehicles.find(v => v.id === vehicle2);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <GitCompare className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare EVs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Side-by-side comparison of electric vehicles to make informed decisions
            </p>
          </div>
        </section>

        {/* Vehicle Selection */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select First Vehicle</label>
                <Select value={vehicle1} onValueChange={setVehicle1}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {evVehicles.map(vehicle => (
                      <SelectItem key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.priceDisplay}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Second Vehicle</label>
                <Select value={vehicle2} onValueChange={setVehicle2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {evVehicles.map(vehicle => (
                      <SelectItem key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.priceDisplay}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        {selectedVehicle1 && selectedVehicle2 && (
          <section className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vehicle 1 Card */}
                <Card>
                  <CardHeader className="text-center bg-emerald-50">
                    <div className="flex justify-center mb-2">
                      {selectedVehicle1.type === 'car' ? 
                        <Car className="h-8 w-8 text-emerald-600" /> : 
                        <Bike className="h-8 w-8 text-emerald-600" />
                      }
                    </div>
                    <CardTitle className="text-xl">{selectedVehicle1.name}</CardTitle>
                    <p className="text-gray-600">{selectedVehicle1.brand}</p>
                    <Badge variant="secondary">{selectedVehicle1.type}</Badge>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          Price
                        </span>
                        <span className="font-semibold text-emerald-600">{selectedVehicle1.priceDisplay}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Battery className="h-4 w-4 mr-2" />
                          Battery Capacity
                        </span>
                        <span className="font-medium">{selectedVehicle1.batteryCapacity} kWh</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Range (claimed)
                        </span>
                        <span className="font-medium">{selectedVehicle1.range} km</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Motor Power</span>
                        <span className="font-medium">{selectedVehicle1.motorPower} kW</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Charging Time
                        </span>
                        <span className="font-medium">{selectedVehicle1.chargingTime} hrs</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Fast Charging</span>
                        <Badge variant={selectedVehicle1.fastCharging ? 'default' : 'outline'}>
                          {selectedVehicle1.fastCharging ? 'Yes' : 'No'}
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Warranty</span>
                        <span className="font-medium">{selectedVehicle1.warranty} years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vehicle 2 Card */}
                <Card>
                  <CardHeader className="text-center bg-blue-50">
                    <div className="flex justify-center mb-2">
                      {selectedVehicle2.type === 'car' ? 
                        <Car className="h-8 w-8 text-blue-600" /> : 
                        <Bike className="h-8 w-8 text-blue-600" />
                      }
                    </div>
                    <CardTitle className="text-xl">{selectedVehicle2.name}</CardTitle>
                    <p className="text-gray-600">{selectedVehicle2.brand}</p>
                    <Badge variant="secondary">{selectedVehicle2.type}</Badge>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          Price
                        </span>
                        <span className="font-semibold text-emerald-600">{selectedVehicle2.priceDisplay}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Battery className="h-4 w-4 mr-2" />
                          Battery Capacity
                        </span>
                        <span className="font-medium">{selectedVehicle2.batteryCapacity} kWh</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Range (claimed)
                        </span>
                        <span className="font-medium">{selectedVehicle2.range} km</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Motor Power</span>
                        <span className="font-medium">{selectedVehicle2.motorPower} kW</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Charging Time
                        </span>
                        <span className="font-medium">{selectedVehicle2.chargingTime} hrs</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Fast Charging</span>
                        <Badge variant={selectedVehicle2.fastCharging ? 'default' : 'outline'}>
                          {selectedVehicle2.fastCharging ? 'Yes' : 'No'}
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Warranty</span>
                        <span className="font-medium">{selectedVehicle2.warranty} years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Educational Content */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Compare Electric Vehicles Effectively</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                When comparing electric vehicles, focus on metrics that matter most for your usage. Battery capacity determines 
                energy storage and directly affects range, but remember that real-world range varies based on driving conditions, 
                weather, and usage patterns.
              </p>
              <p>
                Price comparison should include total cost of ownership - factor in charging costs, maintenance, and potential 
                government subsidies. Motor power affects acceleration and performance, especially important for highway driving 
                or hilly terrain common in many Indian cities.
              </p>
              <p>
                For urban commuters, prioritize range efficiency and charging convenience. For long-distance travel, fast charging 
                capability and higher battery capacity become crucial. Consider the manufacturer's service network and warranty 
                coverage in your region before making the final decision.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Compare;
