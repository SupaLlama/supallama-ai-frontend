import { ReactNode } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

type PropsType = {
  children: ReactNode
}

export default function DashboardLayout({ children }: PropsType) {
  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <header className="bg-indigo-600 text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="mr-2" role="img" aria-label="Llama">🦙</span> SupaLlama
          </h1>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard" className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>Dashboard</Link>
            <Link href="/dashboard/models" className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>Models</Link>
            <Link href="/dashboard/datasets" className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>Datasets</Link>
            <Link href="/dashboard/apps" className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>Apps</Link>
            <Link href="/signout" className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
              <LogOut className="mr-2 h-4 w-4"/> Sign Out 
            </Link>
          </nav>
        </div>
      </header>
        {children}
      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}
