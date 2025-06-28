
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Scale, CheckCircle, Clock, Shield, ArrowRight, Star, Database, FileEdit, Bot, Download, Settings, RefreshCw, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AiLitigationDrafting() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6">
              <Scale className="w-6 h-6" />
              <span className="font-semibold text-lg">AI Litigation Drafting</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Intelligent Document Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leverage artificial intelligence to create precise, compliant legal documents faster than ever. Our AI understands legal language and helps you draft with confidence.
            </p>
            <Link to="/book-demo">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Start Drafting Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Drafting Litigation Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              LEGAL DRAFTING LITIGATION
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive AI-powered litigation drafting with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Case Knowledgebase Harvesting */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">CASE KNOWLEDGEBASE HARVESTING</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Knowledgebase is Created by the help of LawgicHubAi unique pipeline which creates a unique knowledge base for every case and case file that is provided by the user.
              </p>
            </div>

            {/* Context Creation */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileEdit className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">CONTEXT CREATION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After a Unique Knowledgebase is created then we create the Context Required for creating a Litigation Draft from GroundUp with giving specific instructions if required by the user.
              </p>
            </div>

            {/* Agentic Drafting */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AGENTIC DRAFTING</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many Context Structures are created in the above step, the best context which compliments the Draft is chosen according to the users requirement by the agent and an Advance LLM trained for Legal Capabilities builds a Draft without structured templates but correct formatting in Legal Based Language.
              </p>
            </div>

            {/* Editable Document Delivery */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">EDITABLE DOCUMENT DELIVERY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Word File Format File can be downloaded from the application that is easily accessible and editable in the system which contains all the needed formatting.
              </p>
            </div>

            {/* Adaptive Section Management */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ADAPTIVE SECTION MANAGEMENT</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Change or Restructure any given section with new context or add any specific clause or argument or Discovery in the provided section.
              </p>
            </div>

            {/* Agentic Section Regeneration */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AGENTIC SECTION REGENERATION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                New Context is created on the new source file for recreating the Section again, Old Context + New Context is used to create a new section with instructions from the lawyer.
              </p>
            </div>

            {/* Drafted Document Delivery */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DRAFTED DOCUMENT DELIVERY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Final document delivery with all revisions and modifications incorporated into a professionally formatted legal document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  AI-Powered Legal Drafting
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Create professional legal documents with AI assistance that understands context, tone, and legal requirements.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Create first drafts based on case-specific context",
                    "Adaptive section editing and regeneration",
                    "No template restrictions - true agentic writing",
                    "Editable Word document output, properly formatted"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <div className="text-sm font-medium text-gray-900">Quick Setup</div>
                  <div className="text-xs text-gray-600">5 minutes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <div className="text-sm font-medium text-gray-900">Secure</div>
                  <div className="text-xs text-gray-600">Bank-level</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/legal_draft.png" 
                    alt="AI Litigation Drafting illustration"
                    className="w-full h-[550px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
