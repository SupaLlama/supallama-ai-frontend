// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { ReactNode } from 'react'

import type { Metadata } from "next";
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'

import { Toaster } from 'react-hot-toast'

import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: "SupaLlama.ai",
  description: "Test drive LLM apps before writing code",
};

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: "400",
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
