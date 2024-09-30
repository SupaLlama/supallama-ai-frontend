import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import ModelDetailsPageComponent from '@/components/modelDetailsPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <ModelDetailsPageComponent />
  )
}