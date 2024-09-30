"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Play } from "lucide-react"

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

export default function AppDetailsPageComponent() {
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
          <h2 className="text-3xl font-bold text-indigo-800">App: SupaChat</h2>
          <div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Play className="mr-2 h-5 w-5" /> Deploy
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>App Details</CardTitle>
          </CardHeader>
          <CardContent>
            <fieldset className="border border-indigo-200 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-800 px-2">SupaChat Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-600">App ID</label>
                  <p className="mt-1 text-sm text-gray-900">supa-chat-001</p>
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
                  <label className="block text-sm font-medium text-indigo-600">Status</label>
                  <p className="mt-1 text-sm text-gray-900">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Active
                    </span>
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Base Model</label>
                  <p className="mt-1 text-sm text-gray-900">SupaLlama-7B</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-600">Fine-tuned Model</label>
                  <p className="mt-1 text-sm text-gray-900">SupaLlama-7B-chat-v1.2</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-indigo-600">Description</label>
                  <p className="mt-1 text-sm text-gray-900">
                    SupaChat is an advanced conversational AI application powered by the SupaLlama-7B model. 
                    It is designed to provide engaging and informative chat experiences across various domains.
                  </p>
                </div>
              </div>
            </fieldset>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-indigo-100 text-indigo-600 py-4 text-center">
        <p>&copy; 2024 SupaLlama. All rights reserved.</p>
      </footer>
    </div>
  )
}