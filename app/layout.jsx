import { Analytics } from '@vercel/analytics/next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Maereg Asnakew Deberu General Contractor | Building Ethiopia\u2019s Tomorrow',
  description:
    'Maereg Asnakew Deberu General Contractor delivers reliable residential, commercial, and civil construction services with a strong commitment to quality, safety, and client satisfaction. Based in Gondar, we proudly serve communities across Ethiopia.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0b1220',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${manrope.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
