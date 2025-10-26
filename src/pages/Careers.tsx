
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, DollarSign, Mail } from "lucide-react";
import exp from "constants";

const Careers = () => {
  const jobOpenings = [
    {
  id: 1,
  title: "Talent Acquisition Manager (HR)",
  department: "Core Team",
  location: "Mumbai / Bengaluru (Hybrid)",
  type: "Full-time",
  experience: "2-3 years",
  description: "Lead end-to-end recruitment and people operations for LawgicHub AI — India’s first AI Legal Infrastructure Platform. As part of the founding HR team, you’ll design and execute talent strategies, build the employer brand, and shape the culture that powers our AI-driven legal innovation.",
  responsibilities: [
    "Design and execute end-to-end recruitment strategies across engineering, product, legal, and operations roles",
    "Partner with founders and team leads to forecast hiring needs and define role requirements",
    "Source, screen, and evaluate candidates through LinkedIn, AngelList, GitHub, and other tech communities",
    "Build and maintain strong talent pipelines for AI, data, and SaaS roles",
    "Ensure an exceptional candidate experience from outreach to onboarding",
    "Drive employer branding initiatives across LinkedIn and hiring platforms",
    "Manage offer rollouts, negotiations, and onboarding processes",
    "Maintain HR documentation, systems, and compliance workflows",
    "Support company culture initiatives, retention programs, and performance frameworks"
  ],
  requirements: [
    "2–3 years of experience in Talent Acquisition or HR, preferably in a startup or tech environment",
    "Proven success in hiring for tech roles (AI / SaaS / Engineering / Product)",
    "Strong familiarity with modern recruitment tools (LinkedIn Recruiter, Naukri, AngelList, etc.)",
    "Excellent communication, stakeholder management, and negotiation skills",
    "Ability to assess both skill and cultural fit in startup environments",
    "Experience in employer branding and candidate engagement programs",
    "Bonus: Familiarity with AI, LegalTech, or technology domain hiring"
  ],
  benefits: [
    "Be part of the core founding team shaping one of India’s most ambitious AI startups",
    "Work directly with visionary founders and cross-domain experts in AI, law, and product",
    "Hybrid flexibility — remote collaboration with periodic onsite engagement",
    "Fast growth and early leadership opportunity in HR",
    "High ownership, impact, and potential early-stage ESOPs",
    "Help define the culture driving the future of AI-driven legal ecosystems"
  ]



    },
    {
  "id": 2,
  "title": "Social Media & Brand Marketing Head",
  "department": "Core Team",
  "location": "Mumbai / Bengaluru (Hybrid)",
  "type": "Full-time",
  "experience": "3-6 years",
  "description": "Lead the digital identity and brand presence of LawgicHub AI — India's first AI Legal Infrastructure Platform. As a strategic marketing leader, you'll define how India perceives the future of legal automation through compelling storytelling, B2B marketing, and thought leadership across all major digital channels.",
  "responsibilities": [
    "Build and execute comprehensive social media strategy to grow LawgicHub AI's brand across LinkedIn, Instagram, X, YouTube, and emerging platforms",
    "Manage content strategy, brand storytelling, and digital positioning aligned with company vision and product milestones",
    "Create and oversee campaigns for product launches, thought leadership content, founder interviews, and community engagement",
    "Work directly with founders to craft narratives highlighting innovation in LegalTech and AI",
    "Leverage LinkedIn network and industry connections to arrange interviews, press coverage, and influencer collaborations",
    "Establish partnerships with legal and AI marketing agencies for amplified reach",
    "Coordinate with design and video teams to produce high-quality visual content, reels, case studies, and product explainers",
    "Track analytics across all platforms and measure reach, engagement, lead generation, and conversion impact",
    "Build and manage relationships with external PR, media, and marketing agencies",
    "Strategically grow founder and brand LinkedIn profiles for credibility and industry influence"
  ],
  "requirements": [
    "3–6 years of experience in Social Media Management, Digital Marketing, or Brand Strategy, preferably for B2B SaaS, AI, or Tech brands",
    "Proven success in managing and growing LinkedIn pages and B2B brand visibility",
    "Hands-on experience with content strategy, influencer outreach, and performance marketing tools",
    "Deep understanding of LinkedIn algorithms, growth strategies, and engagement-building techniques",
    "Excellent writing, storytelling, and communication skills",
    "Strong industry connections for marketing collaborations, PR agencies, and media interviews",
    "Experience with marketing analytics, SEO basics, and digital reporting tools (Google Analytics, HubSpot, Hootsuite, Buffer, etc.)",
    "Bonus: Experience promoting AI or LegalTech products or working in startup ecosystems"
  ],
  "benefits": [
    "Lead brand and communication strategy for one of India's fastest-growing LegalTech AI startups",
    "Work directly with visionary founders and AI product teams shaping the future of law",
    "Hybrid work model with flexibility and in-person collaboration in Mumbai/Bengaluru",
    "High ownership role with rapid leadership growth opportunities and ESOP potential",
    "Be the voice that defines how India sees AI transforming the legal world",
    "Fast-paced startup environment with direct founder collaboration and strategic impact"
  ]
},
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
    },
    {
  "id": 6,
  "title": "Offline Marketing & Client Engagement Executive",
  "department": "Core Growth Team",
  "location": "Mumbai (Onsite / Field Role)",
  "type": "Full-time",
  "experience": "2–5 years",
  "description": "Be the on-ground face of LawgicHub AI, India’s first AI Legal Infrastructure Platform. As part of our Core Growth Team, you’ll lead client engagement and offline marketing initiatives across Mumbai’s legal ecosystem. This role blends marketing, business development, and relationship-building, empowering you to connect directly with lawyers, law firms, and enterprises to drive adoption of AI-driven legal solutions.",
  "responsibilities": [
    "Execute offline marketing campaigns and client outreach programs across Mumbai’s legal and corporate network",
    "Identify, connect, and engage with law firms, advocates, bar associations, and corporate legal departments for demos and trials",
    "Send personalized business invites and coordinate legal tech workshops and demo sessions",
    "Organize and represent LawgicHub AI at legal events, conferences, expos, and seminars",
    "Develop and distribute marketing materials, brochures, and event collaterals",
    "Maintain a strong network of legal professionals and institutions for brand advocacy and product awareness",
    "Collaborate with Sales and Product teams to align messaging and demonstrate key features effectively during meetings",
    "Generate qualified leads through in-person meetings, referrals, and field campaigns",
    "Collect client feedback and market insights to refine outreach and product strategy",
    "Work closely with the Social Media & Brand Marketing team to align offline and online campaigns"
  ],
  "requirements": [
    "2–5 years of experience in Offline Marketing, Business Development, or Field Sales, preferably in Tech, SaaS, or LegalTech sectors",
    "Strong communication, presentation, and interpersonal skills",
    "Established network within Mumbai’s legal or business community is a major plus",
    "Experience organizing events, product demos, and client meetings",
    "Proficiency in preparing business decks, proposals, and client communication",
    "Comfortable traveling within Mumbai for client visits and events",
    "Self-driven, confident, and passionate about technology and innovation",
    "Bonus: Prior experience working with legal professionals, startups, or SaaS platforms"
  ],
  "benefits": [
    "Be part of the core growth team of one of India’s fastest-growing AI LegalTech startups",
    "Engage directly with top lawyers, legal firms, and enterprise decision-makers",
    "Hybrid flexibility with ownership of on-ground marketing operations in Mumbai",
    "Competitive compensation with performance-based incentives for client conversions and partnerships",
    "Opportunity for rapid growth into Regional Marketing or Partnership Lead roles",
    "Work closely with visionary founders driving AI transformation in the legal sector"
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
                        <span>lawgichub@aiomnivergesolutions.com</span>
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
