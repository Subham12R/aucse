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

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Slider from "@/components/ui/slider"
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, Variants, easeInOut } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import NoticeBoard from "@/components/ui/notice-board"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import Image from "next/image"
import Carousel from "@/components/ui/carousel"
import { ChevronUp } from "lucide-react"
import Component from "@/components/ui/university-section"
import { FlipWords } from "@/components/ui/flip-words";
import VisionMissionStory from "@/components/ui/vision-mission-story"
import { Timeline } from "@/components/ui/timeline"
import TestimonialCarousel from "@/components/ui/TestimonialCarousel"


{/* Footer Logic*/}



 
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
  const [isVisible, setIsVisible] = useState(false)
  const words = ["Excellence", "Prestige", "Innovation", "Creativity"];
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
type EventYear = keyof typeof eventsByYear; // "2024" | "2025"
type EventType = (typeof eventsByYear)[EventYear][number];

const [active, setActive] = useState<EventType | boolean | null>(null);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  const moreMenuItems = [
    { name: "Faculty", link: "https://www.aucse.in/people", icon: "👨‍🏫" },
    { name: "Timetable", link: "https://www.aucse.in/timetable", icon: "🗓️" },
    { name: "Research", link: "https://www.aucse.in/more/research", icon: "🔬" },
    { name: "Alumni", link: "https://www.aucse.in/people/alumni", icon: "🎓" },
    { name: "Placements", link: "https://www.aucse.in/more/placement", icon: "💼" },
    { name: "Explore", link: "https://www.aucse.in/more", icon: "📕" },
  ]

  // Refs for scroll animations
  const heroRef = useRef(null)
  const eventsRef = useRef(null)
  const storyRef = useRef(null)
  const noticeRef = useRef(null)
  const featuresRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)

  // InView hooks for scroll animations
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
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
};

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
    <div className="relative w-full bg-white/50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="bg-blue-100/50">
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
        {/* <BannerSlider /> */}
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-5xl font-bold text-shadow-blue-950 dark:text-blue-950">
                Adamas University
                <br />
                <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none text-blue-950">
                  Dept. Of Computer Science & Engineering
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

      <div className="flex w-full h-auto p-5 justify-center text-center items-center bg-blue-950">
        <div className="mx-auto font-normal text-white/70 dark:text-neutral-400">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-3xl font-normal mb-2">Department of</span>
            <span className="p-2 px-3 bg-green-300 m-0 text-zinc-900 rounded-md shadow-sm shadow-green-950/50 font-semibold text-lg sm:text-3xl w-fit">Computer Science & Engineering</span>
          </div>
          <br />
          <FlipWords className="mt-2 sm:mt-4 text-lg sm:text-2xl" words={words} />
          <br />
          <span className="text-base sm:text-xl font-semibold text-shadow-zinc-100 text-zinc-200/50">Adamas University</span>
        </div>
      </div>

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
            events.map(event => ({
              title: `${event.title} (${year})`,
              content: (
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1 font-semibold">{event.date} | {event.time} | {event.venue}</div>
                  <div className="mb-2 text-base text-gray-800 font-medium">{event.description}</div>
                  <div className="mb-2 text-gray-700 text-sm">{event.content}</div>
                  <div className="flex gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>{event.status.charAt(0).toUpperCase() + event.status.slice(1)}</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{event.category}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1">{event.ctaText}</Button>
                </div>
              )
            }))
          )}
        />
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
        <motion.header variants={fadeInUp} className="p-2 bg-white text-center mt-4 mb-4">
  <h1 className="text-2xl font-semibold m-2">Program Offered By Us</h1>
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
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-8 sm:mt-12 md:mt-20 tracking-tight text-black">Gallery</h1>
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
    {/* Logo */}
    <div className="hidden lg:block flex-shrink-0 ">
      <Image
        src="/logo.png"
        alt="Adamas Logo"
        width={200}
        height={144}
        className="h-36 object-contain"
      />
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

  {/* Floating Social Icons */}
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50">
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
