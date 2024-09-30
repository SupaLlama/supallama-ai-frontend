import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import FineTuningJobDetailsPageComponent from '@/components/fineTuningJobDetailsPage'

export default async function FineTuningJobDetailsPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <FineTuningJobDetailsPageComponent />
  )
}