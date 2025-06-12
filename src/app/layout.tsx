import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EventZen - Your Event Management Platform",
  description: "Discover, organize, and attend amazing events with EventZen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="font-bold text-xl">EventZen</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                  <Link href="/events" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Events
                  </Link>
                  <Link href="/networking" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Networking
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search in site" className="pl-10 w-64" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/auth">Login</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/auth">Sign Up</Link>
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Suspense>{children}</Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">E</span>
                  </div>
                  <span className="font-bold text-xl">EventZen</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your one-stop platform for organizing and finding amazing events.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/events" className="block text-gray-400 hover:text-white transition-colors">
                    Browse Events
                  </Link>
                  <Link href="/create-event" className="block text-gray-400 hover:text-white transition-colors">
                    Create Event
                  </Link>
                  <Link href="/networking" className="block text-gray-400 hover:text-white transition-colors">
                    Networking
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/support" className="block text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 EventZen. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
