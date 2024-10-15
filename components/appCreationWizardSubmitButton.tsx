"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"


export default function AppCreationWizardSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Creating New App...' : 'Create New Application'}
    </Button>
  )
}