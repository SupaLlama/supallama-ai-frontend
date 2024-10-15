"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"


export default function ModelCreationWizardSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Setting Up New Model...' : 'Setup New Model'}
    </Button>
  )
}