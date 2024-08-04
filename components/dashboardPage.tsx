'use client'
/**
 * v0 by Vercel.

 * @see https://v0.dev/t/7nH6TF85U9a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useEffect, useRef, useState } from "react"
import { useFormState } from "react-dom"

import Link from "next/link"

import { toast } from 'react-hot-toast'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import NewAppButton from "@/app/dashboard/newAppButton"

import { createNewApp } from "@/app/dashboard/actions"

import { createClient } from '@/utils/supabase/client'


type SupaLlamaApp = {
  app_name: any
  app_status: any
  app_type: any
  github_username_for_transfer: any
}

const initialFormState = {
  message: '',
  success: false,
}

export default function DashboardPageComponent() {
  const [supallamaApps, setSupallamaApps] = useState<Array<SupaLlamaApp> | null>(null)
  const [formState, formAction] = useFormState(createNewApp, initialFormState)
  
  
  const formRef = useRef<HTMLFormElement>(null)
  
  if (formRef.current && formState?.success) {
    toast.success("Successfully created a new app!")
    formRef.current.reset() 
  } else if (formState?.message) {
    toast.error(formState.message)
  }
  
  useEffect(() => {
    async function fetchSupallamaApps() {
      const supabase = createClient()
      let { data: supallama_apps, error } = await supabase
        .from('supallama_apps')
        .select('app_name, app_type, app_status, github_username_for_transfer')

      setSupallamaApps(supallama_apps)
    }
    fetchSupallamaApps()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-indigo-50 dark:bg-gray-900">
      <header className="bg-indigo-600 text-white py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span>SupaLlama.ai</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/signout" className="hover:underline" prefetch={false}>
            Sign Out
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My SupaLlama Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>GitHub Account</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supallamaApps?.map((app: SupaLlamaApp, i: number) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{app.app_name}</TableCell>
                        <TableCell>{app.app_type}</TableCell>
                        <TableCell>{app.app_status}</TableCell>
                        <TableCell>{app.github_username_for_transfer}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New SupaLlama Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="appName">Name*</Label>
                  <Input name="appName" id="appName" required placeholder="Enter application name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="githubUsername">GitHub username for transfer*</Label>
                  <Input name="githubUsername" id="githubUsername" required placeholder="Enter GitHub username" />
                </div>
                <div className="space-y-1">
                  <Label>App Type*</Label>
                  <Select name="appType" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an app type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="langchain">LangChain</SelectItem>
                      <SelectItem disabled value="llamaindex">LlamaIndex</SelectItem>
                      <SelectItem disabled value="griptape">GripTape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-2">
                  <Button type="reset" className="w-full">
                    Reset
                  </Button>
                  <NewAppButton />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}