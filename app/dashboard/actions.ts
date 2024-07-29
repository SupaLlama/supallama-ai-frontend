'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server'

export async function createNewApp(formData: FormData) {
  const supabase = createClient();

  const { data , error } = await supabase.auth.getUser()

  if (error) {
    redirect('/error')
  }

  if (data.user) {
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const newAppData = {
      appName: formData.get('appName') as string,
      appDescription: formData.get('appDescription') as string,
      appType: formData.get('appType') as string,
    }
    console.log(newAppData)
  }
}