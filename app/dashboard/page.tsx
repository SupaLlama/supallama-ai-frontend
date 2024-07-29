import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { signout } from '../login/actions'

export default async function DashboardPage() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()


  return (
    <>
      <p>Hello {data.user?.email}!</p>
      <form action={signout}>
        <Button type="submit">Sign Out</Button>
      </form>
    </>
  )
}