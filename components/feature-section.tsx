"use client"


import { CreditCard, Shield, Zap, Users, Globe, Check } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

const features = [
  {
    icon: CreditCard,
    title: "Seamless Payments",
    subtitle: "Multiple Payment Methods",
    description: "Accept payments from any device, anywhere in the world",
    details: ["Mobile money integration", "Card payments support", "International transfers", "Real-time settlement"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Globe,
    title: "Multi-Currency Ready",
    subtitle: "Go global, accept local",
    description: "Accept payments in different currencies and let SenjaroPay do the conversion for you.",
    details: ["Accept USD, TZS, KES, EUR, and more", "Auto-conversion with live FX", "Local currency settlements", "Global-friendly payment infrastructure"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Users,
    title: "Merchant Wallet & Sub-Merchant Control",
    subtitle: "Your business wallet, now with full operational control",
    description: "Send, hold, and manage money in real time with the power to delegate",
    details: ["Wallet to Wallet Transfers", "Instant Withdrawals", "Transaction Tracking by Sub Unit", "Branch-Level Dashboards & Controlled Access"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Shield,
    title: "Escrow & Split Payments",
    subtitle: "Smart, Secure, and Fair Transactions",
    description: "Protect your customers and automate payouts with one powerful tool.",
    details: ["Escrow Protection", "Automatic Splits", "Custom Rules", "Full Transparency", "Trust at Scale"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    subtitle: "Instant Processing",
    description: "Process thousands of transactions per second with our high-performance infrastructure",
    details: ["Real-time processing", "Instant settlements", "99.9% uptime SLA", "Sub-second latency"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    subtitle: "Enterprise Protection",
    description: "Your transactions are protected by military-grade encryption and advanced fraud detection",
    details: ["End-to-end encryption", "AI fraud detection", "Compliance certified", "Regular security audits"],
    gradient: "from-primary via-primary/90 to-primary/80",
    bgGradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  }
]

export function FeaturesSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnMouseEnter: true, stopOnInteraction: false })
  )

  return (
    <section
      id="features"
      className="py-32 max-md:py-16 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16">
        {/* Enhanced Header */}
        <div className="text-start mb-20 2xl:mb-32">
          <h2 className="text-xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 2xl:mb-8 tracking-tight">
            Do more with your<br/>
            <span className="text-primary">payments</span>
          </h2>
          <p className="text-sm text-gray-600">
            Secure and lightning-fast payment processing
          </p>
        </div>
        {/* Carousel for Features */}
        <div className="relative">
          <Carousel 
            className="w-full" 
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={feature.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="relative h-full p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white flex items-center justify-center`}
                          >
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        {/* Typography */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className={`text-sm font-medium ${feature.accentColor} mb-2 uppercase tracking-wide`}>
                            {feature.subtitle}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        {/* Feature List */}
                        <ul className="space-y-3">
                          {feature.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-center text-gray-600"
                            >
                              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mr-2">
                                <Check className="w-2.5 h-2.5 text-white" />
                              </div>
                              <span className="text-sm font-medium">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Border Gradient */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-5`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}