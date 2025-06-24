"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Briefcase, Users } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const impactStats = [
  { icon: Heart, value: "10%", label: "of transaction fees donated", color: "from-primary/90 to-primary/70" },
  { icon: BookOpen, value: "10K+", label: "students supported", color: "from-primary/90 to-primary/70" },
  { icon: Briefcase, value: "500+", label: "businesses empowered", color: "from-primary/90 to-primary/70" },
  { icon: Users, value: "20+", label: "communities reached", color: "from-primary/90 to-primary/70" }
]

const impactImages = [
  "/assets/slider/slider-1.JPG",
  "/assets/slider/slider-2.jpg",
  "/assets/slider/slider-3.jpg",
  "/assets/slider/slider-4.jpg",
]


export function CommunitySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % impactImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % impactImages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + impactImages.length) % impactImages.length)
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <Image src="/assets/pattern/senjaro-pattern.png" alt="bg-pattern" width={1000} height={1000} />
      </div>

      {/* Glowing Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
           
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium mb-4">
              Social Impact
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 max-w-sm mx-aut lg:mx-0">
              Every Payment
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-primary/70 ml-2">
                Makes a Difference
              </span>
            </h1>
            <p className="text-xs leading-relaxed md:text-sm text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              With Senjaro Pay, your transactions automatically contribute to community development.
              We donate 10% of every transaction fee to support education, entrepreneurship,
              and social initiatives across Africa.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/50"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Slide */}
          <div
           
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-full">
                <Image
                  src={impactImages[currentSlide]}
                  alt="Community Impact"
                  fill
                  priority={currentSlide === 0}
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {impactImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentSlide(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <div
             
              className="absolute bottom-8 left-8 right-8"
            >
              <Card className="bg-white/80 backdrop-blur-md border-0 shadow-xl">
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">Transparent Impact</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Track how your transactions create positive change</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Glow Circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}