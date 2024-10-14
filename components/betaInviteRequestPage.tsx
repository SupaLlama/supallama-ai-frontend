import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

import toast from 'react-hot-toast'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserIcon, MailIcon, BuildingIcon, UsersIcon, MessageSquareIcon } from 'lucide-react'

import BetaInviteRequestSubmitButton from './betaInviteRequestSubmitButton'

import { requestBetaInvite } from '@/app/login/signup/actions'
import { type SignupFormStatus } from '@/app/login/signup/signupFormStatus'

export default function BetaInviteRequestPageComponent() {
  const [companySize, setCompanySize] = useState('')

  const initialFormState = { status: 'idle' } as SignupFormStatus
  const [formState, formAction] = useFormState(requestBetaInvite, initialFormState)

  useEffect(() => {
    // Show the proper toast notification
    if (formState.status === 'success') {
      toast.success('Beta invite request submitted successfully!')
    } else if (formState.status === 'error') {
      toast.error('Error submitting beta invite request. Please try again.')
    }
  
    // Reset the form's state to it's initial status
    formState.status = initialFormState.status;

  }, [initialFormState.status, formState])

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-indigo-600 text-white p-6">
          <CardTitle className="text-2xl font-bold">Request Beta Invite</CardTitle>
          <CardDescription className="text-indigo-200">Request an invite to join SupaLlama&apos;s exclusive beta program</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-indigo-800">Full Name</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" size={18} />
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Enter your full name" 
                  className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-indigo-800">Email</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" size={18} />
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-indigo-800">Company Name</Label>
              <div className="relative">
                <BuildingIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" size={18} />
                <Input 
                  id="company" 
                  name="company"
                  placeholder="Enter your company name" 
                  className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-size" className="text-sm font-medium text-indigo-800">Company Size</Label>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 z-10" size={18} />
                <Select name="company-size" value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="chatbot-description" className="text-sm font-medium text-indigo-800">Desired Chatbot Description</Label>
              <div className="relative">
                <MessageSquareIcon className="absolute left-3 top-3 text-indigo-500" size={18} />
                <Textarea 
                  id="chatbot-description" 
                  name="chatbot-description"
                  placeholder="Describe the type of chatbot you want to create" 
                  className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 min-h-[100px]" 
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-indigo-50 p-6">
            <BetaInviteRequestSubmitButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}