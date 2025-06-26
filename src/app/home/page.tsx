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
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion" 
import { useOutsideClick } from "@/hooks/use-outside-click"

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
  ctaLink: string
  content: () => JSX.Element
}

interface EventsByYear {
  [year: string]: Event[]
}
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
  const [active, setActive] = useState<(typeof eventsByYear)[string][number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

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
    {
      name: "More",
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
        ctaLink: "#register",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>March 15-16, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Computer Lab A & B</span>
              </div>
              <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs w-fit">Competition</div>
            </div>
            <p className="text-neutral-700">
              CodeFest 2024 is the annual flagship coding competition organized by the Department of Computer Science.
              This 48-hour hackathon brings together the brightest minds from across the university to solve real-world
              problems through innovative technology solutions.
            </p>
            <p className="text-neutral-700">
              Participants will work in teams to develop applications, websites, and software solutions while competing
              for prizes worth $10,000. The event features mentorship from industry professionals, workshops on
              cutting-edge technologies, and networking opportunities with tech recruiters from top companies.
            </p>
          </div>
        ),
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
        ctaLink: "#workshop",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>February 28, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>2:00 PM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Auditorium Hall</span>
              </div>
              <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs w-fit">Workshop</div>
            </div>
            <p className="text-neutral-700">
              Join us for an intensive workshop on Artificial Intelligence and Machine Learning conducted by Dr. Sarah
              Chen, Senior AI Researcher at Google. This hands-on session covered the fundamentals of neural networks,
              deep learning, and practical applications in industry.
            </p>
            <p className="text-neutral-700">
              Students learned about the latest trends in AI, worked with popular frameworks like TensorFlow and
              PyTorch, and understood how to implement ML algorithms in real-world scenarios.
            </p>
          </div>
        ),
      },
      {
        id: "3",
        title: "TechnoVision 2024",
        description: "Technical Symposium",
        date: "April 5-7, 2024",
        time: "9:00 AM - 6:00 PM",
        venue: "Main Campus Grounds",
        category: "Symposium",
        status: "upcoming",
        src: "/logo.png",
        ctaText: "View Schedule",
        ctaLink: "#schedule",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>April 5-7, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Main Campus Grounds</span>
              </div>
              <div className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs w-fit">Symposium</div>
            </div>
            <p className="text-neutral-700">
              TechnoVision 2024 is the department's premier technical symposium featuring paper presentations, project
              exhibitions, and technical competitions. Students from various universities will showcase their innovative
              projects and research work in computer science and engineering.
            </p>
            <p className="text-neutral-700">
              The event includes keynote speeches from industry leaders, panel discussions on emerging technologies,
              startup pitch competitions, and cultural programs.
            </p>
          </div>
        ),
      },
      {
        id: "4",
        title: "Campus Placement Drive",
        description: "Career Development",
        date: "January 20-25, 2024",
        time: "10:00 AM - 4:00 PM",
        venue: "Placement Cell Office",
        category: "Career",
        status: "completed",
        src: "/logo.png",
        ctaText: "View Results",
        ctaLink: "#placement",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>January 20-25, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Placement Cell Office</span>
              </div>
              <div className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs w-fit">Career</div>
            </div>
            <p className="text-neutral-700">
              The CSE Department's Campus Placement Drive connected final-year students with leading technology
              companies for internships and full-time positions. Top companies including Microsoft, Amazon, Google, and
              local startups participated in our recruitment process.
            </p>
            <p className="text-neutral-700">
              The drive included pre-placement talks, technical interviews, HR rounds, and on-the-spot offer letters.
              Students received comprehensive preparation support including mock interviews and resume building
              workshops.
            </p>
          </div>
        ),
      },
    ],
    "2025": [
      {
        id: "5",
        title: "Research Symposium 2025",
        description: "Annual Research Conference",
        date: "March 10-12, 2025",
        time: "9:00 AM - 5:00 PM",
        venue: "Conference Hall",
        category: "Research",
        status: "upcoming",
        src: "/logo.png",
        ctaText: "Submit Paper",
        ctaLink: "#research",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>March 10-12, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Conference Hall</span>
              </div>
              <div className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs w-fit">Research</div>
            </div>
            <p className="text-neutral-700">
              The Annual Research Symposium brings together faculty, students, and industry experts to present and
              discuss cutting-edge research in computer science and engineering. This three-day event features keynote
              presentations, paper sessions, and poster presentations.
            </p>
            <p className="text-neutral-700">
              Participants can submit original research papers, attend workshops on research methodologies, and network
              with leading researchers from academia and industry.
            </p>
          </div>
        ),
      },
      {
        id: "6",
        title: "Industry Connect 2025",
        description: "Industry Partnership Event",
        date: "June 15, 2025",
        time: "10:00 AM - 4:00 PM",
        venue: "Innovation Hub",
        category: "Industry",
        status: "upcoming",
        src: "/logo.png",
        ctaText: "Register",
        ctaLink: "#industry",
        content: () => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>June 15, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Innovation Hub</span>
              </div>
              <div className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs w-fit">Industry</div>
            </div>
            <p className="text-neutral-700">
              Industry Connect 2025 is designed to strengthen partnerships between the department and leading technology
              companies. The event features panel discussions, collaborative project presentations, and networking
              sessions.
            </p>
            <p className="text-neutral-700">
              Students and faculty will have opportunities to interact with industry professionals, explore internship
              and job opportunities, and learn about current industry trends and challenges.
            </p>
          </div>
        ),
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
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Apply Now</NavbarButton>
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
      <div className="flex flex-col overflow-hidden">
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
      </div>

      {/* Event Calendar */}
      <div className="flex justify-center text-center flex-col bg-gradient-to-br from-slate-50 to-blue-50 p-10">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-blue-950 mb-2">Academic Event Calendar</h1>
          <p className="text-lg text-slate-600 mb-8">Department of Computer Science Events & Activities</p>

          {/* Modal */}
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-4 right-4 lg:top-2 lg:right-2 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-10"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-2xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      width={200}
                      height={200}
                      src={active.src || "/placeholder.svg"}
                      alt={active.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-lg"
                        >
                          {active.description}
                        </motion.p>
                      </div>
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-6 py-3 text-sm rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors ml-4"
                        rel="noreferrer"
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>

                    <div className="relative">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-700 dark:text-neutral-300 max-h-96 overflow-auto"
                      >
                        {typeof active.content === "function" ? active.content() : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          {/* Yearly Sections */}
          <div className="space-y-12">
            {Object.entries(eventsByYear).map(([year, events]) => (
              <div key={year} className="text-left">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl font-bold text-blue-900 mr-4">{year}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>

                <div className="grid gap-4">
                  {events.map((event) => (
                    <motion.div
                      layoutId={`card-${event.title}-${id}`}
                      key={`card-${event.title}-${id}`}
                      onClick={() => setActive(event)}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-slate-200 hover:border-blue-200"
                    >
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <motion.div layoutId={`image-${event.title}-${id}`} className="flex-shrink-0">
                            <img
                              width={120}
                              height={120}
                              src={event.src || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full lg:w-32 h-32 rounded-lg object-cover"
                            />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <motion.h3
                                  layoutId={`title-${event.title}-${id}`}
                                  className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2"
                                >
                                  {event.title}
                                </motion.h3>
                                <motion.p
                                  layoutId={`description-${event.description}-${id}`}
                                  className="text-neutral-600 dark:text-neutral-400 mb-3"
                                >
                                  {event.description}
                                </motion.p>

                                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-3">
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

                              <motion.button
                                layoutId={`button-${event.title}-${id}`}
                                className="px-6 py-2 text-sm rounded-full font-semibold bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all duration-200 whitespace-nowrap"
                              >
                                {event.ctaText}
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
