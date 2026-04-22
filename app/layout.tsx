import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Workforce Upskilling Programs',
  description:
    'A polished Accredian Enterprise landing page clone built with Next.js for enterprise workforce upskilling and demo capture.',
  keywords:
    'enterprise learning, corporate training, upskilling, workforce development, accredian enterprise',
  openGraph: {
    title: 'Accredian Enterprise',
    description: 'Enterprise learning programs with measurable outcomes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  )
}
