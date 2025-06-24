
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrendingUp, CheckCircle, Clock, Shield, ArrowRight, Star, Search, FileText, Eye, Brain, Database, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SmartLegalQuerying() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
              <TrendingUp className="w-6 h-6" />
              <span className="font-semibold text-lg">Smart Legal Querying</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Analyze, Query, and See: Smarter Case Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform how you conduct legal research with smart querying capabilities. Find relevant cases, statutes, and legal precedents in seconds, not hours.
            </p>
            <Link to="/book-demo">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Start Querying Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research with Advanced Querying Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              RESEARCH WITH ADVANCED QUERYING
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Advanced querying capabilities that transform how you interact with legal documents and extract critical insights
            </p>
          </div>

          {/* Adaptive Document Interaction */}
          <div className="mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">ADAPTIVE DOCUMENT INTERACTION</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Assistant that helps you to ask questions from the Case Documents and to do a deep dig in the documents with your need while working with our adaptive database. We give advance market ready features that are:
              </p>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Exhibit Agentic Analysis */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">EXHIBIT AGENTIC ANALYSIS</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Detailed Analysis of the Given Exhibit or Reference Copy that is very important for the case, or analysis of a few of the important pages from which a case can get an edge can be done by Exhibit Agentic Analysis.
                  </p>
                </div>

                {/* Context Querying */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">CONTEXT QUERYING</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Based on the semantic features and using advance RAG Processes you get a more specified answer to your query which is not generalised, this should be used when you want Exact Answers. For Example: If i want to know the relationship between two entities in a case for whole duration of the case it will be more helpful.
                  </p>
                </div>

                {/* Vision Querying */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">VISION QUERYING</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Very common but trending feature where you get to ask Short Queries about the information which is present right before your eyes but you can't find directly, like if you want the information of the Amount that is due in the case, you can ask a query with vision querying and it will give you an answer quickly.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">To Conclude</h5>
                    <p className="text-gray-700 leading-relaxed">
                      If you want Detailed analysis of all the stuff present in the document use <strong>Exhibit Agentic Analysis</strong>, If You have a Contextual Query that is for finding information about the case or relationships in the case (Textual Information) use <strong>Context Querying</strong>, if you have Table and Images where you need a short description or a direct query use <strong>Vision Querying</strong>.
                    </p>
                  </div>
                </div>
              </div>
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
                  Intelligent Legal Research
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unlock powerful insights with advanced querying that understands legal context and delivers precise results.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Context Querying for deep semantic answers",
                    "Vision Querying to extract data from visuals/tables",
                    "Exhibit Agentic Analysis for pinpoint document review",
                    "Track relationships and timelines across cases"
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
                    src="/legal_research.png" 
                    alt="Smart Legal Querying illustration"
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
