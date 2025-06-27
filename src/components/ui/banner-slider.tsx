"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Banner slide data
const bannerSlides = [
  {
    id: 1,
    title: "Shop Smart, We'll Do The Rest!",
    subtitle: "Discover amazing products with unbeatable quality",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Download Now",
  },
  {
    id: 2,
    title: "Fresh & Quality Products",
    subtitle: "Farm to table freshness delivered to your door",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Order Now",
  },
  {
    id: 3,
    title: "Premium Experience Awaits",
    subtitle: "Elevate your lifestyle with our curated selection",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore More",
  },
  {
    id: 4,
    title: "Innovation Meets Quality",
    subtitle: "Where technology and excellence come together",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started",
  },
]

// Rotating Learn More Button Component
function RotatingButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="relative w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
      >
        {/* Rotating border */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-white/50 via-transparent to-white/50 animate-spin"></div>

        {/* Inner content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <span className="text-sm font-medium mb-1">{text}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
      </button>
    </div>
  )
}

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const handleLearnMore = () => {
    console.log("Learn more clicked for slide:", bannerSlides[currentSlide].title)
  }

  return (
    <div className="relative w-full h-[50vh] overflow-hidden pt-2 ">
      {/* Banner Slides */}
      <div className="relative w-full h-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.backgroundImage || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-500/60 to-orange-400/70"></div>

              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
              {/* Left Content */}
              <div className="flex-1 max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">{slide.subtitle}</p>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
                >
                  {slide.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Right Content - Rotating Button */}
              <div className="hidden md:flex items-center justify-center">
                <RotatingButton text="Learn More" onClick={handleLearnMore} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Learn More Button */}
      <div className="absolute bottom-20 right-6 md:hidden z-20">
        <RotatingButton text="Learn More" onClick={handleLearnMore} />
      </div>
    </div>
  )
}
