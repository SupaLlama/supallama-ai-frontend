import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import AppsPageComponent from '@/components/appsPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <AppsPageComponent />
  )
}