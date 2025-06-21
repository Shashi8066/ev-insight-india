import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact EVCarsBike - Get Help with EV Questions | EVCarsBike</title>
        <meta name="description" content="Contact EVCarsBike for questions about electric vehicles, our tools, or data accuracy. We're here to help with your EV research and education needs." />
        <meta name="keywords" content="contact EVCarsBike, EV support, electric vehicle questions, EV help, contact us, EV platform support" />
        <meta name="author" content="EVCarsBike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evcarsbike.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact EVCarsBike - Get Help with EV Questions | EVCarsBike" />
        <meta property="og:description" content="Contact EVCarsBike for questions about electric vehicles, our tools, or data accuracy. We're here to help with your EV research and education needs." />
        <meta property="og:url" content="https://evcarsbike.com/contact" />
        <meta property="og:image" content="https://evcarsbike.com/og-image.jpg" />
        <meta property="og:site_name" content="EVCarsBike" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact EVCarsBike - Get Help with EV Questions | EVCarsBike" />
        <meta name="twitter:description" content="Contact EVCarsBike for questions about electric vehicles, our tools, or data accuracy. We're here to help with your EV research and education needs." />
        <meta name="twitter:image" content="https://evcarsbike.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@evcarsbike" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch for questions about our EV tools and information
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For questions about our tools, data accuracy, or general inquiries:
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="font-medium text-emerald-800">contact@evcarsbike.com</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    What We Can Help With
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Questions about EV specifications or data accuracy</li>
                    <li>• Technical issues with our tools or calculators</li>
                    <li>• Suggestions for new features or improvements</li>
                    <li>• General EV education and terminology clarification</li>
                    <li>• Reporting errors or outdated information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 mb-2">
                    <strong>We do not sell vehicles or provide purchase services.</strong>
                  </p>
                  <p className="text-gray-600">
                    EVCarsBike.com is an educational platform only. We cannot help with vehicle purchases, 
                    financing, dealer contacts, or warranty issues. For these services, please contact 
                    authorized dealers or manufacturers directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I buy EVs through your website?</h3>
                <p className="text-gray-600">
                  No, we are an educational platform only. We provide tools and information to help you research EVs, 
                  but you'll need to contact authorized dealers or manufacturers for purchases.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How often is your EV data updated?</h3>
                <p className="text-gray-600">
                  We update vehicle specifications periodically based on official manufacturer information. 
                  If you notice outdated information, please email us with details.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are your range calculations accurate?</h3>
                <p className="text-gray-600">
                  Our range calculator provides estimates based on standard efficiency formulas. 
                  Actual range varies significantly based on driving conditions, weather, and vehicle maintenance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide EV reviews or recommendations?</h3>
                <p className="text-gray-600">
                  We focus on factual specifications and comparison tools rather than subjective reviews. 
                  Our goal is to present information neutrally so you can make your own informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
