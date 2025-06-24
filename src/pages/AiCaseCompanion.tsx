
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Gavel, CheckCircle, Clock, Shield, ArrowRight, Star, FileText, Scale, Search, MapPin, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AiCaseCompanion() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-6">
              <Gavel className="w-6 h-6" />
              <span className="font-semibold text-lg">AI Case Companion</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Case Clarity: What, Where & Next
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get instant insights and guidance on your cases. Our AI companion provides context-aware suggestions and helps you stay on top of every detail.
            </p>
            <Link to="/book-demo">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                Meet Your AI Companion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Case Companion Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI CASE COMPANION</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build a case from scratch and help a lawyer to identify all the necessary pointers that are important for him to consider while making a case, and also help him to take the correct steps forward, to gain maximum advantage to his client and case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Briefing */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CASE BRIEFING</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The case entered into the system is briefed in detail with all the important evidence, facts, key issues, events and accused details with proper description of charges that are put on the accused or respondent. Also tells about the Background and Parties Involved with Timeline of Events and Allegations.
              </p>
            </div>

            {/* Case Applicable Acts Extractor */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CASE APPLICABLE ACTS EXTRACTOR</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Based on the Description and Analysis of the case we find all the acts that can be applicable on the case and also provide reason how it can be applicable. It helps to evaluate all perspectives of the case present.
              </p>
            </div>

            {/* Sections Assessment */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">SECTIONS ASSESSMENT</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We assess all the sections present in the act with the given context of the case and tell which sections are applicable or not with the correct applicability or the reason why that particular section is Offensive on the given case.
              </p>
            </div>

            {/* Legal Stage Finder */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">LEGAL STAGE FINDER</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Based on the case context we analyse all the events properly and find at which stage the Case is Present at, What is currently happening in the case.
              </p>
            </div>

            {/* Case Way Forward */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CASE WAY FORWARD</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Whichever stage is identified above based on that stage we give all the next steps that are necessary for closing the case on behalf of both Complaint and Respondent, what steps both parties can take to close the case and also tells about what potential orders can be given by the court.
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
                  Your Intelligent Legal Assistant
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Experience the future of legal assistance with AI that understands your cases and provides intelligent guidance.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Agentic Drafting tailored to case context, tone, and structure",
                    "Auto-summarization of long legal texts, filings, and evidence",
                    "Smart suggestions based on case facts, jurisdiction, and past rulings",
                    "Adaptive Section Management to restructure content without losing flow"
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
                    src="/case_companion.png" 
                    alt="AI Case Companion illustration"
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
