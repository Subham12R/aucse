"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, TrendingUp, MapPin, Mail, Phone, Sparkles } from "lucide-react"
import Image from "next/image"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useEffect, useState } from "react"

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      department: "Computer Science",
      qualification: "PhD in AI/ML",
      experience: "15 years",
      specialization: "Machine Learning",
      image: "/logo.png",
      rating: 4.9,
      publications: 45,
    },
    {
      name: "Prof. Michael Chen",
      department: "Engineering",
      qualification: "PhD in Robotics",
      experience: "20 years",
      specialization: "Robotics & Automation",
      image: "/logo.png",
      rating: 4.8,
      publications: 62,
    },
    {
      name: "Dr. Emily Rodriguez",
      department: "Business",
      qualification: "PhD in Finance",
      experience: "12 years",
      specialization: "Corporate Finance",
      image: "/logo.png",
      rating: 4.9,
      publications: 38,
    },
    {
      name: "Prof. David Kumar",
      department: "Data Science",
      qualification: "PhD in Statistics",
      experience: "18 years",
      specialization: "Big Data Analytics",
      image: "/logo.png",
      rating: 4.7,
      publications: 51,
    },
    {
      name: "Dr. Lisa Thompson",
      department: "Cybersecurity",
      qualification: "PhD in Security",
      experience: "14 years",
      specialization: "Network Security",
      image: "/logo.png",
      rating: 4.8,
      publications: 42,
    },
  ]

  const placementCompanies = [
    {
      name: "Google",
      logo: "/google.png",
      sector: "Technology",
    },
    {
      name: "Microsoft",
      logo: "/microsoft.png",
      sector: "Technology",
    },
    {
      name: "TCS",
      logo: "/tcs.png",
      sector: "Consultancy",
    },
    {
      name: "Amazon",
      logo: "/amazon.png",
      sector: "E-commerce",
    },
    {
      name: "Apple",
      logo: "/apple.png",
      sector: "Technology",
    },
    {
      name: "Meta",
      logo: "/meta.png",
      sector: "Social Media",
    },
    {
      name: "Netflix",
      logo: "/netflix.png",
      sector: "Entertainment",
    },
    {
      name: "Adobe",
      logo: "/adobe.png",
      sector: "Creative Software",
    },

  ]

  const stats = [
    { label: "Placement Rate", value: 96, suffix: "%", icon: TrendingUp },
    { label: "Average Package", value: 95, suffix: "K", prefix: "$", icon: Award },
    { label: "Top Package", value: 180, suffix: "K", prefix: "$", icon: Star },
    { label: "Companies Visited", value: 250, suffix: "+", icon: Users },
  ]

  const StatCard = ({ stat, index }: { stat: (typeof stats)[0]; index: number }) => {
    const { count, ref } = useCounterAnimation(stat.value, 2500)

    return (
      <Card
        ref={ref}
        className={`text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105 ${
          isLoaded ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <CardContent className="p-0">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-4 animate-pulse-glow">
            <stat.icon className="h-8 w-8" />
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-2 font-mono">
            {stat.prefix}
            {count}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="flex justify-center w-full py-5 md:py-10 lg:py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Meet Our Distinguished Faculty &
            <br />
            Top Placement Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts and get placed in world&apos;s leading companies. Our faculty brings decades of
            experience while our placement record speaks for itself.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Faculty Section */}
        <div className="mb-20">
          <div
            className={`text-center mb-12 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "800ms" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Expert Faculty</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from distinguished professors and industry veterans who bring real-world experience to the classroom
            </p>
          </div>

          <div className="relative overflow-hidden ">
            <div className="flex animate-scroll-left space-x-6 hover:pause-animation">
              {[...facultyMembers, ...facultyMembers].map((faculty, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group"
                >
                  <CardContent className="p-6 ">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-spin-slow opacity-20"></div>
                        <Image
                          src={faculty.image || "/logo.png"}
                          alt={faculty.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-4 border-blue-100 relative z-10 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {faculty.name}
                        </h4>
                        <Badge variant="secondary" className="mb-2 text-xs group-hover:bg-blue-100 transition-colors">
                          {faculty.department}
                        </Badge>
                        <p className="text-sm text-muted-foreground mb-2">{faculty.qualification}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-1 group-hover:animate-spin" />
                            {faculty.rating}
                          </span>
                          <span>{faculty.publications} publications</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Experience</span>
                        <span className="font-semibold text-blue-600">{faculty.experience}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-muted-foreground">Specialization</span>
                        <span className="font-semibold text-gray-900 text-right">{faculty.specialization}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Placement Companies Section */}
        <div className="mb-16">
          <div
            className={`text-center mb-12 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "1000ms" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Top Placement Partners</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our graduates are recruited by leading global companies across various industries
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 hover:pause-animation">
              {[...placementCompanies, ...placementCompanies].map((company, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-42 h-50 m-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm transition-all duration-500  group overflow-hidden"
                >
                  <CardContent className="p-0 h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0  duration-300"></div>
                    <div className="h-full flex flex-col items-center justify-center p-6 relative z-10">
                      <div className="bg-white rounded-xl p-6 mb-4 duration-300 w-full h-24 flex items-center justify-center">
                        <Image
                          src={company.logo || "/logo.png"}
                          alt={`${company.name} logo`}
                          width={160}
                          height={80}
                          className="object-contain max-w-full max-h-full  transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                        {company.name}
                      </h4>
                      <Badge
                        variant="outline"
                        className="group-hover:bg-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                      >
                        {company.sector}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <Card
          className={`bg-gradient-to-r from-blue-900 to-indigo-800 border-0 text-white relative overflow-hidden ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1200ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
          </div>
          <CardContent className="p-8 md:p-12 text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Connect with our placement cell to learn more about career opportunities and faculty mentorship programs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors cursor-pointer group">
                <Phone className="h-5 w-5 group-hover:animate-bounce" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors cursor-pointer group">
                <Mail className="h-5 w-5 group-hover:animate-bounce" />
                <span>Adamas University</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors cursor-pointer group">
                <MapPin className="h-5 w-5 group-hover:animate-bounce" />
                <span>Career Growth</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        
        .hover\\:pause-animation:hover * {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
