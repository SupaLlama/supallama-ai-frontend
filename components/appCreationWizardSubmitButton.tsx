"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"

interface AppCreationWizardSubmitButtonProps {
  children?: string;
  type: 'submit' | 'button' | 'reset' | undefined;
}


const AppCreationWizardSubmitButton = ({ type } : AppCreationWizardSubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button type={type} disabled={pending}>
      {pending ? 'Creating New App...' : 'Create New Application'}
    </Button>
  )
}


export default AppCreationWizardSubmitButton
