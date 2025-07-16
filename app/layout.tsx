import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thropic Games - Gaming Fundraising Platform',
  description: 'A fundraising platform designed for nonprofits and powered by play.',
  generator: 'v0.dev',
  icons: {
    icon: '/images/thropic-logo.png',
    shortcut: '/images/thropic-logo.png',
    apple: '/images/thropic-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
