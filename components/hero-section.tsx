'use client'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import WorldMap from '@/components/ui/world-map'

const HeroSection = () => {
  const router = useRouter()
  return (
    <main className="relative min-h-screen bg-primary/5 dark:bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-12 gap-8 overflow-hidden">
      {/* Grid Line Background */}
      <div
        className={cn(
          "absolute inset-0 z-1",
          "[background-size:90px_90px] opacity-50",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient mask for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Left Side */}
      <div className="flex-1 flex flex-col h-full min-h-[600px] justify-between max-w-xl">
        {/* Top Spacer */}
        <div />
        {/* Center Content */}
        <div className="flex flex-col items-start z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-13">
            Empowering Seamless Payments Across Africa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Unlock seamless, secure, and modern payment solutions for your business and personal needs.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <Button onClick={() => router.push('/signup')} className="px-6 py-6 rounded-sm bg-primary text-white font-bold shadow hover:bg-primary/90 transition">
              Create an Account
            </Button>
            <Button onClick={() => router.push('/login')} className="px-6 py-6 rounded-sm bg-white text-primary font-bold border border-primary shadow hover:bg-primary/10 transition">
              Login
            </Button>
          </div>
        </div>
        {/* Bottom Trusted Section */}
        <div className="flex flex-col space-y-4 z-10">
          <div className="text-xs py-2">
            Trusted by over 14,000+ businesses
          </div>
          <div className="flex flex-row items-center gap-x-6 grayscale opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 w-auto" />
            <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 w-auto" />
          </div>
        </div>
      </div>
      {/* Right Side: World Map Demo */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg z-20">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: 34.0522, lng: -118.2437 },   // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 },   // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 },     // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },  // London
              end: { lat: 28.6139, lng: 77.209 },      // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 },   // New Delhi
              end: { lat: 43.1332, lng: 131.9113 },    // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 },   // New Delhi
              end: { lat: -1.2921, lng: 36.8219 },     // Nairobi
            },
          ]}
        />
      </div>
    </main>
  )
}

export default HeroSection