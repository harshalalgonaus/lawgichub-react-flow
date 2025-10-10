
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, DollarSign, Mail } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Data Platform Manager",
      department: "Core Team",
      location: "Mumbai / Bengaluru (Hybrid)",
      type: "Full-time",
      experience: "2-3 years",
      description: "Own and manage our end-to-end data platform, enabling clean, structured, and queryable legal data pipelines that fuel AI-driven features like case reasoning, legal search, and predictive analytics.",
      responsibilities: [
        "Design and maintain data ingestion, cleaning, and transformation pipelines for multi-source legal datasets (judgments, acts, filings, etc.)",
        "Manage and optimize data warehousing and indexing systems (PostgreSQL, ElasticSearch, BigQuery, etc.)",
        "Implement data versioning, lineage tracking, and schema governance across structured and unstructured data sources",
        "Collaborate with AI engineers to feed training data pipelines for NLP and reasoning models",
        "Develop internal APIs and microservices for data access and analytics",
        "Ensure security, compliance, and confidentiality in handling sensitive legal data (especially per Indian law)",
        "Work closely with backend and AI teams to deliver real-time query systems and data dashboards"
      ],
      requirements: [
        "2-3 years of experience in data engineering or platform management",
        "Strong in SQL/NoSQL, Python, and data orchestration tools (Airflow, Prefect, Dagster)",
        "Experience with data pipelines, ETL, and API integrations",
        "Familiarity with AWS/GCP data stack (S3, Redshift, BigQuery, Lambda)",
        "Basic understanding of data security, encryption, and access control policies",
        "Bonus: Exposure to legal datasets, NLP preprocessing, or vector databases (Pinecone, FAISS, Milvus)"
      ],
      benefits: [
        "Be part of India's first full-stack AI Legal Infrastructure Platform",
        "Work with a core founding team blending AI, law, and data science",
        "Hybrid flexibility + rapid ownership in early-stage product scaling",
        "Early-stage ESOP potential",
        "Build systems that redefine how legal work is automated in India"
      ]
    },
    {
      id: 2,
      title: "Backend Infrastructure Engineer",
      department: "Core Team",
      location: "Mumbai / Bengaluru (Hybrid)",
      type: "Full-time",
      experience: "2-3 years",
      description: "Build the backend infrastructure and microservices that power our AI reasoning engines, legal workflow automation, and data exchange systems. This role sits at the intersection of system design, cloud architecture, and AI integration.",
      responsibilities: [
        "Design and develop scalable backend systems supporting AI-based document reasoning and case processing",
        "Build RESTful and GraphQL APIs to connect front-end apps, data services, and AI models",
        "Architect and maintain microservice-based systems with robust fault tolerance and monitoring",
        "Implement auth layers, rate limiting, and API gateways for secure multi-tenant operations",
        "Optimize inference serving for LLMs and reasoning pipelines using async workers / caching layers",
        "Collaborate with DevOps for CI/CD, containerization (Docker, Kubernetes), and load balancing",
        "Work closely with Data Platform and AI teams for tight integration of backend and data workflows"
      ],
      requirements: [
        "2-3 years of experience in backend development and infrastructure",
        "Strong in Python / Node.js / Go (Python preferred)",
        "Solid understanding of FastAPI, Django, or Flask frameworks",
        "Experience with microservices, Docker, Kubernetes, and cloud deployment (AWS/GCP)",
        "Proficiency in API design, scaling, and system monitoring (Grafana, Prometheus)",
        "Knowledge of message brokers (RabbitMQ, Kafka)",
        "Bonus: Exposure to AI model integration (LangChain, OpenAI, Hugging Face)"
      ],
      benefits: [
        "Work on real-world AI infrastructure challenges in LegalTech",
        "Join a founding-level engineering team building scalable, intelligent systems",
        "Hybrid flexibility, high ownership, and early ESOP potential",
        "Contribute to an ecosystem reshaping how justice and automation converge"
      ]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Core Team",
      location: "Mumbai / Bengaluru (Hybrid)",
      type: "Full-time",
      experience: "2-3 years",
      description: "Build the front-to-back experience that makes LawgicHub AI the most advanced legal assistant and automation engine. Own features end-to-end — from designing intuitive UI components to building high-performance backend APIs and databases.",
      responsibilities: [
        "Design, build, and maintain scalable web applications with clean and reusable codebases",
        "Develop RESTful / GraphQL APIs and integrate them with backend microservices",
        "Implement frontend interfaces for AI-driven workflows (case builder, document drafts, argument simulator, etc.)",
        "Work on authentication, authorization, and secure data flow across modules",
        "Optimize performance and ensure responsive UI/UX across devices",
        "Collaborate with the design team for component-based architectures using React + Tailwind / Next.js",
        "Integrate AI endpoints (LLMs, reasoning modules, embeddings) for real-time features",
        "Participate in code reviews, CI/CD setup, and cloud deployments (AWS / GCP / Render / Vercel)",
        "Ensure system reliability, scalability, and fault tolerance"
      ],
      requirements: [
        "2-3 years of experience in full stack web development",
        "Strong in JavaScript / TypeScript, React / Next.js, and Python (FastAPI / Django)",
        "Solid understanding of REST APIs, PostgreSQL / MongoDB, and data modeling",
        "Experience with state management (Redux / Zustand) and component design",
        "Proficiency in Docker, Git, and CI/CD pipelines",
        "Experience in secure authentication (JWT / OAuth2)",
        "Familiarity with AI or SaaS product integrations is a plus",
        "Bonus: Knowledge of LangChain, OpenAI API, or prompt engineering"
      ],
      benefits: [
        "Be part of a founding engineering team shaping LegalTech AI in India",
        "Work on cutting-edge AI + SaaS integrations that redefine how legal work is done",
        "Hybrid flexibility, early-stage ESOP potential, and strong ownership",
        "Collaborate with experts from law, AI, and finance domains",
        "Build technology that will digitally empower the justice ecosystem"
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
