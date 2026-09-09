import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: 'የኔ ቃል (YeneQal) | The first Amharic AAC tablet',
  description: 'The first Amharic AAC tablet. የኔ ቃል helps non-verbal and speech-delayed children build sentences, ask for what they need, and share their world using pictures and Amharic words they already know.',
  keywords: ['Amharic AAC', 'AAC tablet', 'communication', 'children', 'speech delay', 'non-verbal', 'accessibility', 'Ethiopia'],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#FB441D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
