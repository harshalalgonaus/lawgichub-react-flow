
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, DollarSign, Mail } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Database Engineer",
      department: "Engineering",
      location: "Mumbai, Maharashtra, India / Remote",
      type: "Full-time",
      description: "We are seeking a skilled Database Engineer to design, implement, and maintain robust database systems that power our AI-driven legal platform. You'll work with cutting-edge technologies to ensure optimal performance, scalability, and security of our data infrastructure.",
      responsibilities: [
        "Design and optimize database schemas for high-performance legal data processing",
        "Implement data migration strategies and backup/recovery procedures",
        "Monitor database performance and troubleshoot complex queries",
        "Collaborate with AI/ML teams to optimize data pipelines for legal analytics",
        "Ensure compliance with legal industry data security standards",
        "Manage database clusters and implement automated scaling solutions"
      ],
      requirements: [
        "5+ years of experience with PostgreSQL, MySQL, or similar RDBMS",
        "Strong experience with NoSQL databases (MongoDB, Redis, Elasticsearch)",
        "Proficiency in SQL optimization and database performance tuning",
        "Experience with cloud database services (AWS RDS, Google Cloud SQL)",
        "Knowledge of data warehousing concepts and ETL processes",
        "Familiarity with database security best practices and compliance standards",
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote-friendly culture",
        "Professional development budget and conference attendance",
        "401(k) with company matching"
      ]
    },
    {
      id: 2,
      title: "Fullstack Developer",
      department: "Engineering",
      location: "Mumbai, Maharashtra, India / Remote",
      type: "Full-time",
      description: "Join our engineering team as a Fullstack Developer to build intuitive, scalable web applications that revolutionize how legal professionals work. You'll contribute to both frontend user experiences and backend API development in our modern tech stack.",
      responsibilities: [
        "Develop responsive web applications using React, TypeScript, and modern frontend frameworks",
        "Build and maintain RESTful APIs using Node.js and Express",
        "Collaborate with UX/UI designers to implement pixel-perfect interfaces",
        "Integrate with AI/ML services and third-party legal APIs",
        "Write comprehensive tests and maintain high code quality standards",
        "Participate in code reviews and technical architecture discussions"
      ],
      requirements: [
        "3+ years of experience in fullstack web development",
        "Strong proficiency in React, TypeScript, and modern JavaScript",
        "Experience with Node.js, Express, and RESTful API development",
        "Familiarity with database technologies (PostgreSQL, MongoDB)",
        "Knowledge of cloud platforms (AWS, GCP) and containerization (Docker)",
        "Understanding of agile development methodologies",
        "Bachelor's degree in Computer Science or equivalent experience"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote-friendly culture",
        "Latest development tools and hardware",
        "Learning and development opportunities",
        "401(k) with company matching"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come Build With Us
          </h1>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            Be part of the revolution in legal technology. Help us build AI-powered solutions that transform how legal professionals work.
          </p>
          <div className="flex items-center justify-center space-x-8 text-legal-light-grey">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>20+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Remote-First</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5" />
              <span>Competitive Benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 bg-legal-cream">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-legal-black text-center mb-12">
            Why Choose a Career at LawgicHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-6 w-6 text-legal-accent-brown" />
                  <span>Innovate</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-legal-charcoal">
                  Work on smart legal tech solutions that transform the industry.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-legal-accent-brown" />
                  <span>Grow Continuously</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-legal-charcoal">
                  Access learning opportunities and career growth in a dynamic environment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-legal-accent-brown" />
                  <span>Collaborate & Thrive</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-legal-charcoal">
                  Join a supportive team that values creativity, diversity, and shared success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-legal-black text-center mb-12">
            Current Openings
          </h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader className="bg-legal-black text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-legal-light-grey">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 md:mt-0 bg-legal-accent-brown hover:bg-legal-brown"
                      onClick={() => window.location.href = `/job-application?position=${encodeURIComponent(job.title)}`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-legal-black mb-3">About the Role</h3>
                      <p className="text-legal-charcoal">{job.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-legal-black mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-legal-accent-brown mt-1">•</span>
                            <span className="text-legal-charcoal">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-legal-black mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-legal-accent-brown mt-1">•</span>
                            <span className="text-legal-charcoal">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-legal-black mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-legal-accent-brown mt-1">•</span>
                            <span className="text-legal-charcoal">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-legal-charcoal mb-4">
                        Ready to join our team? Send your resume and a brief cover letter explaining why you're excited about this role.
                      </p>
                      <div className="flex items-center space-x-2 text-legal-accent-brown">
                        <Mail className="h-4 w-4" />
                        <span>careers@lawgichub.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
