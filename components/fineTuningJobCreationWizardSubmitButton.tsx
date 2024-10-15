"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"


export default function FineTuningJobCreationWizardSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Requesting New Fine-Tuning/Deployment...' : 'Request New Fine-Tuning/Deployment Job'}
    </Button>
  )
}