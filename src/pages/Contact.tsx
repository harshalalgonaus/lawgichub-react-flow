import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.detail || 'Failed to submit contact form');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit contact form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="text-legal-charcoal">
                      Support: lawgichub@aiomnivergesolutions.com
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
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
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="bg-legal-accent-brown/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-legal-accent-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-legal-black mb-2">
                      Visit Us
                    </h3>
                    <p className="text-legal-charcoal">
                      Lawgichub AI<br />
                      Mumbai, Govandi (East)<br />
                      B 113, Plot No 231,Arjun Centre,<br />
                      Mumbai, Maharashtra 400088, India
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
                      Monday - Friday: 8:00 AM - 6:00 PM IST
                    </p>
                    <p className="text-legal-charcoal mb-1">
                      Saturday: 9:00 AM - 2:00 PM IST
                    </p>
                    <p className="text-legal-charcoal">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-legal-black mb-6">
                  Send us a Message
                </h2>
                
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      disabled={isSubmitting}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
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