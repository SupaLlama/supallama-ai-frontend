import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import DatasetCreationWizardPageComponent from '@/components/datasetCreationWizardPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <DatasetCreationWizardPageComponent />
  )
}