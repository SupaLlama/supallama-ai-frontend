"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut, Plus, ArrowUpDown, ChevronLeft, ChevronRight, Edit } from "lucide-react"

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
  modelName: string
  dataset: string
  startDate: string
  endDate: string
  status: "Completed" | "In Progress" | "Failed" | "Queued"
  performance: string
}

const initialJobs: FineTuningJob[] = [
  { id: "1", modelName: "SupaLlama-7B-v1", dataset: "General Knowledge QA", startDate: "2024-03-01", endDate: "2024-03-03", status: "Completed", performance: "95.2%" },
  { id: "2", modelName: "SupaLlama-13B-v1", dataset: "Code Completion", startDate: "2024-03-02", endDate: "-", status: "In Progress", performance: "-" },
  { id: "3", modelName: "SupaLlama-7B-v2", dataset: "Sentiment Analysis", startDate: "2024-03-01", endDate: "2024-03-02", status: "Failed", performance: "-" },
  { id: "4", modelName: "SupaLlama-30B-v1", dataset: "Language Translation", startDate: "2024-03-03", endDate: "-", status: "Queued", performance: "-" },
  { id: "5", modelName: "SupaLlama-7B-v1.1", dataset: "Medical Diagnosis", startDate: "2024-02-28", endDate: "2024-03-01", status: "Completed", performance: "93.7%" },
  { id: "6", modelName: "SupaLlama-13B-v1.1", dataset: "Financial Analysis", startDate: "2024-03-02", endDate: "-", status: "In Progress", performance: "-" },
  { id: "7", modelName: "SupaLlama-7B-v1.2", dataset: "Legal Document Analysis", startDate: "2024-03-01", endDate: "2024-03-02", status: "Completed", performance: "91.5%" },
  { id: "8", modelName: "SupaLlama-30B-v1.1", dataset: "Image Captioning", startDate: "2024-03-03", endDate: "-", status: "Queued", performance: "-" },
  { id: "9", modelName: "SupaLlama-7B-v2.1", dataset: "Customer Support Chatbot", startDate: "2024-03-02", endDate: "-", status: "In Progress", performance: "-" },
  { id: "10", modelName: "SupaLlama-13B-v2", dataset: "Scientific Literature Summary", startDate: "2024-03-01", endDate: "2024-03-03", status: "Completed", performance: "94.8%" },
]

export default function FineTuningJobsPageComponent() {
  const [jobs, setJobs] = useState<FineTuningJob[]>(initialJobs)
  const [sortColumn, setSortColumn] = useState<keyof FineTuningJob>("startDate")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 5

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

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const totalPages = Math.ceil(jobs.length / jobsPerPage)

  const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages))
  const goToPreviousPage = () => setCurrentPage((page) => Math.max(page - 1, 1))

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
            <Button variant="ghost" className="text-white hover:text-indigo-200">Datasets</Button>
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
          <h2 className="text-3xl font-bold text-indigo-800">LLM Fine-Tuning Jobs</h2>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="mr-2 h-5 w-5" /> Create New Job
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fine-Tuning Job Management</CardTitle>
            <CardDescription>View and manage your LLM fine-tuning jobs</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <Button variant="ghost" onClick={() => sortJobs("id")} className="hover:text-indigo-600">
                      ID <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortJobs("modelName")} className="hover:text-indigo-600">
                      Model Name <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortJobs("dataset")} className="hover:text-indigo-600">
                      Dataset <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">
                    <Button variant="ghost" onClick={() => sortJobs("startDate")} className="hover:text-indigo-600">
                      Start Date <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">
                    <Button variant="ghost" onClick={() => sortJobs("endDate")} className="hover:text-indigo-600">
                      End Date <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[120px]">
                    <Button variant="ghost" onClick={() => sortJobs("status")} className="hover:text-indigo-600">
                      Status <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[120px]">
                    <Button variant="ghost" onClick={() => sortJobs("performance")} className="hover:text-indigo-600">
                      Performance <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.id}</TableCell>
                    <TableCell>{job.modelName}</TableCell>
                    <TableCell>{job.dataset}</TableCell>
                    <TableCell>{job.startDate}</TableCell>
                    <TableCell>{job.endDate}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        job.status === "Completed" ? "bg-green-100 text-green-800" :
                        job.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                        job.status === "Failed" ? "bg-red-100 text-red-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {job.status}
                      </span>
                    </TableCell>
                    <TableCell>{job.performance}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between space-x-2 py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}