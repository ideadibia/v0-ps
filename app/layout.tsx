import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });

export const metadata: Metadata = {
  title: 'Pillsette — Never forget to take your medication again',
  description: 'Smart, portable pill dispensers and medication reminders designed for older adults. Stay on track with your health.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f0ebe3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_barlow.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
