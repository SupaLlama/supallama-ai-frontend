"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"


export default function DatasetCreationWizardSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Creating New Dataset...' : 'Create New Dataset'}
    </Button>
  )
}