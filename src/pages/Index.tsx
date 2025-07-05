
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Search, FileText, GitCompare, Zap, ArrowRight, Battery, IndianRupee, TrendingUp, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const tools = [
    {
      icon: Search,
      title: "EV Directory",
      description: "Explore electric cars and bikes with detailed specifications and filters",
      href: "/ev-directory",
      color: "bg-emerald-500",
    },
    {
      icon: GitCompare,
      title: "Compare EVs",
      description: "Side-by-side comparison of electric vehicles to make informed decisions",
      href: "/compare",
      color: "bg-blue-500",
    },
    {
      icon: Calculator,
      title: "Range Calculator",
      description: "Calculate estimated range based on battery size and usage patterns",
      href: "/range-calculator",
      color: "bg-purple-500",
    },
    {
      icon: FileText,
      title: "EV Glossary",
      description: "Learn essential EV terms and concepts simplified for Indian buyers",
      href: "/ev-glossary",
      color: "bg-orange-500",
    },
  ];

  const insights = [
    {
      icon: Battery,
      title: "Battery Technology",
      content: "Modern electric vehicles use lithium-ion batteries with energy densities ranging from 150-250 Wh/kg. Understanding battery degradation, which typically occurs at 2-3% per year, helps you make informed purchase decisions."
    },
    {
      icon: IndianRupee,
      title: "Cost of Ownership",
      content: "Electric vehicles in India cost 70-80% less to operate than petrol vehicles. With electricity at ₹6-8 per unit, running costs average ₹1-2 per kilometer compared to ₹6-8 for petrol cars."
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      content: "India's EV market is growing at 44% CAGR with over 1.3 million EVs sold in 2023. Government subsidies under FAME II scheme offer up to ₹1.5 lakh incentives for electric cars."
    },
    {
      icon: Shield,
      title: "Environmental Impact",
      content: "Switching to EVs reduces CO2 emissions by 40-60% in India's current energy mix. With increasing renewable energy adoption, this reduction will improve to 80% by 2030."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>EVCarsBike - Compare Electric Cars & Bikes in India | EV Directory & Range Calculator</title>
        <meta name="description" content="Compare electric cars and bikes in India with our comprehensive EV directory, range calculator, and comparison tools. Find the best electric vehicles, calculate range, and make informed EV decisions." />
        <meta name="keywords" content="electric cars India, electric bikes India, EV comparison, electric vehicle directory, EV range calculator, electric car prices, electric bike prices, EV reviews, electric vehicle guide, sustainable transport India" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EVCarsBike - Compare Electric Cars & Bikes in India | EV Directory & Range Calculator" />
        <meta property="og:description" content="Compare electric cars and bikes in India with our comprehensive EV directory, range calculator, and comparison tools. Find the best electric vehicles, calculate range, and make informed EV decisions." />
        <meta property="og:url" content="https://evcarsbike.com/" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EVCarsBike - Compare Electric Cars & Bikes in India | EV Directory & Range Calculator" />
        <meta name="twitter:description" content="Compare electric cars and bikes in India with our comprehensive EV directory, range calculator, and comparison tools. Find the best electric vehicles, calculate range, and make informed EV decisions." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              EVCarsBike
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              India's Most Comprehensive Electric Vehicle Platform
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Make informed EV decisions with data-driven insights, comprehensive comparisons, and practical tools designed specifically for Indian roads and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/compare">
                  Compare Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ev-directory">
                  Find Your EV <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Electric Vehicle Market Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the electric vehicle landscape in India helps you make better purchasing decisions. Here are key insights every EV buyer should know.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {insights.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                        <insight.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl">{insight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{insight.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Electric Vehicles in India?
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  The electric vehicle revolution in India is transforming how we think about transportation. 
                  With rising fuel costs, increasing environmental awareness, and substantial government incentives, 
                  electric vehicles have become a practical and economical choice for Indian consumers.
                </p>
                <p className="mb-4">
                  Electric vehicles offer significant advantages in Indian conditions. The stop-and-go traffic 
                  in cities like Mumbai, Delhi, and Bangalore actually benefits electric vehicles through 
                  regenerative braking, which recovers energy that would otherwise be lost. Additionally, 
                  the lower maintenance requirements of electric motors mean fewer service visits and reduced 
                  long-term costs.
                </p>
                <p>
                  Our platform provides you with the tools and information needed to navigate the electric 
                  vehicle market confidently. From understanding battery technologies to calculating real-world 
                  range expectations, we help you make informed decisions that align with your needs and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional EV Research Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access industry-standard tools designed to help you research, compare, and understand electric vehicles in the Indian market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool) => (
                <Card key={tool.title} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-emerald-200">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-6">
                      {tool.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full group-hover:bg-emerald-50">
                      <Link to={tool.href}>
                        Explore Tool <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Electric Vehicle Education Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn everything you need to know about electric vehicles, from basic concepts to advanced topics, all explained in simple terms for Indian consumers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
                <p className="text-gray-600">
                  Our database includes detailed specifications of over 200 electric vehicles available in India, 
                  updated regularly with the latest models, prices, and features from all major manufacturers 
                  including Tata, MG, Hyundai, Ola, Ather, TVS, and more.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Calculators</h3>
                <p className="text-gray-600">
                  Use our advanced calculators to determine real-world range expectations, charging costs, 
                  and total cost of ownership. Our tools factor in Indian driving conditions, weather, 
                  and electricity rates to provide accurate estimates.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Access our comprehensive glossary of electric vehicle terms, understand complex concepts 
                  like regenerative braking and thermal management, and learn about the latest battery 
                  technologies in simple, easy-to-understand language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Electric Vehicle Journey Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of Indians who have made informed EV decisions using our comprehensive tools and resources. 
              Whether you're buying your first electric vehicle or upgrading from a petrol car, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/ev-directory">
                  Browse EVs <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <Link to="/range-calculator">
                  Calculate Range <Calculator className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
