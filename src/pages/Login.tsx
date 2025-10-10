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
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-legal-black mb-3">
              Welcome Back
            </h1>
            <p className="text-legal-grey">
              Sign in to access your LawgicHub AI account
            </p>
          </div>

          <Card className="border-legal-light-grey shadow-2xl">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-bold text-legal-black text-center">
                Sign In
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

                <div className="space-y-2">
                  <Label htmlFor="userName" className="text-legal-black font-medium">
                    User Name
                  </Label>
                  <div className="relative">
                    <CircleUserRound className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="userName"
                      type="text"
                      placeholder="Enter username"
                      className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                      {...register("userName")}
                    />
                  </div>
                  {errors.userName && (
                    <p className="text-sm text-destructive">{errors.userName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-legal-black font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 text-legal-grey -translate-y-1/2" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-11 h-11 border-legal-light-grey focus:border-legal-accent-brown focus:ring-legal-accent-brown"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      {...register("rememberMe")}
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-legal-grey cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-legal-accent-brown hover:text-legal-rich-brown transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-legal-accent-brown hover:bg-legal-rich-brown text-white font-semibold transition-all duration-200"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-legal-light-grey" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-legal-grey">
                      New to LawgicHub?
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/signup"
                    className="text-legal-accent-brown hover:text-legal-rich-brown transition-colors font-medium"
                  >
                    Create an account →
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