
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQs = () => {
  const faqs = [
    {
      question: "Can I buy EVs through your website?",
      answer: "No, EVCarsBike.com is an educational platform only. We provide tools and information to help you research electric vehicles, but you cannot purchase vehicles through our website. You'll need to contact authorized dealers or manufacturers directly for purchases."
    },
    {
      question: "Are the vehicle specifications real-time?",
      answer: "No, our specifications are updated periodically based on publicly available manufacturer information. Vehicle specs, pricing, and availability may change without notice. Always verify current information with official dealers before making purchase decisions."
    },
    {
      question: "Is this an official government or manufacturer website?",
      answer: "No, EVCarsBike.com is an independent educational platform. We are not affiliated with any government agency, vehicle manufacturer, or dealer network. Our goal is to provide unbiased information for research purposes only."
    },
    {
      question: "How accurate are your range calculator results?",
      answer: "Our range calculator provides estimates based on general efficiency formulas. Actual range varies significantly based on driving conditions, weather, vehicle maintenance, and individual driving habits. Use results as general guidance only, not precise predictions."
    },
    {
      question: "Do you provide financial advice or purchase recommendations?",
      answer: "No, we do not provide financial advice, purchase recommendations, or investment guidance. All information is educational. We strongly recommend consulting with qualified professionals and authorized dealers before making any vehicle purchase decisions."
    },
    {
      question: "How often is your information updated?",
      answer: "We update vehicle information periodically, but not on a fixed schedule. Information may become outdated between updates. If you notice incorrect information, please contact us, and we'll work to correct it in future updates."
    },
    {
      question: "Can you help me find dealers or arrange financing?",
      answer: "No, we do not provide dealer contacts, financing arrangements, or purchase facilitation services. For these services, please contact manufacturers directly or search for authorized dealers in your area through official brand websites."
    },
    {
      question: "Are government subsidies and incentives information current?",
      answer: "Government incentive information is provided for general awareness only. These policies change frequently and vary by state and individual circumstances. Always verify current incentive availability with official government sources or authorized dealers."
    },
    {
      question: "Do you collect personal information or require registration?",
      answer: "No, our tools and information are available without registration. We do not collect personal information for tool usage. We only use basic website analytics and may collect email addresses when you contact us voluntarily."
    },
    {
      question: "Can I suggest new features or report errors?",
      answer: "Yes, we welcome feedback! You can contact us at contact@evcarsbike.com with suggestions for new features, error reports, or general feedback about our tools and information."
    },
    {
      question: "Why don't you include all electric vehicle brands?",
      answer: "We focus on major EV brands available in the Indian market. Our database includes vehicles with significant market presence and publicly available specifications. We may add more brands over time based on market developments."
    },
    {
      question: "Are your comparison results biased toward any brand?",
      answer: "No, our comparisons are based purely on manufacturer-provided specifications. We are not affiliated with any brand and do not receive compensation from manufacturers. Our goal is to present factual information neutrally for your own decision-making."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 p-4 rounded-2xl">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about EVCarsBike.com tools and services
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-medium text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you can't find the answer you're looking for, feel free to contact us directly.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg inline-block">
              <p className="text-emerald-800 font-medium">contact@evcarsbike.com</p>
              <p className="text-emerald-600 text-sm mt-1">We typically respond within 24-48 hours</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQs;
