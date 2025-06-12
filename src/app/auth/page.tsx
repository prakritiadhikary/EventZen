"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/use-auth"
import { Shield, Headphones, Zap } from "lucide-react"

export default function AuthPage() {
  const { login, signup, isLoading } = useAuth()
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    aadhaar: "",
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(loginForm.email, loginForm.password)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    await signup(signupForm.name, signupForm.email, signupForm.password)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to EventZen</h1>
          <p className="text-gray-600 mb-8">Your one-stop solution for event management.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Auth Forms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Login */}
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Please enter your credentials.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button type="button" variant="link" className="p-0">
                      Forgot Password?
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Sign-Up</CardTitle>
                <CardDescription>Join us today.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <Label htmlFor="signup-name">Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="Enter your name"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm((prev) => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-aadhaar">Aadhaar Number</Label>
                    <Input
                      id="signup-aadhaar"
                      placeholder="Enter your Aadhaar number"
                      value={signupForm.aadhaar}
                      onChange={(e) => setSignupForm((prev) => ({ ...prev, aadhaar: e.target.value }))}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventZen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Our interface is user-friendly and easy to navigate.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Your information is securely stored and processed.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">We provide 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            Join thousands of users already making the most of EventZen for their events.
          </p>
        </div>
      </section>
    </div>
  )
}
