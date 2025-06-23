'use client'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const HeroSection = () => {
  const router = useRouter()
  return (
    <main className="relative min-h-screen bg-primary/10 dark:bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-12 gap-8 overflow-hidden">
      {/* Grid Line Background */}
      <div
        className={cn(
          "absolute inset-0 z-1",
          "[background-size:90px_90px] opacity-60",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient mask for faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
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
      {/* Right Side: Modern Payment Illustration */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg z-20">
        {/* Example SVG illustration, you can replace with your own or a more complex one */}
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[340px] drop-shadow-xl">
          <rect x="40" y="60" width="320" height="180" rx="24" fill="#fff" className="dark:fill-neutral-900"/>
          <rect x="60" y="100" width="120" height="24" rx="8" fill="#6366f1" fillOpacity="0.2"/>
          <rect x="60" y="140" width="80" height="16" rx="8" fill="#6366f1" fillOpacity="0.1"/>
          <rect x="200" y="100" width="120" height="24" rx="8" fill="#10b981" fillOpacity="0.2"/>
          <rect x="200" y="140" width="80" height="16" rx="8" fill="#10b981" fillOpacity="0.1"/>
          <rect x="60" y="180" width="260" height="12" rx="6" fill="#e5e7eb" className="dark:fill-neutral-800"/>
          <circle cx="320" cy="80" r="16" fill="#6366f1" fillOpacity="0.15"/>
          <circle cx="80" cy="80" r="10" fill="#10b981" fillOpacity="0.15"/>
          <rect x="120" y="200" width="160" height="32" rx="16" fill="#6366f1" fillOpacity="0.08"/>
          <rect x="160" y="208" width="80" height="16" rx="8" fill="#6366f1" fillOpacity="0.15"/>
        </svg>
      </div>
    </main>
  )
}

export default HeroSection