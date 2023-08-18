import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/components/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nakamura Shigeru',
  description: 'Generated by Nakamura Shigeru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Nakamura Shigeru</title>
        <meta name="keywords" content="Tailwind, tailwind template, porfolio template"/>
        <meta name="description" content="Nakamura Shigeru"/>
        <meta name="author" content="ViGo"/>
        <meta name="date" content="2022-08-31"/>
        <meta property="og:title" content="Nakamura Shigeru"/> 
        <meta property="og:image" content=""/>
        <meta property="og:description" content="Nakamura Shigeru"/>
        <meta property="og:url" content=""/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@vigowebs"/>
        <meta name="twitter:title" content="Nakamura Shigeru"/>
        <meta name="twitter:description" content="Nakamura Shigeru"/>
        <meta name="twitter:image" content="twitter-image"/>
      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
