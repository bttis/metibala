import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import { Barlow } from 'next/font/google'
import Script from 'next/script'
import { env } from '@/env'

const barlowSans = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

const tekoFont = localFont({
  src: [
    {
      path: './fonts/Teko-Regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/Teko-SemiBold.ttf',
      weight: '600'
    },
    {
      path: './fonts/Teko-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-teko'
})

export const metadata: Metadata = {
  title: 'Libid 365',
  description: 'Vitalidade hoje. Uma vida mais extraordinária amanhã com Libid 365'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {env.NEXT_PUBLIC_UMAMI_ENABLE && (
          <Script
            defer
            src={env.NEXT_PUBLIC_UMAMI_SRC}
            data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body
        className={`${barlowSans.variable} ${tekoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
