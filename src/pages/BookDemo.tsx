
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, Video } from "lucide-react";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo booking submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See LawgicHub AI in Action
          </h1>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            Book a personalized demo and discover how our AI-powered platform can transform your legal practice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Demo Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-legal-black mb-8">
                What You'll Learn
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Video className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Live Product Walkthrough
                    </h3>
                    <p className="text-legal-charcoal">
                      See our AI-powered case management, document automation, and analytics tools in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Customized Solutions
                    </h3>
                    <p className="text-legal-charcoal">
                      Learn how LawgicHub AI can be tailored to your specific practice areas and workflow needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Implementation Timeline
                    </h3>
                    <p className="text-legal-charcoal">
                      Understand the setup process, training requirements, and expected ROI for your firm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Q&A Session
                    </h3>
                    <p className="text-legal-charcoal">
                      Get answers to your specific questions about features, pricing, and integration capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 p-6 bg-legal-cream">
                <h3 className="text-xl font-semibold text-legal-black mb-4">
                  Demo Details
                </h3>
                <ul className="space-y-2 text-legal-charcoal">
                  <li>• Duration: 30-45 minutes</li>
                  <li>• Format: Video call via Zoom/Teams</li>
                  <li>• Materials: Demo recording & resources provided</li>
                  <li>• Follow-up: Personalized proposal within 24 hours</li>
                </ul>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-legal-black mb-6">
                  Book Your Demo
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Law Firm/Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="teamSize">Team Size</Label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 attorneys</option>
                      <option value="6-15">6-15 attorneys</option>
                      <option value="16-50">16-50 attorneys</option>
                      <option value="51-100">51-100 attorneys</option>
                      <option value="100+">100+ attorneys</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What challenges are you looking to solve? Which practice areas are you focused on?"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold py-3"
                  >
                    Schedule Demo
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDemo;
