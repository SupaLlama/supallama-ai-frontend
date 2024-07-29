import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  console.log('on dashboard page')
  console.log(data)
  console.log(error)

  return <p>Hello </p>
}