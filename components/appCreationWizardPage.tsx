"use client"

import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import { toast } from 'react-hot-toast'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"

import AppCreationWizardSubmitButton from "./appCreationWizardSubmitButton"

import { createNewApp } from "@/app/dashboard/apps/new/actions"

import { type AppCreationFormStatus } from "@/app/dashboard/apps/new/appCreationFormStatus"

// type SupaLlamaApp = {
//   app_name: any
//   app_status: any
//   app_type: any
//   github_username_for_transfer: any
// }

const steps = [
  { title: "Basic Information", description: "Provide basic details about your app" },
  { title: "appType Selection", description: "Choose the LLM appType for your app" },
  { title: "Configuration", description: "Set up your app's configuration" },
  { title: "Review", description: "Review your app details before creation" },
]

export default function AppCreationWizardPageComponent() {
  const initialFormState = { status: 'idle' } as AppCreationFormStatus
  const [formState, formAction] = useFormState(createNewApp, initialFormState)

  const [currentStep, setCurrentStep] = useState(0)
  const [appData, setAppData] = useState({
    appName: "",
    githubUsername: "",
    appType: "",
    apiKey: "",
    maxTokens: "2048",
  })

  useEffect(() => { 
    // Show the proper toast notification based on the form state
    if (formState.status === 'success') {
      toast.success('App generation queued successfully!')
    } else if (formState.status === 'error') {
      toast.error('Error creating app. Please try again.')
    }
  
    formState.status = initialFormState.status // Reset the form state
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAppData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setAppData((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("App data submitted:", appData)
  //   // Here you would typically send the data to your backend
  // }

  return (
    <main className="flex-grow container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-indigo-800 mb-8">Create New App</h2>
      <form action={formAction}>
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="appName">App Name</Label>
                <Input id="appName" name="appName" onChange={handleInputChange} placeholder="Enter app name" required />
              </div>
              <div>
                <Label htmlFor="githubUsername">GitHub Username</Label>
                <Input id="githubUsername" name="githubUsername" onChange={handleInputChange} placeholder="Your GitHub Username" required />
              </div>
              <div>
                <Label htmlFor="appType">Select App Type</Label>
                <Select name="appType" value={appData.appType} onValueChange={(value) => handleSelectChange("appType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select App Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="langchain-rag-chatbot">LangChain RAG ChatBot</SelectItem>
                    <SelectItem value="langgraph-agentic-workflow">LangGraph Agentic Workflow</SelectItem>
                    <SelectItem value="griptape-rag-chatbot">GripTape RAG ChatBot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <Input id="apiKey" name="apiKey" onChange={handleInputChange} placeholder="Enter your API key" />
              </div>
              <div>
                <Label htmlFor="maxTokens">Max Tokens</Label>
                <Input id="maxTokens" name="maxTokens" type="number" onChange={handleInputChange} placeholder="Enter max tokens" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <AppCreationWizardSubmitButton type="submit" />
          </CardFooter>
        </Card>
      </form>
    </main>
  )
}