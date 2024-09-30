"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sparkles, Download, ArrowUpDown } from "lucide-react"

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
  )
}