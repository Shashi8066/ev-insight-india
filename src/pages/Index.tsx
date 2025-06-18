
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Search, FileText, GitCompare, Zap, ArrowRight } from "lucide-react";

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

  return (
    <Layout>
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
              Compare & Calculate Electric Cars and Bikes in India
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Discover the best electric vehicles with our interactive tools. Compare specs, calculate range, and learn EV terms — all in one powerful platform.
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

        {/* Tools Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful EV Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to research and choose the perfect electric vehicle for Indian roads
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

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose EVCarsBike?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Data</h3>
                <p className="text-gray-600">Detailed specifications of all major electric vehicles available in India, updated regularly for accuracy.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Tools</h3>
                <p className="text-gray-600">Interactive calculators and comparison tools designed specifically for Indian EV buyers and conditions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
                <p className="text-gray-600">Learn EV terminology and concepts to make informed decisions about your electric vehicle purchase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect EV?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Start exploring our tools to compare, calculate, and learn about electric vehicles in India.
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
