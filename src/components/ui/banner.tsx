"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const bannerData = [
  {
    id: 1,
    title: "Computer Science Excellence",
    subtitle: "Innovation in Technology",
    image: "/banner1.svg?height=400&width=800&text=CS+Department",
    color: "#10B981",
  },
  {
    id: 2,
    title: "Research & Development",
    subtitle: "Pushing Boundaries",
    image: "/banner1.png?height=400&width=800&text=Research+Lab",
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "Campus Life",
    subtitle: "Student Experience",
    image: "/banner1.svg?height=400&width=800&text=Campus+Life",
    color: "#8B5CF6",
  },
  {
    id: 4,
    title: "Global Partnerships",
    subtitle: "International Collaboration",
    image: "/banner1.png?height=400&width=800&text=Global+Network",
    color: "#F59E0B",
  },
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-screen lg:w-full h-[50vh] lg:h-[80vh] overflow-hidden bg-gray-100">
      {/* Main slider container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {bannerData.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />


          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-900/20 hover:bg-zinc-900/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-900/20 hover:bg-zinc-900/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-zinc-900/20 hover:bg-zinc-900/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20 group"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-500 scale-125 shadow-lg" : "bg-zinc-900/20 hover:bg-zinc-900/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 left-4">
        <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
          <span className="text-white font-mono text-sm">
            {String(currentSlide + 1).padStart(2, "0")} / {String(bannerData.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-green-400 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / bannerData.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
