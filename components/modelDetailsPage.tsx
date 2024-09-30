"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut, Sparkles, Download, ArrowUpDown } from "lucide-react"

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

type FineTuningJob = {
  id: string
  name: string
  dataset: string
  status: "Completed" | "In Progress" | "Failed"
  createdAt: string
}

const initialJobs: FineTuningJob[] = [
  { id: "1", name: "Sentiment Analysis", dataset: "IMDB Reviews", status: "Completed", createdAt: "2023-09-15" },
  { id: "2", name: "Code Generation", dataset: "GitHub Code", status: "Completed", createdAt: "2023-09-10" },
  { id: "3", name: "Medical QA", dataset: "PubMed Abstracts", status: "In Progress", createdAt: "2023-09-05" },
  { id: "4", name: "Legal Document Analysis", dataset: "Legal Contracts", status: "Completed", createdAt: "2023-08-30" },
  { id: "5", name: "Scientific Paper Summarization", dataset: "arXiv Papers", status: "Failed", createdAt: "2023-08-25" },
]

export default function ModelDetailsPageComponent() {
  const [jobs, setJobs] = useState<FineTuningJob[]>(initialJobs)
  const [sortColumn, setSortColumn] = useState<keyof FineTuningJob>("createdAt")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const sortJobs = (column: keyof FineTuningJob) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedJobs = [...jobs].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setJobs(sortedJobs)
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
          <h2 className="text-3xl font-bold text-indigo-800">Model: SupaLlama-7B</h2>
          <div className="space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Sparkles className="mr-2 h-5 w-5" /> Fine-tune
            </Button>
            <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
              <Download className="mr-2 h-5 w-5" /> Download Model Weights
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fine-tuning Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <Button variant="ghost" onClick={() => sortJobs("name")} className="hover:text-indigo-600">
                      Job Name <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortJobs("dataset")} className="hover:text-indigo-600">
                      Dataset <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[120px]">
                    <Button variant="ghost" onClick={() => sortJobs("status")} className="hover:text-indigo-600">
                      Status <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right w-[150px]">
                    <Button variant="ghost" onClick={() => sortJobs("createdAt")} className="hover:text-indigo-600">
                      Created At <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.name}</TableCell>
                    <TableCell>{job.dataset}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        job.status === "Completed" ? "bg-green-100 text-green-800" :
                        job.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {job.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{job.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}