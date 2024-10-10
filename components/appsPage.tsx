"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Settings, ArrowUpDown, Rocket } from "lucide-react"

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
  )
}