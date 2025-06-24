"use client"

import { CreditCard, Shield, Zap, Users, Globe, Check } from "lucide-react"
import React from "react"

const features = [
  {
    icon: CreditCard,
    title: "Seamless Payments",
    gradient: "from-primary via-primary/90 to-primary/80",
  },
  {
    icon: Globe,
    title: "Multi-Currency Ready",
    gradient: "from-primary via-primary/90 to-primary/80",
  },
  {
    icon: Users,
    title: "Merchant Wallet & Sub-Merchant Control",
    gradient: "from-primary via-primary/90 to-primary/80",
  },
  {
    icon: Shield,
    title: "Escrow & Split Payments",
    gradient: "from-primary via-primary/90 to-primary/80",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    gradient: "from-primary via-primary/90 to-primary/80",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    gradient: "from-primary via-primary/90 to-primary/80",
  }
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-32 max-md:py-8 bg-gradient-to-br from-white via-slate-50 to-primary/5 overflow-hidden"
    >
      {/* Decorative background pattern/gradient */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-60" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 mb-1 leading-tight">
            Do more with your <span className="text-primary">payments</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium max-w-xl mx-auto">
            Secure and lightning-fast payment processing for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center bg-primary/5 backdrop-blur-md border border-primary/50 shadow-xl rounded-xl p-3 min-h-0"
              style={{ boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.08)' }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} mb-2 shadow-md`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center leading-tight tracking-tight mt-1">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}