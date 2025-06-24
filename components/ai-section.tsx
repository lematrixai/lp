"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, TrendingUp, Lightbulb, Sparkles, Quote } from "lucide-react";

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Predict peak payment times",
    description: "Know when your busiest periods will be",
    metric: "95% accuracy",
  },
  {
    icon: Shield,
    title: "Flag unusual activity before it becomes fraud",
    description: "Proactive fraud prevention with AI monitoring",
    metric: "99.7% detection rate",
  },
  {
    icon: Brain,
    title: "Summarize transaction trends in seconds",
    description: "Instant insights from your payment data",
    metric: "<2s response time",
  },
  {
    icon: Lightbulb,
    title: "Get smart tips to grow your revenue",
    description: "AI-powered recommendations for business growth",
    metric: "avg 23% revenue increase",
  },
];

export function AISection() {
  return (
    <section
      id="ai"
      className="py-16 md:py-20 relative min-h-[500px] bg-primary/5 text-gray-900 overflow-hidden"
    >
      {/* Grid Line Background */}
      <div
        className="absolute inset-0 z-0 [background-size:90px_90px] opacity-40 [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
      />
      {/* Radial gradient mask for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] z-1"></div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-3 backdrop-blur-sm text-xs md:text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </div>
          <h2 className="text-lg md:text-xl font-bold mb-2">
            Senjaro AI — Built-In Brilliance
          </h2>
          <p className="text-base text-gray-600">
            Let our AI do the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {aiFeatures.map((feature, index) => (
            <div key={feature.title}>
              <Card className="bg-white/30 backdrop-blur-sm border border-primary transition-all duration-300 ">
                <CardContent className="p-6">
                  <div className="flex items-start justify-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <feature.icon className="w-5 h-5 text-primary " />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-2 text-xs">
                        {feature.description}
                      </p>
                      <div className="inline-flex items-center px-2 py-0.5 bg-primary/10 rounded-full text-primary text-xs font-medium">
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-r from-primary/5 to-primary/0 backdrop-blur-sm rounded-2xl p-4 md:p-6 py-8 text-center border border-primary/20 overflow-hidden">
          {/* Quote Icon Background */}
          <Quote className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 text-primary/20 opacity-30 blur-[1px] pointer-events-none select-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <blockquote className="text-base md:text-lg text-gray-600 italic mb-3">
              "The AI alerts helped us stop a fake refund attempt. That alone paid for the system."
            </blockquote>
            <cite className="text-primary font-semibold text-xs md:text-sm">
              — Nia, Finance Manager
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}