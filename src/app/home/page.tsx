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
import BannerSlider from "@/components/ui/banner"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, type Variants, easeInOut } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import Scroll from "@/components/ui/scroll"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"
import Image from "next/image"
import Carousel from "@/components/ui/carousel"
import Component from "@/components/ui/university-section"
import VisionMissionStory from "@/components/ui/vision-mission-story"
import { Timeline } from "@/components/ui/timeline"
import TestimonialCarousel from "@/components/ui/TestimonialCarousel"
import {
  GraduationCap,
  Calendar,
  Microscope,
  Users,
  Briefcase,
  MapPin,
  BookOpen,
  HeadphonesIcon,
  Library,
  Trophy,
  Globe,
  ChevronRight,
  ArrowRight, 
  Bell,
  ArrowUp,
} from "lucide-react"
import NoticeBoard from "@/components/ui/notice-board"


{
  /* Footer Logic*/
}

const slideData = [
  {
    title: "Vibrant Campus",
    button: "Explore",
    src: "/1.jpg",
  },
  {
    title: "Achievements",
    button: "Explore",
    src: "/2.jpg",
  },
  {
    title: "NAAC A",
    button: "Explore",
    src: "/3.jpg",
  },
  {
    title: "Eco Friendly Environment",
    button: "Explore",
    src: "/4.jpg",
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 "></div>
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
    image: "/banner1.png",
  },
  {
    id: "2",
    title: "City Skyline",
    description: "Modern architecture against the evening sky",
    image: "/banner2.png",
  },
  {
    id: "3",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "/banner1.png",
  },
  {
    id: "4",
    title: "Ocean Waves",
    description: "Peaceful waves crashing on the shore",
    image: "/7.jpg",
  },
  {
    id: "5",
    title: "Adamas",
    description: "Peaceful waves crashing on the shore",
    image: "/5.jpg",
  },
]

export default function HomePage() {
  <Scroll />
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false) // <-- Add state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowBackToTop(window.scrollY > 200) // Show button after 200px scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const words = ["Excellence", "Prestige", "Innovation", "Creativity"]

  type EventYear = keyof typeof eventsByYear // "2024" | "2025"
  type EventType = (typeof eventsByYear)[EventYear][number]

  const [active, setActive] = useState<EventType | boolean | null>(null)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Enhanced dropdown menu items organized in three grids
  const dropdownSections = [
    {
      title: "Academic",
      gradient: "from-blue-500 to-purple-600",
      items: [
        {
          name: "Faculty",
          link: "https://www.aucse.in/people",
          icon: GraduationCap,
          description: "Meet our expert faculty",
        },
        {
          name: "Timetable",
          link: "https://www.aucse.in/timetable",
          icon: Calendar,
          description: "Class schedules & timing",
        },
        {
          name: "Research",
          link: "https://www.aucse.in/more/research",
          icon: Microscope,
          description: "Cutting-edge research",
        },
        { name: "Library", link: "#", icon: Library, description: "Digital & physical resources" },
      ],
    },
    {
      title: "Student Life",
      gradient: "from-green-500 to-teal-600",
      items: [
        {
          name: "Alumni",
          link: "https://www.aucse.in/people/alumni",
          icon: Users,
          description: "Connect with graduates",
        },
        {
          name: "Placements",
          link: "https://www.aucse.in/more/placement",
          icon: Briefcase,
          description: "Career opportunities",
        },
        { name: "Campus Life", link: "#", icon: MapPin, description: "Student activities & events" },
        { name: "Achievements", link: "#", icon: Trophy, description: "Student accomplishments" },
      ],
    },
    {
      title: "Resources",
      gradient: "from-orange-500 to-red-600",
      items: [
        { name: "Explore", link: "https://www.aucse.in/more", icon: Globe, description: "Discover more features" },
        { name: "Our Team", link: "./dev", icon: Users, description: "Development team" },
        { name: "Support", link: "#", icon: HeadphonesIcon, description: "Get help & assistance" },
        { name: "Resources", link: "#", icon: BookOpen, description: "Study materials & guides" },
      ],
    },
  ]

  // Refs for scroll animations
  const heroRef = useRef(null)
  const eventsRef = useRef(null)
  const storyRef = useRef(null)
 
  const featuresRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)

  // InView hooks for scroll animations
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" })

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })

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
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
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
      link: "https://www.aucse.in/About-Us",
    },
    {
      name: "Notice",
      link: "#contact",
    },
    {
      name: "Programs",
      link: "https://www.aucse.in/programs",
    },
    {
      name: "Calendar",
      link: "https://www.aucse.in/calendar",
    },
    {
      name: "Infrastructure",
      link: "https://www.aucse.in/infrastructure",
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
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center space-x-1">
            <NavItems items={navItems} />

            {/* Enhanced More Dropdown */}
            <div className="absolute top-0 right-20 flex items-center">
              <button
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
                className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                <NavbarButton variant="secondary">More</NavbarButton>
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
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onMouseEnter={() => setIsMoreDropdownOpen(true)}
                    onMouseLeave={() => setIsMoreDropdownOpen(false)}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[800px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Explore More</h3>
                      <p className="text-blue-100 text-sm">Discover all the resources and opportunities available</p>
                    </div>

                    {/* Three Grid Sections */}
                    <div className="grid grid-cols-3 gap-0">
                      {dropdownSections.map((section, sectionIndex) => (
                        <motion.div
                          key={section.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: sectionIndex * 0.1 }}
                          className="p-6 border-r border-neutral-200 dark:border-neutral-700 last:border-r-0"
                        >
                          {/* Section Header */}
                          <div className={`bg-gradient-to-r ${section.gradient} p-3 rounded-lg mb-4`}>
                            <h4 className="text-white font-semibold text-sm text-center">{section.title}</h4>
                          </div>

                          {/* Section Items */}
                          <div className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <motion.a
                                key={item.name}
                                href={item.link}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-neutral-50 hover:to-neutral-100 dark:hover:from-neutral-800 dark:hover:to-neutral-700 transition-all duration-300 transform hover:scale-[1.02]"
                              >
                                <div
                                  className={`p-2 rounded-lg bg-gradient-to-r ${section.gradient} group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <item.icon className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </h5>
                                    <ChevronRight className="h-3 w-3 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                  </div>
                                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-tight">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-4 text-center">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Need help?{" "}
                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                          Contact Support
                        </a>
                      </p>
                    </div>
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
      <div className="h-auto mt-0 top-0 relative flex justify-center items-center">
        <BannerSlider />
      </div>
      {/* Notice Section */}
      <header className="flex justify-between items-center m-4 mx-6 p-6 rounded-2xl border border-slate-200/50  transition-all duration-300 ">
        <div className="flex flex-col group cursor-pointer">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-600 font-semibold tracking-wide uppercase group-hover:text-blue-700 transition-colors duration-300">
              Our Notices
            </span>
            <Bell className="w-4 h-4 text-blue-500 group-hover:animate-bounce" />
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            Recent Updates
          </h1>

          <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-1"></div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-slate-600">Live Updates</span>
          </div>

          <Button
            variant="outline"
            className="group relative overflow-hidden bg-white/50 border-slate-200 hover:border-blue-300 hover:bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span className="relative z-10 font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Explore More
            </span>
            <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </header>
        <NoticeBoard />
      {/* About */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <VisionMissionStory />
      </motion.section>

      {/* Events Section replaced with Timeline */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        {/* Event Calender*/}
        <Timeline
          data={Object.entries(eventsByYear).flatMap(([year, events]) =>
            events.map((event) => ({
              title: `${event.title} (${year})`,
              content: (
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1 font-semibold">
                    {event.date} | {event.time} | {event.venue}
                  </div>
                  <div className="mb-2 text-base text-gray-800 font-medium">{event.description}</div>
                  <div className="mb-2 text-gray-700 text-sm">{event.content}</div>
                  <div className="flex gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1">
                    {event.ctaText}
                  </Button>
                </div>
              ),
            })),
          )}
        />
      </motion.section>



      {/* Feature Section */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="text-center bg-white"
      >
        <motion.header variants={fadeInUp} className="p-2 bg-white text-start mt-4 mb-4">

      <header className="flex justify-between items-center m-4 mx-6 p-6 rounded-2xl border border-slate-200/50  transition-all duration-300">
        <div className="flex flex-col group cursor-pointer">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-600 font-semibold tracking-wide uppercase group-hover:text-blue-700 transition-colors duration-300">
              Programs Offered
            </span>
            <BookOpen className="w-4 h-4 text-blue-500 group-hover:animate-bounce" />
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            Why Choose Us?
          </h1>

          <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-1"></div>
        </div>

        <div className="flex items-center space-x-4">


          <Button
            variant="outline"
            className="group relative overflow-hidden bg-white/50 border-slate-200 hover:border-blue-300 hover:bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span className="relative z-10 font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Explore More
            </span>
            <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </header>

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
        className="bg-white"
      >
        <motion.header variants={fadeInUp} className="p-2 bg-white text-center mt-5">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-8 sm:mt-12 md:mt-20 tracking-tight text-black">
            Gallery
          </h1>
        </motion.header>
        <motion.div variants={fadeInUp} className="relative overflow-hidden w-full h-full py-20 bg-white">
          <Carousel slides={slideData} />
        </motion.div>
      </motion.div>

      {/* Testimonial */}
      <TestimonialCarousel />

      {/* Faculty Section */}
      <Component />

      <footer className="relative bg-blue-900 mx-auto max-w-full px-10 pt-10">
        {/* Columns Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Logo and Socials for Desktop/Tablet */}
          <div className="hidden lg:flex flex-col items-center flex-shrink-0">
            <Image src="/logo.png" alt="Adamas Logo" width={200} height={144} className="h-36 object-contain" />
            {/* Social Icons under logo for md+ */}
            <div className="hidden md:flex flex-row items-center justify-center gap-6 mt-4">
              <a href="tel:1234567890" aria-label="Call us">
                <span className="text-pink-400 text-2xl">📞</span>
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
              </a>
              <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
              </a>
              <a href="https://youtube.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Image src="/youtube.png" alt="YouTube" width={28} height={28} />
              </a>
              <a href="https://linkedin.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full justify-center items-center text-center">
            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Explore Adamas</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer">Colleges</li>
                <li className="hover:text-white cursor-pointer">History & Tours</li>
                <li className="hover:text-white cursor-pointer">Public Engagement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Study With Us</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer">UG Courses</li>
                <li className="hover:text-white cursor-pointer">Grad Programs</li>
                <li className="hover:text-white cursor-pointer">Online Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Research</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer">Research Units</li>
                <li className="hover:text-white cursor-pointer">Funding</li>
                <li className="hover:text-white cursor-pointer">Impact Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-[22px]">Connect</h3>
              <ul className="space-y-1 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer">Career Cell</li>
                <li className="hover:text-white cursor-pointer">Placement</li>
                <li className="hover:text-white cursor-pointer">Office</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200 pb-4 pt-6">
          © 2025 Adamas University. All rights reserved.
        </div>

        {/* Floating Social Icons for mobile only */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 md:hidden">
          <div className="flex flex-col items-center gap-3">
            <a href="tel:1234567890" aria-label="Call us">
              <span className="text-pink-400 text-2xl">📞</span>
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://youtube.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/youtube.png" alt="YouTube" width={28} height={28} />
            </a>
            <a href="https://linkedin.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
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
