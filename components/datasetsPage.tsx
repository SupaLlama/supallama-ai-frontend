"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, ArrowUpDown, ChevronLeft, ChevronRight, Edit } from "lucide-react"

type Dataset = {
  id: string
  name: string
  description: string
  entries: number
  lastUpdated: string
  status: "Active" | "Archived" | "In Progress"
}

const initialDatasets: Dataset[] = [
  { id: "1", name: "General Knowledge QA", description: "A dataset for general knowledge question-answering", entries: 5000, lastUpdated: "2023-09-15", status: "Active" },
  { id: "2", name: "Code Completion", description: "Dataset for code completion tasks", entries: 10000, lastUpdated: "2023-09-14", status: "Active" },
  { id: "3", name: "Sentiment Analysis", description: "Dataset for sentiment analysis of product reviews", entries: 7500, lastUpdated: "2023-09-13", status: "In Progress" },
  { id: "4", name: "Language Translation", description: "English to French translation dataset", entries: 15000, lastUpdated: "2023-09-12", status: "Active" },
  { id: "5", name: "Medical Diagnosis", description: "Dataset for medical diagnosis assistance", entries: 3000, lastUpdated: "2023-09-11", status: "Archived" },
  { id: "6", name: "Financial Analysis", description: "Dataset for financial trend analysis and prediction", entries: 8000, lastUpdated: "2023-09-10", status: "Active" },
  { id: "7", name: "Legal Document Analysis", description: "Dataset for analyzing legal documents and contracts", entries: 5500, lastUpdated: "2023-09-09", status: "In Progress" },
  { id: "8", name: "Image Captioning", description: "Dataset for generating captions for images", entries: 12000, lastUpdated: "2023-09-08", status: "Active" },
  { id: "9", name: "Customer Support Chatbot", description: "Dataset for training customer support chatbots", entries: 9000, lastUpdated: "2023-09-07", status: "Active" },
  { id: "10", name: "Scientific Literature Summary", description: "Dataset for summarizing scientific papers", entries: 4000, lastUpdated: "2023-09-06", status: "Archived" },
]

export default function FineTuningDatasetsPage() {
  const [datasets, setDatasets] = useState<Dataset[]>(initialDatasets)
  const [sortColumn, setSortColumn] = useState<keyof Dataset>("lastUpdated")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const datasetsPerPage = 5

  const sortDatasets = (column: keyof Dataset) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedDatasets = [...datasets].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setDatasets(sortedDatasets)
  }

  const indexOfLastDataset = currentPage * datasetsPerPage
  const indexOfFirstDataset = indexOfLastDataset - datasetsPerPage
  const currentDatasets = datasets.slice(indexOfFirstDataset, indexOfLastDataset)

  const totalPages = Math.ceil(datasets.length / datasetsPerPage)

  const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages))
  const goToPreviousPage = () => setCurrentPage((page) => Math.max(page - 1, 1))

  return (
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800">Fine-Tuning Datasets</h2>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="mr-2 h-5 w-5" /> Create New Dataset
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dataset Management</CardTitle>
            <CardDescription>Create, view, and manage your fine-tuning datasets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <Button variant="ghost" onClick={() => sortDatasets("id")} className="hover:text-indigo-600">
                      ID <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortDatasets("name")} className="hover:text-indigo-600">
                      Name <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">
                    <Button variant="ghost" onClick={() => sortDatasets("entries")} className="hover:text-indigo-600">
                      Entries <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">
                    <Button variant="ghost" onClick={() => sortDatasets("lastUpdated")} className="hover:text-indigo-600">
                      Last Updated <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]">
                    <Button variant="ghost" onClick={() => sortDatasets("status")} className="hover:text-indigo-600">
                      Status <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentDatasets.map((dataset) => (
                  <TableRow key={dataset.id}>
                    <TableCell>{dataset.id}</TableCell>
                    <TableCell>{dataset.name}</TableCell>
                    <TableCell>{dataset.description}</TableCell>
                    <TableCell>{dataset.entries.toLocaleString()}</TableCell>
                    <TableCell>{dataset.lastUpdated}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        dataset.status === "Active" ? "bg-green-100 text-green-800" :
                        dataset.status === "Archived" ? "bg-gray-100 text-gray-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {dataset.status}
                      </span>
                    </TableCell>
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