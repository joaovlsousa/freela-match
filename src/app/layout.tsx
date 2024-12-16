import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import './globals.css'

const font = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freela Match',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', font.className)}>
        <Toaster richColors theme="light" position="top-right" />
        <Navbar />
        <main className="h-[100vh-4rem] px-16 pt-10">{children}</main>
      </body>
    </html>
  )
}
