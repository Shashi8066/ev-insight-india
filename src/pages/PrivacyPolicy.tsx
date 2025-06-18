
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                EVCarsBike.com is designed to protect your privacy. We do not require user registration 
                or collect personal information to use our tools and resources.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Automatically Collected Information</h3>
              <ul>
                <li>Basic website analytics (page views, session duration, general location)</li>
                <li>Device information (browser type, operating system, screen resolution)</li>
                <li>IP addresses for security and analytics purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information You Provide</h3>
              <ul>
                <li>Email communications when you contact us voluntarily</li>
                <li>Calculator inputs (battery size, usage preferences) - not stored permanently</li>
                <li>Filter selections and tool usage - not linked to personal identity</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Use of Cookies</h2>
              <p>
                We use minimal cookies for essential website functionality and analytics. 
                These include preferences for tool settings and basic usage tracking to improve our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h3>
              <p>
                We may use Google Analytics for website performance monitoring and Google AdSense 
                for advertising. These services have their own privacy policies and cookie usage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect any information we collect. 
                However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Advertising</h2>
              <p>
                We may display advertisements through Google AdSense or similar services. 
                These ad services may use cookies to show relevant advertisements based on your browsing history.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Retention</h2>
              <p>
                We do not store personal user data permanently. Analytics data is retained according 
                to Google Analytics standard retention periods. Calculator inputs are not saved between sessions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your Rights</h2>
              <p>
                Since we collect minimal personal information, there is limited data to manage. 
                You can contact us to inquire about any information we may have collected through your email communications.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
              <p>
                Our services are not directed at children under 13. We do not knowingly collect 
                personal information from children under 13 years of age.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy periodically. Changes will be posted on this page 
                with an updated revision date. Continued use of our services constitutes acceptance of any changes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
              <p>
                For questions about this privacy policy or our data practices, 
                contact us at: <strong>contact@evcarsbike.com</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
