import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Users, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About EVCarsBike - Independent EV Platform for India | EVCarsBike</title>
        <meta name="description" content="Learn about EVCarsBike - an independent educational platform for electric vehicle information in India. Our mission, values, and commitment to unbiased EV guidance." />
        <meta name="keywords" content="about EVCarsBike, EV platform India, electric vehicle information, independent EV guide, EV education platform, electric car bike information" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About EVCarsBike - Independent EV Platform for India | EVCarsBike" />
        <meta property="og:description" content="Learn about EVCarsBike - an independent educational platform for electric vehicle information in India. Our mission, values, and commitment to unbiased EV guidance." />
        <meta property="og:url" content="https://evcarsbike.com/about" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About EVCarsBike - Independent EV Platform for India | EVCarsBike" />
        <meta name="twitter:description" content="Learn about EVCarsBike - an independent educational platform for electric vehicle information in India. Our mission, values, and commitment to unbiased EV guidance." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About EVCarsBike</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Independent educational platform helping Indian consumers make informed electric vehicle decisions
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide clear, unbiased information and tools that help Indian consumers 
                    understand and compare electric vehicles effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">For Consumers</h3>
                  <p className="text-gray-600">
                    Built specifically for Indian buyers, considering local conditions, 
                    pricing, and infrastructure challenges unique to our market.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p>
                EVCarsBike.com is an independent educational resource focused on electric vehicles in India. 
                We provide interactive tools and comparison features to help you research EVs without the complexity 
                of technical jargon or sales pressure.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Tools</h3>
              <ul className="space-y-2">
                <li><strong>EV Directory:</strong> Browse and filter electric cars and bikes with key specifications</li>
                <li><strong>Comparison Tool:</strong> Side-by-side feature comparison to highlight differences</li>
                <li><strong>Range Calculator:</strong> Estimate real-world range based on usage patterns</li>
                <li><strong>EV Glossary:</strong> Simple explanations of technical terms and concepts</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Independence & Transparency</h3>
              <p>
                We are not affiliated with any vehicle manufacturer, dealer, or financial institution. 
                Our goal is purely educational - to help you understand EVs better before making purchase decisions.
              </p>
              
              <p>
                All vehicle data is sourced from publicly available specifications and official company information. 
                We do not sell vehicles, provide financing, or earn commissions from manufacturers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Privacy & Data</h3>
              <p>
                We do not require user registration or collect personal information. Our tools work without 
                login requirements, and we do not track individual usage beyond basic website analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Unbiased Information</h3>
                <p className="text-gray-600 text-sm">Independent research and analysis without manufacturer influence</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Simple & Clear</h3>
                <p className="text-gray-600 text-sm">Complex EV concepts explained in easy-to-understand language</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Indian Context</h3>
                <p className="text-gray-600 text-sm">Information tailored for Indian roads, climate, and infrastructure</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
