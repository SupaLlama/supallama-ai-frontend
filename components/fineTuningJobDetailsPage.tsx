"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut, X, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"

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

type TrainingStep = {
  step: number
  loss: number
  accuracy: number
  timestamp: string
}

const initialTrainingSteps: TrainingStep[] = [
  { step: 1, loss: 2.5, accuracy: 0.6, timestamp: "2024-03-15 10:00:00" },
  { step: 2, loss: 2.3, accuracy: 0.65, timestamp: "2024-03-15 10:15:00" },
  { step: 3, loss: 2.1, accuracy: 0.7, timestamp: "2024-03-15 10:30:00" },
  { step: 4, loss: 1.9, accuracy: 0.75, timestamp: "2024-03-15 10:45:00" },
  { step: 5, loss: 1.7, accuracy: 0.8, timestamp: "2024-03-15 11:00:00" },
  { step: 6, loss: 1.5, accuracy: 0.85, timestamp: "2024-03-15 11:15:00" },
  { step: 7, loss: 1.3, accuracy: 0.9, timestamp: "2024-03-15 11:30:00" },
  { step: 8, loss: 1.1, accuracy: 0.92, timestamp: "2024-03-15 11:45:00" },
  { step: 9, loss: 0.9, accuracy: 0.94, timestamp: "2024-03-15 12:00:00" },
  { step: 10, loss: 0.7, accuracy: 0.95, timestamp: "2024-03-15 12:15:00" },
]

export default function FineTuningJobDetailsPageComponent() {
  const [trainingSteps, setTrainingSteps] = useState<TrainingStep[]>(initialTrainingSteps)
  const [sortColumn, setSortColumn] = useState<keyof TrainingStep>("step")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const stepsPerPage = 5

  const sortTrainingSteps = (column: keyof TrainingStep) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedSteps = [...trainingSteps].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setTrainingSteps(sortedSteps)
  }

  const indexOfLastStep = currentPage * stepsPerPage
  const indexOfFirstStep = indexOfLastStep - stepsPerPage
  const currentSteps = trainingSteps.slice(indexOfFirstStep, indexOfLastStep)

  const totalPages = Math.ceil(trainingSteps.length / stepsPerPage)

  const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages))
  const goToPreviousPage = () => setCurrentPage((page) => Math.max(page - 1, 1))

  return (
    <main className="flex-grow container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-800">TBA: Fine-Tuning Job: SupaLlama-7B-v2</h2>
        <div className="space-x-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <X className="mr-2 h-5 w-5" /> Cancel Job
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <CardContent>
          <fieldset className="border border-indigo-200 rounded-lg p-4">
            <legend className="text-lg font-semibold text-indigo-800 px-2">SupaLlama-7B-v2 Fine-Tuning Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-indigo-600">Job ID</label>
                <p className="mt-1 text-sm text-gray-900">ft-job-001</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Base Model</label>
                <p className="mt-1 text-sm text-gray-900">SupaLlama-7B-v1</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Dataset</label>
                <p className="mt-1 text-sm text-gray-900">Enhanced General Knowledge QA</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Start Time</label>
                <p className="mt-1 text-sm text-gray-900">2024-03-15 09:30:00 UTC</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Estimated End Time</label>
                <p className="mt-1 text-sm text-gray-900">2024-03-16 09:30:00 UTC</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Status</label>
                <p className="mt-1 text-sm text-gray-900">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                    In Progress
                  </span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Current Step</label>
                <p className="mt-1 text-sm text-gray-900">10 / 100</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-600">Current Performance</label>
                <p className="mt-1 text-sm text-gray-900">Loss: 0.7, Accuracy: 95%</p>
              </div>
            </div>
          </fieldset>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Training Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <Button variant="ghost" onClick={() => sortTrainingSteps("step")} className="hover:text-indigo-600">
                    Step <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => sortTrainingSteps("loss")} className="hover:text-indigo-600">
                    Loss <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => sortTrainingSteps("accuracy")} className="hover:text-indigo-600">
                    Accuracy <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="w-[200px]">
                  <Button variant="ghost" onClick={() => sortTrainingSteps("timestamp")} className="hover:text-indigo-600">
                    Timestamp <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSteps.map((step) => (
                <TableRow key={step.step}>
                  <TableCell>{step.step}</TableCell>
                  <TableCell>{step.loss.toFixed(2)}</TableCell>
                  <TableCell>{(step.accuracy * 100).toFixed(2)}%</TableCell>
                  <TableCell>{step.timestamp}</TableCell>
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