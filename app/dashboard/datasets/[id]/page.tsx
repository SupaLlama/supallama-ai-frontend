import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import DatasetDetailsPageComponent from '@/components/datasetDetailsPage'

export default async function DatasetDtailsPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    redirect('/error')
  }

  return (
    <DatasetDetailsPageComponent />
  )
}