"use client"

import Image from "next/image"

const partners = [
  { name: "Amazon", logo: "/assets/partners/amazon.png" },
  { name: "Mastercard", logo: "/assets/partners/mastercard.png" },
  { name: "PayPal", logo: "/assets/partners/paypal.png" },
  { name: "Shopify", logo: "/assets/partners/shopify.png" },
  { name: "Square", logo: "/assets/partners/square.png" },
  { name: "Stripe", logo: "/assets/partners/stripe.png" },
  { name: "Visa", logo: "/assets/partners/visa.png" },
  { name: "Western Union", logo: "/assets/partners/western_union.png" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Powering Growth for Ambitious Businesses
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Seamless integration with leading platforms. Accelerate your business with a secure, scalable payment gateway trusted by Africa's top brands.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center h-12">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={48}
                className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8 max-w-xl mx-auto">
          With Senjaro Pay, you can connect your online store or business in minutes. Our platform is designed for effortless integration, helping you focus on growth while we handle secure payments.
        </p>
      </div>
    </section>
  )
} 