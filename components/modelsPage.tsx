"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Settings, ArrowUpDown, Sparkles } from "lucide-react"

type Model = {
  id: number
  name: string
  description: string
  lastUpdated: string
}

const initialModels: Model[] = [
  { id: 1, name: "Model A", description: "General language model", lastUpdated: "2023-09-15" },
  { id: 2, name: "Model B", description: "Specialized for code generation", lastUpdated: "2023-09-10" },
  { id: 3, name: "Model C", description: "Fine-tuned for medical texts", lastUpdated: "2023-09-05" },
  { id: 4, name: "Model D", description: "Optimized for legal documents", lastUpdated: "2023-08-30" },
  { id: 5, name: "Model E", description: "Trained on scientific papers", lastUpdated: "2023-08-25" },
]

export default function ModelsPageComponent() {
  const [models, setModels] = useState<Model[]>(initialModels)
  const [sortColumn, setSortColumn] = useState<keyof Model>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const sortModels = (column: keyof Model) => {
    const newDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newDirection)

    const sortedModels = [...models].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })

    setModels(sortedModels)
  }

  return (
    <main className="flex-grow container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-800">Your Models</h2>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <PlusCircle className="mr-2 h-5 w-5" /> Create New Model
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <Button variant="ghost" onClick={() => sortModels("name")} className="hover:text-indigo-600">
                  Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[150px]">
                <Button variant="ghost" onClick={() => sortModels("lastUpdated")} className="hover:text-indigo-600">
                  Last Updated <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow key={model.id}>
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell>{model.description}</TableCell>
                <TableCell>{model.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800 mr-2">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                    <Sparkles className="mr-2 h-4 w-4" /> Fine-tune
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