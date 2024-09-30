"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut, Archive, Upload, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"

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

type DatasetEntry = {
  id: string
  input: string
  output: string
  context: string
  lastUpdated: string
}

const initialEntries: DatasetEntry[] = [
  { id: "1", input: "What is the capital of France?", output: "The capital of France is Paris.", context: "Geography", lastUpdated: "2023-09-15" },
  { id: "2", input: "Who wrote 'Romeo and Juliet'?", output: "William Shakespeare wrote 'Romeo and Juliet'.", context: "Literature", lastUpdated: "2023-09-14" },
  { id: "3", input: "What is photosynthesis?", output: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of sugar.", context: "Biology", lastUpdated: "2023-09-13" },
  { id: "4", input: "What is the largest planet in our solar system?", output: "Jupiter is the largest planet in our solar system.", context: "Astronomy", lastUpdated: "2023-09-12" },
  { id: "5", input: "Who painted the Mona Lisa?", output: "Leonardo da Vinci painted the Mona Lisa.", context: "Art History", lastUpdated: "2023-09-11" },
  { id: "6", input: "What is the chemical symbol for gold?", output: "The chemical symbol for gold is Au.", context: "Chemistry", lastUpdated: "2023-09-10" },
  { id: "7", input: "Who invented the telephone?", output: "Alexander Graham Bell is credited with inventing the telephone.", context: "Technology", lastUpdated: "2023-09-09" },
  { id: "8", input: "What is the largest ocean on Earth?", output: "The Pacific Ocean is the largest ocean on Earth.", context: "Geography", lastUpdated: "2023-09-08" },
  { id: "9", input: "What is the capital of Japan?", output: "The capital of Japan is Tokyo.", context: "Geography", lastUpdated: "2023-09-07" },
  { id: "10", input: "Who wrote '1984'?", output: "George Orwell wrote '1984'.", context: "Literature", lastUpdated: "2023-09-06" },
]

export default function DatasetDetailsPage() {
  const [entries, setEntries] = useState<DatasetEntry[]>(initialEntries)
  const [sortColumn, setSortColumn] = useState<keyof DatasetEntry>("lastUpdated")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const entriesPerPage = 5

  const sortEntries = (column: keyof DatasetEntry) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedEntries = [...entries].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setEntries(sortedEntries)
  }

  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry)

  const totalPages = Math.ceil(entries.length / entriesPerPage)

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
          <h2 className="text-3xl font-bold text-indigo-800">Dataset: General Knowledge QA</h2>
          <div className="space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Upload className="mr-2 h-5 w-5" /> Publish Dataset
            </Button>
            <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
              <Archive className="mr-2 h-5 w-5" /> Archive Dataset
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dataset Details</CardTitle>
          </CardHeader>
          <CardContent>
            <fieldset className="border border-indigo-200 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-800 px-2">General Knowledge QA Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Dataset ID</label>
                  <p className="mt-1 text-sm text-gray-900">general-knowledge-qa-001</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Created On</label>
                  <p className="mt-1 text-sm text-gray-900">September 1, 2023</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Last Updated</label>
                  <p className="mt-1 text-sm text-gray-900">September 15, 2023</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Number of Entries</label>
                  <p className="mt-1 text-sm text-gray-900">5,000</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Context</label>
                  <p className="mt-1 text-sm text-gray-900">General</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Status</label>
                  <p className="mt-1 text-sm text-gray-900">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Active
                    </span>
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-indigo-600">Description</label>
                  <p className="mt-1 text-sm text-gray-900">
                    This dataset contains a diverse range of general knowledge questions and answers, 
                    covering topics such as history, science, literature, and geography. It is designed 
                    to improve the ability of the model to provide accurate and informative responses to a 
                    wide variety of queries.
                  </p>
                </div>
              </div>
            </fieldset>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dataset Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">
                    <Button variant="ghost" onClick={() => sortEntries("id")} className="hover:text-indigo-600">
                      ID <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortEntries("input")} className="hover:text-indigo-600">
                      Input <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => sortEntries("output")} className="hover:text-indigo-600">
                      Output <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[120px]">
                    <Button variant="ghost" onClick={() => sortEntries("context")} className="hover:text-indigo-600">
                      Context <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">
                    <Button variant="ghost" onClick={() => sortEntries("lastUpdated")} className="hover:text-indigo-600">
                      Last Updated <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.id}</TableCell>
                    <TableCell>{entry.input}</TableCell>
                    <TableCell>{entry.output}</TableCell>
                    <TableCell>{entry.context}</TableCell>
                    <TableCell>{entry.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                        <Upload className="h-4 w-4 mr-2" />
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