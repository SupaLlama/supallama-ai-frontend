"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function AppDetailsPageComponent() {
  return (
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
  )
}