import { Button } from "@/components/ui/button"
import { PlusCircle, Zap } from "lucide-react"

export default function DashboardPageComponent() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center container mx-auto py-8 px-4 text-center">
      <h2 className="text-4xl font-bold text-indigo-800 mb-4">Welcome to SupaLlama</h2>
      <p className="text-xl text-indigo-600 mb-8">Create and manage your LLM models apps with ease. Generate new apps with your LLM models.</p>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8">
          <PlusCircle className="mr-2 h-5 w-5" /> Create New Model
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8">
          <Zap className="mr-2 h-5 w-5" /> Generate New App
        </Button>
      </div>

      <p className="text-indigo-500 mt-8">Get started by creating a new model or generating an AI-powered app</p>
    </main>
  )
}