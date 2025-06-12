"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/event-card"
import FilterBar from "@/components/filter-bar"
import { useEvents } from "@/hooks/use-events"

export default function EventsPage() {
  const { events, filteredEvents, filters, updateFilters, isLoading } = useEvents()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Upcoming Events</h1>
          <p className="text-gray-200 mb-8">Find events tailored for you.</p>
          <Button className="mb-8">Create Event</Button>

          <div className="flex justify-center gap-4 mb-8">
            <Button variant="secondary">All Events</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              My Events
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Favorites
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <FilterBar
            filters={filters}
            onFiltersChange={updateFilters}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                  <div className="bg-gray-200 h-48 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {!isLoading && filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No events found matching your criteria.</p>
              <Button onClick={() => updateFilters({})}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Art Gallery", desc: "Explore local artists", date: "April 22, 2023", icon: "🎨" },
              { title: "Music Fiesta", desc: "Enjoy live performances", date: "April 25, 2023", icon: "🎤" },
              { title: "Yoga Retreat", desc: "Relax and rejuvenate", date: "April 30, 2023", icon: "🧘" },
            ].map((event, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.desc}</p>
                <p className="font-medium">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
