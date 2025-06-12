import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  category: string
  price: number
  image: string
  attendees: number
  isFavorite?: boolean
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90">
            {event.category}
          </Badge>
        </div>
        <Button size="sm" variant="ghost" className="absolute top-4 right-4 bg-white/90 hover:bg-white">
          <Heart className={`h-4 w-4 ${event.isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
            {event.title}
          </CardTitle>
          <span className="text-lg font-bold text-green-600">${event.price}</span>
        </div>
        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <Link href={`/events/${event.id}`}>View Details</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/checkout">Register</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
