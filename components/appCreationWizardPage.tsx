"use client"

import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import { toast } from 'react-hot-toast'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("App data submitted:", appData)
  //   // Here you would typically send the data to your backend
  // }

  return (
    <main className="flex-grow container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-indigo-800 mb-8">Create New App</h2>

      <div className="mb-8">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          {steps.map((step, index) => (
            <li key={index} className={`flex md:w-full items-center ${index <= currentStep ? 'text-indigo-600 dark:text-indigo-500' : 'text-gray-500 dark:text-gray-400'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {index < currentStep ? (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                ) : (
                  <span className={`mr-2 ${index <= currentStep ? 'text-indigo-600' : 'text-gray-500'}`}>{index + 1}</span>
                )}
                {step.title}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
          <CardDescription>{steps[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="appName">App Name</Label>
                  <Input id="appName" name="appName" value={appData.appName} onChange={handleInputChange} placeholder="Enter app name" required />
                </div>
                <div>
                  <Label htmlFor="githubUsername">githubUsername</Label>
                  <Textarea id="githubUsername" name="githubUsername" value={appData.githubUsername} onChange={handleInputChange} placeholder="Describe your app" required />
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="appType">Select appType</Label>
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
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input id="apiKey" name="apiKey" value={appData.apiKey} onChange={handleInputChange} placeholder="Enter your API key" required />
                </div>
                <div>
                  <Label htmlFor="maxTokens">Max Tokens</Label>
                  <Input id="maxTokens" name="maxTokens" type="number" value={appData.maxTokens} onChange={handleInputChange} placeholder="Enter max tokens" required />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Review Your App Details</h3>
                <p><strong>App Name:</strong> {appData.appName}</p>
                <p><strong>GitHub Username:</strong> {appData.githubUsername}</p>
                <p><strong>App Type:</strong> {appData.appType}</p>
                <p><strong>API Key:</strong> {appData.apiKey.replace(/./g, '*')}</p>
                <p><strong>Max Tokens:</strong> {appData.maxTokens}</p>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <AppCreationWizardSubmitButton type="submit" />
          )}
        </CardFooter>
      </Card>
    </main>
  )
}