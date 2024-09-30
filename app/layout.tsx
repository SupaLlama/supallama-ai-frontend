// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { ReactNode } from 'react'

import type { Metadata } from "next";

import { Toaster } from 'react-hot-toast'

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: "SupaLlama.ai",
  description: "Test drive LLM apps before writing code",
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

type PropsType = {
  children: ReactNode
}

export default function Layout({ children }: PropsType) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
