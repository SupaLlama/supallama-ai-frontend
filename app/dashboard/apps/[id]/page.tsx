import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import AppDetailsPageComponent from '@/components/appDetailsPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <AppDetailsPageComponent />
  )
}