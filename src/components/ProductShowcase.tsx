
import React, { useState } from 'react';
import { ChevronRight, FileText, Scale, TrendingUp, Calendar, Clock, Users, DollarSign, BarChart3, CheckCircle, AlertCircle, Activity } from 'lucide-react';
import { BookOpenCheck } from 'lucide-react'
import { Gavel } from 'lucide-react'


export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'case-management',
      title: 'Case Management',
      subtitle: 'Streamline your legal workflow',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      features: [
        { name: 'Client Intake Form', status: 'active', progress: 100 },
        { name: 'Document Review', status: 'in-progress', progress: 65 },
        { name: 'Court Filing', status: 'pending', progress: 0 },
        { name: 'Client Communication', status: 'active', progress: 100 }
      ],
      metrics: {
        efficiency: '45%',
        timeReduction: '3.2h',
        satisfaction: '94%'
      }
    },
    {
      id: 'litigation-drafting',
      title: 'AI Litigation Drafting',
      subtitle: 'Intelligent document processing',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      features: [
        { name: 'Risk Assessment', status: 'active', progress: 100 },
        { name: 'Clause Detection', status: 'active', progress: 100 },
        { name: 'Compliance Check', status: 'in-progress', progress: 80 },
        { name: 'Version Comparison', status: 'pending', progress: 0 }
      ],
      metrics: {
        efficiency: '60%',
        timeReduction: '4.5h',
        satisfaction: '96%'
      }
    },
    {
      id: 'research-querying',
      title: 'Smart Legal Querying',
      subtitle: 'Analyze, Query, and See: Smarter Case Insights',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
    },
    {
      id: 'case-companion',
      title: 'AI Case Companion',
      subtitle: 'AI-Powered Case Clarity: What, Where & Next',
      icon: <Gavel className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
    },
    {
      id: 'legal-research',
      title: 'Legal Analysis and Research',
      subtitle: 'Legal Research',
      icon: <BookOpenCheck className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
    }
  ];

  const currentSolution = solutions[activeTab];

  const getRightSideContent = () => {
    switch (activeTab) {
      case 0: // Case Management
        return (
          <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Case Dashboard</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last 30 days</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">127</div>
                  <div className="text-sm text-gray-500">Active Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-500">On Schedule</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">$2.4M</div>
                  <div className="text-sm text-gray-500">Total Value</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { time: '2 hours ago', action: 'Document filed for Johnson vs. Smith', status: 'success' },
                  { time: '4 hours ago', action: 'Client meeting scheduled', status: 'info' },
                  { time: '1 day ago', action: 'Contract review completed', status: 'success' },
                  { time: '2 days ago', action: 'Deadline reminder sent', status: 'warning' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      item.status === 'success' ? 'bg-green-500' :
                      item.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{item.action}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // AI Litigation Drafting
        return (
          <div className="space-y-6">
            {/* AI Analysis Dashboard */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">AI Document Analysis</h4>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Analysis Complete</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-700">Risk Score</span>
                    <span className="text-lg font-bold text-purple-600">7.2/10</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-blue-600">24</div>
                    <div className="text-sm text-blue-700">Clauses Reviewed</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-red-600">3</div>
                    <div className="text-sm text-red-700">Issues Found</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Insights */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Document Insights</h4>
              <div className="space-y-3">
                {[
                  { type: 'High Risk', text: 'Unlimited liability clause detected', color: 'red' },
                  { type: 'Medium Risk', text: 'Ambiguous termination terms', color: 'yellow' },
                  { type: 'Suggestion', text: 'Add force majeure clause', color: 'blue' }
                ].map((insight, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 border-${insight.color}-500 bg-${insight.color}-50`}>
                    <div className={`text-sm font-medium text-${insight.color}-700`}>{insight.type}</div>
                    <div className={`text-sm text-${insight.color}-600`}>{insight.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Smart Legal Querying
        return (
          <div className="space-y-6">
            {/* Query Analytics */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Query Analytics</h4>
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-green-700">Queries Processed Today</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">98.2%</div>
                    <div className="text-sm text-gray-500">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">0.8s</div>
                    <div className="text-sm text-gray-500">Avg Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Results Preview */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Searches</h4>
              <div className="space-y-3">
                {[
                  { query: 'Contract termination clauses', results: 127, relevance: 95 },
                  { query: 'Employment law precedents', results: 89, relevance: 92 },
                  { query: 'IP licensing agreements', results: 156, relevance: 88 }
                ].map((search, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">{search.query}</div>
                      <div className="text-xs text-green-600">{search.relevance}% relevant</div>
                    </div>
                    <div className="text-xs text-gray-500">{search.results} results found</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3: // AI Case Companion
        return (
          <div className="space-y-6">
            {/* AI Assistant Interface */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">AI Case Companion</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">AI Suggestion</div>
                  <div className="text-sm text-blue-700">Based on similar cases, consider filing motion for summary judgment within 30 days.</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-yellow-900">Upcoming Deadline</div>
                  <div className="text-sm text-yellow-700">Discovery deadline: March 15, 2024 (7 days remaining)</div>
                </div>
              </div>
            </div>

            {/* Case Progress Tracker */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Case Progress</h4>
              <div className="space-y-4">
                {[
                  { phase: 'Case Filed', status: 'completed', date: 'Jan 15' },
                  { phase: 'Discovery', status: 'active', date: 'Mar 15' },
                  { phase: 'Mediation', status: 'pending', date: 'Apr 20' },
                  { phase: 'Trial', status: 'pending', date: 'Jun 10' }
                ].map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'active' ? 'bg-orange-500' : 'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{phase.phase}</div>
                      <div className="text-xs text-gray-500">{phase.date}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                      phase.status === 'active' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4: // Legal Research
        return (
          <div className="space-y-6">
            {/* Research Dashboard */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Research Analytics</h4>
                <Activity className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">2,847</div>
                      <div className="text-sm text-yellow-700">Cases Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">156</div>
                      <div className="text-sm text-yellow-700">Relevant Precedents</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Sources */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Research Sources</h4>
              <div className="space-y-3">
                {[
                  { source: 'Federal Courts Database', citations: 1247, accuracy: 98 },
                  { source: 'State Law Archives', citations: 856, accuracy: 96 },
                  { source: 'Legal Journals', citations: 623, accuracy: 94 },
                  { source: 'Case Law Library', citations: 445, accuracy: 97 }
                ].map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{source.source}</div>
                      <div className="text-xs text-gray-500">{source.citations} citations</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-yellow-600">{source.accuracy}%</div>
                      <div className="text-xs text-gray-500">accuracy</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Driving measurable impact for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              legal professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your practice with AI-powered solutions designed specifically for modern legal workflows
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${solution.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              {solution.icon}
              <div className="text-left">
                <div className="font-semibold">{solution.title}</div>
                <div className="text-sm opacity-80">{solution.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Solution Details */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${currentSolution.color} text-white mb-6`}>
                {currentSolution.icon}
                <span className="font-semibold text-lg">{currentSolution.title}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentSolution.subtitle}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our advanced AI technology transforms how legal professionals manage their daily workflows, 
                providing intelligent automation and insights that drive efficiency and accuracy.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
              {currentSolution.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-900 font-medium">{feature.name}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      feature.status === 'active' ? 'bg-green-500' :
                      feature.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${currentSolution.color} transition-all duration-700`}
                      style={{ width: `${feature.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contract Analysis Risk Alert (shown only for contract analysis tab) */}
            {activeTab === 1 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-red-600 text-sm font-medium">⚠ Risk Alert</div>
                </div>
                <p className="text-gray-700 mt-2 mb-3">
                  Clause 4.2 contains non-standard liability limitations that may expose client to unnecessary risk.
                </p>
                <div className="text-blue-600 text-sm hover:text-blue-700 cursor-pointer">
                  Suggested revision →
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="lg:sticky lg:top-8">
            {getRightSideContent()}
          </div>
        </div>

        {/* Bottom Impact Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{currentSolution.metrics.timeReduction}</div>
            <div className="text-gray-600">Time Saved Daily</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{currentSolution.metrics.efficiency}</div>
            <div className="text-gray-600">Efficiency Increase</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{currentSolution.metrics.satisfaction}</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
