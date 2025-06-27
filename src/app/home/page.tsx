"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { Calendar, MapPin, Clock } from "lucide-react"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Slider from "@/components/ui/slider"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import NoticeBoard from "@/components/ui/notice-board"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import Image from "next/image"
import Carousel from "@/components/ui/carousel"
import { ChevronUp, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EventDetails {
  date: string
  location: string
  time: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  category: string
  status: string
  src: string
  ctaText: string
  content: string
  details?: EventDetails
  contact?: string
  likes: number
  comments: number
  shares: number
  isPinned?: boolean
}

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
]
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
)
const items = [
  {
    title: "Best In Field of AI/ML",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creativity and Innovation",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Placements at Fingertips",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
]

const sampleItems = [
  {
    id: "1",
    title: "Beautiful Landscape",
    description: "A stunning view of mountains and valleys",
    image: "/1.jpg",
  },
  {
    id: "2",
    title: "City Skyline",
    description: "Modern architecture against the evening sky",
    image: "/2.jpg",
  },
  {
    id: "3",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "/3.jpg",
  },
  {
    id: "4",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "/4.jpg",
  },
  {
    id: "5",
    title: "Adamas",
    description: "Peaceful waves crashing on the shore",
    image: "/5.jpg",
  },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeEvent, setActiveEvent] = useState<Event | null>(null)
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const [active, setActive] = useState<Event | boolean | null>(null)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const moreMenuItems = [
    { name: "Faculty", link: "#faculty", icon: "👨‍🏫" },
    { name: "Research", link: "#research", icon: "🔬" },
    { name: "Alumni", link: "#alumni", icon: "🎓" },
    { name: "Placements", link: "#placements", icon: "💼" },
    { name: "Library", link: "#library", icon: "📚" },
    { name: "Contact Us", link: "#contact", icon: "📞" },
  ]

  // Refs for scroll animations
  const heroRef = useRef(null)
  const eventsRef = useRef(null)
  const noticeRef = useRef(null)
  const featuresRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)

  // InView hooks for scroll animations
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" })
  const noticeInView = useInView(noticeRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Notice",
      link: "#contact",
    },
    {
      name: "Programs",
      link: "#contact",
    },
    {
      name: "Calendar",
      link: "#contact",
    },
    {
      name: "Infrastructure",
      link: "#contact",
    },
  ]

  const eventsByYear = {
    "2024": [
      {
        id: "1",
        title: "CodeFest 2024",
        description: "Annual Coding Competition",
        date: "March 15-16, 2024",
        time: "9:00 AM - 6:00 PM",
        venue: "Computer Lab A & B",
        category: "Competition",
        status: "upcoming",
        src: "/logo.png",
        ctaText: "Register Now",
        content:
          "CodeFest 2024 is the annual flagship coding competition organized by the Department of Computer Science. This 48-hour hackathon brings together the brightest minds from across the university to solve real-world problems through innovative technology solutions.",
        likes: 0,
        comments: 0,
        shares: 0,
      },
      {
        id: "2",
        title: "AI & Machine Learning Workshop",
        description: "Industry Expert Seminar",
        date: "February 28, 2024",
        time: "2:00 PM - 5:00 PM",
        venue: "Auditorium Hall",
        category: "Workshop",
        status: "completed",
        src: "/logo.png",
        ctaText: "View Materials",
        content:
          "Join us for an intensive workshop on Artificial Intelligence and Machine Learning conducted by industry experts. This hands-on session covers the fundamentals of neural networks, deep learning, and practical applications in industry.",
        likes: 0,
        comments: 0,
        shares: 0,
      },
    ],
    "2025": [
      {
        id: "3",
        title: "Research Symposium 2025",
        description: "Annual Research Conference",
        date: "March 10-12, 2025",
        time: "9:00 AM - 5:00 PM",
        venue: "Conference Hall",
        category: "Research",
        status: "upcoming",
        src: "/logo.png",
        ctaText: "Submit Paper",
        content:
          "The Annual Research Symposium brings together faculty, students, and industry experts to present and discuss cutting-edge research in computer science and engineering.",
        likes: 0,
        comments: 0,
        shares: 0,
      },
    ],
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center space-x-1">
            <NavItems items={navItems} />

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
                className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                <NavbarButton variant="primary">More</NavbarButton>
                <motion.svg
                  animate={{ rotate: isMoreDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isMoreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => setIsMoreDropdownOpen(true)}
                    onMouseLeave={() => setIsMoreDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50"
                  >
                    {moreMenuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.link}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-neutral-700 hover:text-blue-600 transition-all duration-200 group"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Apply Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero */}

      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex flex-col overflow-hidden"
      >
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-5xl font-bold text-shadow-blue-950 dark:text-blue-950">
                Adamas University
                <br />
                <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none text-blue-950">
                  Department Of Computer Science
                </span>
              </h1>
            </>
          }
        >
          {/* Auto-playing slider */}
          <div className="flex justify-center w-full h-full">
            <Slider items={sampleItems} autoPlay={true} autoPlayInterval={4000} />
          </div>
        </ContainerScroll>
      </motion.div>

      {/* Events Section */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Event Calendar</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest events and activities</p>
          </motion.div>

          {/* Event Modal */}
          <AnimatePresence>
            {activeEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setActiveEvent(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="relative">
                    <Image
                      src={activeEvent.src || "/placeholder.svg"}
                      alt={activeEvent.title}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <button
                      onClick={() => setActiveEvent(null)}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeEvent.title}</h3>
                    <p className="text-gray-600 mb-4">{activeEvent.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>{activeEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>{activeEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{activeEvent.venue}</span>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(activeEvent.status)}`}
                      >
                        {activeEvent.status.charAt(0).toUpperCase() + activeEvent.status.slice(1)}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{activeEvent.content}</p>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">{activeEvent.ctaText}</Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Events by Year */}
          <div className="space-y-12">
            {Object.entries(eventsByYear).map(([year, events]) => (
              <motion.div key={year} variants={fadeInUp}>
                <div className="flex items-center mb-8">
                  <h3 className="text-3xl font-bold text-blue-600 mr-4">{year}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>

                <div className="grid gap-6">
                  {events.map((event) => (
                    <Card
                      key={event.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                      onClick={() => setActiveEvent(event)}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <Image
                            src={event.src || "/placeholder.svg"}
                            alt={event.title}
                            width={150}
                            height={100}
                            className="w-full lg:w-32 h-32 rounded-lg object-cover flex-shrink-0"
                          />

                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                                <p className="text-gray-600 mb-3">{event.description}</p>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-blue-600" />
                                    <span>{event.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-blue-600" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                    <span>{event.venue}</span>
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
                                  >
                                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                  </span>
                                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                                    {event.category}
                                  </span>
                                </div>
                              </div>

                              <Button variant="outline" className="whitespace-nowrap bg-transparent">
                                {event.ctaText}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Notice Board */}
      <motion.div ref={noticeRef} initial="hidden" animate={noticeInView ? "visible" : "hidden"} variants={fadeInUp}>
        <NoticeBoard />
      </motion.div>

      {/* Feature Section */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="text-center bg-white"
      >
        <motion.header variants={fadeInUp} className="border-y-1 border-gray-300 p-2 bg-white text-center mb-4">
          <h1 className="text-2xl font-semibold m-2">Featured Section</h1>
        </motion.header>
        <motion.div variants={fadeInUp}>
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-6">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </motion.div>

      {/* Gallery */}
      <motion.div
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.header variants={fadeInUp} className="border-y-1 border-gray-300 p-2 bg-zinc-100 text-center mt-5">
          <h1 className="text-2xl font-semibold m-1">Gallery</h1>
        </motion.header>
        <motion.div variants={fadeInUp} className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </motion.div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.header variants={fadeInUp} className="border-y-1 border-gray-300 p-2 bg-zinc-100 text-center mt-5">
          <h1 className="text-2xl font-semibold m-1">Testimonials</h1>
        </motion.header>
        <motion.div variants={fadeInUp}>
          <div className="h-[40rem] flex flex-col antialiased bg-zinc-100 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          </div>
        </motion.div>
      </motion.div>
      <footer className="bg-black mx-auto  max-w-full px-0 pt-10">
        {/* Columns Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Logo */}
          <div className="hidden lg:block flex-shrink-0 grayscale">
            <Image src="/logo.png" alt="Adamas Logo" width={200} height={144} className="h-36 object-contain" />
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Explore Adamas</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">Colleges</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  History & Tours
                </li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Public Engagement
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Study With Us</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  UG Courses
                </li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Grad Programs
                </li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Online Learning
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Research</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Research Units
                </li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">Funding</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Impact Stories
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Connect</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                  Press Office
                </li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">Careers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Gradient Text */}
        <div className="relative w-full overflow-hidden select-none">
          <div className="overflow-hidden">
            <h1 className="text-[26.5vw] mt-4 md:mt-6 xl:mt-0 xl:text-[20rem] font-bold leading-none tracking-tighter text-center bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent overflow-hidden w-full">
              Adamas
            </h1>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200 pb-4">© 2025 Adamas University. All rights reserved.</div>
      </footer>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 bg-blue-900 text-white hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}
