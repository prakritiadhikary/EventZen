"use client"

import { useState, useEffect, useMemo } from "react"
import { Event } from "@/types/event"

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Summer Music Fest",
    description: "An amazing outdoor music festival featuring top artists",
    date: "June 15, 2024, 5 PM",
    location: "San Francisco",
    category: "Outdoor",
    price: 75,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 1250,
    isFavorite: false,
  },
  {
    id: 2,
    title: "Annual Tech Summit",
    description: "Latest innovations and networking opportunities in tech",
    date: "July 22, 2024, 9 AM",
    location: "Online",
    category: "Conference",
    price: 150,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 850,
    isFavorite: true,
  },
  {
    id: 3,
    title: "International Art Expo",
    description: "Discover contemporary art from around the world",
    date: "August 10-12, 2024",
    location: "New York",
    category: "Exhibition",
    price: 45,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 2100,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Creative Workshop",
    description: "Hands-on workshop for creative professionals",
    date: "April 15, 2023",
    location: "Online",
    category: "Workshop",
    price: 25,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 150,
    isFavorite: false,
  },
  {
    id: 5,
    title: "Health & Wellness Expo",
    description: "Explore the latest in health and wellness",
    date: "April 20, 2023",
    location: "New York",
    category: "Exhibition",
    price: 35,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 500,
    isFavorite: true,
  },
]

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<{
    search?: string
    location?: string
    date?: string
    type?: string
  }>({})

  useEffect(() => {
    // Simulate API call
    const loadEvents = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setEvents(mockEvents)
      setIsLoading(false)
    }

    loadEvents()
  }, [])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (filters.search && !event.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }
      if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false
      }
      if (filters.type && filters.type !== "all" && event.category.toLowerCase() !== filters.type.toLowerCase()) {
        return false
      }
      return true
    })
  }, [events, filters])

  const updateFilters = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  return {
    events,
    filteredEvents,
    filters,
    updateFilters,
    isLoading,
  }
}
