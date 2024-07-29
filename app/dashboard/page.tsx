import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { signout } from '../login/actions'

import DashboardPageComponent from '@/components/dashboardPage'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()


  return (
    <DashboardPageComponent />
  )
}