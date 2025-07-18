import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Upload, FileText, User, Mail, Phone, MapPin, X } from "lucide-react";
import { useState, useRef } from "react";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  position: z.string().min(1, "Position is required"),
  experience: z.string().min(10, "Please provide details about your experience"),
  education: z.string().min(10, "Please provide your educational background"),
  skills: z.string().min(10, "Please list your relevant skills"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  portfolio: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  availability: z.string().min(1, "Please specify your availability"),
  salary: z.string().min(1, "Please specify your salary expectations"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApiResponse {
  success: boolean;
  message: string;
  application_id?: number;
}

const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const positionParam = searchParams.get("position") || "";
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // API base URL - adjust this based on your backend URL
  const API_BASE_URL = "http://localhost:8000/api";

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      position: positionParam,
      experience: "",
      education: "",
      skills: "",
      coverLetter: "",
      portfolio: "",
      linkedin: "",
      github: "",
      availability: "",
      salary: "",
      consent: false,
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const validFiles = Array.from(files).filter(file => {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a valid file type. Please upload PDF, DOC, or DOCX files.`,
          variant: "destructive",
        });
        return false;
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is too large. Please upload files smaller than 5MB.`,
          variant: "destructive",
        });
        return false;
      }

      return true;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
    
    if (validFiles.length > 0) {
      toast({
        title: "Files uploaded successfully",
        description: `${validFiles.length} file(s) uploaded.`,
      });
    }

    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    toast({
      title: "File removed",
      description: "File has been removed from your application.",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData object to match the backend's expected format
      const formData = new FormData();
      
      // Add all form fields
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('address', data.address);
      formData.append('position', data.position);
      formData.append('experience', data.experience);
      formData.append('education', data.education);
      formData.append('skills', data.skills);
      formData.append('coverLetter', data.coverLetter);
      formData.append('portfolio', data.portfolio || '');
      formData.append('linkedin', data.linkedin || '');
      formData.append('github', data.github || '');
      formData.append('availability', data.availability);
      formData.append('salary', data.salary);
      formData.append('consent', data.consent.toString());
      
      // Add files
      uploadedFiles.forEach((file, index) => {
        formData.append('files', file);
      });

      // Submit to backend
      const response = await fetch(`${API_BASE_URL}/job-application`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.detail || `HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: result.message,
        });
        
        // Reset form and files
        form.reset();
        setUploadedFiles([]);
        
        // Optionally redirect or show success message
        console.log("Application ID:", result.application_id);
      } else {
        throw new Error(result.message || "Application submission failed");
      }

    } catch (error) {
      console.error("Application submission error:", error);
      
      let errorMessage = "Failed to submit application. Please try again.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-8 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/careers" 
            className="inline-flex items-center space-x-2 text-legal-light-grey hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Careers</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apply for Position
          </h1>
          <p className="text-xl text-legal-light-grey">
            Join our team and help revolutionize legal technology
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-legal-black flex items-center space-x-2">
                <FileText className="h-6 w-6 text-legal-accent-brown" />
                <span>Job Application Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black flex items-center space-x-2">
                      <User className="h-5 w-5 text-legal-accent-brown" />
                      <span>Personal Information</span>
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>Email Address *</span>
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>Phone Number *</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Address *</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your full address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Position Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black">Position Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Applied For *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Database Engineer, Fullstack Developer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Immediate, 2 weeks notice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Salary Expectations *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., $120,000 - $140,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black">Professional Background</h3>
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Experience *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your relevant work experience, including job titles, companies, and key responsibilities..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Education *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List your educational background, degrees, certifications, and relevant coursework..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Technical Skills *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List your technical skills, programming languages, frameworks, tools, etc..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black">Cover Letter</h3>
                    
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Why do you want to work at LawgicHub? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black">Professional Links (Optional)</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Portfolio Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourportfolio.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub Profile</FormLabel>
                            <FormControl>
                              <Input placeholder="https://github.com/yourusername" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-legal-black flex items-center space-x-2">
                      <Upload className="h-5 w-5 text-legal-accent-brown" />
                      <span>Resume & Documents</span>
                    </h3>
                    
                    <div className="border-2 border-dashed border-legal-light-grey rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-legal-charcoal mx-auto mb-4" />
                      <p className="text-legal-charcoal mb-2">
                        <strong>Upload your resume and any supporting documents</strong>
                      </p>
                      <p className="text-sm text-legal-charcoal mb-4">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB each)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="border-legal-accent-brown text-legal-accent-brown hover:bg-legal-accent-brown hover:text-white"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Choose Files
                      </Button>
                    </div>

                    {/* Display uploaded files */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-legal-black">Uploaded Files:</h4>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-5 w-5 text-legal-accent-brown" />
                              <div>
                                <p className="text-sm font-medium text-legal-black">{file.name}</p>
                                <p className="text-xs text-legal-charcoal">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              I consent to the processing of my personal data for recruitment purposes *
                            </FormLabel>
                            <p className="text-xs text-legal-charcoal">
                              By checking this box, you agree that LawgicHub may process your personal information for recruitment purposes.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormMessage />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;