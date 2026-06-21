import type { Metadata } from 'next'
import { Bebas_Neue, Space_Mono, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space'
})

const orbitron = Orbitron({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'LAU - Web Dev. Júnior',
  description: 'Portfólio de Lauane de Morais Araujo - Desenvolvedora Front-End Júnior apaixonada por criar experiências web incríveis.',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${bebasNeue.variable} ${spaceMono.variable} ${orbitron.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
