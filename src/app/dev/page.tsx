"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Code, Palette, Server, GraduationCap, Search, ArrowLeft, Star, Award } from 'lucide-react'
import Image from "next/image"
import Scroll from "@/components/ui/scroll"
type TeamMember = {
  id: string
  name: string
  role: string
  designation: string
  year: string
  image: string
  fullImage: string
  group: "mentors" | "frontend" | "backend" | "design" | "fullstack"
  bio: string
  skills: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  location: string
  experience: string
  achievements?: string[]
  quote?: string
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sajal Saha",
    role: "Project Mentor",
    designation: "HOD Computer Science",
    year: "Faculty",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Sajal",
    fullImage: "/placeholder.svg?height=600&width=400&text=Dr.+Sajal+Saha",
    group: "mentors",
    bio: "Leading computer science education with 15+ years of experience in software engineering and research. Passionate about nurturing the next generation of developers.",
    skills: ["Research", "Software Architecture", "Team Leadership", "Academic Excellence", "Machine Learning"],
    social: {
      linkedin: "#",
      email: "sajal.saha@college.edu",
    },
    location: "Kolkata, India",
    experience: "15+ years",
    achievements: ["Published 50+ Research Papers", "IEEE Senior Member", "Best Teacher Award 2023"],
    quote: "Innovation distinguishes between a leader and a follower."
  },
  {
    id: "2",
    name: "Prof. Prabhat Das",
    role: "Technical Advisor",
    designation: "Associate Professor",
    year: "Faculty",
    image: "/placeholder.svg?height=200&width=200&text=Prof.+Prabhat",
    fullImage: "/placeholder.svg?height=600&width=400&text=Prof.+Prabhat+Das",
    group: "mentors",
    bio: "Expert in web technologies and database systems with a passion for innovative teaching methods and student mentorship.",
    skills: ["Database Design", "Web Technologies", "System Analysis", "Mentoring", "Cloud Computing"],
    social: {
      linkedin: "#",
      email: "prabhat.das@college.edu",
    },
    location: "Kolkata, India",
    experience: "12+ years",
    achievements: ["Database Expert Certification", "Google Cloud Certified", "Student Mentor of the Year"],
    quote: "Teaching is the profession that creates all other professions."
  },
  {
    id: "3",
    name: "Prof. Ayushman Bilas Thakur",
    role: "Technical Advisor",
    designation: "Associate Professor",
    year: "Faculty",
    image: "/placeholder.svg?height=200&width=200&text=Prof.+Ayushman",
    fullImage: "/placeholder.svg?height=600&width=400&text=Prof.+Ayushman+Thakur",
    group: "mentors",
    bio: "Specialist in artificial intelligence and machine learning with extensive research background in computational intelligence.",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Research", "Python"],
    social: {
      linkedin: "#",
      email: "ayushman.thakur@college.edu",
    },
    location: "Kolkata, India",
    experience: "10+ years",
    achievements: ["AI Research Excellence Award", "TensorFlow Certified", "Published ML Textbook"],
    quote: "The future belongs to those who understand data."
  },
  {
    id: "4",
    name: "Subham Karmakar",
    role: "Frontend Developer",
    designation: "Lead Developer",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200&text=Subham",
    fullImage: "/placeholder.svg?height=600&width=400&text=Subham+Karmakar",
    group: "frontend",
    bio: "Passionate Frontend developer with expertise in modern web technologies. Loves creating beautiful and functional user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "UI/UX"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "rikk4335@gmail.com",
    },
    location: "Kolkata, India",
    experience: "3 years",
    achievements: ["React Certified Developer", "Hackathon Winner 2023", "Open Source Contributor"],
    quote: "Code is poetry written in logic."
  },
  {
    id: "5",
    name: "Snehasish Mondal",
    role: "Frontend Developer",
    designation: "UI Specialist",
    year: "2023",
    image: "/placeholder.svg?height=200&width=200&text=Snehasish",
    fullImage: "/placeholder.svg?height=600&width=400&text=Snehasish+Mondal",
    group: "frontend",
    bio: "Creative frontend developer with a passion for crafting exceptional user experiences and responsive web applications.",
    skills: ["React", "Vue.js", "CSS3", "SASS", "Animation", "Responsive Design"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "snehasish@example.com",
    },
    location: "Kolkata, India",
    experience: "2 years",
    achievements: ["CSS Animation Expert", "Design System Creator", "Frontend Mentor"],
    quote: "Design is not just what it looks like - design is how it works."
  },
  {
    id: "6",
    name: "Souvik Biswas",
    role: "Frontend Developer",
    designation: "React Specialist",
    year: "2023",
    image: "/placeholder.svg?height=200&width=200&text=Souvik",
    fullImage: "/placeholder.svg?height=600&width=400&text=Souvik+Biswas",
    group: "frontend",
    bio: "React enthusiast with strong problem-solving skills and attention to detail in creating pixel-perfect interfaces.",
    skills: ["React", "Redux", "JavaScript", "HTML5", "CSS3", "Git"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "souvik@example.com",
    },
    location: "Kolkata, India",
    experience: "2 years",
    achievements: ["React Expert Badge", "Code Review Champion", "Team Collaboration Award"],
    quote: "Every expert was once a beginner."
  },
  {
    id: "7",
    name: "Priyam Ghorui",
    role: "Backend Developer",
    designation: "API Architect",
    year: "2025",
    image: "/placeholder.svg?height=200&width=200&text=Priyam",
    fullImage: "/placeholder.svg?height=600&width=400&text=Priyam+Ghorui",
    group: "backend",
    bio: "Backend specialist focused on scalable architectures and high-performance API development with expertise in microservices.",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Microservices", "AWS"],
    social: {
      github: "#",
      linkedin: "#",
      email: "priyam@example.com",
    },
    location: "Kolkata, India",
    experience: "2.5 years",
    achievements: ["AWS Certified", "API Design Expert", "Performance Optimization Specialist"],
    quote: "Scalability is not an afterthought, it's a mindset."
  },
  {
    id: "8",
    name: "Pratyasha Banik",
    role: "UI/UX Designer",
    designation: "Design Lead",
    year: "2025",
    image: "/placeholder.svg?height=200&width=200&text=Pratyasha",
    fullImage: "/placeholder.svg?height=600&width=400&text=Pratyasha+Banik",
    group: "design",
    bio: "Creative designer with a keen eye for user experience and modern design principles. Specializes in creating intuitive and beautiful interfaces.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Illustration"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "pratyasha@example.com",
    },
    location: "Kolkata, India",
    experience: "2 years",
    achievements: ["Design Excellence Award", "UX Research Certified", "Dribbble Featured Designer"],
    quote: "Good design is invisible, great design is unforgettable."
  },
]

const groups = [
  {
    label: "Faculty & Mentors",
    key: "mentors" as const,
    icon: GraduationCap,
    gradient: "from-purple-600 to-blue-600",
  },
  {
    label: "Full Stack Team",
    key: "fullstack" as const,
    icon: Code,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    label: "Frontend Team",
    key: "frontend" as const,
    icon: Palette,
    gradient: "from-green-600 to-teal-600",
  },
  {
    label: "Backend Team",
    key: "backend" as const,
    icon: Server,
    gradient: "from-orange-600 to-red-600",
  },
  {
    label: "Design Team",
    key: "design" as const,
    icon: Palette,
    gradient: "from-pink-600 to-rose-600",
  },
]

export default function TeamPortfolio() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGroup, setSelectedGroup] = useState<string>("all")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const filteredMembers = teamData.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesGroup = selectedGroup === "all" || member.group === selectedGroup
    return matchesSearch && matchesGroup
  })

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Textured Background */}
      <Scroll />
      <div
        className="fixed inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.15) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(160, 82, 45, 0.1) 1px, transparent 0),
            radial-gradient(circle at 5px 5px, rgba(210, 180, 140, 0.08) 1px, transparent 0),
            linear-gradient(45deg, rgba(245, 245, 220, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(245, 245, 220, 0.1) 25%, transparent 25%)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px, 80px 80px, 80px 80px",
          backgroundColor: "#f7f3e9",
        }}
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className="border-b border-stone-200/50 bg-gradient-to-r from-stone-50/90 to-stone-100/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="text-start">
                <h1 className="text-4xl text-stone-800 tracking-wide font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text ">
                  Meet Our Developers.
                </h1>
                <p className="text-stone-600 font-medium mt-2 text-lg">
                  Adamas University | Department of Computer Science
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src="/logo.png?height=120&width=120&text=LOGO"
                    alt="Adamas Logo"
                    width={120}
                    height={120}
                    className="h-20 w-20 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/">
            <Button
              variant="ghost"
              className="gap-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100/70 px-4 py-3 h-auto mb-8 transition-all duration-300 hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Main</span>
            </Button>
          </Link>

          {/* Enhanced Filter Section */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            <div className="flex gap-3 flex-wrap">
              <Button
                variant={selectedGroup === "all" ? "default" : "outline"}
                onClick={() => setSelectedGroup("all")}
                className={
                  selectedGroup === "all"
                    ? "bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-700 hover:to-stone-600 text-white shadow-lg"
                    : "border-stone-300 text-stone-600 hover:bg-stone-100/70 hover:shadow-md transition-all duration-300"
                }
              >
                All Teams
              </Button>
              {groups.map(({ label, key, gradient }) => (
                <Button
                  key={key}
                  variant={selectedGroup === key ? "default" : "outline"}
                  onClick={() => setSelectedGroup(key)}
                  className={
                    selectedGroup === key
                      ? `bg-gradient-to-r ${gradient} hover:shadow-lg text-white transition-all duration-300`
                      : "border-stone-300 text-stone-600 hover:bg-stone-100/70 hover:shadow-md transition-all duration-300"
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Team Groups */}
          {groups.map(({ label, key, icon: Icon, gradient }) => {
            const members = filteredMembers.filter((m) => m.group === key)
            if (members.length === 0) return null

            return (
              <section key={key} className="mb-24">
                <div className="flex items-center gap-6 mb-12">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-stone-800 tracking-wide mb-1">{label}</h2>
                    <p className="text-stone-500 font-medium text-lg">
                      {members.length} talented member{members.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member, index) => (
                    <Card
                      key={member.id}
                      className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-stone-200/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:scale-105 transform"
                      onClick={() => setSelectedMember(member)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className="relative mb-4">
                            <Avatar className="h-24 w-24 ring-4 ring-white shadow-xl">
                              <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} className="object-cover" />
                              <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-stone-100 to-stone-200 text-stone-700">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full p-2 shadow-lg">
                              <Star className="h-3 w-3 text-white" />
                            </div>
                          </div>
                          <h3 className="font-bold text-xl text-stone-800 group-hover:text-stone-900 transition-colors mb-1">
                            {member.name}
                          </h3>
                          <p className="text-stone-600 font-semibold mb-1">{member.role}</p>
                          <p className="text-sm text-stone-500 font-medium">{member.designation}</p>
                        </div>

                        <p className="text-sm text-stone-600 mb-6 line-clamp-3 font-light leading-relaxed text-center">
                          {member.bio}
                        </p>

                        <div className="flex items-center justify-center gap-6 text-xs text-stone-500 mb-6">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="font-medium">{member.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span className="font-medium">{member.experience}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                          {member.skills.slice(0, 3).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs font-medium bg-gradient-to-r from-stone-100 to-stone-200 text-stone-700 hover:from-stone-200 hover:to-stone-300 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {member.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs font-medium border-stone-300 text-stone-600">
                              +{member.skills.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2 justify-center">
                          {member.social.github && (
                            <Button size="sm" variant="ghost" className="h-10 w-10 p-0 hover:bg-stone-100 rounded-full">
                              <Github className="h-4 w-4 text-stone-600" />
                            </Button>
                          )}
                          {member.social.linkedin && (
                            <Button size="sm" variant="ghost" className="h-10 w-10 p-0 hover:bg-blue-50 rounded-full">
                              <Linkedin className="h-4 w-4 text-blue-600" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="sm" variant="ghost" className="h-10 w-10 p-0 hover:bg-sky-50 rounded-full">
                              <Twitter className="h-4 w-4 text-sky-600" />
                            </Button>
                          )}
                          {member.social.email && (
                            <Button size="sm" variant="ghost" className="h-10 w-10 p-0 hover:bg-green-50 rounded-full">
                              <Mail className="h-4 w-4 text-green-600" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}

          {filteredMembers.length === 0 && (
            <div className="text-center py-20">
              <div className="text-stone-400 mb-6">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-light text-stone-600 mb-2">No team members found</h3>
              <p className="text-stone-500 font-light">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Enhanced Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <Card className="max-w-4xl w-full max-h-[95vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-stone-200 shadow-2xl">
              <CardContent className="p-0">
                {/* Header with full image */}
                <div className="relative h-64 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <Image
                    src={selectedMember.fullImage || "/placeholder.svg"}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 text-white hover:text-stone-200 hover:bg-white/20 backdrop-blur-sm rounded-full h-10 w-10 p-0"
                  >
                    ✕
                  </Button>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-bold mb-1">{selectedMember.name}</h2>
                    <p className="text-xl font-medium opacity-90">{selectedMember.role}</p>
                    <p className="text-sm opacity-75">
                      {selectedMember.designation} • {selectedMember.year}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Quote */}
                      {selectedMember.quote && (
                        <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-6 rounded-xl border-l-4 border-stone-400">
                          <p className="text-stone-700 font-medium italic text-lg">"{selectedMember.quote}"</p>
                        </div>
                      )}

                      {/* About */}
                      <div>
                        <h3 className="font-bold text-stone-800 mb-4 text-xl flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                          About
                        </h3>
                        <p className="text-stone-600 font-light leading-relaxed text-lg">{selectedMember.bio}</p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="font-bold text-stone-800 mb-4 text-xl flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                          Skills & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedMember.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="font-medium bg-gradient-to-r from-stone-100 to-stone-200 text-stone-700 px-4 py-2 text-sm hover:from-stone-200 hover:to-stone-300 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {selectedMember.achievements && (
                        <div>
                          <h3 className="font-bold text-stone-800 mb-4 text-xl flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                            Achievements
                          </h3>
                          <div className="space-y-3">
                            {selectedMember.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <Award className="h-5 w-5 text-yellow-600" />
                                <span className="text-stone-600 font-medium">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Contact Info */}
                      <div className="bg-stone-50 p-6 rounded-xl">
                        <h4 className="font-bold text-stone-800 mb-4">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-stone-500" />
                            <span className="text-stone-600 font-medium">{selectedMember.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-stone-500" />
                            <span className="text-stone-600 font-medium">{selectedMember.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="bg-stone-50 p-6 rounded-xl">
                        <h4 className="font-bold text-stone-800 mb-4">Connect</h4>
                        <div className="space-y-3">
                          {selectedMember.social.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start gap-3 border-stone-300 text-stone-600 hover:bg-stone-100"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </Button>
                          )}
                          {selectedMember.social.linkedin && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start gap-3 border-blue-300 text-blue-600 hover:bg-blue-50"
                            >
                              <Linkedin className="h-4 w-4" />
                              LinkedIn
                            </Button>
                          )}
                          {selectedMember.social.twitter && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start gap-3 border-sky-300 text-sky-600 hover:bg-sky-50"
                            >
                              <Twitter className="h-4 w-4" />
                              Twitter
                            </Button>
                          )}
                          {selectedMember.social.email && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start gap-3 border-green-300 text-green-600 hover:bg-green-50"
                            >
                              <Mail className="h-4 w-4" />
                              Email
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
