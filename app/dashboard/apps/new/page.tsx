import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import AppCreationWizardPageComponent from '@/components/appCreationWizardPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <AppCreationWizardPageComponent />
  )
}