import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Scale, Mail, Lock, User, Building, CircleUserRound } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Checkbox } from "@/components/ui/checkbox";

const signupSchema = z.object({
  firmName: z.string().min(2,"Enter a valid Firm Name"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  userName: z.string().min(2, "User Name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const API_BASE_URL = "http://localhost:8000/api";
      
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firmName: data.firmName,
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "Your account has been created successfully. Please sign in to continue.",
          variant: "default",
        });

        // Redirect to login page
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      toast({
        title: "Registration Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-legal-cream via-white to-legal-light-grey">
      <Navigation />
      <div className="h-16"></div> {/* Empty space for navigation bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {/* <img
                src="/lawgichub_icon1.png"
                alt="LawgicHub AI"
                className="h-16 w-24 object-contain"
              /> */}
            </div>
            <h1 className="text-3xl font-bold text-legal-black mb-2">
              Create Your Account
            </h1>
            <p className="text-lg text-legal-brown">
              Join LawgicHub AI and revolutionize your legal practice
            </p>
          </div>

          <Card className="border-legal-light-grey shadow-xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold text-legal-black">
                Sign Up
              </CardTitle>
              <CardDescription className="text-legal-grey">
                Fill in the details below to create your LawgicHub AI account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                   <div className="space-y-2">
                    <Label htmlFor="firmName" className="text-legal-black font-medium">
                      Firm Name
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="firmName"
                        type="text"
                        placeholder="Firm Name"
                        className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                        {...register("firmName")}
                      />
                    </div>
                    {errors.firmName && (
                      <p className="text-sm text-red-600">{errors.firmName.message}</p>
                    )}
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-legal-black font-medium">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                        {...register("firstName")}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-legal-black font-medium">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                        {...register("lastName")}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userName" className="text-legal-black font-medium">
                    User Name
                  </Label>
                  <div className="relative">
                    <CircleUserRound className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="userName"
                      type="text"
                      placeholder="User Name"
                      className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                      {...register("userName")}
                    />
                  </div>
                  {errors.userName && (
                    <p className="text-sm text-red-600">{errors.userName.message}</p>
                  )}
                </div>    
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-legal-black font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-legal-black font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-legal-black font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                      {...register("confirmPassword")}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    {...register("agreeToTerms")}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-legal-grey leading-normal">
                    I agree to the{" "}
                    <Link to="/terms" className="text-legal-accent-brown hover:text-legal-brown transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-legal-accent-brown hover:text-legal-brown transition-colors">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-legal-grey">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-legal-accent-brown hover:text-legal-brown transition-colors font-medium"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <Scale className="h-8 w-8 text-legal-accent-brown" />
            </div>
            <h3 className="text-lg font-semibold text-legal-black mb-2">
              Why Choose LawgicHub AI?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-legal-accent-brown/10 p-3 rounded-lg w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-legal-accent-brown" />
                </div>
                <h4 className="font-medium text-legal-black mb-1">AI-Powered</h4>
                <p className="text-sm text-legal-grey">Advanced legal AI tools</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-accent-brown/10 p-3 rounded-lg w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <User className="h-6 w-6 text-legal-accent-brown" />
                </div>
                <h4 className="font-medium text-legal-black mb-1">Secure</h4>
                <p className="text-sm text-legal-grey">Enterprise-grade security</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-accent-brown/10 p-3 rounded-lg w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-legal-accent-brown" />
                </div>
                <h4 className="font-medium text-legal-black mb-1">Support</h4>
                <p className="text-sm text-legal-grey">24/7 expert support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};