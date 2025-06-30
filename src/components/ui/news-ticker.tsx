"use client"

import { useState } from "react"

const universityNews = [
  { text: "New AI Research Lab Opening", type: "solid", color: "bg-purple-600" },
  { text: "Spring Registration Open", type: "outline", color: "border-blue-400" },
  { text: "Career Fair 2024", type: "solid", color: "bg-green-600" },
  { text: "Study Abroad Programs", type: "text", color: "text-gray-300" },
  { text: "Scholarship Deadline March 15", type: "outline", color: "border-yellow-400" },
  { text: "Innovation Competition", type: "solid", color: "bg-red-600" },
  { text: "Guest Lecture Series", type: "text", color: "text-gray-400" },
  { text: "Campus Sustainability Initiative", type: "outline", color: "border-teal-400" },
  { text: "Research Symposium 2024", type: "solid", color: "bg-indigo-600" },
  { text: "Student Housing Applications", type: "text", color: "text-gray-300" },
  { text: "Alumni Network Events", type: "outline", color: "border-pink-400" },
  { text: "Digital Library Expansion", type: "solid", color: "bg-blue-600" },
  { text: "Internship Opportunities", type: "outline", color: "border-orange-400" },
  { text: "Graduate Program Fair", type: "solid", color: "bg-cyan-600" },
  { text: "Campus Mental Health Week", type: "text", color: "text-gray-400" },
]

export default function NewsTicker() {


  // Create multiple rows of news items for continuous scrolling
  const createNewsRow = (startIndex: number, direction: "left" | "right") => {
    const items = []
    for (let i = 0; i < 20; i++) {
      const index = (startIndex + i) % universityNews.length
      items.push({ ...universityNews[index], id: `${direction}-${index}-${i}` })
    }
    return items
  }

  const getItemStyle = (item: any) => {
    const baseClasses =
      "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap mx-4 transition-all duration-300 hover:scale-105"

    switch (item.type) {
      case "solid":
        return `${baseClasses} ${item.color} text-white shadow-lg`
      case "outline":
        return `${baseClasses} border-2 ${item.color} text-white bg-gray-800/50 backdrop-blur-sm`
      case "text":
        return `${baseClasses} ${item.color} bg-gray-800/30 backdrop-blur-sm`
      default:
        return baseClasses
    }
  }

  return (
    <div
      className="w-full bg-gray-900 py-12 overflow-hidden relative"

    >
      {/* First row - scrolling left */}
      <div className="relative mb-6">
        <div className={`flex ${ "animate-scroll-left"}`}>
          {createNewsRow(0, "left").map((item) => (
            <div key={item.id} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {createNewsRow(0, "left").map((item) => (
            <div key={`dup-${item.id}`} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolling right */}
      <div className="relative mb-6">
        <div className={`flex ${"animate-scroll-right"}`}>
          {createNewsRow(5, "right").map((item) => (
            <div key={item.id} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {createNewsRow(5, "right").map((item) => (
            <div key={`dup-${item.id}`} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Third row - scrolling left slower */}
      <div className="relative">
        <div className={`flex ${ "animate-scroll-left-slow"}`}>
          {createNewsRow(10, "left").map((item) => (
            <div key={item.id} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {createNewsRow(10, "left").map((item) => (
            <div key={`dup-${item.id}`} className={getItemStyle(item)}>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* University branding */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-3">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-smooth"></div>
          <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">University News & Updates</span>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-smooth"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-smooth {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left 80s linear infinite;
        }
        
        .animate-pulse-smooth {
          animation: pulse-smooth 2s ease-in-out infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
        
        /* Smooth hover effects */
        .transition-all {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}
