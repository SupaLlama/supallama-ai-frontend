'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ArrowRight, ArrowLeft, Zap, Server, Upload, Cog } from 'lucide-react'

const steps = [
  { title: "Job Type", description: "Choose between fine-tuning or deployment" },
  { title: "Model Selection", description: "Select the base model or model to deploy" },
  { title: "Job Configuration", description: "Set up the parameters for your job" },
  { title: "Data Upload", description: "Upload your dataset or model files" },
  { title: "Review & Submit", description: "Review your settings and submit the job" }
]

export default function ModelJobRequestWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [jobType, setJobType] = useState<'fine-tuning' | 'deployment' | ''>('')
  const [selectedModel, setSelectedModel] = useState('')
  const [epochs, setEpochs] = useState(3)
  const [learningRate, setLearningRate] = useState(0.0001)
  const [batchSize, setBatchSize] = useState(32)
  const [deploymentName, setDeploymentName] = useState('')
  const [scalingEnabled, setScalingEnabled] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = () => {
    // Here you would implement the actual job submission logic
    console.log("Submitting job:", { jobType, selectedModel, epochs, learningRate, batchSize, deploymentName, scalingEnabled, file })
  }

  return (
    <div className="min-h-screen bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-indigo-600 text-white p-6">
            <CardTitle className="text-2xl font-bold">Model Job Request Wizard</CardTitle>
            <CardDescription className="text-indigo-200">
              Request a new model fine-tuning or deployment job
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">{steps[currentStep].title}</h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>

            {currentStep === 0 && (
              <RadioGroup value={jobType} onValueChange={(value) => setJobType(value as 'fine-tuning' | 'deployment')}>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fine-tuning" id="fine-tuning" />
                    <Label htmlFor="fine-tuning" className="flex items-center space-x-2 cursor-pointer">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      <span>Fine-tuning</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="deployment" id="deployment" />
                    <Label htmlFor="deployment" className="flex items-center space-x-2 cursor-pointer">
                      <Server className="w-5 h-5 text-indigo-600" />
                      <span>Deployment</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <Label htmlFor="model-selection" className="block text-sm font-medium text-gray-700">
                  Select Model
                </Label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger id="model-selection">
                    <SelectValue placeholder="Choose a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="llama-7b">Llama 7B</SelectItem>
                    <SelectItem value="llama-13b">Llama 13B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                {jobType === 'fine-tuning' ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="epochs" className="block text-sm font-medium text-gray-700">
                        Number of Epochs
                      </Label>
                      <Slider
                        id="epochs"
                        min={1}
                        max={10}
                        step={1}
                        value={[epochs]}
                        onValueChange={(value) => setEpochs(value[0])}
                      />
                      <p className="text-sm text-gray-500">Current value: {epochs}</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="learning-rate" className="block text-sm font-medium text-gray-700">
                        Learning Rate
                      </Label>
                      <Slider
                        id="learning-rate"
                        min={0.00001}
                        max={0.001}
                        step={0.00001}
                        value={[learningRate]}
                        onValueChange={(value) => setLearningRate(value[0])}
                      />
                      <p className="text-sm text-gray-500">Current value: {learningRate.toFixed(5)}</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch-size" className="block text-sm font-medium text-gray-700">
                        Batch Size
                      </Label>
                      <Slider
                        id="batch-size"
                        min={8}
                        max={128}
                        step={8}
                        value={[batchSize]}
                        onValueChange={(value) => setBatchSize(value[0])}
                      />
                      <p className="text-sm text-gray-500">Current value: {batchSize}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="deployment-name" className="block text-sm font-medium text-gray-700">
                        Deployment Name
                      </Label>
                      <Input
                        id="deployment-name"
                        value={deploymentName}
                        onChange={(e) => setDeploymentName(e.target.value)}
                        placeholder="Enter a name for your deployment"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="scaling"
                        checked={scalingEnabled}
                        onCheckedChange={setScalingEnabled}
                      />
                      <Label htmlFor="scaling" className="text-sm font-medium text-gray-700">
                        Enable Auto-scaling
                      </Label>
                    </div>
                  </>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                  Upload {jobType === 'fine-tuning' ? 'Dataset' : 'Model Files'}
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
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {jobType === 'fine-tuning' ? 'JSONL' : 'ZIP'} file up to 50MB
                    </p>
                  </div>
                </div>
                {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Review Your Job Request</h3>
                <dl className="divide-y divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Job Type</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobType}</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Selected Model</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedModel}</dd>
                  </div>
                  {jobType === 'fine-tuning' ? (
                    <>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Epochs</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{epochs}</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Learning Rate</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{learningRate.toFixed(5)}</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Batch Size</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{batchSize}</dd>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Deployment Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{deploymentName}</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Auto-scaling</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{scalingEnabled ? 'Enabled' : 'Disabled'}</dd>
                      </div>
                    </>
                  )}
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Uploaded File</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{file?.name || 'No file uploaded'}</dd>
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
            ) 
            : (
              <Button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 flex items-center">
                <Cog className="w-4 h-4 mr-2" />
                Submit Job
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}