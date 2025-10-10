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
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-legal-black mb-3">
              Create Your Account
            </h1>
            <p className="text-legal-grey">
              Join LawgicHub AI and transform your legal practice
            </p>
          </div>

          <Card className="border-legal-light-grey shadow-2xl">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-bold text-legal-black text-center">
                Sign Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="firmName" className="text-legal-black font-medium">
                    Firm Name
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="firmName"
                      type="text"
                      placeholder="Enter firm name"
                      className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                      {...register("firmName")}
                    />
                  </div>
                  {errors.firmName && (
                    <p className="text-sm text-destructive">{errors.firmName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-legal-black font-medium">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                        {...register("firstName")}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-legal-black font-medium">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                        {...register("lastName")}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-sm text-destructive">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userName" className="text-legal-black font-medium">
                    User Name
                  </Label>
                  <div className="relative">
                    <CircleUserRound className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="userName"
                      type="text"
                      placeholder="Choose a username"
                      className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                      {...register("userName")}
                    />
                  </div>
                  {errors.userName && (
                    <p className="text-sm text-destructive">{errors.userName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-legal-black font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-legal-black font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                        {...register("password")}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-legal-black font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                        {...register("confirmPassword")}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="agreeToTerms"
                    {...register("agreeToTerms")}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-legal-grey leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link to="/terms" className="text-legal-accent-brown hover:text-legal-rich-brown transition-colors font-medium">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-legal-accent-brown hover:text-legal-rich-brown transition-colors font-medium">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-legal-accent-brown hover:bg-legal-rich-brown text-white font-semibold transition-all duration-200"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-legal-light-grey" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-legal-grey">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/login"
                    className="text-legal-accent-brown hover:text-legal-rich-brown transition-colors font-medium"
                  >
                    Sign in instead →
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};