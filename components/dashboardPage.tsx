import Link from "next/link"

import { Layers, PlusCircle, FileJson, Zap } from "lucide-react"

export default function DashboardPageComponent() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center container mx-auto py-8 px-4 text-center">
      <h2 className="text-4xl font-bold text-indigo-800 mb-4">Welcome to SupaLlama</h2>
      <p className="text-xl text-indigo-600 mb-8">Create and manage your LLM models apps with ease. Generate new apps with your LLM models.</p>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <Link href="/dashboard/models/new" prefetch={false} className="inline-flex justify-center items-center rounded bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-2 px-8">
          <Layers className="mr-2 h-5 w-5" /> Setup New Model
        </Link>
        <Link href="/dashboard/finetuningjobs/new" prefetch={false} className="inline-flex justify-center items-center rounded bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-2 px-8">
          <PlusCircle className="mr-2 h-5 w-5" /> Fine-Tune/Deploy Model
        </Link>
        <Link href="/dashboard/datasets/new" prefetch={false} className="inline-flex justify-center items-center rounded bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-2 px-8">
          <FileJson className="mr-2 h-5 w-5" /> Generate/Upload Dataset
        </Link>
        <Link href="/dashboard/apps/new" prefetch={false} className="inline-flex justify-center items-center rounded bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-2 px-8">
          <Zap className="mr-2 h-5 w-5" />Create Full-Stack App
        </Link>
      </div>

      <p className="text-indigo-500 mt-8">Get started by setting up a new model, selecting a model to fine-tune/deploy, generate/upload a dataset for fine-tuning, or create a new full-stack app using any model you setup.</p>
    </main>
  )
}