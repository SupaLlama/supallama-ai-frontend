import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Globe, FileJson, ArrowRight, ArrowLeft } from 'lucide-react'

const steps = [
  { title: "Choose Method", description: "Select how you want to generate your dataset" },
  { title: "Upload JSONL", description: "Upload your existing JSONL file" },
  { title: "Web Scraping", description: "Enter website URL and scraping parameters" },
  { title: "LLM Configuration", description: "Configure the LLM for data conversion" },
  { title: "Review & Generate", description: "Review your settings and generate the dataset" }
]

export default function DatasetGenerationWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [method, setMethod] = useState<'upload' | 'scrape' | ''>('')
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState('')
  const [scrapingParams, setScrapingParams] = useState('')
  const [llmPrompt, setLlmPrompt] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleNext = () => {
    if (currentStep === 0 && method === 'upload') {
      setCurrentStep(1)
    } else if (currentStep === 0 && method === 'scrape') {
      setCurrentStep(2)
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handleBack = () => {
    if (currentStep === 1 || currentStep === 2) {
      setCurrentStep(0)
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 0))
    }
  }

  const handleSubmit = () => {
    // Here you would implement the actual dataset generation logic
    console.log("Generating dataset with:", { method, file, url, scrapingParams, llmPrompt })
  }

  return (
    <div className="min-h-screen bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-indigo-600 text-white p-6">
            <CardTitle className="text-2xl font-bold">Dataset Generation Wizard</CardTitle>
            <CardDescription className="text-indigo-200">
              Create fine-tuning datasets for your LLM models
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">{steps[currentStep].title}</h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>

            {currentStep === 0 && (
              <RadioGroup value={method} onValueChange={(value) => setMethod(value as 'upload' | 'scrape')}>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upload" id="upload" />
                    <Label htmlFor="upload" className="flex items-center space-x-2 cursor-pointer">
                      <FileJson className="w-5 h-5 text-indigo-600" />
                      <span>Upload JSONL</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scrape" id="scrape" />
                    <Label htmlFor="scrape" className="flex items-center space-x-2 cursor-pointer">
                      <Globe className="w-5 h-5 text-indigo-600" />
                      <span>Web Scraping</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                  Upload JSONL File
                </Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".jsonl" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">JSONL file up to 10MB</p>
                  </div>
                </div>
                {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="url" className="block text-sm font-medium text-gray-700">
                    Website URL
                  </Label>
                  <Input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="scraping-params" className="block text-sm font-medium text-gray-700">
                    Scraping Parameters (JSON)
                  </Label>
                  <Textarea
                    id="scraping-params"
                    value={scrapingParams}
                    onChange={(e) => setScrapingParams(e.target.value)}
                    placeholder='{"selector": ".article", "fields": ["title", "content"]}'
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <Label htmlFor="llm-prompt" className="block text-sm font-medium text-gray-700">
                  LLM Multishot Prompt
                </Label>
                <Textarea
                  id="llm-prompt"
                  value={llmPrompt}
                  onChange={(e) => setLlmPrompt(e.target.value)}
                  placeholder="Enter your multishot prompt for the LLM..."
                  className="mt-1"
                  rows={6}
                />
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Review Your Settings</h3>
                <dl className="divide-y divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Method</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{method === 'upload' ? 'Upload JSONL' : 'Web Scraping'}</dd>
                  </div>
                  {method === 'upload' && (
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">File</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{file?.name || 'No file selected'}</dd>
                    </div>
                  )}
                  {method === 'scrape' && (
                    <>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">URL</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{url}</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Scraping Parameters</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{scrapingParams}</dd>
                      </div>
                    </>
                  )}
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">LLM Prompt</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{llmPrompt}</dd>
                  </div>
                </dl>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between">
            <Button
              onClick={handleBack}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} className="flex items-center">
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700">
                Generate Dataset
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}