import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat, Outfit } from "next/font/google";
import "./globals.css";


// Load fonts as CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ✅ Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ Metadata for SEO
export const metadata: Metadata = {
  title: "Senjaro Pay | Smart Payments for Africa's Boldest Businesses",
  description:
    "Senjaro Pay is a leading payment platform in Tanzania, offering seamless mobile money integration, secure card processing, and digital wallet solutions for businesses. Accept payments from M-Pesa, Airtel Money, and more.",
  keywords: [
    "Senjaro Pay",
    "African payments",
    "mobile money",
    "M-Pesa integration",
    "Airtel Money",
    "digital payments",
    "payment processing",
    "Africa fintech",
    "business payments",
    "secure transactions",
    "digital wallet",
    "card processing",
    "instant settlement",
    "payment gateway",
    "African fintech",
  ].join(", "),
  authors: [{ name: "Senjaro Pay" }],
  creator: "Senjaro Pay",
  publisher: "Senjaro Pay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://senjaropay.com"),
  alternates: {
    canonical: "https://senjaropay.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senjaropay.com",
    title: "Senjaro Pay | Smart Payments for Africa's Boldest Businesses",
    description:
      "Senjaro Pay is a leading payment platform in Tanzania, offering seamless mobile money integration, secure card processing, and digital wallet solutions for businesses.",
    siteName: "Senjaro Pay",
    images: [
      {
        url: "/senjaro-pay-og.png",
        width: 1200,
        height: 630,
        alt: "Senjaro Pay - Smart Payments for Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senjaro Pay | Smart Payments for Africa's Boldest Businesses",
    description:
      "Senjaro Pay is a leading payment platform in Africa, offering seamless mobile money integration, secure card processing, and digital wallet solutions for businesses.",
    images: ["/senjaro-pay-og.jpg"],
    creator: "@senjaropay",
    site: "@senjaropay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=7HF_oPzgH5rruKh5iPMr0QCQzJo-vjkxkPwRwTDsuuw",
  },
  icons: {
    icon: [{ url: "/assets/logo/logo-icon.png", type: "image/png" }],
    shortcut: "/assets/logo/logo-icon.png",
    apple: "/assets/logo/logo-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/logo/logo-icon.png",
    },
  },
  category: "technology",
};

// ✅ Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo/logo-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}