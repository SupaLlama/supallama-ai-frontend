"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, ArrowUpDown, ChevronLeft, ChevronRight, Edit } from "lucide-react"

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
  )
}