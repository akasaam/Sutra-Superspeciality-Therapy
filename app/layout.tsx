import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MobileHeader } from "@/components/mobile-header"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingScreen } from "@/components/loading-screen"
import { CacheConsent } from "@/components/cache-consent"

export const metadata: Metadata = {
  title: "Sutra.care - Your Journey to Holistic Wellness Starts Here",
  description:
    "Discover a new approach to healthcare that integrates mind, body, and spirit for a balanced and fulfilling life. Expert care in North Bengal.",
  keywords: "healthcare, holistic wellness, rehabilitation, physiotherapy, home care, North Bengal, medical services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="relative flex size-full min-h-screen flex-col justify-between font-sans text-sutra-dark antialiased overflow-x-hidden"
        style={{ backgroundColor: "rgba(232, 216, 204, 0.3)" }}
      >
        <LoadingScreen />
        <ScrollToTop />
        <div className="flex-1 pb-20 lg:pb-0">
          <MobileHeader />
          <main className="lg:max-w-6xl lg:mx-auto lg:px-8">{children}</main>
        </div>
        <MobileNavigation />
        <CacheConsent />
      </body>
    </html>
  )
}
