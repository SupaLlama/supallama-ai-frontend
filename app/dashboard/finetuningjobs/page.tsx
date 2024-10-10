import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import FineTuningJobsPageComponent from '@/components/fineTuningJobsPage'

export default async function FineTuningJobsPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <FineTuningJobsPageComponent />
  )
}