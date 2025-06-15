
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
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
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            Have questions about LawgicHub AI? We're here to help. Reach out to our team and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-legal-black mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Email Us
                    </h3>
                    <p className="text-legal-charcoal mb-1">
                      General inquiries: info@lawgichub.com
                    </p>
                    <p className="text-legal-charcoal mb-1">
                      Sales: sales@lawgichub.com
                    </p>
                    <p className="text-legal-charcoal">
                      Support: support@lawgichub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Call Us
                    </h3>
                    <p className="text-legal-charcoal mb-1">
                      Sales: +1 (555) 123-4567
                    </p>
                    <p className="text-legal-charcoal">
                      Support: +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Visit Us
                    </h3>
                    <p className="text-legal-charcoal">
                      123 Legal Tech Avenue<br />
                      Suite 500<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Business Hours
                    </h3>
                    <p className="text-legal-charcoal mb-1">
                      Monday - Friday: 8:00 AM - 6:00 PM PST
                    </p>
                    <p className="text-legal-charcoal mb-1">
                      Saturday: 9:00 AM - 2:00 PM PST
                    </p>
                    <p className="text-legal-charcoal">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-legal-cream">
                <h3 className="text-xl font-semibold text-legal-black mb-4">
                  Quick Response Times
                </h3>
                <ul className="space-y-2 text-legal-charcoal">
                  <li>• Sales inquiries: Within 2 hours</li>
                  <li>• General questions: Within 24 hours</li>
                  <li>• Technical support: Within 4 hours</li>
                  <li>• Partnership opportunities: Within 48 hours</li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-legal-black mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="demo">Product Demo Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold py-3"
                  >
                    Send Message
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

export default Contact;
