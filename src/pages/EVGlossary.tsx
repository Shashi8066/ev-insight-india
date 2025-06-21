import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Battery, Zap, Clock, Settings, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EVGlossary = () => {
  const glossaryTerms = [
    {
      term: "kWh (Kilowatt-hour)",
      definition: "Unit of energy storage in EV batteries. Higher kWh means longer range. A 30 kWh battery stores twice the energy of 15 kWh.",
      category: "battery"
    },
    {
      term: "Torque",
      definition: "Rotational force delivered to wheels. EVs provide instant torque from 0 RPM, giving quick acceleration compared to petrol engines.",
      category: "performance"
    },
    {
      term: "Regenerative Braking",
      definition: "System that recovers energy when slowing down, converting kinetic energy back to electrical energy to recharge the battery.",
      category: "efficiency"
    },
    {
      term: "DC Fast Charging",
      definition: "High-speed charging method that can charge EVs from 10-80% in 30-60 minutes. Uses direct current, bypassing onboard charger.",
      category: "charging"
    },
    {
      term: "BMS (Battery Management System)",
      definition: "Electronic system that monitors and manages battery cells, ensuring safe charging, optimal performance, and longevity.",
      category: "safety"
    },
    {
      term: "WLTP Range",
      definition: "Worldwide Harmonized Light Vehicle Test Procedure - standardized lab test giving certified range figures for comparison.",
      category: "testing"
    },
    {
      term: "Type 2 Connector",
      definition: "Standard charging connector in India for AC charging. Most home and public AC chargers use this 7-pin connector.",
      category: "charging"
    },
    {
      term: "SOC (State of Charge)",
      definition: "Battery charge level expressed as percentage. Like fuel gauge in petrol cars, shows remaining battery capacity.",
      category: "battery"
    },
    {
      term: "CCS (Combined Charging System)",
      definition: "Fast charging standard combining AC and DC charging in one connector. Used for rapid charging at highway stations.",
      category: "charging"
    },
    {
      term: "Motor Power (kW)",
      definition: "Electric motor's power output. Higher kW means more power and better performance, but may reduce efficiency.",
      category: "performance"
    },
    {
      term: "Onboard Charger",
      definition: "Internal component that converts AC power from wall outlets to DC power for battery charging. Determines AC charging speed.",
      category: "charging"
    },
    {
      term: "FAME II Subsidy",
      definition: "Government scheme providing purchase incentives for electric vehicles in India. Reduces upfront cost, especially for two-wheelers.",
      category: "policy"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'battery': return <Battery className="h-4 w-4" />;
      case 'charging': return <Zap className="h-4 w-4" />;
      case 'performance': return <Settings className="h-4 w-4" />;
      case 'safety': return <Shield className="h-4 w-4" />;
      case 'efficiency': return <Clock className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'battery': return 'bg-emerald-100 text-emerald-800';
      case 'charging': return 'bg-blue-100 text-blue-800';
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'safety': return 'bg-red-100 text-red-800';
      case 'efficiency': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>EV Glossary - Electric Vehicle Terms & Definitions | EVCarsBike</title>
        <meta name="description" content="Learn essential electric vehicle terminology and concepts. Simple explanations of EV terms like kWh, torque, regenerative braking, and charging for Indian buyers." />
        <meta name="keywords" content="EV glossary, electric vehicle terms, EV definitions, battery terminology, charging terms, electric car glossary, EV education, electric vehicle guide" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/ev-glossary" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EV Glossary - Electric Vehicle Terms & Definitions | EVCarsBike" />
        <meta property="og:description" content="Learn essential electric vehicle terminology and concepts. Simple explanations of EV terms like kWh, torque, regenerative braking, and charging for Indian buyers." />
        <meta property="og:url" content="https://evcarsbike.com/ev-glossary" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Glossary - Electric Vehicle Terms & Definitions | EVCarsBike" />
        <meta name="twitter:description" content="Learn essential electric vehicle terminology and concepts. Simple explanations of EV terms like kWh, torque, regenerative braking, and charging for Indian buyers." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EV Glossary</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential electric vehicle terms explained simply for Indian EV buyers
            </p>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {glossaryTerms.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                  <Card>
                    <AccordionTrigger className="hover:no-underline px-6 py-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                            {getCategoryIcon(item.category)}
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{item.term}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important EV Terms Indian Buyers Should Know</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Understanding EV terminology is crucial for making informed purchase decisions in India's growing electric vehicle market. 
                Key concepts like battery capacity (kWh), charging types, and government incentives directly impact your ownership experience.
              </p>
              <p>
                Battery-related terms are most important - kWh determines range, while BMS ensures safety and longevity. 
                Charging terminology helps you understand infrastructure compatibility and charging speeds available across India.
              </p>
              <p>
                Performance terms like torque and motor power help compare vehicles, while policy terms like FAME II subsidies 
                can significantly reduce your purchase cost. Familiarizing yourself with these terms ensures confident EV shopping.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EVGlossary;
