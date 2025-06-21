import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer - EVCarsBike | Important Information & Limitations</title>
        <meta name="description" content="Important disclaimer about EVCarsBike platform limitations, data accuracy, and user responsibilities. Read before using our EV tools and information." />
        <meta name="keywords" content="disclaimer, EVCarsBike disclaimer, data accuracy, platform limitations, EV information disclaimer, user responsibilities" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/disclaimer" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disclaimer - EVCarsBike | Important Information & Limitations" />
        <meta property="og:description" content="Important disclaimer about EVCarsBike platform limitations, data accuracy, and user responsibilities. Read before using our EV tools and information." />
        <meta property="og:url" content="https://evcarsbike.com/disclaimer" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disclaimer - EVCarsBike | Important Information & Limitations" />
        <meta name="twitter:description" content="Important disclaimer about EVCarsBike platform limitations, data accuracy, and user responsibilities. Read before using our EV tools and information." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600">Important information about using EVCarsBike.com</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">Important Notice</h2>
                <p className="text-yellow-700">
                  EVCarsBike.com is an independent educational platform. We are not affiliated with 
                  any government agency, vehicle manufacturer, or dealer network in India.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Independence Statement</h2>
              <p>
                EVCarsBike.com operates independently and is not associated with, endorsed by, 
                or affiliated with any electric vehicle manufacturer, automotive dealer, government agency, 
                or financial institution operating in India.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Sources and Accuracy</h2>
              <p>
                All vehicle specifications, pricing, and technical information displayed on our website 
                is sourced from publicly available manufacturer data, official websites, and press releases.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information Limitations:</h3>
              <ul>
                <li>Vehicle specifications may vary by region, model year, or trim level</li>
                <li>Pricing information may not reflect current market rates or promotions</li>
                <li>Government incentives and subsidies change frequently and vary by state</li>
                <li>Real-world performance may differ significantly from laboratory test results</li>
                <li>Charging infrastructure availability varies greatly across different regions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Calculator and Tool Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Range Calculator</h3>
              <p>
                Our range calculator provides estimates based on general efficiency formulas and assumptions. 
                Actual range depends on numerous factors including:
              </p>
              <ul>
                <li>Driving conditions (city vs highway, traffic patterns)</li>
                <li>Weather conditions (temperature, humidity, wind)</li>
                <li>Vehicle maintenance and tire condition</li>
                <li>Driving style and habits</li>
                <li>Use of accessories (air conditioning, lights, etc.)</li>
                <li>Battery age and health</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Comparison Tools</h3>
              <p>
                Vehicle comparisons are based on manufacturer-provided specifications. Direct comparisons 
                may not account for differences in testing methodologies, measurement standards, or 
                real-world performance variations between different brands.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">No Financial or Purchase Advice</h2>
              <p>
                EVCarsBike.com does not provide financial advice, purchase recommendations, 
                or investment guidance. All information is provided for educational purposes only.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Before Making Purchase Decisions:</h3>
              <ul>
                <li>Consult with authorized dealers for current specifications and pricing</li>
                <li>Test drive vehicles under your typical usage conditions</li>
                <li>Verify government incentive eligibility with official sources</li>
                <li>Consider your specific charging infrastructure needs</li>
                <li>Evaluate total cost of ownership including maintenance and insurance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Government Policies and Incentives</h2>
              <p>
                Information about government subsidies, incentives, and policies is provided for general 
                awareness only. These policies change frequently and vary by state, city, and individual circumstances.
              </p>
              
              <p>
                Always verify current incentive availability and eligibility criteria with official 
                government sources, authorized dealers, or qualified financial advisors.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Use at Your Own Risk</h2>
              <p>
                Users access and use EVCarsBike.com at their own risk. We strongly recommend 
                independent verification of all information before making any vehicle purchase or financial decisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Updates and Changes</h2>
              <p>
                Information on EVCarsBike.com is updated periodically but may not reflect the most current 
                specifications, pricing, or availability. We are not obligated to maintain current information 
                and make no commitment to update content on any particular schedule.
              </p>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mt-12">
                <h3 className="text-lg font-bold text-red-800 mb-3">Final Reminder</h3>
                <p className="text-red-700">
                  EVCarsBike.com is a tool for research and education only. Always consult with 
                  qualified professionals, authorized dealers, and official sources before making 
                  any vehicle purchase or financial commitment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Disclaimer;
