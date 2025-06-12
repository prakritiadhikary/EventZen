import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredEvents = [
  {
    id: 1,
    title: "Live Concert",
    date: "Oct 15, 2023",
    category: "Music",
    image: "/placeholder.svg?height=200&width=300",
    description: "Amazing live music experience",
  },
  {
    id: 2,
    title: "Tech Innovators 2023",
    date: "Nov 1, 2023",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    description: "Latest in tech innovation",
  },
  {
    id: 3,
    title: "Gourmet Food Fest",
    date: "Dec 5, 2023",
    category: "Food",
    image: "/placeholder.svg?height=200&width=300",
    description: "Culinary delights await",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Welcome to EventZen</h1>
              <p className="text-xl mb-8 text-gray-200">
                Your one-stop platform for organizing and finding amazing events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="/events">Browse Events</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Link href="/create-event">Create Event</Link>
                </Button>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" size="sm">
                  Organizer
                </Button>
                <Button variant="secondary" size="sm">
                  Attendee
                </Button>
              </div>
            </div>
            <div className="bg-gray-600 rounded-lg h-80 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=320&width=500"
                alt="EventZen Hero"
                width={500}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
            <p className="text-gray-600 mb-8">Don't miss out on these exciting events happening soon!</p>
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-100 px-2 py-1 rounded text-sm">{event.category}</div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Fun!</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an organizer or an attendee, we've got events for everyone.
          </p>
          <Button asChild size="lg">
            <Link href="/auth">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organize an Event</h3>
                <p className="text-gray-600">Share your passion with others by organizing your own event.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discover New Events</h3>
                <p className="text-gray-600">Find exciting events never knew existed in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
