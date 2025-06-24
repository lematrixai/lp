"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function CTASection() {
  const router = useRouter()
  return (
    <section className="w-full py-16 relative mx-auto overflow-hidden bg-primary/5 text-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <Image src="/assets/pattern/senjaro-pattern.png" alt="bg-pattern" width={1000} height={1000} />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 text-center">
        <div>
           {/* Enhanced Heading */}
           <div className="mb-8 2xl:mb-12">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold mb-4 2xl:mb-6 text-gray-900">
              Ready to Go{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Smarter
              </span>
              <br />
              With Your Payments?
            </h2>
            <div className="h-1 w-32 2xl:w-40 bg-gradient-to-r from-primary to-primary/80 rounded-full mx-auto" />
          </div>

          {/* Enhanced Description */}
          <p
            className="text-xl 2xl:text-2xl text-gray-600 mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-4xl mx-auto"
          >
            Join hundreds of businesses already using our platform to streamline payments and boost revenue
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div>
              <Button
                onClick={() => router.push('/sign-up')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-md font-bold group transition-all duration-300 shadow-2xl hover:shadow-3xl rounded-lg"
              >
                Get Started Today
                <div
                  className="ml-3"
                >
                  <ArrowRight className="h-6 w-6" />
                </div>
              </Button>
            </div>

            <div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 w-[16rem] mx-auto border-primary bg-transparent text-primary hover:text-primary/80 hover:bg-primary/5 hover:border-primary/40 px-10 py-6 text-md font-bold group transition-all duration-300 backdrop-blur-sm rounded-lg"
              >
                <div
                  className="mr-3"
                >
                  <Calendar className="h-7 w-7" />
                    </div>
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}