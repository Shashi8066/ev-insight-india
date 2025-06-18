
import Layout from "@/components/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Purpose Only</h2>
              <p>
                EVCarsBike.com provides educational tools and information about electric vehicles in India. 
                All content, calculators, and comparison tools are designed for informational purposes only.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">No Purchase or Sales Services</h2>
              <p>
                We do not sell vehicles, provide financing, or facilitate purchases. We are not affiliated 
                with any vehicle manufacturer, dealer, or financial institution. All vehicle purchases must 
                be completed through authorized dealers or manufacturers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Accuracy of Information</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we make no guarantees 
                about the completeness, accuracy, or reliability of any content on our website.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vehicle Specifications</h3>
              <ul>
                <li>Data is sourced from publicly available manufacturer information</li>
                <li>Specifications may change without notice</li>
                <li>Always verify information with official dealers before making decisions</li>
                <li>Regional variations in specifications may not be reflected</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Calculator Results</h3>
              <ul>
                <li>Range calculations are estimates based on general efficiency formulas</li>
                <li>Actual results vary significantly based on individual usage patterns</li>
                <li>Environmental factors, driving style, and vehicle condition affect real-world performance</li>
                <li>Use calculator results as general guidance only</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
              <p>
                EVCarsBike.com and its operators shall not be liable for any direct, indirect, incidental, 
                consequential, or punitive damages arising from your use of our website or reliance on our information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Financial Decisions</h3>
              <p>
                We are not responsible for any financial losses, poor purchase decisions, or 
                dissatisfaction with vehicles based on information or tools provided on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">User Responsibilities</h2>
              <p>Users of EVCarsBike.com agree to:</p>
              <ul>
                <li>Use information and tools for personal, educational purposes only</li>
                <li>Verify all information independently before making purchase decisions</li>
                <li>Not rely solely on our tools for major financial decisions</li>
                <li>Contact manufacturers or dealers for official specifications and pricing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intellectual Property</h2>
              <p>
                All content, design, and functionality on EVCarsBike.com is our intellectual property. 
                Users may not reproduce, distribute, or create derivative works without permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">External Links</h2>
              <p>
                Our website may contain links to external sites. We are not responsible for the content, 
                accuracy, or practices of external websites. Access external links at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service Availability</h2>
              <p>
                We strive to maintain website availability but cannot guarantee uninterrupted service. 
                We reserve the right to modify, suspend, or discontinue services without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governing Law</h2>
              <p>
                These terms are governed by Indian law. Any disputes shall be resolved in courts 
                having jurisdiction in India.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted 
                on this page with an updated date. Continued use constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
              <p>
                For questions about these terms, contact us at: <strong>contact@evcarsbike.com</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
