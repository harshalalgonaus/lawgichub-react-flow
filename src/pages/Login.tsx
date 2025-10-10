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
import { Mail, Lock, Building, CircleUserRound } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Checkbox } from "@/components/ui/checkbox";

const loginSchema = z.object({
  firmName: z.string().min(2,"Enter a valid Firm Name"),
  userName: z.string().min(2,"Enter a valid User Name address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const API_BASE_URL = "http://localhost:8000/api";
      
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firmName: data.firmName,
          userName: data.userName,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Login Successful",
          description: "Welcome back to LawgicHub AI.",
          variant: "default",
        });

        // Store token (assuming response contains a token)
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }

        // Redirect to dashboard or home page
        navigate("/");
      } else {
        throw new Error(result.message || "Authentication failed");
      }
    } catch (error) {
      toast({
        title: "Authentication Error",
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
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {/* <img
                src="/lawgichub_icon1.png"
                alt="LawgicHub AI"
                className="h-16 w-24 object-contain"
              /> */}
            </div>
            <h1 className="text-3xl font-bold text-legal-black mb-2">
              Welcome Back
            </h1>
            <p className="text-lg text-legal-brown">
              Sign in to your LawgicHub AI account
            </p>
          </div>

          <Card className="border-legal-light-grey shadow-xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold text-legal-black">
                Sign In
              </CardTitle>
              <CardDescription className="text-legal-grey">
                Enter your credentials to access your account
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
                  <Label htmlFor="password" className="text-legal-black font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10 border-legal-light-grey focus:border-legal-accent-brown"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      {...register("rememberMe")}
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-legal-grey">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-legal-accent-brown hover:text-legal-brown transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-legal-grey">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-legal-accent-brown hover:text-legal-brown transition-colors font-medium"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};