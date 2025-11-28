import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] })
const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel Bhilwara Rajasthan - Premium Dining",
  description:
    "Experience authentic Rajasthani cuisine at Hotel Bhilwara - Premium fine dining establishment in Bhilwara, Rajasthan",
  generator: "v0.app",
  openGraph: {
    title: "Hotel Bhilwara Rajasthan - Premium Dining",
    description: "Authentic Rajasthani cuisine in a luxurious setting",
    images: ["https://i.ibb.co/nNWCW499/Screenshot-2025-11-26-at-11-08-02-PM.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased bg-slate-950 text-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
