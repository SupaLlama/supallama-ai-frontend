"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, LogOut, Settings, ArrowUpDown, Rocket } from "lucide-react"

const LlamaIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      d="M6 26V13C6 6.92487 10.9249 2 17 2V2C23.0751 2 28 6.92487 28 13V26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 13V26H13M28 13V26H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="13" cy="9" r="1" fill="currentColor" />
    <circle cx="21" cy="9" r="1" fill="currentColor" />
    <path
      d="M13 20C13 18.3431 14.3431 17 16 17H18C19.6569 17 21 18.3431 21 20V26H13V20Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

type App = {
  id: number
  name: string
  description: string
  lastUsed: string
  status: "Active" | "Inactive"
}

const initialApps: App[] = [
  { id: 1, name: "ChatBot A", description: "Customer support chatbot", lastUsed: "2023-09-15", status: "Active" },
  { id: 2, name: "CodeAssist", description: "Code generation assistant", lastUsed: "2023-09-10", status: "Active" },
  { id: 3, name: "MedicalQA", description: "Medical question answering system", lastUsed: "2023-09-05", status: "Inactive" },
  { id: 4, name: "LegalDraft", description: "Legal document drafter", lastUsed: "2023-08-30", status: "Active" },
  { id: 5, name: "ResearchSummarizer", description: "Scientific paper summarizer", lastUsed: "2023-08-25", status: "Inactive" },
]

export default function AppsPageComponent() {
  const [apps, setApps] = useState<App[]>(initialApps)
  const [sortColumn, setSortColumn] = useState<keyof App>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const sortApps = (column: keyof App) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedApps = [...apps].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setApps(sortedApps)
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <header className="bg-indigo-600 text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <LlamaIcon />
            SupaLlama
          </h1>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-indigo-200">Dashboard</Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200">Models</Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200">Apps</Button>
            <Button 
              variant="default" 
              className="bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800">Your Apps</h2>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <PlusCircle className="mr-2 h-5 w-5" /> Create New App
          </Button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">
                  <Button variant="ghost" onClick={() => sortApps("name")} className="hover:text-indigo-600">
                    Name <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[150px]">
                  <Button variant="ghost" onClick={() => sortApps("lastUsed")} className="hover:text-indigo-600">
                    Last Used <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="w-[100px]">
                  <Button variant="ghost" onClick={() => sortApps("status")} className="hover:text-indigo-600">
                    Status <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>{app.description}</TableCell>
                  <TableCell>{app.lastUsed}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      app.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {app.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800 mr-2">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                      <Rocket className="mr-2 h-4 w-4" /> Deploy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}