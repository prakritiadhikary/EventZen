"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import NetworkingPanel from "@/components/networking-panel"
import { useChat } from "@/hooks/use-chat"
import { MessageCircle, BarChart3, Share2, Upload } from "lucide-react"

export default function NetworkingPage() {
  const { messages, sendMessage, isConnected } = useChat()
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">EventZen Networking</h1>

          {/* Hero Section */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to Networking!</h2>
                <p className="text-gray-600 mb-6">Connect and engage with fellow attendees.</p>
                <div className="flex justify-center gap-4">
                  <Button>View Polls</Button>
                  <Button variant="outline">Start Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Join the conversation with other attendees.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Poll/Survey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Share your thoughts and opinions!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Media Share
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Upload images or videos from the event.</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Live Chat */}
              <Card>
                <CardHeader>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Join the conversation with other attendees.</CardDescription>
                </CardHeader>
                <CardContent>
                  <NetworkingPanel messages={messages} onSendMessage={sendMessage} isConnected={isConnected} />
                </CardContent>
              </Card>

              {/* Attendee Chat */}
              <Card>
                <CardHeader>
                  <CardTitle>Attendee Chat</CardTitle>
                  <CardDescription>Discuss topics with your peers in real-time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 h-32 overflow-y-auto">
                    <p className="text-sm text-gray-500">Chat messages will appear here...</p>
                  </div>
                </CardContent>
              </Card>

              {/* Polls & Surveys */}
              <Card>
                <CardHeader>
                  <CardTitle>Polls & Surveys</CardTitle>
                  <CardDescription>Share your thoughts and opinions!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      <div>
                        <h4 className="font-medium">Event Feedback</h4>
                        <p className="text-sm text-gray-500">What do you think about today's event?</p>
                      </div>
                    </div>
                    <Button size="sm" className="ml-10">
                      Click here to participate!
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-yellow-200 rounded flex items-center justify-center">😊</div>
                      <div>
                        <h4 className="font-medium">Future Topics</h4>
                        <p className="text-sm text-gray-500">Suggest topics for future events</p>
                      </div>
                    </div>
                    <Button size="sm" className="ml-10">
                      Submit your ideas!
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Media Share */}
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Media</CardTitle>
                  <CardDescription>Upload images or videos from the event.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload More
                  </Button>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { type: "Image", title: "Networking Highlights", subtitle: "Shared Photos" },
                      { type: "Video", title: "Event Video", subtitle: "Uploaded Videos" },
                      { type: "Screenshot", title: "Chat Moments", subtitle: "Chat Snapshots" },
                    ].map((item, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="bg-gray-200 h-24 rounded mb-2 flex items-center justify-center">
                          <span className="text-sm text-gray-500">{item.type}</span>
                        </div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Message Footer */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Share your thoughts!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
