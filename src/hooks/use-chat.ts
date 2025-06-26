"use client"

import { useState, useEffect, useCallback } from "react"

interface Message {
  id: string
  user: string
  content: string
  timestamp: Date
  avatar?: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isConnected] = useState(true)

  const sendMessage = useCallback((content: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      user: "You",
      content,
      timestamp: new Date(),
      avatar: "/placeholder.svg?height=32&width=32",
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate receiving a response
    setTimeout(
      () => {
        const responses = [
          "That's a great point!",
          "I totally agree with you.",
          "Thanks for sharing that insight.",
          "Interesting perspective!",
          "Could you elaborate on that?",
          "That's exactly what I was thinking.",
        ]

        const responseMessage: Message = {
          id: Math.random().toString(36).substr(2, 9),
          user: "Event Attendee",
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
          avatar: "/placeholder.svg?height=32&width=32",
        }

        setMessages((prev) => [...prev, responseMessage])
      },
      1000 + Math.random() * 2000,
    )
  }, [])

  useEffect(() => {
    // Simulate initial messages
    const initialMessages: Message[] = [
      {
        id: "1",
        user: "Event Host",
        content: "Welcome everyone! Feel free to introduce yourselves and start networking.",
        timestamp: new Date(Date.now() - 300000),
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        id: "2",
        user: "Sarah Johnson",
        content: "Hi everyone! Excited to be here. Looking forward to the sessions today.",
        timestamp: new Date(Date.now() - 240000),
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        id: "3",
        user: "Mike Chen",
        content: "Great event so far! The keynote was really inspiring.",
        timestamp: new Date(Date.now() - 180000),
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ]

    setMessages(initialMessages)
  }, [])

  return {
    messages,
    sendMessage,
    isConnected,
  }
}
