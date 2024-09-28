import { Button } from "@/components/ui/button"
import { PlusCircle, Zap, LogOut } from "lucide-react"

export default function DashboardPageComponent() {
  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col">
      <header className="bg-indigo-600 text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="mr-2" role="img" aria-label="Llama">🦙</span> SupaLlama.ai
          </h1>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-indigo-200">Dashboard</Button>
            <Button variant="ghost" className="text-white hover:text-indigo-200">My Models</Button>
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

      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}