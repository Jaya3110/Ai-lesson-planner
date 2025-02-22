"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/LoginForm";
import LessonPlanForm from "@/components/LessonPlanForm";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password }); // Debug log
    if (email === "jayakrishna" && password === "selected") {
      setIsLoggedIn(true);
      toast({
        title: "Success",
        description: "Logged in successfully!",
        duration: 3000,
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials. Use demouser/demopass",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI Lesson Planner</h1>
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto">
            <LoginForm onLogin={handleLogin} />
          </div>
        ) : (
          <LessonPlanForm />
        )}
      </main>
    </div>
  );
}