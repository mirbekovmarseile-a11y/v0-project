import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'TARGET.PRO — Таргетированная реклама в Meta',
  description: 'Настраиваю таргетированную рекламу в Meta так, чтобы каждый вложенный рубль возвращался с прибылью. Без слива бюджета — только заявки и продажи.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${bebasNeue.variable} ${spaceMono.variable} bg-bg`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
