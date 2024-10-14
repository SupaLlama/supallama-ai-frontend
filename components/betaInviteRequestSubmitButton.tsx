'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'


export default function BetaInviteRequestSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} aria-disabled={pending} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
      {pending ? 'Submitting Your Request...' : 'Submit Request'}
    </Button>
  )
}