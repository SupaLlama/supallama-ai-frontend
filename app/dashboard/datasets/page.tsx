import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import DatasetsPageComponent from '@/components/datasetsPage'

export default async function DatasetsPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <DatasetsPageComponent />
  )
}