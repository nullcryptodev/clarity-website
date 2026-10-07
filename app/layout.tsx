import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Clarity — Authority rotates, the chain doesn\'t',
  description: 'A BFT proof-of-stake chain with immediate finality and verifiable state. Blocks commit in a single round, and every value can be proven against a Merkle root.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Clarity — Authority rotates, the chain doesn\'t',
    description: 'A BFT proof-of-stake chain with immediate finality and verifiable state.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarity — Authority rotates, the chain doesn\'t',
    description: 'A BFT proof-of-stake chain with immediate finality and verifiable state.',
    creator: '@_nullcrypto',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
