
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Award, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-legal-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Lawgichub AI
          </h1>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            We're revolutionizing legal practice through intelligent technology, empowering lawyers to deliver exceptional results while focusing on what matters most.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-legal-black mb-6">Our Story</h2>
              <p className="text-legal-grey mb-4 leading-relaxed">
                Founded by legal professionals who understood the challenges of modern law practice, Lawgichub AI was born from a simple yet powerful vision: to make advanced legal technology accessible to every lawyer.
              </p>
              <p className="text-legal-grey mb-4 leading-relaxed">
                We recognized that legal professionals spend countless hours on repetitive tasks that could be automated, leaving less time for strategic thinking and client service. Our platform addresses this challenge by providing intelligent tools that enhance productivity without compromising quality.
              </p>
              <p className="text-legal-grey leading-relaxed">
                Today, we serve legal professionals worldwide, from solo practitioners to large firms, helping them streamline their workflows and deliver better outcomes for their clients.
              </p>
            </div>
            <div className="bg-legal-black p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-legal-accent-brown mb-2">10K+</div>
                  <div className="text-legal-light-grey">Legal Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-legal-accent-brown mb-2">50+</div>
                  <div className="text-legal-light-grey">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-legal-accent-brown mb-2">1M+</div>
                  <div className="text-legal-light-grey">Cases Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-legal-accent-brown mb-2">99%</div>
                  <div className="text-legal-light-grey">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-legal-black text-center mb-12">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Legal-First Approach</h3>
                <p className="text-legal-grey leading-relaxed">
                  Built by lawyers, for lawyers. We understand the unique challenges and requirements of legal practice.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Proven Excellence</h3>
                <p className="text-legal-grey leading-relaxed">
                  Award-winning platform trusted by thousands of legal professionals worldwide.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Global Impact</h3>
                <p className="text-legal-grey leading-relaxed">
                  Serving legal professionals across multiple jurisdictions with localized solutions.
                </p>
              </Card>
            </div>
          </div>

          {/* Our Commitment */}
          <Card className="p-8 bg-white">
            <h2 className="text-3xl font-bold text-legal-black text-center mb-8">Our Commitment</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-legal-grey mb-6 leading-relaxed">
                We're committed to continuously innovating and improving our platform to meet the evolving needs of the legal profession. Our dedicated team works tirelessly to ensure that every feature we develop adds real value to your practice.
              </p>
              <p className="text-legal-grey mb-8 leading-relaxed">
                Security, reliability, and user experience are at the core of everything we do. We maintain the highest standards of data protection and platform performance to give you peace of mind.
              </p>
              <Link to="/contact">
                <Button className="bg-legal-accent-brown hover:bg-legal-brown text-white px-8 py-3">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
