import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { evVehicles, brands, priceRanges, rangeCategories, type EVVehicle } from "@/data/evData";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Battery, Zap, Clock, Car, Bike } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EVDirectory = () => {
  const [typeFilter, setTypeFilter] = useState<'all' | 'car' | 'bike'>('all');
  const [brandFilter, setBrandFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [rangeFilter, setRangeFilter] = useState('All');

  const filteredVehicles = evVehicles.filter((vehicle) => {
    const typeMatch = typeFilter === 'all' || vehicle.type === typeFilter;
    const brandMatch = brandFilter === 'All' || vehicle.brand === brandFilter;
    
    const priceRange = priceRanges.find(range => range.label === priceFilter);
    const priceMatch = !priceRange || priceRange.label === 'All' || 
      (vehicle.price >= priceRange.min && vehicle.price <= priceRange.max);
    
    const rangeCat = rangeCategories.find(cat => cat.label === rangeFilter);
    const rangeMatch = !rangeCat || rangeCat.label === 'All' || 
      (vehicle.range >= rangeCat.min && vehicle.range <= rangeCat.max);

    return typeMatch && brandMatch && priceMatch && rangeMatch;
  });

  return (
    <Layout>
      <Helmet>
        <title>EV Directory India - Electric Cars & Bikes Specifications | EVCarsBike</title>
        <meta name="description" content="Browse complete directory of electric cars and bikes in India. Compare specifications, prices, range, and features of all EVs available in the Indian market." />
        <meta name="keywords" content="EV directory India, electric car specifications, electric bike specs, EV database India, electric vehicle list, Indian EV market, electric car models, electric bike models" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/ev-directory" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EV Directory India - Electric Cars & Bikes Specifications | EVCarsBike" />
        <meta property="og:description" content="Browse complete directory of electric cars and bikes in India. Compare specifications, prices, range, and features of all EVs available in the Indian market." />
        <meta property="og:url" content="https://evcarsbike.com/ev-directory" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Directory India - Electric Cars & Bikes Specifications | EVCarsBike" />
        <meta name="twitter:description" content="Browse complete directory of electric cars and bikes in India. Compare specifications, prices, range, and features of all EVs available in the Indian market." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EV Directory</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore electric cars and bikes available in India with detailed specifications and smart filters
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                <div className="flex gap-2">
                  <Button
                    variant={typeFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={typeFilter === 'car' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter('car')}
                  >
                    <Car className="h-4 w-4 mr-1" />
                    Cars
                  </Button>
                  <Button
                    variant={typeFilter === 'bike' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter('bike')}
                  >
                    <Bike className="h-4 w-4 mr-1" />
                    Bikes
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <Select value={brandFilter} onValueChange={setBrandFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map(range => (
                      <SelectItem key={range.label} value={range.label}>{range.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Range</label>
                <Select value={rangeFilter} onValueChange={setRangeFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {rangeCategories.map(cat => (
                      <SelectItem key={cat.label} value={cat.label}>{cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredVehicles.length} electric vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                        <p className="text-gray-600">{vehicle.brand}</p>
                      </div>
                      <Badge variant={vehicle.type === 'car' ? 'default' : 'secondary'}>
                        {vehicle.type === 'car' ? <Car className="h-3 w-3 mr-1" /> : <Bike className="h-3 w-3 mr-1" />}
                        {vehicle.type}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Price</span>
                        <span className="font-semibold text-emerald-600">{vehicle.priceDisplay}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center">
                          <Battery className="h-4 w-4 mr-1" />
                          Battery
                        </span>
                        <span className="font-medium">{vehicle.batteryCapacity} kWh</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center">
                          <Zap className="h-4 w-4 mr-1" />
                          Range
                        </span>
                        <span className="font-medium">{vehicle.range} km</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Charging
                        </span>
                        <span className="font-medium">{vehicle.chargingTime}h</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant={vehicle.fastCharging ? 'default' : 'outline'}>
                        {vehicle.fastCharging ? 'Fast Charging' : 'Standard Charging'}
                      </Badge>
                      <span className="text-sm text-gray-500">{vehicle.warranty}yr warranty</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Best EV for Indian Roads</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Selecting an electric vehicle in India requires understanding key factors that affect performance and value. 
                Range is crucial for daily commuting - consider your typical travel distance and charging infrastructure availability in your area.
              </p>
              <p>
                Battery capacity directly impacts range, but larger batteries mean higher costs. Fast charging capability is essential 
                for longer trips, while standard charging suffices for daily urban use. Government subsidies under the FAME II scheme 
                can significantly reduce purchase costs, especially for two-wheelers.
              </p>
              <p>
                Consider maintenance costs, service network availability, and resale value. Indian road conditions favor vehicles 
                with good ground clearance and robust build quality. Factor in electricity costs in your region compared to petrol prices 
                to calculate long-term savings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EVDirectory;
