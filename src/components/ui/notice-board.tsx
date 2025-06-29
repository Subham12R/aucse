"use client"

import { useState } from "react"
import { Search, Heart, MessageCircle, Share2, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const styles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const announcements = [
  {
    id: 1,
    author: {
      name: "Md Tohid",
      avatar: "/logo.png",
      initials: "MT",
    },
    date: "1 Jan 2024",
    title: "Team Building Retreat",
    content:
      "Join us for a fun-filled Team Building Retreat! Strengthen bonds, boost teamwork, and enjoy interactive games and activities. Wear comfy clothes and bring your team spirit!",
    details: {
      date: "26th Dec 2024",
      location: "Dhaka, Mohakhali",
      time: "10:00 AM",
    },
    contact: "info@impalaintech.com",
    likes: 12,
    comments: 5,
    shares: 3,
    isPinned: false,
  },
  {
    id: 2,
    author: {
      name: "Esther Howard",
      avatar: "/logo.png",
      initials: "EH",
    },
    date: "2 hours",
    title: "Dear Sir and Colleagues,",
    content:
      "We would like to inform you that our business operations will remain closed on Sunday, 15th October 2023, on the Occasion of 'Durga Puja'. Please note that We will resume our business operations on Monday, 16th October 2023.",
    likes: 8,
    comments: 2,
    shares: 1,
    isPinned: true,
  },
  {
    id: 3,
    author: {
      name: "Dianne Russell",
      avatar: "/logo.png",
      initials: "DR",
    },
    date: "3 hours",
    title: "Annual Awards Night",
    content:
      "🏆 Annual Awards Night - Celebrating Excellence! 🏆\n\nJoin us for an evening of celebration, awards, entertainment, and dinner! Let's honor our top performers and make unforgettable memories together.",
    details: {
      date: "1st Jan 2024",
      location: "Dhanmondi",
      time: "10:00 AM",
    },
    contact: "info@impalaintech.com",
    likes: 15,
    comments: 8,
    shares: 5,
    isPinned: false,
  },
    {
    id: 4,
    author: {
      name: "Dianne Russell",
      avatar: "/logo.png",
      initials: "DR",
    },
    date: "3 hours",
    title: "Annual Awards Night",
    content:
      "🏆 Annual Awards Night - Celebrating Excellence! 🏆\n\nJoin us for an evening of celebration, awards, entertainment, and dinner! Let's honor our top performers and make unforgettable memories together.",
    details: {
      date: "1st Jan 2024",
      location: "Dhanmondi",
      time: "10:00 AM",
    },
    contact: "info@impalaintech.com",
    likes: 15,
    comments: 8,
    shares: 5,
    isPinned: false,
  },
]

export default function NoticeBoard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.author.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">

            <div>
              <h1 className="text-lg font-semibold text-gray-900">Departmental Notice Board</h1>
            </div>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full">Read More</Button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search or type a command"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full max-w-md border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">⌘F</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Notices</h2>
        </div>

        {/* Announcements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 h-fit"
            >
              <CardContent className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={announcement.author.avatar || "/logo.png"}
                        alt={announcement.author.name}
                      />
                      <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                        {announcement.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{announcement.author.name}</h3>
                      <p className="text-xs text-gray-500">{announcement.date}</p>
                    </div>
                  </div>
                  {announcement.isPinned && (
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">Pinned</div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">{announcement.title}</h4>
                  <p className="text-gray-700 text-sm line-clamp-3 whitespace-pre-line">{announcement.content}</p>
                </div>

                {/* Event Details */}
                {announcement.details && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{announcement.details.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{announcement.details.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{announcement.details.time}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                {announcement.contact && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-600">
                      Contact:{" "}
                      <a href={`mailto:${announcement.contact}`} className="text-blue-600 hover:underline">
                        {announcement.contact}
                      </a>
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(announcement.id)}
                      className={`flex items-center space-x-1 text-xs transition-colors ${
                        likedPosts.includes(announcement.id) ? "text-red-500" : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`h-3 w-3 ${likedPosts.includes(announcement.id) ? "fill-current" : ""}`} />
                      <span>{announcement.likes + (likedPosts.includes(announcement.id) ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-3 w-3" />
                      <span>{announcement.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-500 transition-colors">
                      <Share2 className="h-3 w-3" />
                      <span>{announcement.shares}</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No announcements found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
